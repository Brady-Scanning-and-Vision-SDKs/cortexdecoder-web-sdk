import { DataMatrixPolarity, QRCodePolarity, AztecPolarity, DotCodePolarity, GridMatrixPolarity, HongKong2Of5Checksum, IATA2Of5Checksum, Interleaved2Of5Checksum, Matrix2Of5Checksum, Straight2Of5Checksum, NEC2Of5Checksum, CodabarChecksum, Code11Checksum, Code39Checksum, MSIPlesseyChecksum } from '../enums/CDSymbologyEnums';
import { NativeLib } from "../PrivateClasses/nativeLibManagerForNode";
/**
 * @class
 */
declare class CDSymbology {
    #private;
    constructor();
    protected getNativeLib(): NativeLib;
    set sendAIMSymbID(enable: boolean);
    get sendAIMSymbID(): boolean;
    /**
     * This getter returns a {@link QR} class <br>
     * This will be called as CDSymbology.QR.propertyName = ...
     */
    get QR(): QR;
    /**This getter returns a {@link DataMatrix} class <br>
     * This will be called as CDSymbology.DataMatrix.propertyName = ...
     */
    get DataMatrix(): DataMatrix;
    /**This getter returns a {@link Aztec} class <br>
     * This will be called as CDSymbology.Aztec.propertyName = ...
     */
    get Aztec(): Aztec;
    /**This getter returns a {@link MaxiCode} class <br>
     * This will be called as CDSymbology.MaxiCode.propertyName = ...
     */
    get MaxiCode(): MaxiCode;
    /**This getter returns a {@link DotCode} class <br>
     * This will be called as CDSymbology.DotCode.propertyName = ...
     */
    get DotCode(): DotCode;
    /**This getter returns a {@link GridMatrix} class <br>
     * This will be called as CDSymbology.GridMatrix.propertyName = ...
     */
    get GridMatrix(): GridMatrix;
    /**This getter returns a {@link HanXinCode} class <br>
     * This will be called as CDSymbology.HanXinCode.propertyName = ...
     */
    get HanXinCode(): HanXinCode;
    /**This getter returns a {@link HongKong2of5} class <br>
     * This will be called as CDSymbology.HongKong2of5.propertyName = ...
     */
    get HongKong2of5(): HongKong2of5;
    /**This getter returns a {@link IATA2of5} class <br>
     * This will be called as CDSymbology.IATA2of5.propertyName = ...
     */
    get IATA2of5(): IATA2of5;
    /**This getter returns a {@link Interleaved2of5} class <br>
     * This will be called as CDSymbology.Interleaved2of5.propertyName = ...
     */
    get Interleaved2of5(): Interleaved2of5;
    /**This getter returns a {@link Matrix2of5} class <br>
     * This will be called as CDSymbology.Matrix2of5.propertyName = ...
     */
    get Matrix2of5(): Matrix2of5;
    /**This getter returns a {@link Straight2of5} class <br>
     * This will be called as CDSymbology.Straight2of5.propertyName = ...
     */
    get Straight2of5(): Straight2of5;
    /**This getter returns a {@link NEC2of5} class <br>
     * This will be called as CDSymbology.NEC2of5.propertyName = ...
     */
    get NEC2of5(): NEC2of5;
    /**This getter returns a {@link Codabar} class <br>
     * This will be called as CDSymbology.Codabar.propertyName = ...
     */
    get Codabar(): Codabar;
    /**This getter returns a {@link Code11} class <br>
     * This will be called as CDSymbology.Code11.propertyName = ...
     */
    get Code11(): Code11;
    /**This getter returns a {@link Code32} class <br>
     * This will be called as CDSymbology.Code32.propertyName = ...
     */
    get Code32(): Code32;
    /**This getter returns a {@link Code39} class <br>
     * This will be called as CDSymbology.Code39.propertyName = ...
     */
    get Code39(): Code39;
    /**This getter returns a {@link Code49} class <br>
     * This will be called as CDSymbology.Code49.propertyName = ...
     */
    get Code49(): Code49;
    /**This getter returns a {@link Code93} class <br>
     * This will be called as CDSymbology.Code93.propertyName = ...
     */
    get Code93(): Code93;
    /**This getter returns a {@link Code128} class <br>
     * This will be called as CDSymbology.Code128.propertyName = ...
     */
    get Code128(): Code128;
    /**This getter returns a {@link CompositCode} class <br>
     * This will be called as CDSymbology.CompositeCode.propertyName = ...
     */
    get CompositeCode(): CompositeCode;
    /**This getter returns a {@link CodablockF} class <br>
     * This will be called as CDSymbology.CodablockF.propertyName = ...
     */
    get CodablockF(): CodablockF;
    /**This getter returns a {@link EAN13} class <br>
     * This will be called as CDSymbology.EAN13.propertyName = ...
     */
    get EAN13(): EAN13;
    /**This getter returns a {@link UPCA} class <br>
     * This will be called as CDSymbology.UPCA.propertyName = ...
     */
    get UPCA(): UPCA;
    /**This getter returns a {@link EAN8} class <br>
     * This will be called as CDSymbology.EAN8.propertyName = ...
     */
    get EAN8(): EAN8;
    /**This getter returns a {@link UPCE} class <br>
     * This will be called as CDSymbology.UPCE.propertyName = ...
     */
    get UPCE(): UPCE;
    /**This getter returns a {@link Trioptic} class <br>
     * This will be called as CDSymbology.Trioptic.propertyName = ...
     */
    get Trioptic(): Trioptic;
    /**This getter returns a {@link Telepen} class <br>
     * This will be called as CDSymbology.Telepen.propertyName = ...
     */
    get Telepen(): Telepen;
    /**This getter returns a {@link Plessey} class <br>
     * This will be called as CDSymbology.Plessey.propertyName = ...
     */
    get Plessey(): Plessey;
    /**This getter returns a {@link PDF417} class <br>
     * This will be called as CDSymbology.PDF417.propertyName = ...
     */
    get PDF417(): PDF417;
    /**This getter returns a {@link MSIPlessey} class <br>
     * This will be called as CDSymbology.MSIPlessey.propertyName = ...
     */
    get MSIPlessey(): MSIPlessey;
    /**This getter returns a {@link GS1Databar} class <br>
     * This will be called as CDSymbology.GS1Databar.propertyName = ...
     */
    get GS1Databar(): GS1Databar;
    /**This getter returns a {@link AustraliaPost} class <br>
     * This will be called as CDSymbology.AustraliaPost.propertyName = ...
     */
    get AustraliaPost(): AustraliaPost;
    /**This getter returns a {@link CanadaPost} class <br>
     * This will be called as CDSymbology.CanadaPost.propertyName = ...
     */
    get CanadaPost(): CanadaPost;
    /**This getter returns a {@link DutchPost} class <br>
     * This will be called as CDSymbology.DutchPost.propertyName = ...
     */
    get DutchPost(): DutchPost;
    /**This getter returns a {@link JapanPost} class <br>
     * This will be called as CDSymbology.JapanPost.propertyName = ...
     */
    get JapanPost(): JapanPost;
    /**This getter returns a {@link KoreaPost} class <br>
     * This will be called as CDSymbology.KoreaPost.propertyName = ...
     */
    get KoreaPost(): KoreaPost;
    /**This getter returns a {@link RoyalMail} class <br>
     * This will be called as CDSymbology.RoyalMail.propertyName = ...
     */
    get RoyalMail(): RoyalMail;
    /**This getter returns a {@link UPU} class <br>
     * This will be called as CDSymbology.UPU.propertyName = ...
     */
    get UPU(): UPU;
    /**This getter returns a {@link USPSIntelligent} class <br>
     * This will be called as CDSymbology.USPSIntelligent.propertyName = ...
     */
    get USPSIntelligent(): USPSIntelligent;
    /**This getter returns a {@link USPSPlanet} class <br>
     * This will be called as CDSymbology.USPSPlanet.propertyName = ...
     */
    get USPSPlanet(): USPSPlanet;
    /**This getter returns a {@link USPSPostnet} class <br>
     * This will be called as CDSymbology.USPSPostnet.propertyName = ...
     */
    get USPSPostnet(): USPSPostnet;
}
/**
 * @class
 */
