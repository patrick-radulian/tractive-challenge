import React from 'react';
import styles from './App.module.css';
import PetBMI from './components/pet-bmi/pet-bmi';

const BMIRanges = [
    { from: 0, to: 29.99, color: "#C8680D", label: "Underweight" },
    { from: 30, to: 90, color: "#058F22", label: "Normal" },
    { from: 90.01, to: 120, color: "#8A0303", label: "Overweight" },
]

const App = () => {
    const [value, setValue] = React.useState(88.89);

    return (
        <div className={styles.app}>
            <label className={styles.label}>
                <span>Pet BMI Value:</span>
                <input className={styles.input} type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
            </label>

            <div className={styles.actions}>
                <button onClick={() => setValue(20)}>Set to 20</button>
                <button onClick={() => setValue(60)}>Set to 60</button>
                <button onClick={() => setValue(100)}>Set to 100</button>
            </div>

            <div className={styles.container}>
                <h3>Mr. Nash's BMI is</h3>
                <PetBMI ranges={BMIRanges} value={value}/>
            </div>
        </div>
    )
}


export default App;
