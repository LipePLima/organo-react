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

  const saving = (event) => {
    event.preventDefault();
    console.log("Form enviado")
  }

  return (
    <section className="container__form">
      <form onSubmit={saving} className="form">
        <h2 className="form__title">Preencha os dados para criar o card do colaborador.</h2>
        <Field required={true} label="Nome"   placeholder="Digite seu nome" />
        <Field required={true} label="Cargo"  placeholder="Digite seu cargo" />
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
