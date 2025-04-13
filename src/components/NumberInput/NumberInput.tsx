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
      <input type="number" className="w-full mb-2 text-lg bg-white border border-gray-300 rounded-sm p-2 text-black shadow-sm outline-0" value={props.value} onChange={handleChange}/>
    </>
  );
};

