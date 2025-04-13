interface TextInputProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  return (
    <>
      <input placeholder={props.placeholder} className="w-full mb-2 text-lg border border-gray-300 bg-white rounded-sm p-2 text-black shadow-sm outline-0" value={props.value} onChange={handleChange}/>
    </>
  );
};

