import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import TextInput from "../TextInput";
import NumberInput from "../NumberInput";
import { CalorieLog } from "../../interfaces/Calorie";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import ErrorModal from "../ErrorModal";

interface LogCalorieFormProps {
  currentCalories: number;
  onCurrentCaloriesChange: React.Dispatch<React.SetStateAction<number>>;
  calorieLogs: Array<CalorieLog>;
  onCalorieLogsChange: React.Dispatch<React.SetStateAction<CalorieLog[]>>;
}

export const LogCalorieForm: React.FC<LogCalorieFormProps> = (props) => {
  const [foodName, setFoodName] = useState<string>("");
  const [foodCalories, setFoodCalories] = useState<number>(0);
  const [error, setError] = useState<string|undefined>(undefined);

  const handleLogCalorieSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(foodCalories <= 0 || foodName === "") {
      setError("Please fill out the fields with valid information.");
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
        <h1 className="text-2xl font-semibold mb-2">Log Food</h1>

        <label className="font-semibold text-sm">Food's name:</label>
        <TextInput
          value={foodName}
          onChange={setFoodName}
          placeholder="Enter the food's name"
        />

        <label className="font-semibold text-sm mt-2">Food's calories:</label>
        <NumberInput
          value={foodCalories}
          onChange={setFoodCalories}
        />

        <PrimaryButton type="submit">Add</PrimaryButton>
        {!!error &&
          <ErrorModal 
            body={error}
            isOpen={!!error}
            onClose={() => setError(undefined)}
          />
        }
      </form>
    </>
  );
};

