import useGetForm from '../../hooks/useGetForm';
import DisplayField from '../../components/DisplayField';
import { useParams } from 'react-router-dom';

const Form = () => {
  const { id } = useParams();
  const { form } = useGetForm(id);
  console.log(form);
  return <div className="form-page_container">{form && <DisplayField form={form} />}</div>;
};

export default Form;