declare class QR {
    #private;
    constructor(native: NativeLib);
    /**
     * @description This method enables or disables the QR code symbologies
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable QR</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to enable or disable model1 property of QR
     * This method will be called as CDSymbology.QR.model1 = true
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable QR Model1 property</td></tr>
     * </tbody>
     * </table>
     * @param {string | number | boolean} value
     */
    set model1(value: boolean);
    get model1(): boolean;
    /**
     * This method is used to set polarity property of QR
     * <table>
     * <tr><th>Polarity</th><th>Code</th></tr>
     * <tr><td>0</td><td>Polarity Either</td></tr>
     * <tr><td>1</td><td>Polarity Dark on Light</td></tr>
     * <tr><td>-1</td><td>Polarity Light on Dark</td></tr>
     * </table>
     * This method will be called as CDSymbology.QR.polarity = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set polarity code</td></tr>
     * </tbody>
     * </table>
     * @param {QRCodePolarity} value
     */
    set polarity(value: QRCodePolarity);
    get polarity(): QRCodePolarity;
    /**
     * This method is used to enable or disable the mirror property of QR
     * This method will be called as CDSymbology.QR.mirror = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable QR mirrorDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set mirror(value: boolean);
    get mirror(): boolean;
    /**
     * This method is used to enable or disable the micro property of QR
     * This method will be called as CDSymbology.QR.micro = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable QR micro property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set micro(value: boolean);
    get micro(): boolean;
}
/**
 * @class
 */
declare class DataMatrix {
    #private;
    constructor(native: NativeLib);
    /**
     * This method enables or disables the DataMatrix code symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable DataMatrix</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method sets the polarity property of DataMatrix symbology
     * <table>
     * <tr><th>Polarity</th><th>Code></th></tr>
     * <tr><td>0</td><td>Polarity Either</td></tr>
     * <tr><td>1</td><td>Polarity Dark on Light</td></tr>
     * <tr><td>-1</td><td>Polarity Light on Dark</td></tr>
     * </table>
     * This method will be called as CDSymbology.DataMatrix.polarity = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set polarity code</td></tr>
     * </tbody>
     * </table>
     *
     * Inputs can be 0, 1, -1
     * @param {number} value
     */
    set polarity(value: DataMatrixPolarity);
    get polarity(): DataMatrixPolarity;
    /**
     * This method enables mirror property of DataMatrix
     * This method will be called as CDSymbology.DataMatrix.mirror = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable DataMatrix mirrorDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set mirror(value: boolean);
    get mirror(): boolean;
    /**
     * This method enables the extendedRect property of DataMatrix symbology
     * This method will be called as CDSymbology.DataMatrix.extendedRect = false
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable DataMatrix ExtendedRect property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set rectangular(value: boolean);
    get rectangular(): boolean;
    /**
     * This method enables the extendedRect property of DataMatrix symbology
     * This method will be called as CDSymbology.DataMatrix.extendedRect = false
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable DataMatrix ExtendedRect property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set extendedRect(value: boolean);
    get extendedRect(): boolean;
}
/**
 * @class
 */
declare class Aztec {
    #private;
    constructor(native: NativeLib);
    /**
     * This method enables or disables the Aztec code symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Aztec</td></tr>
     * </tbody>
     * </table>
     * @param {string | number | boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method sets the polarity of Aztec symbology
     * <table>
     * <tr><th>Polarity</th><th>Code></th></tr>
     * <tr><td>0</td><td>Polarity Either</td></tr>
     * <tr><td>1</td><td>Polarity Dark on Light</td></tr>
     * <tr><td>-1</td><td>Polarity Light on Dark</td></tr>
     * </table>
     * This method will be called as CDSymbology.Aztec.polarity = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set polarity code</td></tr>
     * </tbody>
     * </table>
     * @param {number} value
     */
    set polarity(value: AztecPolarity);
    get polarity(): AztecPolarity;
    /**
     * This method enables the mirror property of Aztec symbology
     * This method will be called as CDSymbology.Aztec.mirror = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Aztec mirrorDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set mirror(value: boolean);
    get mirror(): boolean;
}
/**
 * @class
 */
declare class MaxiCode {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable the MaxiCode symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable MaxiCode</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class DotCode {
    #private;
    constructor(native: NativeLib);
    /**
     * This method enables or disables the Dotcode symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable DotCode</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set the polarity for DotCode symbology
     * <table>
     * <tr><th>Polarity</th><th>Code></th></tr>
     * <tr><td>0</td><td>Polarity Either</td></tr>
     * <tr><td>1</td><td>Polarity Dark on Light</td></tr>
     * <tr><td>-1</td><td>Polarity Light on Dark</td></tr>
     * </table>
     * This method will be called as CDSymbology.DotCode.polarity = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set polarity code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, -1
     * @param {number} value
     */
    set polarity(value: DotCodePolarity);
    get polarity(): DotCodePolarity;
    /**
     * This method is used to enable the mirror property of Dotcode symbology
     * This method will be called as CDSymbology.DotCode.mirror = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable DotCode mirrorDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set mirror(value: boolean);
    get mirror(): boolean;
}
/**
 * @class
 */
declare class GridMatrix {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable and disable GridMatrix symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable GridMatrix</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to enable or disable the polarity property of GridMatrix symbology
     * <table>
     * <tr><th>Polarity</th><th>Code></th></tr>
     * <tr><td>0</td><td>Polarity Either</td></tr>
     * <tr><td>1</td><td>Polarity Dark on Light</td></tr>
     * <tr><td>-1</td><td>Polarity Light on Dark</td></tr>
     * </table>
     * This method will be called as CDSymbology.GridMatrix.polarity = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set polarity code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, -1
     * @param {number} value
     */
    set polarity(value: GridMatrixPolarity);
    get polarity(): GridMatrixPolarity;
    /**
     * This method is used to set the mirror property of GridMatrix symbology
     * This method will be called as CDSymbology.GridMatrix.mirror = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable GridMatrix mirrorDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set mirror(value: boolean);
    get mirror(): boolean;
}
/**
 * @class
 */
declare class HanXinCode {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable HanXinCode symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable HanXinCode</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class HongKong2of5 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable HongKong2of5 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable HongKong2of5</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set the checksum for HongKong2of5 symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.HongKong2of5.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * @param {HongKong2Of5Checksum} value
     */
    set checksum(value: HongKong2Of5Checksum);
    get checksum(): HongKong2Of5Checksum;
}
/**
 * @class
 */
declare class IATA2of5 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable IATA2of5 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable IATA2of5</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set checksum for IATA2of5 symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.IATA2of5.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2
     * @param {number} value
     */
    set checksum(value: IATA2Of5Checksum);
    get checksum(): IATA2Of5Checksum;
    /**
     * This method is used to set the minChars for IATA2of5 symbology
     * This method will be called as CDSymbology.IATA2of5.minChars = 10
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set minChar value</td></tr>
     * </tbody>
     * </table>
     * Input must be less than 100
     * @param {number} value
     */
    set minimumLength(value: number);
    get minimumLength(): number;
}
/**
 * @class
 */
declare class Interleaved2of5 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Interleaved2of5 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Interleaved2of5</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to either rejectPartialDecode or not for Interleaved2of5 symbology
     * This method will be called as CDSymbology.Interleaved2of5.rejectPartialDecode = true
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Interleaved2of5 rejectPartialDecode property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set rejectPartialDecode(value: boolean);
    get rejectPartialDecode(): boolean;
    /**
     * This method is used to either allowShortQietZone or not for Interleaved2of5 symbology
     * This method will be called as CDSymbology.Interleaved2of5.allowShortQuietZone = false;
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Interleaved2of5 allowShortQuietZone property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set quietZone(value: boolean);
    get quietZone(): boolean;
    /**
     * This method is used to set the checksum for Interleaved2of5 symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.Interleaved2of5.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2
     * @param {number} value
     */
    set checksum(value: Interleaved2Of5Checksum);
    get checksum(): Interleaved2Of5Checksum;
    /**
     * This method is used to set the minChars for Interleaved2of5 symbology
     * This method will be called as CDSymbology.Interleaved2of5.minChars = 10
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set minChar value</td></tr>
     * </tbody>
     * </table>
     * Value must be less than 100
     * @param {number} value
     */
    set minimumLength(value: number);
    get minimumLength(): number;
}
/**
 * @class
 */
declare class Matrix2of5 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Matrix2of5 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Matrix2of5</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set the checksum for Matrix2of5 symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.Matrix2of5.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2
     * @param {number} value
     */
    set checksum(value: Matrix2Of5Checksum);
    get checksum(): Matrix2Of5Checksum;
}
/**
 * @class
 */
declare class Straight2of5 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Straight2of5 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Straight2of5</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set the checksum for Straight2of5 symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.Straight2of5.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2
     * @param {number} value
     */
    set checksum(value: Straight2Of5Checksum);
    get checksum(): Straight2Of5Checksum;
}
/**
 * @class
 */
declare class NEC2of5 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable NEC2of5 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable NEC2of5</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set the checksum for NEC2of5 symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.NEC2of5.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2
     * @param {number} value
     */
    set checksum(value: NEC2Of5Checksum);
    get checksum(): NEC2Of5Checksum;
}
/**
 * @class
 */
declare class Codabar {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Codabar symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Codabar</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set sefault values for Codabar symbology
     * This method will be called as CDSymbology.Codabar.minChars = 10
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set minChar value</td></tr>
     * </tbody>
     * </table>
     * Input must be less than 100
     * @param {number} value
     */
    set minimumLength(value: number);
    get minimumLength(): number;
    /**
     * This method is enable stripStartStopCharacters for Codabar symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Codabar StripStartStopCharacter property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set sendStartStopCharacters(value: boolean);
    get sendStartStopCharacters(): boolean;
    /**
     * This method is used to set the checksum for Codabar symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.Codabar.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2
     * @param {number} value
     */
    set checksum(value: CodabarChecksum);
    get checksum(): CodabarChecksum;
}
/**
 * @class
 */
declare class Code11 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Code11 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code11</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set the checksym for Code11 symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.Code11.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2
     * @param {number} value
     */
    set checksum(value: Code11Checksum);
    get checksum(): Code11Checksum;
    /**
     * This method is used to set StripChecksumEnabled of Code11 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code11 StripStartStopCharacter property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set stripChecksum(value: boolean);
    get stripChecksum(): boolean;
}
/**
 * @class
 */
declare class Code32 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Code32 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code32</td></tr>
     * </tbody>
     * </table>
     * @param {string | number | boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class Code39 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Code39 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code39</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set stripStartStopCharacters property of Code39 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code39 StripStartStopCharacter property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set sendStartStopCharacters(value: boolean);
    get sendStartStopCharacters(): boolean;
    /**
     * This method is used to set ASCIIModeEnable property of Code39 symbology
     * This method will be called as CDSymbology.Code39.ASCIIModeEnable = true;
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code39 ASCIImodeEnable property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set ASCIIModeEnable(value: boolean);
    get ASCIIModeEnable(): boolean;
    /**
     * This method is used to set the checksum of Code39 symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled</td></tr>
     * <tr><td>2</td><td>StripCheckCharacterEnabled</td></tr>
     * </table>
     * This method will be called as CDSymbology.Code39.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2
     * @param {number} value
     */
    set checksum(value: Code39Checksum);
    get checksum(): Code39Checksum;
    /**
     * This method is used to set the minChars for Code39 symbology
     * This method will be called as CDSymbology.Code39.minChars = 10
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set minChar value</td></tr>
     * </tbody>
     * </table>
     * Input must be less than 100
     * @param {number} value
     */
    set minimumLength(value: number);
    get minimumLength(): number;
}
/**
 * @class
 */
declare class Code49 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Code49 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code49</td></tr>
     * </tbody>
     * </table>
     * @param {string | number | boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class Code93 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Code93 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code93</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set the minChars for Code93 symbology
     * This method will be called as CDSymbology.Code93.minChars = 10
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set minChar value</td></tr>
     * </tbody>
     * </table>
     * Input must be less than 100
     * @param {number} value
     */
    set minimumLength(value: number);
    get minimumLength(): number;
}
/**
 * @class
 */
declare class Code128 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Code128 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Code128</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set minChars for Code128 symbology
     * This method will be called as CDSymbology.Code128.minChars = 10
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set minChar value</td></tr>
     * </tbody>
     * </table>
     * Input must be less than 100
     * @param {number} value
     */
    set minimumLength(value: number);
    get minimumLength(): number;
}
/**
 * @class
 */
