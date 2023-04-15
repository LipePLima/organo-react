import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form   from "./components/Form/Form";

function App() {

  const [people, setPerson] = useState([]);

  const newPerson = (person) => {
    console.log(person)
    setPerson([...people, person])
  }

  return (
    <div className="App">
      <Banner />
      <Form personRegistered={person => newPerson(person)}/>
    </div>
  );
}

export default App;
