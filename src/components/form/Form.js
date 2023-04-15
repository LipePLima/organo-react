import Field from "../FieldForm/FieldForm";
import OptionsList from "../OptionsList/OptionsList";
import Button from "../Button/Button";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const times = [
    "Back-End",
    "Front-End",
    "Data Science",
    "Devops",
    "Mobile",
    "UX e Design",
  ];

  const [name, setName]         = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage]       = useState("");
  const [team, setTeam]         = useState("");

  const saving = (event) => {
    event.preventDefault();
    console.log("Form enviado =>", name, position, image, team);
  };

  return (
    <section className="container__form">
      <form onSubmit={saving} className="form">
        <h2 className="form__title">
          Preencha os dados para criar o card do colaborador.
        </h2>
        <Field 
          required={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          value={name} 
          changed={value => setName(value)} 
        />
        <Field 
          required={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          value={position}
          changed={value => setPosition(value)} 
        />
        <Field 
          label="Imagem" 
          placeholder="Informe o endereço da imagem" 
          value={image}
          changed={value => setImage(value)}
        />
        <OptionsList
          label="Time"
          itens={times}
          value={team}
          changed={value => setTeam(value)} 
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
