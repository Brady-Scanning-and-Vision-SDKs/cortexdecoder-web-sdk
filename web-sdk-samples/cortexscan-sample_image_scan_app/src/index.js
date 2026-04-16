import CodeImage from './assets/CODE-Expect-More-2.png';
import './styles/styles.scss';

// TODO: Replace "your-q-number" with your Q-number.
import { CDDecoder, CDLicense } from 'codecorp-web_sdk';
// TODO: Replace "your-q-number" and "your-wasm-file-name" with your package values.
import "../node_modules/codecorp-web_sdk/dist/web/your-wasm-file-name.wasm";

const state = {
    selectedFile: null,
    previewUrl: null
};

function getElements() {
    return {
        codeImage: document.getElementById('CodeImage'),
        imageImport: document.getElementById('imageImport'),
        imagePreview: document.getElementById('imagePreview'),
        scanButton: document.getElementById('scanButton'),
        clearButton: document.getElementById('clearButton'),
        statusText: document.getElementById('statusText'),
        resultData: document.getElementById('resultData'),
        resultSymbology: document.getElementById('resultSymbology'),
        resultTime: document.getElementById('resultTime')
    };
}

function showError(error) {
    const message = error?.message || error;
    console.log(message);
    alert(message);
}

function setStatus(text, isError = false) {
    const { statusText } = getElements();
    statusText.textContent = text;
    statusText.classList.toggle('error', isError);
}

function updateResult(result) {
    const { resultData, resultSymbology, resultTime } = getElements();
    resultData.textContent = result?.barcodeData || '-';
    resultSymbology.textContent = result?.symbology || '-';
    resultTime.textContent = result?.decodeTime || '-';
}

function clearResult() {
    updateResult(null);
}

function clearSelectedImage() {
    const { imageImport, imagePreview } = getElements();

    if (state.previewUrl) {
        URL.revokeObjectURL(state.previewUrl);
    }

    state.selectedFile = null;
    state.previewUrl = null;
    imageImport.value = '';
    imagePreview.src = '';
    imagePreview.classList.add('hidden');

    clearResult();
    setStatus('Upload an image and click Scan.');
}

// Keep this handler simple so developers can easily adapt it.
function onImageSelected(event) {
    const { imagePreview } = getElements();
    const file = event.target.files?.[0];

    clearResult();

    if (!file) {
        setStatus('Upload an image and click Scan.');
        return;
    }

    state.selectedFile = file;

    if (state.previewUrl) {
        URL.revokeObjectURL(state.previewUrl);
    }

    state.previewUrl = URL.createObjectURL(file);
    imagePreview.src = state.previewUrl;
    imagePreview.classList.remove('hidden');

    setStatus('Image selected. Click Scan to decode.');
}

async function scanSelectedImage() {
    const { scanButton } = getElements();

    if (!state.selectedFile) {
        alert('Please upload an image first.');
        return;
    }

    try {
        scanButton.disabled = true;
        setStatus('Decoding image...');

        const results = await CDDecoder.decode(state.selectedFile);

        if (!results || results.length === 0) {
            clearResult();
            setStatus('No barcodes found in the image.', true);
            return;
        }

        // Show only the first result to keep sample behavior straightforward.
        updateResult(results[0]);
        setStatus(`Decoded ${results.length} barcode(s).`);
    } catch (error) {
        clearResult();
        setStatus('Decode failed. Check console for details.', true);
        showError(error);
    } finally {
        scanButton.disabled = false;
    }
}

async function init() {
    const elements = getElements();
    elements.codeImage.src = CodeImage;

    try {
        await CDDecoder.init();
        // TODO: Replace with your license key.
        await CDLicense.activateLicense('your-license-key');
    } catch (error) {
        elements.scanButton.disabled = true;
        elements.imageImport.disabled = true;
        elements.clearButton.disabled = true;
        setStatus('SDK initialization failed.', true);
        showError(error);
        return;
    }

    elements.imageImport.addEventListener('change', onImageSelected);
    elements.scanButton.addEventListener('click', scanSelectedImage);
    elements.clearButton.addEventListener('click', clearSelectedImage);

    clearSelectedImage();
}

init();