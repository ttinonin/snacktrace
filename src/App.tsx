import { useState } from "react"

import TotalCalories from "./components/TotalCalories";
import './App.css';
import LogCalorieForm from "./components/LogCalorieForm";
import { CalorieLog } from "./interfaces/Calorie";
import CaloriesList from "./components/CaloriesList";

function App() {
  const [targetCalories, setTargetCalories] = useState<number>(1000);
  const [currentCalories, setCurrentCalories] = useState<number>(0);
  const [calorieLogs, setCalorieLogs] = useState<CalorieLog[]>([]);

  const handleDeleteSingleLog = (id: string) => {
    setCalorieLogs(prev => prev.filter(log => log.id !== id));
  }

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

      <CaloriesList
        caloriesList={calorieLogs}
        onCaloriesList={setCalorieLogs}
        onDeleteLog={handleDeleteSingleLog}
      />
    </>
  )
}

export default App
