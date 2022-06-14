import React from 'react';
import styles from './App.module.css';
import PetBMI from './components/pet-bmi/pet-bmi';

const BMIRanges = [
    { from: 0, to: 29.99, color: "linear-gradient(135deg, #0f8be7, #004e88)", label: "Underweight" },
    { from: 30, to: 90, color: "linear-gradient(162deg, #59c46f, #006f17)", label: "Normal" },
    { from: 90.01, to: 120, color: "linear-gradient(162deg, #bf3737, #700202)", label: "Overweight" },
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
