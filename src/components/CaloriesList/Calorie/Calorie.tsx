import React, { useState } from "react";

import { CalorieLog } from "../../../interfaces/Calorie";

interface LogCalorieFormProps {
  calorieInfo: CalorieLog;
  onDelete: (id: string) => void;
}

export const Calorie: React.FC<LogCalorieFormProps> = (props) => {
  const formatDate = (createdAt: string): string => {
    const rawDate = new Date(createdAt);

    const formatted = rawDate.toLocaleDateString("pt-BR");

    return formatted;
  }

  return (
    <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between mb-2">
      <div>
        <h2 className="text-lg font-bold">{props.calorieInfo.foodName}</h2>
        <p>{props.calorieInfo.calories} kcal</p>
        <p>Created At: {formatDate(props.calorieInfo.createdAt)}</p>
      </div>
      
      <div>
        <button onClick={() => props.onDelete(props.calorieInfo.id)} className="py-2 px-5 cursor-pointer text-white bg-red-400 rounded-md hover:bg-red-500">Delete</button>
      </div>
    </div>
  );
};

