##Important
	-The SDK has a Web Assembly file(.wasm) that needs to be imported in the application.
        import "../node_modules/codecorp-web_sdk/dist/web/0xxxfefjensssrejriwjdkq9.wasm"
        
    However, the application bundler should allow the WASM file to be uploaded to the browser. The WebPack configuration needed to allow this is mentioned below - 
        //wasm files should not be processed but just be emitted.
        
        {
            test : /\.(wasm)$/,
            type: `javascript/auto`,
            use: {
                loader: `file-loader`
            }
        }'

## Installation Instructions
#### Install NodeJS and NPM
[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Verify Installation of NodeJS and NPM
Open a command prompt (or PowerShell), and enter the following:

* ```node –v```
The system should display the Node.js version installed on your system.

* ```npm –v```
The system should display the NPM version installed on your system.

#### SDK folder structure
* The SDK release folder will have three directories namely <b>NPM_Package</b>,  <b>SampleProjects</b>.
* The "NPM_Package" folder contains the package that should be installed locally in the project.
* The "SampleProjects" folder contains example apps to demonstrate the camera scanning and image scanning feature of the SDK.


#### Integrate the SDK in camera scan sample app
* Copy the <b>Cortex_Scan_SampleWebApp_Basic</b> app from the "SampleProjects" folder to local file system.
* Copy the <b>codecorp-web_sdk-2.x.x.tgz</b> file from "NPM_Package" folder to the root of "Cortex_Scan_SampleWebApp_Basic" app.
* Type <b>npm install --save "./codecorp-web_sdk-2.x.x.tgz"</b>

#### Activate the license
* Open the "Cortex_Scan_SampleWebApp_Basic" app in a source code editor of your choice.
* Navigate to "src" folder and open the file "index.js".
* Go to the line where function <b>"activateLicense"</b> is called and replace the text with the license key provided by our Sales team.
* Type <b>"npm run dev"</b> to start the server. The license activation message must be printed in console log.

#### Use Camera to Scan
* Our SDK provides APIs to change multiple settings of the device camera and decode the frames generated from the camera.
* SDK requires the application to provide either -
	* HTML canvas element
		```<canvas id="videoCanvas" width="640" height="360"></canvas>```
	* HTML video element
		```<video id="video" width="640" height="360" playsinline></video>```
* CDCamera class provides ```init(ref?: HTMLVideoElement | HTMLCanvasElement): Promise<void>;``` API which takes an optional parameter for video input. If no parameter is provided, SDK looks for video element in the DOM and if none, throws an error.

```js
CDCamera.init(document.getElementById("videoCanvas"))
```

* The ```getConnectedCameras(): MediaDeviceInfo[];``` API of CDCamera class returns a list of all the connected video input devices.
* Pass either the ID or the label of the device to ```setCamera(device: String): Promise<void>;``` API.
* If you prefer to select the camera based on orientation (front / back) then call ```    setCameraPosition(value: CDPosition): Promise<void>;``` API.

```js
CDCamera.setCameraPosition(value : CDPosition, autoSwitch : boolean)
```

* Call ```startCamera(): Promise<void>;``` API to start the camera stream.
* Finally call ```startPreview(getResult: (arg0: [CDResult]) => any): Promise<void>;``` which takes a callback function as argument to return the decode results.

```js
CDCamera.startPreview((result)=>{
	console.log(result)
})
```

#### Integrate the SDK in image scan sample app
* Copy the <b>Image_Scan_SampleWebApp_Basic</b> app from the "Sample Apps" folder to local file system.
* Copy the <b>codecorp-web_sdk-2.x.x.tgz</b> file from "NPM_Package" folder to the root of "Cortex_Scan_SampleWebApp_Basic" app.
* Type <b>npm install --save "./codecorp-web_sdk-2.0.0.tgz"</b>
* Open the app in source code editor, navigate to src folder and open "index.js" file and replace the string in activate license method with license string provided by our Sales team.
* Type <b>"npm run dev"</b> to start the server. The license activation message must be printed in console log.

#### Scan Images
* In HTML file, using input tag, upload an image
```html
<input type="file" id="imageImport" accept="image/*,.pdf" />
```
* In JS, handle the image upload
```js
// HTML
document.getElementById("imageImport").addEventListener('change', getImage, false);

//JS
async function getImage(evt) {
	image = evt.target.files[0];
	result = await CDDecoder.decode(image).catch(e => alert(e));
	console.log(result)
}
```


#### Integrate the SDK in image-scan-nodesdk-sampleapp
* Copy the <b>image-scan-nodesdk-sampleapp</b> app from the "Sample Apps" folder to local file system.
* Copy the <b>codecorp-web_sdk-2.x.x.tgz</b> file from "NPM_Package" folder to the root of "image-scan-nodesdk-sampleapp" app.
* Type <b>npm install --save "./codecorp-web_sdk-2.0.0.tgz"</b>
* Open the app in source code editor, navigate to src folder and open "index.js" file and replace the string in activate license method with license string provided by our Sales team.
* Type <b>"npm start"</b> to start the server.

#### Open Postman
## Initialize Decoder and Activate License 
```js	
	HTTP Request: GET http://localhost:8000/init

	Body: None

	Expected HTTP Code: 200 OK

	Expected Response: {
		"status": "ACTIVATED",
		"message": "License activated",
		"expirationDate": "10/31/2025", //Your license expiration date
		"rawExpirationDate": "2025-11-01T03:59:59.999Z" //Your license expiration date
	}
```

## Decode sample image
```js
	HTTP Request: POST http://localhost:8000/post_image

	Body: Use form-data, with
	Key: “image”
	Key-type: “File”
	Value: Upload an image of a barcode like “UPC(UPC-A).jpg.

	Expected HTTP Code: 200 Ok
```
	
## Quick Tips

#### Enable or Disable a symbology 


```js
const cdSymbology = new CDSymbology();
cdSymbology.QR.enable = true
console.log(cdSymbology.QR.enable) //Prints true
```

#### Set Region of Interest (ROI) 


```js
const ROIRect = new CDRect();

ROIRect.TopLeft.X = parseInt(left);
ROIRect.TopLeft.Y = parseInt(top);
ROIRect.TopRight.X = parseInt(left) + parseInt(width)
ROIRect.TopRight.Y = parseInt(top)
ROIRect.BottomRight.X = parseInt(left) + parseInt(width)
ROIRect.BottomRight.Y = parseInt(top) + parseInt(height)
ROIRect.BottomLeft.X = parseInt(left)
ROIRect.BottomLeft.Y = parseInt(top) + parseInt(height)

CDDecoder.setRegionOfInterest(ROIRect, true);
```

#### Set Barcodes to Decode

```js
await CDDecoder.setBarcodesToDecode(1, true);
```

#### Set TimeLimit 


```js
CDDecoder.timeLimit = value
```

#### Enable beep and vibrate for a successful scan


```js
CDDevice.audio = true
CDDevice.vibration = false
console.log(CDDevice.audio)   //Prints true
```