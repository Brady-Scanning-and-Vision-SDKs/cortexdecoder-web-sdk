import * as CortexDecoder from 'codecorp-web_sdk';
//TODO: Replace "your-wasm-file-name" with your wasm file name here
import "../node_modules/codecorp-web_sdk/dist/web/your-wasm-file-name.wasm";
import CodeImage  from './assets/CODE-Expect-More-2.png';
import './styles/styles.scss';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let isScanning = false;

// Desktop preview defaults. Change these values if you want a smaller preview window.
const PREVIEW_SIZE = {
    width: 960,
    height: 540
};

function getElements() {
    return {
        codeImage: document.getElementById('CodeImage'),
        video: document.getElementById('video'),
        canvas: document.getElementById('videoCanvas'),
        cameraDevices: document.getElementById('cameradevices'),
        cameraSelector: document.getElementById('cameraSelector'),
        toggleScan: document.getElementById('toggleScan'),
        clearResult: document.getElementById('clearResult'),
        previewWidth: document.getElementById('previewWidth'),
        previewHeight: document.getElementById('previewHeight'),
        applyPreviewSize: document.getElementById('applyPreviewSize'),
        resultData: document.getElementById('resultData'),
        resultSymbology: document.getElementById('resultSymbology'),
        resultTime: document.getElementById('resultTime')
    };
}

function showError(err) {
    const message = err?.message || err;
    if (isMobile) alert(message);
    else console.log(message);
}

function applyPreviewSize(width, height) {
    const { video, canvas } = getElements();

    video.width = width;
    video.height = height;
    canvas.width = width;
    canvas.height = height;

    video.style.width = `${width}px`;
    video.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
}

function setupPreviewSizeControls() {
    const { previewWidth, previewHeight, applyPreviewSize: applyButton } = getElements();

    previewWidth.value = PREVIEW_SIZE.width;
    previewHeight.value = PREVIEW_SIZE.height;

    applyButton.addEventListener('click', () => {
        const width = Number(previewWidth.value);
        const height = Number(previewHeight.value);

        if (!Number.isFinite(width) || !Number.isFinite(height) || width < 200 || height < 150) {
            alert('Enter a valid width and height (min 200x150).');
            return;
        }

        applyPreviewSize(width, height);
    });

    if (!isMobile) {
        applyPreviewSize(PREVIEW_SIZE.width, PREVIEW_SIZE.height);
    }
}

function updateResult(result) {
    const { resultData, resultSymbology, resultTime } = getElements();
    resultData.textContent = result?.barcodeData || '-';
    resultSymbology.textContent = result?.symbology || '-';
    resultTime.textContent = result?.decodeTime || '-';
}

function clearResult() {
    updateResult({ barcodeData: '-', symbology: '-', decodeTime: '-' });
}

function setScanButtonState(scanning) {
    const { toggleScan } = getElements();
    toggleScan.value = scanning ? '1' : '0';
    toggleScan.textContent = scanning ? 'Stop Scan' : 'Start Scan';
    toggleScan.classList.toggle('is-stop', scanning);
}

function populateCameraDevices() {
    const { cameraDevices, cameraSelector } = getElements();
    const devices = CortexDecoder.CDCamera.getConnectedCameras() || [];

    cameraDevices.innerHTML = '';
    devices.forEach((camera) => {
        const option = document.createElement('option');
        option.value = camera.label;
        option.textContent = camera.label;
        cameraDevices.appendChild(option);
    });

    cameraSelector.style.display = devices.length > 1 && !isMobile ? 'flex' : 'none';
}

async function switchCamera(cameraLabel) {
    try {
        const selected = CortexDecoder.CDCamera.getConnectedCameras().find(
            (camera) => camera.label === cameraLabel
        );

        if (!selected) return;

        const wasScanning = isScanning;
        if (wasScanning) await stopScan();

        await CortexDecoder.CDCamera.setCamera(selected);

        if (wasScanning) await startScan();
    } catch (err) {
        showError(err);
    }
}

async function startScan() {
    try {
        if (isScanning) return;

        await CortexDecoder.CDCamera.startCamera();
        CortexDecoder.CDDecoder.decoding = true;

        await CortexDecoder.CDCamera.startPreview((results) => {
            const first = Array.isArray(results) ? results[0] : null;
            if (first && first.barcodeData) {
                updateResult(first);
            }
        });

        isScanning = true;
        setScanButtonState(true);
    } catch (err) {
        showError(err);
    }
}

async function stopScan() {
    try {
        if (!isScanning) return;

        CortexDecoder.CDDecoder.decoding = false;
        CortexDecoder.CDCamera.stopPreview();
        await CortexDecoder.CDCamera.stopCamera();

        isScanning = false;
        setScanButtonState(false);
    } catch (err) {
        showError(err);
    }
}

async function toggleScan() {
    if (isScanning) await stopScan();
    else await startScan();
}

async function init() {
    const elements = getElements();
    elements.codeImage.src = CodeImage;

    try {
        await CortexDecoder.CDDecoder.init();
        CortexDecoder.CDDevice.audio = true;

        // Replace with your license key.
        await CortexDecoder.CDLicense.activateLicense('your-license-key');
        await CortexDecoder.CDCamera.init();

        if (isMobile) {
            await CortexDecoder.CDCamera.setCameraPosition(CortexDecoder.CDPosition.BACK);
        } else {
            await CortexDecoder.CDCamera.setCameraPosition(CortexDecoder.CDPosition.FRONT);
        }

        populateCameraDevices();
        setupPreviewSizeControls();

        elements.cameraDevices.addEventListener('change', (event) => switchCamera(event.target.value));
        elements.toggleScan.addEventListener('click', toggleScan);
        elements.clearResult.addEventListener('click', clearResult);

        // Auto-start scanning on all devices.
        await startScan();

    } catch (err) {
        showError(err);
    }
}

init();