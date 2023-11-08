import useGetForm from '../../hooks/useGetForm';
import DisplayField from '../../components/DisplayField';

const Form = () => {
  const { form } = useGetForm(1);
  console.log(form);
  return (
    <div className='form-page_container'>
      {form && <DisplayField form={form} />}
    </div>
  );
};

export default Form;
