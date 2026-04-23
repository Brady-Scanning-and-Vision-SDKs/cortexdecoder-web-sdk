# Basic Scanning Sample App

This application demonstrates static image barcode decoding in the browser using the CortexDecoder Web SDK. Use it if you want a simple reference for file upload, image preview, and decode-result handling without camera setup complexity.


## Features Demonstrated
- Image/PDF file upload and preview
- User-initiated barcode decode from a selected file
- SDK initialization and license activation
- Result display for barcode data, symbology, and decode time
- Minimal clear/reset flow for repeated testing

## Prerequisites
Before running this sample, you will need:

- **SDK Binary and License Key**, managed through the [Brady Developer Portal](https://devportal.codecorp.com/).
- **Minimum SDK Version**: Web SDK 2.7.0
- **Tools**: Node.js 14+ and npm 6+

## SDK Integration
General steps to integrate the Web SDK in your own image-decoding project.

### Step 1: Install the SDK package
Copy the SDK package (`codecorp-web_sdk-x.x.x.tgz`) into your project root and install it:

```bash
npm install --save "./codecorp-web_sdk-x.x.x.tgz"
```

### Step 2: Import SDK modules and WASM
In your entry file, import SDK APIs and the WASM binary.

```javascript
import { CDDecoder, CDLicense } from 'codecorp-web_sdk';
import "../node_modules/codecorp-web_sdk/dist/web/<your-wasm-file-name>.wasm";
```

### Step 3: Initialize and activate license
Initialize the decoder first, then activate your license before decode calls.

```javascript
await CDDecoder.init();
await CDLicense.activateLicense("YOUR_LICENSE_KEY");
```

### Step 4: Decode selected image file
After a file is selected, pass it directly to `CDDecoder.decode(...)`.

```javascript
const results = await CDDecoder.decode(selectedFile);
```

## Installation

### Step 1: Navigate to this sample app
From repository root:

```bash
cd web-sdk-samples/cortexscan-sample_image_scan_app
```

### Step 2: Install project dependencies

```bash
npm install
```

### Step 3: Install local SDK package
If your package file name differs, update the command accordingly.

```bash
npm install --save "./codecorp-web_sdk-2.7.0.tgz"
```

### Step 4: Configure WASM import and license key
Open `src/index.js` and:
- Replace the WASM file name in the WASM import path.
- Replace `your-license-key` in `CDLicense.activateLicense(...)`.

### Step 5: Run the sample app

```bash
npm run dev
```

The webpack dev server runs on port `3000` by default.

### Step 6: Create production build

```bash
npm run build
```

## Sample App Usage

### Step 1: Upload an image or PDF
Use the file picker to select an image/PDF containing one or more barcodes.

### Step 2: Preview the selected file
The selected file is displayed in the Image Preview section.

### Step 3: Click Scan
Press **Scan** to run decoding on the selected file.

### Step 4: Review decode result
The app shows the latest decoded barcode details:
- Data
- Symbology
- Decode Time

### Step 5: Click Clear to reset
Use **Clear** to remove preview and result values and start another test.

## Troubleshooting
- **Decode fails immediately**: Verify your SDK license string and package/WASM import path in `src/index.js`.
- **No barcodes found**: Test with a clearer image and supported barcode symbology.
- **WASM load error**: Confirm the imported WASM filename matches the file inside `node_modules/codecorp-web_sdk/dist/web/`.
- **Styles are missing**: Reinstall dependencies (`npm install`) and restart the dev server.

## Contribution
Contributions are welcome. If you have a fix or an improvement for this sample application, please:
1. Fork this repository.
2. Create your feature branch (`git checkout -b feature/image-scan-sample-update`).
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
