import useGetForm from '../../hooks/useGetForm';
import DisplayField from '../../components/DisplayField';

const Form = () => {
  const { form } = useGetForm(1);
  console.log(form);
  return (
    <div>
      <h1>ICI</h1>
      {form && <DisplayField form={form} />}
    </div>
  );
};

export default Form;
