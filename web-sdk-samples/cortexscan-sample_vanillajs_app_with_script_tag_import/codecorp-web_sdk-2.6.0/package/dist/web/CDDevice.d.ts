/**
 * @class
 * @description This class is used to enable or disable beep and vibration of the device on decode
 */
declare class CDDevice {
    #private;
    constructor();
    /**
     * This API only works in browser JavaScript and not on NodeJS. Plays a beep for every successful decode when enabled
     *  @param value Boolean value to enable or disable beep
     */
    set audio(value: boolean);
    get audio(): boolean;
    get audioContext(): AudioContext;
    /**
     * @description This API only works in browser JavaScript and not on NodeJS. Vibrates for every successful decode when enabled
     * @param value Boolean value to enable or disable vibration
     */
    set vibration(value: boolean);
    get vibration(): boolean;
}
declare const _default: CDDevice;
export default _default;
