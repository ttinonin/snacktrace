import React from "react";

import { CalorieLog } from "../../interfaces/Calorie";
import { Calorie } from "./Calorie/Calorie";

interface LogCalorieFormProps {
  caloriesList: Array<CalorieLog>;
  onCaloriesList: React.Dispatch<React.SetStateAction<CalorieLog[]>>;
  onDeleteLog: (id: string) => void;
}

export const CaloriesList: React.FC<LogCalorieFormProps> = (props) => {
 
  return (
    <>
      {
        props.caloriesList.map(log => (
          <Calorie key={log.id} calorieInfo={log} onDelete={props.onDeleteLog}/>
        ))
      }
    </>
  );
};

