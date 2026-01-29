import { license_status } from "./CDLicenseStatus";
export type LicenseDesc = {
    status: license_status;
    message: string;
    expirationDate: string;
    rawExpirationDate: Date;
};
export type LicenseResult = {
    [key: number]: LicenseDesc;
};
/**
 * @private
 * This is the default codes for license status. This object is returned upon activation of license depending on the return code from the decoder.
 */
export declare const license_result: LicenseResult;
