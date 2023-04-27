import Field from "../FieldForm";
import OptionsList from "../OptionsList";
import Button from "../Button";
import "./Form.css";
import { Fragment, useState } from "react";

const Form = (props) => {

  const [name, setName]           = useState("");
  const [position, setPosition]   = useState("");
  const [image, setImage]         = useState("");
  const [team, setTeam]           = useState("");
  const [nameTeam, setNameTeam]   = useState("");
  const [colorTeam, setColorTeam] = useState("");

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
    <Fragment>
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
            itens={props.team}
            value={team}
            changed={value => setTeam(value)}
          />
          <Button>Criar Card</Button>
        </form>

        <form className="form" onSubmit={ event => {
          event.preventDefault();
          props.registerTeam({ name: nameTeam, color: colorTeam })  
        }}>
          <h2 className="form__title">
            Preencha os dados para criar um novo time.
          </h2>
          <Field
            required
            label="Nome"
            placeholder="Digite o nome do time"
            value={nameTeam}
            changed={value => setNameTeam(value)}
          />
          <Field
            required
            type="color" 
            label="Cor"
            placeholder="Digite a cor do time"
            value={colorTeam}
            changed={value => setColorTeam(value)}
          />
          <Button>Criar um novo time</Button>
        </form>
      </section>
    </Fragment>
  );
};

export default Form;
