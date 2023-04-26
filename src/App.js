import { useState } from "react";
import Banner from "./components/Banner";
import Form   from "./components/Form";
import Team   from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [teans, setTeans] = useState([
    {
      name: "Back-End",
      colorPrimary: "#D9F7E9",
      colorSecundary: "#57C278",
    },
    {
      name: "Front-End",
      colorPrimary: "#E8F8FF",
      colorSecundary: "#82CFFA",
    },
    {
      name: "Data Science",
      colorPrimary: "#F0F8E2",
      colorSecundary: "#A6D157",
    },
    {
      name: "Devops",
      colorPrimary: "#FDE7E8",
      colorSecundary: "#E06B69",
    },
    {
      name: "Mobile",
      colorPrimary: "#FAE9F5",
      colorSecundary: "#DB6EBF",
    },
    {
      name: "UX e Design",
      colorPrimary: "#FFF5D9",
      colorSecundary: "#FFBA05",
    },
  ]);

  const [collaborators, setCollaborator] = useState([
    {
      name: "Felipe Lima",
      position: "Desenvolvedor FrontEnd",
      image: "https://github.com/LipePLima.png",
      team: teans[0].name
    }
  ]);

  const newCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  };

  const deleteCollaborator = () => {

  }

  const changeColor = (color, name) => {
    setTeans(teans.map( team => {
      if (team.name === name) {
        team.colorPrimary = color;
      }

      return team;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        team={teans.map( team => {
          return team.name;
        })}
        personRegistered={(collaborator) => newCollaborator(collaborator)}
      />
      {teans.map((team, index) => (
        <Team
          key={index}
          title={team.name}
          changeColor={changeColor}
          colorPrimary={team.colorPrimary}
          colorSecundary={team.colorSecundary}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
          exclude={deleteCollaborator}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
