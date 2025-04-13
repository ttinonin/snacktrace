import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TextInput from "../TextInput";
import NumberInput from "../NumberInput";
import { CalorieLog } from "../../interfaces/Calorie";

interface LogCalorieFormProps {
  currentCalories: number;
  onCurrentCaloriesChange: React.Dispatch<React.SetStateAction<number>>;
  calorieLogs: Array<CalorieLog>;
  onCalorieLogsChange: React.Dispatch<React.SetStateAction<CalorieLog[]>>;
}

export const LogCalorieForm: React.FC<LogCalorieFormProps> = (props) => {
  const [foodName, setFoodName] = useState<string>("");
  const [foodCalories, setFoodCalories] = useState<number>(0);

  const handleLogCalorieSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(foodCalories <= 0 || foodName === "") {
      return;
    }

    props.onCurrentCaloriesChange((prev: number) => foodCalories + prev);
    
    const newLog: CalorieLog = {
      id: uuid(),
      foodName: foodName,
      calories: foodCalories,
      createdAt: new Date().toISOString(),
    }
    
    props.onCalorieLogsChange(prev => [...prev, newLog]);

    setFoodCalories(0);
    setFoodName("");
  }

  return (
    <>
      <form onSubmit={handleLogCalorieSubmit}>
        <p>Log Food</p>
        <TextInput
          value={foodName}
          onChange={setFoodName}
        />

        <NumberInput
          value={foodCalories}
          onChange={setFoodCalories}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
};

