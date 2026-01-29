import React from "react";
import styles from "../styles/resultdisplay.module.css"
import { CDResult } from "codecorp-web_sdk";

interface ResultProps {
    result: CDResult | null;
}

const ResultDisplay: React.FC<ResultProps> = ({ result }) => {
    return(
        <div className={styles.datadisplay}>
            <div className={styles.datarow}>
                <span className={styles.datakey}>Barcode Data:</span>
                <span className={styles.datavalue}>{ result?.barcodeData }</span>
            </div>
            <div className={styles.datarow}>
                <span className={styles.datakey}>Symbology Name:</span>
                <span className={styles.datavalue}>{ result?.symbology }</span>
            </div>
            <div className={styles.datarow}>
                <span className={styles.datakey}>Time taken to Decode:</span>
                <span className={styles.datavalue}>{ result?.decodeTime }</span>
            </div>
        </div>
    )
}

export default ResultDisplay