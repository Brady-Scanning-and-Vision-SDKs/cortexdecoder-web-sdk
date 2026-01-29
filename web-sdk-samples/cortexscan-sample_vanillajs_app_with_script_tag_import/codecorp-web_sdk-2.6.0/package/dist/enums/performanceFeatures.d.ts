export declare enum CDPerformanceType {
    UNDEFINED = 0,
    LOW_CONTRAST = 1,
    MULTI_CODE = 2,
    DPM = 3,
    DL_PARSING = 4,
    GS1_PARSING = 5,
    UDI_PARSING = 6,
    VERIFIER = 7
}
export declare enum CDDataParsing {
    DISABLE = 0,
    DL_PARSING = 1,
    STR_MATCH_REPLACE = 4,
    GS1_PARSNG = 5,
    UDI_PARSING = 6,
    ISO_PARSING = 7
}
export declare enum CDDPM {
    DISABLE = 0,
    DOTPEEN_DARK_ON_LIGHT = 1,
    DOTPEEN_LIGHT_ON_DARK = 2,
    LASER_CHEM_ETCH = 3,
    DOTPEEN_AND_ETCH = 4
}
export declare enum CDVerifier {
    DISABLE = 0,
    ISO15415 = 1,
    AIMDPM = 2
}
