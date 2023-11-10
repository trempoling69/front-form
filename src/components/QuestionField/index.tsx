import { ErrorMessage } from '@hookform/error-message';
import { Field } from '../../models/form';
import FieldOption from '../FieldOptionInput';
import { useFormContext } from 'react-hook-form';
type Props = {
  field: Field;
  handleRadioButtonClick: () => void;
};
const QuestionField = ({ field, handleRadioButtonClick }: Props) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="questionField_container">
      <span className="questionField_label-question">{field.label}</span>
      <div className='questionField_option-container'>
        <FieldOption
          name={`${field.name}`}
          options={field.field_options}
          handleRadioButtonClick={handleRadioButtonClick}
        />
      </div>
      <ErrorMessage errors={errors} name={`${field.name}`} render={({ message }) => <span>{message}</span>} />
    </div>
  );
};

export default QuestionField;