declare class CompositeCode {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable CCAdecodingenabled of CompositCode symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable CompositeCode CCAdecoding</td></tr>
     * </tbody>
     * </table>
     * @param {string | number | boolean} value
     */
    set compositeCodeA(value: boolean);
    get compositeCodeA(): boolean;
    /**
     * This method is used to enable or disable CCBdecodingenabled of CompositCode symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Compositecode CCDdecoding</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set compositeCodeB(value: boolean);
    get compositeCodeB(): boolean;
    /**
     * This method is used to enable or disable CCCdecodingenabled of CompositCode symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable CompositeCode CCCdecoding</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set compositeCodeC(value: boolean);
    get compositeCodeC(): boolean;
    set requiredUPCFamily(value: boolean);
    get requiredUPCFamily(): boolean;
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class CodablockF {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable CodablockF symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable CodaBlockF</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class EAN13 {
    #private;
    constructor(native: NativeLib);
    /**
     * This metod is used to enable or disable EAN13 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN13</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to enableStripCheckDigit for EAN13 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN13 StripCheckDigit property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set stripCheckDigit(value: boolean);
    get stripCheckDigit(): boolean;
    /**
     * This method is used to enableSupplemental2DigitDecoding for EAN13 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN13 Supplemental2DigitDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplement2Digit(value: boolean);
    get supplement2Digit(): boolean;
    /**
     * This method is used to enableSupplemental5DigitDecoding for EAN13 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN13 Supplemental5DigitDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplement5Digit(value: boolean);
    get supplement5Digit(): boolean;
    /**
     * This method is used to enableAddSpace for EAN13 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN13 AddSpace property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplementAddSpace(value: boolean);
    get supplementAddSpace(): boolean;
    /**
     * This method is used to set requireSupplemental property for EAN13 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN13 RequireSupplemental property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplementRequired(value: boolean);
    get supplementRequired(): boolean;
    set reducedAggressiveness(value: boolean);
    get reducedAggressiveness(): boolean;
}
/**
 * @class
 */
declare class UPCA {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable UPCA symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCA</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to enableConvertToEAN13 for UPCA symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCA convertToEAN13 property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set convertToEAN13(value: boolean);
    get convertToEAN13(): boolean;
    /**
     * This method is used to enableStripUPCASystemNumberDigit for UPCA symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable stripUPCASystemNumberDigit property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set stripNumberSystemDigit(value: boolean);
    get stripNumberSystemDigit(): boolean;
    /**
     * This method is used to enableStripCheckDigit for UPCA symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCA stripCheckDigit property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set stripCheckDigit(value: boolean);
    get stripCheckDigit(): boolean;
    /**
     * This method is used to enableSupplemental2DigitDecoding for UPCA symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCA supplemental 2 digit decoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplement2Digit(value: boolean);
    get supplement2Digit(): boolean;
    /**
     * This method is used to enableSupplemental5DigitDecoding for UPCA symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCA supplemental 5 digit decoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplement5Digit(value: boolean);
    get supplement5Digit(): boolean;
    /**
     * This method is used to enableAddSpace for UPCA symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCA addSpace property</td></tr>
     * </tbody>
     * </table>
     * @param {string | number | boolean} value
     */
    set supplementAddSpace(value: boolean);
    get supplementAddSpace(): boolean;
    /**
     * This method is used to set requireSupplemental for UPCA symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCA require Supplement property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplementRequired(value: boolean);
    get supplementRequired(): boolean;
    set reducedAggressiveness(value: boolean);
    get reducedAggressiveness(): boolean;
}
/**
 * @class
 */
declare class EAN8 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable EAN8 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN8</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to enableConvertToEAN13 for EAN8 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN8 converttoEAN13 property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set converttoEAN13(value: boolean);
    get converttoEAN13(): boolean;
    /**
     * This method is used to enableStripCheckDigit for EAN8 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN8 stripCheckDigit property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set stripCheckDigit(value: boolean);
    get stripCheckDigit(): boolean;
    /**
     * This method is used to enableSupplemental2DigitDecoding for EAN8 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN8 supplemental2DigitDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplement2Digit(value: boolean);
    get supplement2Digit(): boolean;
    /**
     * This method is used to enableSupplemental5DigitDecoding for EAN8 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN8 supplemetal5DigitDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplement5Digit(value: boolean);
    get supplement5Digit(): boolean;
    /**
     * This method is used to enableAddSpace for EAN8 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN8 addSpace property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplementAddSpace(value: boolean);
    get supplementAddSpace(): boolean;
    /**
     * This method is used to set requireSupplemental for EAN8 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable EAN8 requireSupplement property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplementRequired(value: boolean);
    get supplementRequired(): boolean;
    set reducedAggressiveness(value: boolean);
    get reducedAggressiveness(): boolean;
}
/**
 * @class
 */
declare class UPCE {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable UPCE symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCE</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    set supplementRequired(value: boolean);
    get supplementRequired(): boolean;
    /**
     * This method is used to enableStripUPCESystemNumberDigit for UPCE symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCE stripUPCESystemNumberDigit property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set stripNumberSystemDigit(value: boolean);
    get stripNumberSystemDigit(): boolean;
    /**
     * This method is used to enableStripCheckDigit for UPCE symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCE StripCheckDigit</td></tr>
     * </tbody>
     * </table>
     * @param {string | number | boolean} value
     */
    set stripCheckDigit(value: boolean);
    get stripCheckDigit(): boolean;
    /**
     * This method is used to enableSupplemental2DigitDecoding for UPCE symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCE Supplemental2DigitDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplement2Digit(value: boolean);
    get supplement2Digit(): boolean;
    /**
     * This method is used to enableSupplemental5DigitDecoding for UPCE symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCE Supplemental5DigitDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {string | number | boolean} value
     */
    set supplement5Digit(value: boolean);
    get supplement5Digit(): boolean;
    /**
     * This method is used to enableExpansion for UPCE symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCE enableExpansion property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set expansion(value: boolean);
    get expansion(): boolean;
    /**
     * This method is used to enableAddSpace for UPCE symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCE AddSpace property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set supplementAddSpace(value: boolean);
    get supplementAddSpace(): boolean;
    /**
     * This method is used to enableAddSpace for UPCE symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPCE AddSpace property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set numberSystem1(value: boolean);
    get numberSystem1(): boolean;
    set reducedAggressiveness(value: boolean);
    get reducedAggressiveness(): boolean;
}
/**
 * @class
 */
declare class Trioptic {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Trioptic symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Trioptic</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to enableStripStartStopCharacters for Trioptic symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Trioptic StripStartStopCharacter property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set sendStartStopCharacters(value: boolean);
    get sendStartStopCharacters(): boolean;
}
/**
 * @class
 */
declare class Telepen {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Telepen symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Telepen</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class Plessey {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable Plessey symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable Plessey</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class PDF417 {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable PDF417 symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable PDF417</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    set microPDF417(value: boolean);
    get microPDF417(): boolean;
}
/**
 * @class
 */
declare class MSIPlessey {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable MSIPlessey symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable MSIPlessey</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
    /**
     * This method is used to set checksum for MSIPlessey symbology
     * <table>
     * <tr><th>Checksum</th><th>Code></th></tr>
     * <tr><td>0</td><td>Checksum Disabled</td></tr>
     * <tr><td>1</td><td>Checksum Enabled Mod10</td></tr>
     * <tr><td>2</td><td>Checksum EnabledMod10_10</td></tr>
     * <tr><td>3</td><td>Checksum EnabledMod11_10</td></tr>
     * </table>
     * This method will be called as CDSymbology.MSIPlessey.checksum = 0
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set Checksum code</td></tr>
     * </tbody>
     * </table>
     * Inputs can be 0, 1, 2, 3
     * @param {MSIPlesseyChecksum} value
     */
    set checksum(value: MSIPlesseyChecksum);
    get checksum(): MSIPlesseyChecksum;
    /**
     * This method is used to set minChars for MSIPlessey symbology
     * This method will be called as CDSymbology.MSIPlessey.minChars = 10
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Number</td><td>Set minChar value</td></tr>
     * </tbody>
     * </table>
     * Input must be less than 100
     * @param {number} value
     */
    set minimumLength(value: number);
    get minimumLength(): number;
    /**
     * This method is used to enableStripCheckSum for MSIPlessey symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable MSIPlessey StripChecksum property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set stripChecksum(value: boolean);
    get stripChecksum(): boolean;
}
/**
 * @class
 */
declare class GS1Databar {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable GS1Databar symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable GS1Databar OmniTruncatedDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set omniTruncated(value: boolean);
    get omniTruncated(): boolean;
    /**
     * This method is used to enableLimitedDecoding for GS1Databar symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable GS1Databar LimitedDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set limited(value: boolean);
    get limited(): boolean;
    /**
     * This method is used to enableStackedDecoding for GS1Databar symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable GS1Databar StackedDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set stacked(value: boolean);
    get stacked(): boolean;
    /**
     * This method is used to enableExpandedDecoding for GS1Databar symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable GS1Databar ExpandedDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set expanded(value: boolean);
    get expanded(): boolean;
    /**
     * This method is used to enableExpandedStackedDecoding for GS1Databar symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable GS1Databar ExpandedStackedDecoding property</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set expandedStacked(value: boolean);
    get expandedStacked(): boolean;
    /**
     * This method is used to enable or disable GS1Databar symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable GS1Databar</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class AustraliaPost {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable AustraliaPost symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable AustraliaPost</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class CanadaPost {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable CanadaPost symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable CanadaPost</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class DutchPost {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable DutchPost symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable DutchPost</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class JapanPost {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable JapanPost symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable JapanPost</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class KoreaPost {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable KoreaPost symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable KoreaPost</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class RoyalMail {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable RoyalMail symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable RoyalMail</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class UPU {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable UPU symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable UPU</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class USPSIntelligent {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable USPSIntelligent symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable USPSIntelligent</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class USPSPlanet {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable USPSPlanet symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable USPSPlanet</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
/**
 * @class
 */
declare class USPSPostnet {
    #private;
    constructor(native: NativeLib);
    /**
     * This method is used to enable or disable USPSPostnet symbology
     * <h5>Parameters : </h5>
     * <table>
     * <thead>
     * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
     * </thead>
     * <tbody>
     * <tr><td>value</td><td>Boolean</td><td>Enable or disable USPSPostnet</td></tr>
     * </tbody>
     * </table>
     * @param {boolean} value
     */
    set enable(value: boolean);
    get enable(): boolean;
}
export default CDSymbology;
