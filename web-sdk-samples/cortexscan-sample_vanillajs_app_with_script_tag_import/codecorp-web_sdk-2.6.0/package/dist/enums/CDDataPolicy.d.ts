export type DataPolicySettingsType = {
    collectData: boolean;
    licenseString: string;
    policyString: string;
    apiKeyStr: string;
    urlStr: string;
    Version: string;
    DataCollectionPermissions: DataCollectionPermissionsType;
    BatchModeAndSamplingDefs: {
        batchModeDefs: batchModeDefsType;
        SamplingDefs: SamplingDefsType;
    };
    BatchModeValues: string;
    SamplingValues: string;
};
export type DataCollectionPermissionsType = {
    license: boolean;
    lib_info: boolean;
    app_info: boolean;
    os_info: boolean;
    hw_info: boolean;
    host_info: boolean;
    lib_config: boolean;
    app_config: boolean;
    os_config: boolean;
    hw_config: boolean;
    host_config: boolean;
    optic: boolean;
    display: boolean;
    battery: boolean;
    location: boolean;
    conn: boolean;
    log: boolean;
    output: boolean;
    input: boolean;
};
export type batchModeDefsType = {
    CountBased: boolean;
    TimeBased: boolean;
    Unit1: boolean;
    Unit10: boolean;
    Unit100: boolean;
    Unit1000: boolean;
    UnitSec: boolean;
    UnitMins: boolean;
    UnitHours: boolean;
    UnitDays: boolean;
};
export type SamplingDefsType = {
    OnDecodeOnly: boolean;
    OnLicenseActivateOnly: boolean;
    OnDecodeOrLicenseActivate: boolean;
    Unit1: boolean;
    Unit100: boolean;
    UnitMins: boolean;
    UnitHours: boolean;
};
export declare const DataPolicySettings: DataPolicySettingsType;
export default DataPolicySettings;
