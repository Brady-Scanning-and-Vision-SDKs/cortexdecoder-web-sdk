/**
 * @private
 * This object provides the structure of a rectangle. This object is used to set ROI dimensions and also for barcode coordinates.
 */
export declare class CDRect {
    TopLeft: {
        X: number;
        Y: number;
    };
    TopRight: {
        X: number;
        Y: number;
    };
    BottomRight: {
        X: number;
        Y: number;
    };
    BottomLeft: {
        X: number;
        Y: number;
    };
    constructor();
}
