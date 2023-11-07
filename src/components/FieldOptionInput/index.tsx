import { FieldOption } from '../../models/form';
import { Controller, useFormContext } from 'react-hook-form';
type Props = {
  options: FieldOption[];
  name: string;
};

const FieldOptionInput = ({ options, name }: Props) => {
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
