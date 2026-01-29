import { license_status } from '../enums/CDLicenseStatus';
import { CDRect } from '../enums/CDRect';
import { CDDecodeStatus } from '../enums/CDResultEnums';
/**
 * This method provides structure for Result object which will be populated and returned on successful decode
 */
declare class CDResult {
    barcodeData: string;
    symbology: string;
    status: CDDecodeStatus;
    barcodeCoordinates: CDRect;
    decodeTime: number;
    totalDecodeTime: number;
    codewords: CDCodewords;
    verification: CDVerification;
    licenseResult: license_status;
    image_buffer: ImageData;
    constructor();
}
declare class CDCodewords {
    numberOfCodewords: number;
    numberOfShortCodewordsBlock: number;
    numberOfLongCodewordsBlock: number;
    numberOfDataCodewords: number;
    numberOfErrorCodewords: number;
    eccBefore: Number[];
    eccAfter: Number[];
    constructor();
}
declare class CDVerification {
    gradeFinal: number;
    gradeReferenceDecode: number;
    gradeContrast: number;
    scoreContrast: number;
    gradeModulation: number;
    gradeReflectanceMargin: number;
    gradeFixedPatternDamage: number;
    gradeAxialNonuniformity: number;
    scoreAxialNonuniformity: number;
    gradeGridNonuniformity: number;
    scoreGridNonuniformity: number;
    gradeUnusedErrorCorrect: number;
    scoreUnusedErrorCorrect: number;
    apertureSizeUsed: number;
    constructor();
}
export default CDResult;
