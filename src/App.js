import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teans = [
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
  ];

  const [collaborators, setCollaborator] = useState([]);

  const newCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teans={teans.map((team) => team.name)}
        personRegistered={(collaborator) => newCollaborator(collaborator)}
      />
      {teans.map((team) => (
        <Team
          key={team.name}
          title={team.name}
          colorPrimary={team.colorPrimary}
          colorSecundary={team.colorSecundary}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
