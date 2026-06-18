# CortexDecoder Web SDK - Samples & Reference

[![Platform](https://img.shields.io/badge/Platform-Web%20Browser-blue.svg)]()
[![SDK Version](https://img.shields.io/badge/SDK-v2.9.0-success.svg)]()
[![API Docs](https://img.shields.io/badge/API_Docs-NexGen-blueviolet.svg)](https://nexgen-docs.netlify.app/)
[![Support](https://img.shields.io/badge/Support-Brady_Enterprise-orange.svg)](mailto:software.support@codecorp.com)

**Enterprise-grade barcode scanning, data capture, and parsing for Web browsers**

This repository contains ready-to-compile sample applications demonstrating how to integrate the CortexDecoder SDK into retail, industrial, or verification workflows using JavaScript/TypeScript.

> **Note:** This repository contains sample code only. Download the SDK binary and license keys from the [Brady Developer Portal](https://devportal.codecorp.com/).

<div align="center">
  <img src="demo.gif" alt="Preview of the CortexDecoder Web SDK sample" width="600"/>
</div>



## Enterprise Barcode Scanning Features

* **Enterprise Barcode Scanning:** Sub-millisecond decoding latency for 40+ symbologies (1D, 2D, and postal codes).
* **Live Camera & Static Image Decoding:** Process continuous video streams or decode discrete bitmaps, gallery assets, and file uploads.
* **Industrial DPM & Multi-Code Tracking:** Reliably read low-contrast Direct Part Marking (laser, dot peen, chemical) and decode multiple barcodes simultaneously.
* **Driver's License, GS1 & UDI Data Parsing:** Instantly extract and format data from driver's licenses and healthcare/logistics formats.
* **Secure Offline Processing & ROI:** Utilize 100% on-device decoding for complete data privacy, and restrict scanning to an Active Region of Interest (ROI) for maximum precision.

## System Requirements

- **Supported Languages**: JavaScript, TypeScript
- **Browser Compatibility**: Modern browsers with WebAssembly support
- **Build Tools**: Node.js 14+, NPM 6+
- **Minimum SDK Version**: 2.0.0



## Quick Start Guide

These core APIs are required for any CortexDecoder integration. If you simply want to compile the sample code in this repository, skip to [Running the Sample Apps](#running-the-sample-apps).

### 1. Getting the License

Before initializing the SDK, generate your active development or production license key via the [Brady Developer Portal](https://devportal.codecorp.com/).

### 2. Apply the License

```javascript
import { CDLicense } from '@your-q-number/codecorp-web_sdk';

CDLicense.activateLicense("YOUR_LICENSE_KEY_HERE");
```

### 3. Configure Permissions

The SDK requires camera access for live scanning. Your application must request user permission:

```html
<video id="video" width="640" height="360" playsinline></video>
<canvas id="videoCanvas" width="640" height="360"></canvas>
```

### 4. Initialize the Camera

```javascript
import { CDCamera } from '@your-q-number/codecorp-web_sdk';

await CDCamera.init(document.getElementById("videoCanvas"));
await CDCamera.startCamera();
```

### 5. Start Decoding

```javascript
import { CDDecoder } from '@your-q-number/codecorp-web_sdk';

CDCamera.startPreview((result) => {
  console.log("Decoded results:", result);
});
```

### 6. Configure Symbologies

By default, all symbologies are disabled. Enable the ones you need:

```javascript
import { CDSymbology } from '@your-q-number/codecorp-web_sdk';

const symbology = new CDSymbology();
symbology.QR.enable = true;
symbology.Code128.enable = true;
symbology.UPCA.enable = true;
```

## Advanced Features

### Region of Interest (ROI)

Restrict decoding to a specific screen area to optimize performance and prevent accidental scans.

```javascript
import { CDRect } from '@your-q-number/codecorp-web_sdk';
import { CDDecoder } from '@your-q-number/codecorp-web_sdk';

const ROIRect = new CDRect();
ROIRect.TopLeft.X = parseInt(left);
ROIRect.TopLeft.Y = parseInt(top);
ROIRect.TopRight.X = parseInt(left) + parseInt(width);
ROIRect.TopRight.Y = parseInt(top);
ROIRect.BottomRight.X = parseInt(left) + parseInt(width);
ROIRect.BottomRight.Y = parseInt(top) + parseInt(height);
ROIRect.BottomLeft.X = parseInt(left);
ROIRect.BottomLeft.Y = parseInt(top) + parseInt(height);

CDDecoder.setRegionOfInterest(ROIRect, true);
```

### Enable Feedback (Beep & Vibration)

```javascript
import { CDDevice } from '@your-q-number/codecorp-web_sdk';

CDDevice.audio = true;
CDDevice.vibration = true;
```

### Highlight Barcodes

Draw visual overlays from decode results to provide immediate user feedback in real-time previews.

```javascript
CDCamera.setHighlightBarcodes(true);

CDCamera.startPreview((result) => {
  console.log("Decoded results:", result);
});
```


## Running the Sample Apps

To see these APIs in action, follow these steps to build and run the sample applications included in this repository.

1. **Clone the Project**

   Before proceeding, ensure you have:
   - Node.js 14+ and NPM 6+ installed ([https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
   - An active SDK package from the [Brady Developer Portal](https://devportal.codecorp.com/)

```bash
git clone <repository-url>
cd cortexdecoder-web-sdk
```

2. **Add the SDK Binary**

- Download the `codecorp-web_sdk-x.x.x.tgz` package from the Brady Developer Portal
- Copy it to your sample app's root directory
- Run: `npm install --save "./codecorp-web_sdk-x.x.x.tgz"`

   The SDK includes a WebAssembly file (.wasm) that must be properly imported and configured. Your application bundler must allow the WASM file to be emitted to the browser.

   For **Webpack**, add this configuration:

```javascript
{
  test : /\.(wasm)$/,
  type: `javascript/auto`,
  use: {
    loader: `file-loader`
  }
}
```

   In your application entry file, import the WASM module:

```javascript
import "../node_modules/@your-q-number/codecorp-web_sdk/dist/web/your-wasm-file-name.wasm";
```

3. **Configure Licensing**

After installation, find your Q-number and update import statements:

```javascript
// Find your Q-number in package.json under dependencies
// Change: import * as CortexDecoder from '@your-q-number/codecorp-web_sdk';
// Example: import * as CortexDecoder from '@q0000/codecorp-web_sdk';
```

Open the sample app's main index file and replace the placeholder with your license key:

```javascript
CDLicense.activateLicense("YOUR_LICENSE_KEY");
```

4. **Build and Run**

Navigate to your chosen sample app directory and run:

```bash
npm run dev
```



### Included Samples

| Sample App | Best For | Framework |
| --- | --- | --- |
| [Camera Scan Sample](web-sdk-samples/cortexscan-sample_camera_scan_app) | Real-time camera scanning | JS |
| [Image Scan Sample](web-sdk-samples/cortexscan-sample_image_scan_app) | Image scanning | JS |
| [Region of Interest Sample](web-sdk-samples/cortexscan-sample_roi_feature_app) | Real-time camera scanning with Region Of Interest Setting | JS |

## Common Issues & Troubleshooting

- **WASM file does not load**: Ensure your bundler emits `.wasm` assets and that the import path points to the installed SDK package.
- **No camera feed appears**: Verify browser camera permission was granted and test in a secure context (HTTPS or localhost).
- **No decode results**: Confirm your license is active and required symbologies are explicitly enabled.



## Common Usage Patterns

### Camera Scanning

Capture and decode barcodes from a live camera feed:

1. Initialize the camera with a canvas or video element
2. Call `startCamera()` to activate the device camera
3. Use `startPreview()` with a callback to receive decoded results

```javascript
await CDCamera.init(document.getElementById("videoCanvas"));
await CDCamera.startCamera();

CDCamera.startPreview((result) => {
  console.log("Scan results:", result);
});
```

### Image File Scanning

Decode barcodes from uploaded images:

```html
<input type="file" id="imageUpload" accept="image/*,.pdf" />
```

```javascript
document.getElementById("imageUpload").addEventListener('change', async (event) => {
  const file = event.target.files[0];
  const result = await CDDecoder.decode(file).catch(e => alert(e));
  console.log(result);
});
```

### Set Symbology Decode Options

```javascript
await CDDecoder.setBarcodesToDecode(1, true);
CDDecoder.timeLimit = 5000; // Set 5 second timeout
```



## Support & Resources

- **Sample App Issues**: Report bugs related to the sample code via [GitHub Issues](https://github.com/skanda-srikanta/cortexdecoder-web-sdk/issues).

- **SDK Product Support**: For inquiries regarding decoding performance, engine behavior, or licensing, contact *software.support@codecorp.com*.

- **API Documentation** - [NexGen Docs](https://nexgen-docs.netlify.app/)
- **Licensing & Binaries** - [Brady Developer Portal](https://devportal.codecorp.com/)
- **Main Website** - [CodeCorp by Brady](https://www.codecorp.com)



---
## License
© 2026 Brady Worldwide, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

