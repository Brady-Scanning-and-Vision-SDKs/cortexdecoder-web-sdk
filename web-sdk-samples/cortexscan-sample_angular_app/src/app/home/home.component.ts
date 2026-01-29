import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import * as CortexDecoder from 'codecorp-web_sdk';
import '../../../node_modules/codecorp-web_sdk/dist/web/6fa90a72196a39df73e5c0709c269a35.wasm'; 
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  cameraDevices: MediaDeviceInfo[] = [];
  selectedDevice: MediaDeviceInfo | null = null; // Store the selected device
  isCameraOn: boolean = false; // To track the camera state
  buttonText: string = 'Start Camera'; // To update button text
  buttonColor: string = 'green'; // To update button color
  tableResults: { barcodeData: string, symbology: string, decodeTime: string }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    try {
      //Initialize the decoder
      CortexDecoder.CDDecoder.init().then((handle)=>{
        if(handle == 1){
          CortexDecoder.CDDevice.audio = true;

          CortexDecoder.CDLicense.activateLicense("Enter license Key here").then((license_res)=>{
            console.log(license_res)

            CortexDecoder.CDCamera.init().then(()=>{
              this.cameraDevices = CortexDecoder.CDCamera.getConnectedCameras(); 
              this.selectedDevice = this.cameraDevices[0]
            })
          }).catch(e => console.log(e))
        }
      })
    }catch(e){
      console.log(e)
    }
  }

  toggleCamera(): void {
    try {
      if (!this.isCameraOn) {
        this.startCamera();
        this.buttonText = 'Stop Camera';
        this.buttonColor = 'red';
      } else {
        this.stopCamera();
        this.buttonText = 'Start Camera';
        this.buttonColor = 'green';
      }
      this.isCameraOn = !this.isCameraOn; // Toggle the camera state
    } catch (err) {
      console.error(err);
    }
  }

  startCamera(): void {
    console.log('Starting the camera...');
    try {
      CortexDecoder.CDCamera.startCamera().then(()=>{
        CortexDecoder.CDCamera.startPreview((resultArray)=>{
          try {
            resultArray.forEach((result)=>{
              if (result.status == CortexDecoder.CDDecodeStatus.SUCCESS) {
                this.drawTable(result)
              }
            })
          } catch (err) {
            console.log(err);   
          }
        })
      })
    } catch (err) {
        console.log(err);
    }
  }

  stopCamera(): void {
    try {
      CortexDecoder.CDCamera.stopCamera();
    } catch (err) {
      console.log(err);
    }
  }

  drawTable(result : CortexDecoder.CDResult){
    this.tableResults.unshift({
      barcodeData: result.barcodeData,
      symbology: result.symbology,
      decodeTime: result.decodeTime.toString() // Converting time to string
    });
    this.cdr.detectChanges();
  }

  clearTable(){
    this.tableResults = []
  }

  switchCamera(){
    if (this.selectedDevice) {
      CortexDecoder.CDCamera.setCamera(this.selectedDevice)
      this.isCameraOn = false;
      this.buttonText = 'Start Camera';
      this.buttonColor = 'green';
    }
  }
}
