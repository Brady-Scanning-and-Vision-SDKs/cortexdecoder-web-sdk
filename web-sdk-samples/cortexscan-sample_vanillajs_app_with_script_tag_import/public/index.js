let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let sampleObj = {}
let videoResolution = 0;
let screenOrient = {};


//Function that initializes the decoder and all the lists in the app
async function init() {
    try {

        await CortexDecoderWeb.CDDecoder.init("./WASM");
        console.log(await CortexDecoderWeb.CDLicense.activateLicense("Enter License Key here").catch(e => console.log(e)));
        await CortexDecoderWeb.CDDecoder.setBarcodesToDecode(1, true)
        await CortexDecoderWeb.CDCamera.init();
        CortexDecoderWeb.CDDevice.audio = true;

        //This is because we are using CDCamera.setCameraPosition API for mobile devices
        if (isMobile) {
            document.getElementById("cameraSelector").hidden = true;
        }

        getAvailableCameraDevices(CortexDecoderWeb.CDCamera.getConnectedCameras())

        await setDefaultSettings()
        getSupportedResolutions(CortexDecoderWeb.CDResolution)
        getduplicateFilteringList()

    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

function getAvailableCameraDevices(cameraDevices) {
    try {
        let selectElement = document.getElementById("cameradevices");
        let backCameras = []

        for (let i of cameraDevices) {
            if (i.label !== null)
                if (i.label.toUpperCase().includes("BACK")) {
                    backCameras.push(i)
                }
            let opt = document.createElement("option");
            opt.value = i.label;
            opt.innerHTML = i.label;
            selectElement.appendChild(opt)
        }
        if (backCameras[0] != null)
            selectElement.value = backCameras[0].label;
        // setCameraDevice(document.getElementById("cameradevices").value);

    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }

}


async function setCameraDevice(selectedCamera) {
    try {
        if (isMobile) {
            CortexDecoderWeb.CDCamera.setCameraPosition(CortexDecoderWeb.CDPosition.BACK)
        } else {
            await CortexDecoderWeb.CDCamera.setCamera(selectedCamera)
        }
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}


getResult = (result) => {
    try {
        if (result !== undefined) {
            drawTable(result)
        }
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

async function drawTable(result) {
    try {
        if(result[0].status == 0){
            let resultString = document.getElementById("resultString");
            let symbologyName = document.getElementById("symbologyName");
            let decodeTime = document.getElementById("decodeTime");

            resultString.innerHTML = result[0].barcodeData;
            symbologyName.innerHTML = result[0].symbology;
            decodeTime.innerHTML = result[0].decodeTime;
        }
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

function clearTable() {
    try {
        let resultString = document.getElementById("resultString");
        let symbologyName = document.getElementById("symbologyName");
        let decodeTime = document.getElementById("decodeTime");

        resultString.innerHTML = "";
        symbologyName.innerHTML = "";
        decodeTime.innerHTML = "";
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

async function setDefaultSettings() {
    await startCamera()
    await startCameraPreview()
}



function getSupportedResolutions(allResolutions) {
    try {
        let resolutionList = document.getElementById("resolutionsList");
        let res640 = document.createElement("button");
        let res1280 = document.createElement("button");
        let res1920 = document.createElement("button");
        let res3840 = document.createElement("button");

        res640.value = allResolutions.RES640x360;
        res1280.value = allResolutions.RES1280x720;
        res1920.value = allResolutions.RES1920x1080;
        res3840.value = allResolutions.RES3840x2160;

        res640.innerHTML = "RES640x360";
        res1280.innerHTML = "RES1280x720";
        res1920.innerHTML = "RES1920x1080";
        res3840.innerHTML = "RES3840x2160";

        res640.style.display = "block"
        res640.style.fontSize = "20px"
        res640.style.margin = "auto"
        res640.setAttribute("class", "dropdown-btn")
        res640.onclick = function() {
            let header = document.getElementById("resolutionsList");
            let btns = header.getElementsByClassName("dropdown-btn");
            for (let i = 0; i < btns.length; i++) {
                if (btns[i].className == "dropdown-btn active") btns[i].className = "dropdown-btn"
            }
            this.className += " active";
            selectResolution(this.value)
        }
        res1280.style.display = "block"
        res1280.style.fontSize = "20px"
        res1280.style.margin = "auto"
        res1280.setAttribute("class", "dropdown-btn")
        res1280.onclick = function() {
            let header = document.getElementById("resolutionsList");
            let btns = header.getElementsByClassName("dropdown-btn");
            for (let i = 0; i < btns.length; i++) {
                if (btns[i].className == "dropdown-btn active") btns[i].className = "dropdown-btn"
            }
            this.className += " active";
            selectResolution(this.value)
        }
        res1920.style.display = "block"
        res1920.style.fontSize = "20px"
        res1920.style.margin = "auto"
        res1920.setAttribute("class", "dropdown-btn")
        res1920.onclick = function() {
            let header = document.getElementById("resolutionsList");
            let btns = header.getElementsByClassName("dropdown-btn");
            for (let i = 0; i < btns.length; i++) {
                if (btns[i].className == "dropdown-btn active") btns[i].className = "dropdown-btn"
            }
            this.className += " active";
            selectResolution(this.value)
        }
        res3840.style.display = "block"
        res3840.style.fontSize = "20px"
        res3840.style.margin = "auto"
        res3840.setAttribute("class", "dropdown-btn")
        res3840.onclick = function() {
            let header = document.getElementById("resolutionsList");
            let btns = header.getElementsByClassName("dropdown-btn");
            for (let i = 0; i < btns.length; i++) {
                if (btns[i].className == "dropdown-btn active") btns[i].className = "dropdown-btn"
            }
            this.className += " active";
            selectResolution(this.value)
        }
        resolutionList.appendChild(res640)
        resolutionList.appendChild(res1280)
        resolutionList.appendChild(res1920)
        resolutionList.appendChild(res3840)

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

async function startCamera() {
    try {
        let selectedCamera = (CortexDecoderWeb.CDCamera.getConnectedCameras().find((camera)=>camera.label == document.getElementById("cameradevices").value))
        await setCameraDevice(selectedCamera);

    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

async function startCameraPreview() {
    try {
        await CortexDecoderWeb.CDCamera.startPreview(getResult);
        videoResolution = await CortexDecoderWeb.CDCamera.getResolution();
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

function stopCamera() {
    try {
        CortexDecoderWeb.CDCamera.stopCamera();
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

function stopCameraPreview() {
    try {
        CortexDecoderWeb.CDCamera.stopPreview();
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

function startDecoding() {
    try {
        CortexDecoderWeb.CDDecoder.decoding = true;
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

function stopDecoding() {
    try {
        CortexDecoderWeb.CDDecoder.decoding = false;
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

async function selectResolution(resolution) {
    try {
        resetElements()
        await CortexDecoderWeb.CDCamera.setResolution(resolution)
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

function getduplicateFilteringList() {
    let duplicateDelays = [0, 5000, 10000]
    try {
        let duplicateFilteringList = document.getElementById("duplicateFilteringList");
        for (let i of duplicateDelays) {
            let opt = document.createElement("button");
            opt.value = i;
            opt.innerHTML = i / 1000 + " sec delay";
            opt.style.display = "block"
            opt.style.fontSize = "20px"
            opt.style.margin = "auto"
            opt.setAttribute("class", "dropdown-btn")
            opt.onclick = function() {
                let header = document.getElementById("duplicateFilteringList");
                let btns = header.getElementsByClassName("dropdown-btn");
                for (let i = 0; i < btns.length; i++) {
                    if (btns[i].className == "dropdown-btn active") btns[i].className = "dropdown-btn"
                }
                this.className += " active";
                setDuplicateFilterDuration(this.value)
            }
            duplicateFilteringList.appendChild(opt)
        }
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

function setDuplicateFilterDuration(duration) {
    console.log(parseInt(duration))
    try {
        CortexDecoderWeb.CDDecoder.setDuplicateDelay(parseInt(duration))
    } catch (err) {
        if (isMobile) alert(err)
        else console.log(err);
    }
}

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").onclick = () => {
        closeNav()
    }
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleDropdown(e, dropdownId) {
    if (e.target.className == "dropdown-btn") e.target.className += " active";
    else e.target.className = "dropdown-btn"
    e.stopImmediatePropagation();
    let dropdownContent = document.getElementById(dropdownId)
    if (dropdownId == "focusModeList") {
        if (document.getElementById("toggleCamera").value == 0) alert("Start Camera Preview First")
    }
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function stopPropogation(e) {
    e.stopImmediatePropagation()
}

function switchVideoSize() {
    if (document.getElementById("video").width == 360) {
        document.getElementById("video").width = 640
        document.getElementById("video").height = 360
    } else {
        document.getElementById("video").width = 360
        document.getElementById("video").height = 640
    }
}

function iPhone() {
    return [
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
}

window.addEventListener("orientationchange", function() {
    if (iPhone()) {
        screenOrient.angle = window.orientation;
    } else {
        screenOrient = (screen.orientation || {}) || screen.mozOrientation || screen.msOrientation;
    }
    switchVideoSize()
}, false);

document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);
});

window.addEventListener('restartCamera', async() => {
    console.log("Restart Camera from client app");
    await startCamera()
    await startCameraPreview()
});