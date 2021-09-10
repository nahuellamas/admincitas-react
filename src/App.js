import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form'
import Citas from './components/Citas'

function App() {
  let savedCitas = JSON.parse(localStorage.getItem('citas'));
  if(!savedCitas) savedCitas = [];
  const [citas , saveCitas] = useState(savedCitas);
  // SACAMOS LAS CITAS DEL LOCAL_STORAGE PERO SI NO HAY NADA PASAMOS EL STATE DE ([])
  //useEffect para REALIZAR OPERACIONES ASINCRONAS //recarga cuando se actualiza algo
  useEffect( () => {
    let savedCitas = JSON.parse(localStorage.getItem('citas'));
    if(savedCitas){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas] ); //para que se haga solo una vez //cada vez que cambie citas

  const createCita = (cita) => {
    saveCitas([
    ...citas,
    cita
    ])
  };
  //eliminar cita por id
  const deleteCita = (id) => {
    const newCitas = citas.filter(cita => cita.id !== id);
    saveCitas(newCitas);
  };
  const title = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createCita={createCita}
            />
          </div>
          <div className="one-half column">
                <h2>{title}</h2>
                {citas.map(cita => (
                  <Citas 
                    key={cita.id}
                    cita={cita}
                    deleteCita={deleteCita}
                  />
                ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
