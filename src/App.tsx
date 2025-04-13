import { useState } from "react"

import TotalCalories from "./components/TotalCalories";
import './App.css';

function App() {
  const [targetCalories, setTargetCalories] = useState(1000);
  const [currentCalories, setCurrentCalories] = useState(0);

  return (
    <>
      <TotalCalories
        targetCalories={targetCalories}
        onTargetCaloriesChange={setTargetCalories}
        currentCalories={currentCalories}
        onCurrentCaloriesChange={setCurrentCalories}
      />
    </>
  )
}

export default App
