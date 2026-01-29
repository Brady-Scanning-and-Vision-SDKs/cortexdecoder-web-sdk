import { license_status } from '../enums/CDLicenseStatus';
import { LicenseResult } from "../enums/CDLicenseResult";
import { CDPerformanceType } from '../enums/performanceFeatures';
/**
 * @class
 * @description This class contains APIs for activation of the license for the decoder
 */
declare class CDLicense {
    #private;
    constructor();
    /**
     * @description This API is used to set the EDK license key to the decoder to activate the license
     * @param license_string - Unique EDK license string
     * @returns CDLicenseResult
    */
    activateLicense(license_string: string, qrlic?: boolean): Promise<LicenseResult | undefined>;
    /**
     * @description Returns a list of licensed symbologies
     * @returns Returns an array of string of all licensed symbologies
     */
    getLicensedSymbologies(): Promise<string[]>;
    /**
     * @description Returns a list of licensed extended symbologies
     * @returns Returns an array of string of all licensed symbologies
     */
    getLicensedExtendedSymbologies(): Promise<string[]>;
    /**
     * @description Returns a list of licensed performance features
     * @returns Returns an array of CDPerformanceType
     */
    getLicensedPerformanceFeatures(): Promise<CDPerformanceType[]>;
    /**
     * This method is used to check if the license is activated. Handle is 1 only when the license is successfully activated
     */
    checkLicense(): license_status;
}
declare const _default: CDLicense;
export default _default;
