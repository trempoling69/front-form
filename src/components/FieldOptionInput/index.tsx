import { FieldOption } from '../../models/form';
import { Controller, useFormContext } from 'react-hook-form';
type Props = {
  options: FieldOption[];
  name: string;
  handleRadioButtonClick: () => void;
};

const FieldOptionInput = ({ options, name, handleRadioButtonClick }: Props) => {
  const { control } = useFormContext();
  return (
    <>
      {options.map((option, index) => (
        <Controller
          key={option.id}
          name={name}
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <label className={`label_field-option label_field-option-${index}`}>
              <input
                type="radio"
                className="input_field-option"
                {...field}
                value={option.id}
                checked={field.value === JSON.stringify(option.id)}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  handleRadioButtonClick();
                }}
              />
              {option.label}
            </label>
          )}
        />
      ))}
    </>
  );
};

export default FieldOptionInput;
