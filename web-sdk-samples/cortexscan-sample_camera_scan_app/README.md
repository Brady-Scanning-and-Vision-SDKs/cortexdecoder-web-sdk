# Basic Scanning Sample App

This application demonstrates real-time camera barcode scanning with the CortexDecoder Web SDK. Use it if you want a minimal reference for browser camera initialization, live decoding, and rendering the latest decode result.


## Features Demonstrated
- Continuous camera scanning with automatic start
- Camera device selection (desktop when multiple cameras are available)
- Start and stop scan controls
- Last-result display (data, symbology, decode time)
- Mobile full-screen scanning layout
- Simple desktop preview size controls (width and height)

## Prerequisites
Before running this sample, you will need:

- **SDK Binary and License Key**, managed through the [Brady Developer Portal](https://devportal.codecorp.com/).
- **Minimum SDK Version**: Web SDK 2.7.0
- **Tools**: Node.js 14+ and npm 6+

## SDK Integration
Use these steps when integrating the SDK into your own web project.

### Step 1: Add the SDK package
Place your `codecorp-web_sdk-x.x.x.tgz` file in your project root and install it:

```bash
npm install --save "./codecorp-web_sdk-x.x.x.tgz"
```

### Step 2: Import SDK and WASM
In your entry file, import the SDK package and WASM binary.

```javascript
import * as CortexDecoder from 'codecorp-web_sdk';
import "../node_modules/codecorp-web_sdk/dist/web/<your-wasm-file>.wasm";
```

### Step 3: Activate your license
Before starting camera and decoding, activate a valid license key:

```javascript
await CortexDecoder.CDLicense.activateLicense("YOUR_LICENSE_KEY");
```

### Step 4: Initialize camera and start preview
Initialize decoder, initialize camera, and then start preview/decode.

```javascript
await CortexDecoder.CDDecoder.init();
await CortexDecoder.CDCamera.init();
await CortexDecoder.CDCamera.startCamera();
CortexDecoder.CDDecoder.decoding = true;
await CortexDecoder.CDCamera.startPreview((results) => {
  // handle decode result
});
```

## Installation

### Step 1: Go to this sample app directory
From the repository root:

```bash
cd web-sdk-samples/cortexscan-sample_camera_scan_app
```

### Step 2: Install dependencies
If not already installed:

```bash
npm install
```

### Step 3: Add SDK package
If your local package file name is different, update the command accordingly:

```bash
npm install --save "./codecorp-web_sdk-2.7.0.tgz"
```

### Step 4: Configure WASM and license in source
Open `src/index.js` and:
- Update the WASM import to your actual WASM filename.
- Replace the license string passed to `CDLicense.activateLicense(...)`.

### Step 5: Run the app

```bash
npm run dev
```

The webpack dev server runs on port `8000` by default.

### Step 6: Build for production

```bash
npm run build
```

## Sample App Usage

### Step 1: Open and allow camera access
Start the app and grant browser camera permission when prompted.

### Step 2: Scan barcodes
Point the camera at a supported barcode. The latest decode appears in the Last Decode Result panel.

### Step 3: Control scanning
Use **Start Scan / Stop Scan** to control live decoding.

### Step 4: Select camera on desktop
If multiple cameras are available, choose one from the Camera dropdown.

### Step 5: Adjust desktop preview size
Use the width and height fields and click **Apply** to resize the preview area.

## Troubleshooting
- **Camera does not start**: Verify browser camera permission and run on `localhost` or HTTPS.
- **No decode results**: Confirm license activation and barcode symbology support.
- **WASM import error**: Ensure the WASM import path and filename match the SDK package contents.
- **Styles not loaded**: Reinstall dependencies with `npm install` and restart with `npm run dev`.

## Contribution
Contributions are welcome. If you have a fix or an improvement for this sample application, please:
1. Fork this repository.
2. Create your feature branch (`git checkout -b feature/camera-scan-readme-update`).
3. Commit your changes.
4. Open a Pull Request against our `main` branch.

## Support & Resources
- **Sample App Issues**: Report bugs related to the sample code via [GitHub Issues](https://github.com/skanda-srikanta/cortexdecoder-web-sdk/issues).

- **SDK Product Support**: For inquiries regarding decoding performance, engine behavior, or licensing, contact *software.support@codecorp.com*.

- **API Documentation** - [NexGen Docs](https://nexgen-docs.netlify.app/)
- **Licensing & Binaries** - [Brady Developer Portal](https://devportal.codecorp.com/)
- **Main Website** - [CodeCorp by Brady](https://www.codecorp.com)

---

© 2026 Brady Worldwide, Inc. All rights reserved
