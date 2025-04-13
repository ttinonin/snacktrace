import { useState } from "react"

import TotalCalories from "./components/TotalCalories";
import './App.css';
import LogCalorieForm from "./components/LogCalorieForm";
import { CalorieLog } from "./interfaces/Calorie";

function App() {
  const [targetCalories, setTargetCalories] = useState<number>(1000);
  const [currentCalories, setCurrentCalories] = useState<number>(0);
  const [calorieLogs, setCalorieLogs] = useState<CalorieLog[]>([]);

  return (
    <>
      <TotalCalories
        targetCalories={targetCalories}
        onTargetCaloriesChange={setTargetCalories}
        currentCalories={currentCalories}
        onCurrentCaloriesChange={setCurrentCalories}
      />

      <LogCalorieForm
        currentCalories={currentCalories}
        onCurrentCaloriesChange={setCurrentCalories}
        calorieLogs={calorieLogs}
        onCalorieLogsChange={setCalorieLogs}
      />

      {
        calorieLogs.map(log => (
          <>
            <p>{log.id}</p>
            <p>{log.foodName}</p>
            <p>{log.calories}</p>
            <p>{log.createdAt}</p>
          </>
        ))
      }
    </>
  )
}

export default App
