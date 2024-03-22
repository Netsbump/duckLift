import { useState } from "react";

export const Athletes: React.FC = () => {
  interface Option {
    value: string;
    label: string;
  }

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  // Les options de votre select
  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    // Ajoutez plus d'options ici
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const selectedLabel =
      options.find((option) => option.value === value)?.label || "";
    setSelectedOption(value);
    setInputValue(selectedLabel);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Page Athletes</h1>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Sélectionnez une option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};
