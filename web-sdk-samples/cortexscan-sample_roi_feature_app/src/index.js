import * as CortexDecoder from 'codecorp-web_sdk';
//TODO: Replace "your-wasm-file-name" with your wasm file name here
import "../node_modules/codecorp-web_sdk/dist/web/your-wasm-file-name.wasm";
import CodeImage from './assets/CODE-Expect-More-2.png';
import './styles/styles.scss';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let isScanning = false;

// ROI values are percentages of preview width/height.
const DEFAULT_ROI = { x: 20, y: 20, width: 60, height: 40 };
const roiState = { ...DEFAULT_ROI };

function getElements() {
    return {
        codeImage: document.getElementById('CodeImage'),
        video: document.getElementById('video'),
        canvas: document.getElementById('videoCanvas'),
        roiBox: document.getElementById('roiBox'),
        roiX: document.getElementById('roiX'),
        roiY: document.getElementById('roiY'),
        roiWidth: document.getElementById('roiWidth'),
        roiHeight: document.getElementById('roiHeight'),
        roiXValue: document.getElementById('roiXValue'),
        roiYValue: document.getElementById('roiYValue'),
        roiWidthValue: document.getElementById('roiWidthValue'),
        roiHeightValue: document.getElementById('roiHeightValue'),
        toggleScan: document.getElementById('toggleScan'),
        resetRoi: document.getElementById('resetRoi'),
        statusText: document.getElementById('statusText'),
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

function setStatus(text, isError = false) {
    const { statusText } = getElements();
    statusText.textContent = text;
    statusText.classList.toggle('error', isError);
}

function clampRoiValues() {
    roiState.x = Math.max(0, Math.min(roiState.x, 95));
    roiState.y = Math.max(0, Math.min(roiState.y, 95));
    roiState.width = Math.max(5, Math.min(roiState.width, 100 - roiState.x));
    roiState.height = Math.max(5, Math.min(roiState.height, 100 - roiState.y));
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

function drawRoiOverlay() {
    const {
        roiBox,
        roiXValue,
        roiYValue,
        roiWidthValue,
        roiHeightValue,
        roiX,
        roiY,
        roiWidth,
        roiHeight
    } = getElements();

    clampRoiValues();

    roiBox.style.left = `${roiState.x}%`;
    roiBox.style.top = `${roiState.y}%`;
    roiBox.style.width = `${roiState.width}%`;
    roiBox.style.height = `${roiState.height}%`;

    roiX.value = roiState.x;
    roiY.value = roiState.y;
    roiWidth.value = roiState.width;
    roiHeight.value = roiState.height;

    roiXValue.textContent = `${roiState.x}%`;
    roiYValue.textContent = `${roiState.y}%`;
    roiWidthValue.textContent = `${roiState.width}%`;
    roiHeightValue.textContent = `${roiState.height}%`;
}

// Converts percentage-based UI ROI to the SDK rectangle format.
function buildRoiRect() {
    const { video } = getElements();
    const width = video.clientWidth || video.videoWidth || 640;
    const height = video.clientHeight || video.videoHeight || 360;

    const left = Math.round((roiState.x / 100) * width);
    const top = Math.round((roiState.y / 100) * height);
    const roiWidth = Math.round((roiState.width / 100) * width);
    const roiHeight = Math.round((roiState.height / 100) * height);

    const rect = new CortexDecoder.CDRect();
    rect.TopLeft.X = left;
    rect.TopLeft.Y = top;
    rect.TopRight.X = left + roiWidth;
    rect.TopRight.Y = top;
    rect.BottomRight.X = left + roiWidth;
    rect.BottomRight.Y = top + roiHeight;
    rect.BottomLeft.X = left;
    rect.BottomLeft.Y = top + roiHeight;
    return rect;
}

async function applyRoiToDecoder() {
    try {
        const rect = buildRoiRect();
        await CortexDecoder.CDDecoder.setRegionOfInterest(rect, true);
    } catch (err) {
        showError(err);
    }
}

function setScanButtonState(scanning) {
    const { toggleScan } = getElements();
    toggleScan.value = scanning ? '1' : '0';
    toggleScan.textContent = scanning ? 'Stop Scan' : 'Start Scan';
    toggleScan.classList.toggle('is-stop', scanning);
}

async function startScan() {
    try {
        if (isScanning) return;

        await CortexDecoder.CDCamera.startCamera();
        CortexDecoder.CDDecoder.decoding = true;

        // Always apply current ROI before starting preview.
        await applyRoiToDecoder();

        await CortexDecoder.CDCamera.startPreview((results) => {
            const first = Array.isArray(results) ? results[0] : null;
            if (first && first.barcodeData) {
                updateResult(first);
            }
        });

        isScanning = true;
        setScanButtonState(true);
        setStatus('Scanning inside ROI. Adjust sliders to update ROI.');
    } catch (err) {
        setStatus('Failed to start scan.', true);
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
        setStatus('Scan stopped.');
    } catch (err) {
        setStatus('Failed to stop scan.', true);
        showError(err);
    }
}

async function toggleScan() {
    if (isScanning) await stopScan();
    else await startScan();
}

async function onRoiInputChange() {
    const { roiX, roiY, roiWidth, roiHeight } = getElements();
    roiState.x = Number(roiX.value);
    roiState.y = Number(roiY.value);
    roiState.width = Number(roiWidth.value);
    roiState.height = Number(roiHeight.value);

    drawRoiOverlay();

    if (isScanning) {
        await applyRoiToDecoder();
    }
}

async function resetRoi() {
    Object.assign(roiState, DEFAULT_ROI);
    drawRoiOverlay();
    if (isScanning) {
        await applyRoiToDecoder();
    }
}

async function init() {
    const elements = getElements();
    elements.codeImage.src = CodeImage;
    drawRoiOverlay();

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

        elements.toggleScan.addEventListener('click', toggleScan);
        elements.resetRoi.addEventListener('click', resetRoi);
        elements.roiX.addEventListener('input', onRoiInputChange);
        elements.roiY.addEventListener('input', onRoiInputChange);
        elements.roiWidth.addEventListener('input', onRoiInputChange);
        elements.roiHeight.addEventListener('input', onRoiInputChange);

        // Auto-start scanning on all devices.
        await startScan();

    } catch (err) {
        setStatus('SDK initialization failed.', true);
        showError(err);
    }
}

init();