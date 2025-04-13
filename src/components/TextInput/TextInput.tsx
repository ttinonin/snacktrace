interface TextInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  return (
    <>
      <input value={props.value} onChange={handleChange}/>
    </>
  );
};

