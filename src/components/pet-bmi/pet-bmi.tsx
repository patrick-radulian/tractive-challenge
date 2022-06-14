import React from "react"
import styles from "./pet-bmi.module.css"
import * as CSS from "csstype"

type BMIRange = {
    from: number,
    to: number,
    color: CSS.Property.Color,
    label: string
}

type PetBMIProps = {
    ranges: Array<BMIRange>
    value: number
}

const calculateValueColor = (ranges: Array<BMIRange>, value: number): CSS.Property.Color => {
    for (const range of ranges) {
        if (value >= range.from && value <= range.to) {
            return range.color
        }
    }
    return ""
}

const PetBMI: React.FC<PetBMIProps> = ({ranges, value}: PetBMIProps) => {
    return (
        <div className={styles.bmi}>
            <h1 style={{color: calculateValueColor(ranges, value)}}>{value}</h1>

            <div className={`${styles["section-container"]} ${styles.ranges}`}>
                {ranges.map((range, index) => (
                    <div key={index} className={`${styles.section} ${styles.range}`} style={{background: range.color}}>
                        {range.from} &ndash; {range.to}
                    </div>
                ))}
            </div>

            <div className={styles["section-container"]}>
                {ranges.map((range, index) => (
                    <span key={index} className={styles.section}>{range.label}</span>
                ))}
            </div>
        </div>
    )
}

export default PetBMI;