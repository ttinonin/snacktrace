interface NumberInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value);

    if (newNumber >= 0 || e.target.value === "") {
      props.onChange(isNaN(newNumber) ? 0 : newNumber)
    }
  }

  return (
    <>
      <input type="number" value={props.value} onChange={handleChange}/>
    </>
  );
};

