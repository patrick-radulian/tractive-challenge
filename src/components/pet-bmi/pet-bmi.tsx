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

const calculateRangeWidths = (ranges: Array<BMIRange>, value: number): Array<number> => {
    const totalWidth = ranges[ranges.length - 1].to;

    const rangeWidths = ranges.map(range => {
        return Number(((range.to - range.from) / totalWidth).toFixed(2));
    });

    return rangeWidths;
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
    const rangeWidthsRef = React.useRef(calculateRangeWidths(ranges, value));

    return (
        <div className={styles.bmi}>
            <h1 style={{color: calculateValueColor(ranges, value)}}>{value}</h1>

            <div className={`${styles["section-container"]} ${styles.ranges}`}>
                {ranges.map((range, index) => (
                    <div
                        key={index}
                        className={`${styles.section} ${styles.range}`}
                        style={{background: range.color, flex: rangeWidthsRef.current[index]}}>
                        <span>{range.from} &ndash; {range.to}</span>
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