import CDResult from './CDResult';
import { CDResolution, CDPosition, CDFocus, CDTorch } from '../enums/CDCameraEnums';
/**
 * @class
 * @description This class consists of APIs to access the device camera and change the settings of these camera inputs.
 */
declare class CDCamera {
    #private;
    listeners: {};
    constructor();
    /**
     * @param ref This can be a HTML canvas or HTML video. Leaving this blank will look for HTML video element in the DOM
     * @description Initializes the CDCamera class
     */
    init(videoRef?: HTMLVideoElement, canvasRef?: HTMLCanvasElement): Promise<void>;
    /**
     * Check if the given parameter is a device ID or device label and choose the device from the array of all devices.
     * @description Set the selected video input device with default constraints.
     * @param device - Device label or id returned by getConnectedCameras() API
     */
    setCamera(device: MediaDeviceInfo): Promise<void>;
    /**
     * @description Set the camera orientation using CDPosition enum
     * @param value - Select the orientation using CDPosition enum
     */
    setCameraPosition(value: CDPosition, autoSwitch: boolean): Promise<void>;
    /**
     * @description Get access to the camera resource and start the camera.
     *
     */
    startCamera(): Promise<void>;
    /**
     * @description Stop the camera and release the resource
     */
    stopCamera(): Promise<void>;
    /**
     * @description Get the selected camera orientation and the autoSwitch status
     */
    getCameraPosition(): {
        position: CDPosition;
        autoSwitch: Boolean;
    } | string;
    /**
     * @description Get list of all the video input devices connected
     */
    getConnectedCameras(): MediaDeviceInfo[];
    /**
     * @description Returns the selected video input device
     */
    getCamera(): MediaDeviceInfo;
    /**
    * @description Setting to enable or disable creation of frames.
    * @param videoCapture - Start or Stop the frame creation from the video stream
    */
    setVideoCapturing(videoCapture: boolean): Promise<void>;
    /**
     * @description Get the status of video capture. No decoding happens if videoCapturing is set to false
     */
    getVideoCapturing(): boolean;
    /**
     * @description Takes the callback function as parameter and starts the video preview with selected video input device and returns result for each frame decoded. Can be called after startCamera API or can be called
     * directly
     * @param getResult A callback function that will be populated with CDResult objects
     *
     */
    startPreview(getResult: (arg0: CDResult[]) => any): Promise<void>;
    /**
     * @description Stops the current preview when called but camera is still live
     */
    stopPreview(): Promise<void>;
    /**
     * @description API to set the desired resolution. If resolution not available, the closest resolution is set
     * @param resolution Input from CDResolution enum
    */
    setResolution(resolution: CDResolution): Promise<void>;
    /**
     * @description Enable barcode highlight on successful decode
     */
    setHighlightBarcodes(highlight: Boolean): Promise<void>;
    /**
     * @description Get the barcode highlight setting
     */
    getHighlightBarcodes(): Promise<Boolean>;
    /**
     * @description Returns the selected resolution. It can be a CDResolution enum value if the preview is ON. Otherwise it returns previously selected resolution.
     */
    getResolution(): Promise<CDResolution>;
    /**
     * @description Sets the desired focus value as defined in CDFocus
     * @param value Input value from CDFocus
     */
    setFocus(value: CDFocus): void;
    /**
     * @description Returns the selected focus as CDFocus enum
     */
    getFocus(): CDFocus;
    /**
     * @description Returns false if manual focus is not supported. Else returns true
     */
    isFocusSupported(): boolean;
    /**
     * @description Change the default focus parameters for CDFocus. Call getFixedFocusRange() API to get CDFocus. Change the near and far values and set the object as parameter to this API.
     * @param CDfocusObj Set the desired near and far value to set the focus range
     * @deprecated
     */
    setFixedFocusRange(CDfocusObj: {
        near: number;
        far: number;
    }): void;
    /**
     * @description This API is called to get the CDfocusObj
     * @deprecated
     */
    getFixedFocusRange(): {
        min: number;
        max: number;
        step: number;
    };
    /**
     * @description API to set flash
     * @param {CDTorch} isTorchNeeded
     */
    setTorchMode(isTorchNeeded: CDTorch): void;
    /**
     * @description Returns the current torch setting
     * @returns {boolean} The current setting for torch is returned
     */
    getTorchMode(): CDTorch;
    /**
     * @description Check if torch settings are supported
     * @returns {boolean} True or false
     */
    isTorchSupported(): boolean;
    /**
     * @description Check if Zoom settings are supported
     * @returns {boolean} True or false
     */
    isZoomSupported(): boolean;
    /**
     * @description Returns the minimum and maximum range for zoom setting.
     * @returns Returns the zoom capability of the device selected
     */
    getSupportedZoomRange(): {
        min: number;
        max: number;
        step: number;
    };
    /**
     * @description Set the desired zoom. Call getSupportedZoomRange() API to get the max and min values
     * @param value Desired zoom value
     */
    setZoom(value: number): void;
    /**
     * @description Get the current zoom value
     */
    getZoom(): number;
    /**
     * @description Set the desired crop. Value between 0 and 10 can be passed
     * @param value An number value between 0 and 10
     */
    setCrop(value: number): void;
    /**
     * @description Get the current crop value
     */
    getCrop(): number;
}
declare const _default: CDCamera;
export default _default;
