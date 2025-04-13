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
    <div className="text-black shadow-sm bg-white mt-6 rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-2">Logged Calories</h2>

      { props.caloriesList.length !== 0 ?
        props.caloriesList.map(log => (
          <Calorie key={log.id} calorieInfo={log} onDelete={props.onDeleteLog}/>
        )) : (<>
        <h2 className="text-lg font-semibold text-center">Calories list is empty!</h2>
        <p className="text-center">Try adding some entries using the form above!</p>
      </>)
      
      }
    </div>
  );
};

