import Field from "../FieldForm/FieldForm"
import "./Form.css";

const Form = () => {
  return (
    <section className="container__form">
      <form className="form">
        <h2 className="form__title">Preencha os dados para criar o card do colaborador.</h2>
        <Field label="Nome"   placeholder="Digite seu nome" />
        <Field label="Cargo"  placeholder="Digite seu cargo" />
        <Field label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
};

export default Form;
