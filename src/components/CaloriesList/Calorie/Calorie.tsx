import React from "react";

import { CalorieLog } from "../../../interfaces/Calorie";

interface LogCalorieFormProps {
  calorieInfo: CalorieLog;
  onDelete: (id: string) => void;
}

export const Calorie: React.FC<LogCalorieFormProps> = (props) => {
  
  return (
    <>
      <p>{props.calorieInfo.foodName}</p>
      <p>{props.calorieInfo.calories}</p>
      <p>{props.calorieInfo.createdAt}</p>

      <button onClick={() => props.onDelete(props.calorieInfo.id)}>Delete</button>
    </>
  );
};

