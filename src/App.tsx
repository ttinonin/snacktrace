import { useState } from "react"
import Modal from "react-modal";

import food from "./assets/food.jpg";
import TotalCalories from "./components/TotalCalories";
import './App.css';
import LogCalorieForm from "./components/LogCalorieForm";
import { CalorieLog } from "./interfaces/Calorie";
import CaloriesList from "./components/CaloriesList";
import { PrimaryButton } from "./components/PrimaryButton/PrimaryButton";
import Header from "./components/Header";

Modal.setAppElement("#root")

function App() {
  const [targetCalories, setTargetCalories] = useState<number>(1000);
  const [currentCalories, setCurrentCalories] = useState<number>(0);
  const [calorieLogs, setCalorieLogs] = useState<CalorieLog[]>([]);

  const handleDeleteSingleLog = (id: string) => {
    const oldValue = calorieLogs.find(item => item.id === id);

    setCalorieLogs(prev => prev.filter(log => log.id !== id));

    let newCalories = oldValue?.calories
    if(newCalories === undefined) {
      newCalories = 0;
    }

    setCurrentCalories(prev => prev - newCalories);
  }

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 font-[roboto]">

        <div className="grid grid-cols-1 shadow-sm md:grid-cols-[1fr_auto_1fr] bg-white text-black mt-6 rounded-lg p-4 gap-4 items-stretch">
          <TotalCalories
            targetCalories={targetCalories}
            onTargetCaloriesChange={setTargetCalories}
            currentCalories={currentCalories}
            onCurrentCaloriesChange={setCurrentCalories}
          />

          <div className="hidden md:block w-px bg-zinc-300 mx-2" />

          <LogCalorieForm
            currentCalories={currentCalories}
            onCurrentCaloriesChange={setCurrentCalories}
            calorieLogs={calorieLogs}
            onCalorieLogsChange={setCalorieLogs}
          />
        </div>

        

        <CaloriesList
          caloriesList={calorieLogs}
          onCaloriesList={setCalorieLogs}
          onDeleteLog={handleDeleteSingleLog}
        />
      </main>
    </>
  )
}

export default App
