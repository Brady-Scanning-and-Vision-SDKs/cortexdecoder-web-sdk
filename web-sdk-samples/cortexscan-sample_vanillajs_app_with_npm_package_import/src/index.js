import * as CortexDecoder from 'codecorp-web_sdk';
import "../node_modules/codecorp-web_sdk/dist/web/6fa90a72196a39df73e5c0709c269a35.wasm"
import CodeImage  from './assets/CODE-Expect-More-2.png';
import './styles/styles.scss';

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


//Function that initializes the decoder and all the lists in the app
async function init() {

    document.getElementById("CodeImage").src = CodeImage

    try {
        //Initialize the decoder
        await CortexDecoder.CDDecoder.init();
        CortexDecoder.CDDevice.audio = true;

        // //Activate the license
        console.log(await CortexDecoder.CDLicense.activateLicense("Enter License Key Here").catch(e => console.log(e)));

        //Initialize the camera
        await CortexDecoder.CDCamera.init();
        
        //Get available camera devices and create a dropdown for selection for non mobile platform
        getAvailableCameraDevices(CortexDecoder.CDCamera.getConnectedCameras())

        await initializeEventHandlers()

        //Initialize camera and start preview
        await initializeCameraPreview()
        

    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

//Initializing events for button clicks
async function initializeEventHandlers(){
    document.getElementById("cameradevices").addEventListener("change",(event)=>{switchCamera(event.target.value)})
    document.getElementById("toggleCamera").addEventListener("click",(element, event)=>toggleCamera())
    document.getElementById("toggleCameraPreview").addEventListener("click",(element, event)=>toggleCameraPreview())
    document.getElementById("toggleDecoding").addEventListener("click",(element, event)=>toggleDecoding())
    document.getElementById("clearTable").addEventListener("click",(element, event)=>clearTable())

}

//Get camera permission, start camera and start the preview
async function initializeCameraPreview(){
    if(isMobile){
        await CortexDecoder.CDCamera.setCameraPosition(CortexDecoder.CDPosition.BACK)
    }else{
        await CortexDecoder.CDCamera.setCameraPosition(CortexDecoder.CDPosition.FRONT)
    }
    await startCamera()
    await startCameraPreview()
}

//Get a list of available camera devices
function getAvailableCameraDevices(cameraDevices) {
    try {
        let selectElement = document.getElementById("cameradevices");

        cameraDevices.map((camera, index)=>{
            let opt = document.createElement("option");
            opt.value = camera.label;
            opt.innerHTML = camera.label;
            selectElement.appendChild(opt)
        })
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

// Print the decode results in the results table
async function drawTable(result) {
    try {
        if (Object.keys(result).length !== 0) {

            let table = document.getElementById("resultTable");
            let tablebody = document.getElementById("tableBody");
            var tableRow = document.createElement("tr");
            let resultString = document.createElement("td");
            let symbologyName = document.createElement("td");
            let decodeTime = document.createElement("td");

            resultString.innerHTML = result.barcodeData;
            symbologyName.innerHTML = result.symbology;
            decodeTime.innerHTML = result.decodeTime;

            tableRow.appendChild(resultString);
            tableRow.appendChild(symbologyName);
            tableRow.appendChild(decodeTime);
            tablebody.appendChild(tableRow);

        }
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

// Clear the results in the table
function clearTable() {
    try {
        document.querySelector("tbody").parentNode.removeChild(document.querySelector("tbody"));
        let tableBody = document.createElement("tbody")
        tableBody.setAttribute("id", "tableBody")
        document.getElementById("resultTable").appendChild(tableBody);
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}


function resetElements() {
    document.getElementById("toggleCamera").value = 0;
    document.getElementById("toggleCamera").innerHTML = "Start Camera";
    document.getElementById("toggleCamera").style.backgroundColor = "#4CAF50";
    document.getElementById("toggleCameraPreview").value = 0;
    document.getElementById("toggleCameraPreview").innerHTML = "Start Camera Preview";
    document.getElementById("toggleCameraPreview").style.backgroundColor = "#4CAF50";
    document.getElementById("toggleDecoding").value = 0;
    document.getElementById("toggleDecoding").innerHTML = "Start Decode";
    document.getElementById("toggleDecoding").style.backgroundColor = "#4CAF50";
}

//Switch to a different camera
async function switchCamera(cameraLabel){
    let settableCamera = CortexDecoder.CDCamera.getConnectedCameras().find((camera)=>camera.label === cameraLabel)
    await CortexDecoder.CDCamera.setCamera(settableCamera)
    // await setCamera(cameraLabel)
    await startCamera()
    await startCameraPreview()
}

//Set the desired camera device from the list of available cameras
async function setCamera(cameraLabel){
    try{
        let settableCamera = CortexDecoder.CDCamera.getConnectedCameras().find((camera)=>camera.label === cameraLabel)
        await CortexDecoder.CDCamera.setCamera(settableCamera)
    }catch(err){
        if (isMobile) alert(err)
        else console.log(err);
    }
}

//Start the camera
async function startCamera() {
    try {
        await CortexDecoder.CDCamera.startCamera()
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

//Start the preview
async function startCameraPreview() {
    try {
        await CortexDecoder.CDCamera.startPreview((result) => {
            try {
                if (result && result[0].barcodeData !== "") {
                    drawTable(result[0])
                }
            } catch (err) {
                if (isMobile) alert(err)
                else console.log(err);   
            }
        });
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

//Stop the preview and stop the camera
async function stopCamera() {
    try {
        await CortexDecoder.CDCamera.stopCamera();
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

//Stop the preview but hold the camera resource
function stopCameraPreview() {
    try {
        CortexDecoder.CDCamera.stopPreview();
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}


function toggleCamera() {
    try {
        let val = document.getElementById("toggleCamera").value;
        if (val == 0) {
            startCamera()
            document.getElementById("toggleCamera").value = 1;
            document.getElementById("toggleCamera").innerHTML = "Stop Camera";
            document.getElementById("toggleCamera").style.backgroundColor = "red";
        } else {
            stopCamera()
            resetElements()
        }
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}


function toggleCameraPreview() {
    try {
        let val = document.getElementById("toggleCameraPreview").value;
        if (val == 0) {
            if (document.getElementById("toggleCamera").value == 0) alert("Start Camera First")
            else {
                startCameraPreview()
                document.getElementById("toggleCameraPreview").value = 1;
                document.getElementById("toggleCameraPreview").innerHTML = "Stop Camera Preview";
                document.getElementById("toggleCameraPreview").style.backgroundColor = "red";
                toggleDecoding()
            }
        } else {
            stopCameraPreview()
            document.getElementById("toggleCameraPreview").value = 0;
            document.getElementById("toggleCameraPreview").innerHTML = "Start Camera Preview";
            document.getElementById("toggleCameraPreview").style.backgroundColor = "#4CAF50";
            if (document.getElementById("toggleDecoding").value = 1)
                toggleDecoding()
        }
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

//Start decoding
function startDecoding() {
    try {
        CortexDecoder.CDDecoder.decoding = true
        // CortexDecoder.CDCamera.setVideoCapturing(true)
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

//Stop decoding
function stopDecoding() {
    try {
        CortexDecoder.CDDecoder.decoding = false
        // CortexDecoder.CDCamera.setVideoCapturing(false)
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

function toggleDecoding() {
    try {
        let val = document.getElementById("toggleDecoding").value;
        if (val == 0) {
            if (document.getElementById("toggleCamera").value == 0) alert("Start Camera First")
            else if (document.getElementById("toggleCamera").value == 1 && document.getElementById("toggleCameraPreview").value == 0) alert("Start Camera Preview First")
            else {
                startDecoding()
                document.getElementById("toggleDecoding").value = 1;
                document.getElementById("toggleDecoding").innerHTML = "Stop Decode";
                document.getElementById("toggleDecoding").style.backgroundColor = "red";
            }
        } else {
            stopDecoding()
            document.getElementById("toggleDecoding").value = 0;
            document.getElementById("toggleDecoding").innerHTML = "Start Decode";
            document.getElementById("toggleDecoding").style.backgroundColor = "#4CAF50";
        }
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

init();