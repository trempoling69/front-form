import { ErrorMessage } from '@hookform/error-message';
import { Field } from '../../models/form';
import FieldOption from '../FieldOptionInput';
import { useFormContext } from 'react-hook-form';
type Props = {
  field: Field;
};
const QuestionField = ({ field }: Props) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="questionField_container">
      <span className="questionField_label-question">{field.label}</span>
      <FieldOption name={`${field.label}`} options={field.field_options} />
      <ErrorMessage errors={errors} name={`${field.label}`} render={({ message }) => <span>{message}</span>} />
    </div>
  );
};

export default QuestionField;