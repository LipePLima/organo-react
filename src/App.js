import { useState } from "react";
import Banner from "./components/Banner";
import Form   from "./components/Form";
import Team   from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teans, setTeans] = useState([
    {
      id: uuidv4(),
      name: "Back-End",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#FFBA05",
    },
  ]);

  const [collaborators, setCollaborator] = useState([
    {
      id: uuidv4(),
      name: "Felipe Lima",
      position: "Desenvolvedor FrontEnd",
      image: "https://github.com/LipePLima.png",
      team: teans[0].name
    },
    {
      id: uuidv4(),
      name: "Felipe Lima",
      position: "Desenvolvedor FrontEnd",
      image: "https://github.com/LipePLima.png",
      team: teans[1].name
    },
    {
      id: uuidv4(),
      name: "Felipe Lima",
      position: "Desenvolvedor FrontEnd",
      image: "https://github.com/LipePLima.png",
      team: teans[2].name
    },
  ]);

  const newCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  };

  const deleteCollaborator = (id) => {
    setCollaborator( collaborators.filter( collaborator => collaborator.id !== id ));
  }

  const changeColors = (color, id) => {
    setTeans(teans.map( team => {
      if (team.id === id) {
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
          idTeam={team.id}
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
