import NumberInput from "../NumberInput";

interface TotalCaloriesProps {
  targetCalories: number;
  onTargetCaloriesChange: (newValue: number) => void;
  currentCalories: number;
  onCurrentCaloriesChange: (newValue: number) => void;
}

export const TotalCalories: React.FC<TotalCaloriesProps> = (props) => {

  return (
    <div>
      <p>Calories: {props.currentCalories} / {props.targetCalories} kcal</p>
      <NumberInput
        value={props.targetCalories}
        onChange={props.onTargetCaloriesChange}
      />
    </div>
  );
};

