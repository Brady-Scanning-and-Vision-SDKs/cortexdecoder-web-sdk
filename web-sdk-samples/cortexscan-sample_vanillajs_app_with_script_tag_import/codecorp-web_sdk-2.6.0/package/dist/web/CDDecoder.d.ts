import { CDRect } from '../enums/CDRect';
import { CDCustomMode, CDPreprocessorType, CDSecurityLevel, CDCharacterEncoding } from '../enums/CDDecoderEnums';
import CDResult from './CDResult';
type DecodeMethodInput = HTMLImageElement | String | HTMLVideoElement | HTMLCanvasElement | Blob | ImageData | ImageBitmap | OffscreenCanvas;
/**
 * @class
 * @description This class consists of APIs to set various decoder settings and to access the decoder
 */
declare class CDDecoder {
    #private;
    CDRect: CDRect;
    constructor();
    /**
     *  @description This method initializes the native decoder library and sets the handle
     *  @param url - URL to find the WASM file
     */
    init(url?: string): Promise<number>;
    /**
     * @description This method returns the current decoder version used in the SDK
     * @returns This returns a promise which resolves with the decoder version as a string
     */
    decoderVersion(): Promise<string>;
    /**
     * @description This method returns the version number for the Cortex Decoder package
     * @returns This returns a promise which resolves with the decoder version as a string
     */
    libraryVersion(): Promise<string>;
    /**
     * @description If value > 0 and exactMatch is false : The decoder can decode a maximum of number of codes specified in the value in the image. It can decode lesser too. But if exact match is true, decoder must decode the specified value number of codes in the image.
     * @param value This parameter is set to max barcodes the decoder can decode in the image if the second parameter is false. Otherwise, this value denotes the exact number of barcodes the decoder must decode in the image.
     * @param {boolean} exactMatch This value can be true or false.
     *
     */
    setBarcodesToDecode(value: number, exactMatch: boolean): Promise<number>;
    getBarcodesToDecode(): {
        value: number;
        exactMatch: Boolean;
    };
    /**
     * @description This property is used to set the value of time in milliseconds the decoder should spend decoding each code in the image. Setting 0 sets it to default.
     * @param value - Maximum time in milliseconds the decoder needs to spend on decoding a code
     */
    set timeLimit(value: number);
    get timeLimit(): number;
    /**
     * @description This mode can be used to define the percentage of distance from the center where the code can be found.
     * For example, value 0 would look for codes that is located exactly at the center of the image or preview. And a value 10 will look for the code in the entire image or preview.
     *
     * @param value - Input can be a value between 0 to 10
     */
    set picklistMode(value: number);
    get picklistMode(): number;
    /**
     * @description This mode is called multiresolution mode and is used to decode codes which are overexposed or underexposed better
     * @param mode THe input can be any value in the enum CDCustomMode.
     */
    set customMode(mode: CDCustomMode);
    /**
     * @returns A value of type CDCustomMode enum
     */
    get customMode(): CDCustomMode;
    /**
     * @description This method is used to set the preprocessor type and is used to decode blurry images better.
     * @param type The value is of type CDPreprocessorType enum
     */
    set preprocessType(type: CDPreprocessorType);
    /**
     * @returns A value of type CDPreprocessorType enum
     */
    get preprocessType(): CDPreprocessorType;
    /**
      * @description API to set the security level of the decoder. Defines the aggressiveness of the decoder to decode codes. Higher aggressiveness can mean lower accuracy and vice versa.
      * @param value Value is of type CDSecurityLevel enum
      */
    set securityLevel(value: CDSecurityLevel);
    /**
     * @returns Value of type CDSecurityLevel enum
     */
    get securityLevel(): CDSecurityLevel;
    /**
     * @description API to set the character encoding type.
     * @param value Vallue of type CDCharacterEncoding which defines the type of encoding
     * @returns A value of type CDCharacterEncoding
     */
    set characterSetEncoding(value: CDCharacterEncoding);
    /**
     * @returns Value of type CDCharacterEncoding enum
     */
    get characterSetEncoding(): CDCharacterEncoding;
    /**
     * @description This API is used to specify the exact location of the code in the image or frame. The decoder looks for the code only in this region. The value given is preview coordinates and not video coordinates
     * @param ROI This parameter needs to be an object of class CDRect which defines the 4 corners of the region of interest
     * @param ensureCorners This is a boolean value which specifies if the code can be decoded if its partially inside the region.
     */
    setRegionOfInterest(ROI: CDRect, ensureCorners: boolean): Promise<void>;
    /**
     * @description Get the specified region of interest
     * @returns Promise resolving to a CDRect object
     */
    getRegionOfInterest(): Promise<CDRect>;
    /**
     * @description This API is used to start or stop the decoder.
     * @param decode A boolean value to turn on or off the decoder.
     */
    set decoding(decode: boolean);
    /**
     * @returns A boolean value that denotes that denotes the current state of decoder.
     */
    get decoding(): boolean;
    /**
     * @description This API is used to enable or disable codewords for error correction to be included in the result
     * @param enable Boolean value to enable or disable codewords
     */
    set codeWords(enable: boolean);
    /**
     * @returns Boolean value that returns the codewords setting
     */
    get codeWords(): boolean;
    set multiCodeOutputByPriority(enable: boolean);
    get multiCodeOutputByPriority(): boolean;
    set multiFrameDecoding(enable: boolean);
    get multiFrameDecoding(): boolean;
    /**
    *
    *@description This API is set to prevent decoding the same barcode more than once
    * @param filter_time interval in milliseconds.
    */
    setDuplicateDelay(filter_time: number): void;
    /**
     *
     * @returns Returns the interval set in milliseconds
     */
    getDuplicateDelay(): number;
    /**
     *
     * @description This method takes the image URL as the input and returns an object of CDResult class with filled inputs. Accepts an image source, which can be an HTMLImageElement, SVGImageElement, HTMLVideoElement, HTMLCanvasElement, Blob, ImageData, ImageBitmap, or OffscreenCanvas object.
     * @param {DecodeMethodInput} image  image to be decoded
     * @param {Number} previewWidth Width resolution of preview
     * @param {Number} previewHeight Height resolution of preview
     * @returns {CDResult[]} Array of objects of CDResult class
     */
    decode(image: DecodeMethodInput, previewWidth?: number, previewHeight?: number): Promise<CDResult[]>;
}
declare const _default: CDDecoder;
export default _default;
