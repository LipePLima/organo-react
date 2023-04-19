import Field from "../FieldForm";
import OptionsList from "../OptionsList";
import Button from "../Button";
import "./Form.css";
import { useState } from "react";

const Form = (props) => {

  const [name, setName]         = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage]       = useState("");
  const [team, setTeam]         = useState("");

  const saving = (event) => {
    event.preventDefault();
    props.personRegistered({
      name,
      position,
      image,
      team
    })
    setName('')
    setPosition('')
    setImage('')
    setTeam('')
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
          itens={props.teans}
          value={team}
          changed={value => setTeam(value)} 
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
