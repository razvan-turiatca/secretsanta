import { useState } from 'react';
import './App.css';

function App() {
  const names = ['Ana', 'Nastea', 'Serghei', 'Larisa', 'Razvan'];
  const assigned = [
    { name: 'Ana', assigned: '' },
    { name: 'Nastea', assigned: '' },
    { name: 'Sherghei', assigned: '' },
    { name: 'Larisa', assigned: '' },
    { name: 'Razvan', assigned: '' },
  ];

  const [assignedNames, setAssignedNames] = useState(assigned);
  const [nameAssigned, setNameAssigned] = useState(false);
  const [randomName, setRandomName] = useState('');
  const [selectedName, setSelectedName] = useState('');

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];

    if (name !== selectedName) {
      setRandomName(name);
      console.log(name);
      assignedNames.map((a) => {
        if (a.name === name) {
          a.assigned = randomName;
        }
      });
    } else {
      console.log('Try again');
    }
  };

  const handleNameSelect = (e) => {
    setSelectedName(e.target.value);
    console.log(selectedName);
  };

  return (
    <div>
      <h1>Secret Santa</h1>

      <h3>Selecteaza-ti numele</h3>
      <form className="checkbox-container">
        {names.map((name, index) => (
          <label key={index}>
            <input
              type="radio"
              name="selectedName"
              value={name}
              checked={selectedName === name}
              onChange={handleNameSelect}
            />
            {name}
          </label>
        ))}
      </form>
      <div className="nameConfirm">
        {selectedName && <h3>Numele tau este {selectedName}?</h3>}
        <div className="confirmButtons">
          <button
            className="confirmButton"
            onClick={() => setNameAssigned(true)}
          >
            DA
          </button>
          <button onClick={() => setSelectedName('')}>NU</button>
        </div>
      </div>
      {nameAssigned && (
        <div>
          <h3>Apasa butonul pentru a descoperi cui trebuie sa-i faci cadou!</h3>
          <button
            className="button"
            onClick={handleButtonClick}
            disabled={randomName}
          >
            Cui Faci Cadou ?
          </button>
        </div>
      )}

      {randomName && randomName !== selectedName && (
        <div className="selectedNameContainer">
          {' '}
          <h3 className="selectedName">{randomName}</h3>{' '}
        </div>
      )}
    </div>
  );
}

export default App;
