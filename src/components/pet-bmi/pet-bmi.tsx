import React from "react"
import styles from "./pet-bmi.module.css"
import * as CSS from "csstype"
import SVG from "react-inlinesvg"
import TriangleIcon from "../../icons/Triangle.svg"

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

const calculateIndicatorPosition = (ranges: Array<BMIRange>, value: number): number => {
    const totalWidth = ranges[ranges.length - 1].to;
    return (value / totalWidth) * 100;
}

const PetBMI: React.FC<PetBMIProps> = ({ranges, value}: PetBMIProps) => {
    const rangeWidthsRef = React.useRef(calculateRangeWidths(ranges, value));
    const valueColorRef = React.useRef(calculateValueColor(ranges, value));
    const indicatorPositionRef = React.useRef(calculateIndicatorPosition(ranges, value));

    return (
        <div className={styles.bmi}>
            <span className={styles.value} style={{color: valueColorRef.current}}>{value}</span>

            <SVG src={TriangleIcon} fill={valueColorRef.current} className={styles.indicator} style={{left: `${indicatorPositionRef.current}%`}}/>

            <div className={`${styles["section-container"]} ${styles.ranges}`}>
                {ranges.map((range, index) => (
                    <div key={index} className={`${styles.section} ${styles.range}`} style={{background: range.color, flex: rangeWidthsRef.current[index]}}>
                        <span>{range.from} &ndash; {range.to}</span>
                    </div>
                ))}
            </div>

            <div className={styles["section-container"]}>
                {ranges.map((range, index) => (
                    <span key={index} className={styles.section} style={{flex: rangeWidthsRef.current[index]}}>{range.label}</span>
                ))}
            </div>
        </div>
    )
}

export default PetBMI;