import { useState } from 'react';
import { v4 as uuid } from "uuid"

import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MyOrg from './components/MyOrg/index.js';
import Team from './components/Team/index.js';
import Footer from './Footer/index.jsx';

function App() {
  const [showForm, setShowForm] = useState(false);
  
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End", 
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science", 
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    }, 
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    }, 
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    }, 
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ]);

  const [colaborators, setColaborators] = useState([{
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    role: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuid(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    role: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    role: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    role: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    role: "Dev FullStack",
    fav: true
  }]);

  const switchShowForm = () => {
    setShowForm(!showForm);
  }

  const recordColaborator = (colaborator) => {
    // console.log(`Nuevo colaborador: ${JSON.stringify(colaborator)}`);

    // Spread operator
    setColaborators([...colaborators, colaborator]);
  }

  const deleteColaborator = (id) => {
    setColaborators(colaborators.filter((colaborator) => colaborator.id !== id));
  };

  // Update team color
  const updateColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        // team.secondaryColor = color;
        team.primaryColor = color;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  const createTeam = (newTeam) => {
    // console.log(`newTeam: ${JSON.stringify([...teams, {id: uuid(), ...newTeam}])}`);
    
    setTeams([...teams, {id: uuid(), ...newTeam}]);
    // #5670C2
  }

  const like = (id) => {
    const updatedColaborators = colaborators.map((colaborator) => {
      if (colaborator.id === id) {
        colaborator.fav = !colaborator.fav;
      }
      return colaborator;
    });
    setColaborators(updatedColaborators);
  }

  return (
    <div>
      <Header />
      {
        showForm && 
        <Form 
          teams={teams.map((team) => team.title)} 
          recordColaborator={recordColaborator}
          createTeam={createTeam}
        />
      }
      <MyOrg switchShowForm={switchShowForm} />
      {
        teams.map((team) => {
          const teamColaborators = colaborators.filter(colaborator => colaborator.team === team.title);

          return <Team 
            key={team.id} 
            data={team} 
            colaborators={teamColaborators}
            deleteColaborator={deleteColaborator} 
            updateColor={updateColor}
            like={like}
            />
          })
      }
      <Footer />
    </div>
  );
}

export default App;
