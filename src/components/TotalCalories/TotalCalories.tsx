import ProgressBar from "@ramonak/react-progress-bar";
import NumberInput from "../NumberInput";

import "./TotalCalories.css"

interface TotalCaloriesProps {
  targetCalories: number;
  onTargetCaloriesChange: (newValue: number) => void;
  currentCalories: number;
  onCurrentCaloriesChange: (newValue: number) => void;
}

export const TotalCalories: React.FC<TotalCaloriesProps> = (props) => {
  return (
    <div className="flex flex-col justify-around">
      <h1 className="text-2xl font-semibold">Calories</h1>

      <div className="flex items-center justify-around p-3 text-center">
        <div>
          <p className="text-xl">{props.currentCalories}</p>
          <p>Current</p>
        </div>

        <div>
          <p className="text-xl">{props.targetCalories}</p>
          <p>Target</p>
        </div>
      </div>

      <div className="my-4">
        <ProgressBar completed={Math.round((props.currentCalories / props.targetCalories) * 100)}/>
      </div>


      <NumberInput
        value={props.targetCalories}
        onChange={props.onTargetCaloriesChange}
      />
    </div>
  );
};

