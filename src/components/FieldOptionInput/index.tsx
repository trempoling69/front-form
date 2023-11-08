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
      {options.map((option) => (
        <Controller
          key={option.id}
          name={name}
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <label className="label_field-option">
              <input
                type="radio"
                className="label_field-option"
                {...field}
                value={option.id}
                checked={field.value == option.id}
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
