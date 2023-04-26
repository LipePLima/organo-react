import { useState } from "react";
import Banner from "./components/Banner";
import Form   from "./components/Form";
import Team   from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [teans, setTeans] = useState([
    {
      name: "Back-End",
      color: "#57C278",
    },
    {
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      name: "Data Science",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "Mobile",
      color: "#DB6EBF",
    },
    {
      name: "UX e Design",
      color: "#FFBA05",
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

  const changeColors = (color, name) => {
    setTeans(teans.map( team => {
      if (team.name === name) {
        team.color = color;
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
          changeColor={changeColors}
          color={team.color}
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
