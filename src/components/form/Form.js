import Field from "../FieldForm/FieldForm"
import OptionsList from "../OptionsList/OptionsList";
import Button from "../Button/Button";
import "./Form.css";

const Form = () => {
  const times = [
    "Back-End",
    "Front-End",
    "Data Science",
    "Devops",
    "Mobile",
    "UX e Design"
  ]

  return (
    <section className="container__form">
      <form className="form">
        <h2 className="form__title">Preencha os dados para criar o card do colaborador.</h2>
        <Field label="Nome"   placeholder="Digite seu nome" />
        <Field label="Cargo"  placeholder="Digite seu cargo" />
        <Field label="Imagem" placeholder="Informe o endereço da imagem" />
        <OptionsList label="Time"  itens={times}/>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;
