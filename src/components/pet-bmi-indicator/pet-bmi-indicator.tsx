import React from "react"

type PetBMIIndicatorProps = {
    value: number
}

const PetBMIIndicator: React.FC<PetBMIIndicatorProps> = ({value}: PetBMIIndicatorProps) => {
    return (
        <span>{value}</span>
    )
}

export default PetBMIIndicator;