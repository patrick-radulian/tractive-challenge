import React from "react"
import styles from "./pet-bmi.module.css"

type PetBMIProps = {

}

const PetBMI: React.FC<PetBMIProps> = (props: PetBMIProps) => {
    return (
        <div className={styles["pet-bmi"]}>PetBMI</div>
    )
}

export default PetBMI;