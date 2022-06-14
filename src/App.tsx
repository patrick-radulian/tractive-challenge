import React from 'react';
import styles from './App.module.css';
import PetBMI from './components/pet-bmi/pet-bmi';

const BMIRanges = [
    { from: 0, to: 29.99, color: "#0D78C8", label: "Underweight" },
    { from: 30, to: 90, color: "#058F22", label: "Normal" },
    { from: 90.01, to: 120, color: "#8A0303", label: "Overweight" },
]

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <h3>Mr. Nash's BMI is</h3>
                <PetBMI ranges={BMIRanges} value={88.89}/>
            </div>
        </div>
    )
}


export default App;
