import { CDVerifier } from '../enums/performanceFeatures';
import { CDDPM, CDDataParsing, CDPerformanceType } from "../enums/performanceFeatures";
/**
 * @class
 * @description This class is used to set the performance settings for the decoder
 */
declare class CDPerformanceFeatures {
    #private;
    constructor();
    get stringFromPerformanceType(): CDPerformanceType;
    /**
    * @description Property to enable or disable low contrast decoding
    * @param lowContrast - Boolean value to enable or disable lowContrast decoding
    *
    */
    set lowContrast(lowContrast: boolean);
    /**
     * @returns The low contrast decoding setting set
     */
    get lowContrast(): boolean;
    /**
     * @description This API is used to set Data Parsing.
     * @param parsing - Value of enum CDDataParsing
     * @param configString -configuration string.
     */
    setDataParsing(parsing: CDDataParsing, configString: string): Promise<void>;
    /**
     * @description This API is called to get the Data Parsing type set
     * @returns Promise resolving with a value of CDDataParsing enum
     */
    getDataParsing(): Promise<CDDataParsing>;
    /**
     * @description This API is called to retrieve the configuration string set for data parsing
     * @returns Returns the string that is set for data parsing.
     */
    getConfigStringForDataParsing(): Promise<string>;
    /**
     *
     * @param enable Boolean value to enable or disable data formatting
     * @param formatString Format string for data formatting
     */
    setDataFormatting(enable: boolean, formatString: string): Promise<void>;
    /**
     *
     * @returns Boolean value denoting data formatting enabled or disabled
     */
    getDataFormatting(): Promise<boolean>;
    /**
     * @description API to retrieve the Data Formatting configuration string
     * @returns Data Formatting String
     */
    getConfigStringForDataFormatting(): Promise<string>;
    /**
     * @description Method to set the DPM mode
     * @param {CDDPM} dpm Value of type CDDEPM enum
     */
    set DPMMode(dpm: CDDPM);
    /**
     * @returns Value of type CDDPM enum
     */
    get DPMMode(): CDDPM;
    /**
     * @description Enables verification for decoding. Adds the verification results in the decode results
     * @param type Value of type CDVerifier enum
     */
    set verification(type: CDVerifier);
    /**
     * @returns Value of type CDVerifier enum
     */
    get verification(): CDVerifier;
}
declare const _default: CDPerformanceFeatures;
export default _default;
