---
title: Web SDK
---

# Web SDK Release Notes

---

## Version 2.7.0

### New Features
- None

### Improvements & Fixes
-  Fixed camera switching issue found on Chrome PC.
- Removed declaration files created for private classes.
- Data Collection can now return customer ID.
- Updated decoder library.

### API Changes
- None

---

## Version 2.6.2

### New Features
- None

### Improvements & Fixes
- Removed unused in-line web worker.
- Fixed a few type issues.

### API Changes
- None

---

## Version 2.6

### New Features
- None

### Improvements & Fixes
- Updated decoder version to 24.2.1.
- Resolved misdecode of Code128.

### API Changes
- None

---

## Version 2.5

### New Features
- Added camera auto switching in `setCameraPosition` API.
- Added `UNSUPPORTED` value in `CDFocus` and `CDTorch` enums.

### Improvements & Fixes
- Decoder performance improvements.
- Fixed compatibility issues on Chrome (Mac) and Xiaomi Redmi phones.
- Fixed issue with `multiFrameDecoding`.

### API Changes
- Deprecated `setFixedFocusRange` and `getFixedFocusRange`.

---

## Version 2.4

### New Features
- Added enum to `CDPosition` for ultra wide lens selection.
- Added UI for barcode highlight and ROI in `CDCamera.init`.

### Improvements & Fixes
- Performance improvements in frame processing and decoder.
- `CDCamera.init` supports both video and canvas inputs.
- Improved camera permissions logic.
- Fixed Firefox compatibility and `CDDevice` vibrate API issues.

### API Changes
- `CDCamera.setCamera` accepts `MediaDeviceInfo`.
- `setCrop` API deprecated.

---

## Version 2.3

### New Features
- Integrated Node SDK into the package for client and server use.

### Improvements & Fixes
- Minor bug fixes with QR config scan.

### API Changes
- None

---

## Version 2.2

### New Features
- Added multicode decoding functionality.
- Added `image_buffer` property to `CDResult`.

### Improvements & Fixes
- Fixed bug passing URL for WASM file in `CDDecoder.init()`.

### API Changes
- None

---

## Version 2.1

### New Features
- Added `RequireUPCFamily` API in Composite Code.

### Improvements & Fixes
- Fixed misdecodes in CodablockF, CompositeCode, Code11, and GS1Databar.
- Fixed bug in QR config license activation.
- Fixed iPhone decode issue in `CDCamera` with video input.

### API Changes
- Updated `stripStartStopCharacters` to `sendStartStopCharacters`.

---

## Version 2.0

### New Features
- Added type support for all classes and methods.
- Added enums for easier settings access.
- Added preprocess APIs for blurry codes.
- Added "ensure corners" to ROI API.
- Added QR config support for features and licenses.
- Added highlight barcode API for canvas input.
- Added codewords for quality detection.

### Improvements & Fixes
- `CDCamera` supports both video and canvas input.
- Fixed Safari compatibility issues.
- Bug fixes in `setBarcodesToDecode`, time limit, and Micro QR.

### API Changes
- Single NPM package supporting ESM, CJS, or UMD.
- `CDSymbology` uses enums for symbologies.
- `CDDecoder.decode` accepts multiple input formats.

---

## Version 1.17

### New Features
- None

### Improvements & Fixes
- Bug fixes in `getCamera` API.
- Fixed race condition between `stopCamera` and `startCamera`.
- Fixed preview handling during rapid toggling.

### API Changes
- None

---

## Version 1.16

### New Features
- `CDCamera.init` can take canvas element reference.

### Improvements & Fixes
- Fixed memory leak on iPhones.
- Handled swift camera switching.

### API Changes
- Added `setCrop` API for iPhone focus/zoom workaround.

---

## Version 1.15

### New Features
- None

### Improvements & Fixes
- Fixed bug causing preview to stop on Next.JS page navigation.

### API Changes
- None

---

## Version 1.14

### New Features
- None

### Improvements & Fixes
- Improved license security via OpenSSL update.
- Added data collection to Node and Web worker SDKs.

### API Changes
- None

---

## Version 1.13

### New Features
- None

### Improvements & Fixes
- Fixed data parsing issue.
- Simplified camera switching APIs.
- Bug fixes for ROI and highlights on iOS and Mac.

### API Changes
- None

---

## Version 1.12

### New Features
- Added `CDLicenseResult` object.

### Improvements & Fixes
- Added data collection to Web Worker and Node SDKs.
- UI changes to Camera Scan sample app.

### API Changes
- None

---

## Version 1.11

### New Features
- Added data collection functionality.
- Added `CDPerformanceFeatures` class.

### Improvements & Fixes
- None

### API Changes
- None

---

## Version 1.10

### New Features
- Added SDK with embedded WASM file.

### Improvements & Fixes
- Sample app modified to use embedded SDK.

### API Changes
- None

---

## Version 1.9

### New Features
- Beep on scan supported on iOS.

### Improvements & Fixes
- Fixed Opera compatibility.
- `startPreview()` checks and requests camera permissions.
- Handled iOS camera stop/restart during notification bar pull-down.

### API Changes
- None

---

## Version 1.8

### New Features
- None

### Improvements & Fixes
- Decoder performance and security updates.

### API Changes
- None

---

## Version 1.7

### New Features
- Added `setDecode` API in `CDCamera`.

### Improvements & Fixes
- Added optimal camera selection for multi-camera phones.
- `stopPreview` only stops the video (not camera), allowing rapid restarts.
- Fixed iPhone preview issue during notification bar interaction.

### API Changes
- `setPreview` renamed to `startPreview`.

---

## Version 1.6

### New Features
- Added UI for Picklist mode and ROI in sample app.

### Improvements & Fixes
- Internal ROI scaling on resolution change.
- Automatic optimal camera selection when wide view is default.

### API Changes
- None

---

## Version 1.5

### New Features
- Added `setCameraPosition` for front/back defaults.
- Added flash and vibrate support (Android only).

### Improvements & Fixes
- Fixed Picklist mode bug.
- Bug fixes for `setCamera` in different languages.

### API Changes
- None

---

## Version 1.4

### New Features
- `getConnectedCameras()` returns device ID and label.

### Improvements & Fixes
- Performance improvements in device fetching.

### API Changes
- `setCamera()` accepts ID or label.

---

## Version 1.3

### New Features
- None

### Improvements & Fixes
- GS1 data parsing bug fix.

### API Changes
- None

---

## Version 1.2

### New Features
- None

### Improvements & Fixes
- Support for Oppo, Lenovo, and Redmi phones.

### API Changes
- Adjusted `setBarcodesToDecode` API.

---

## Version 1.0

### New Features
- None

### Improvements & Fixes
- Initial release with Safari, iOS 12, and license validation fixes.

### API Changes
- None
