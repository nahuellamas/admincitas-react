import { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";

const Form = ({createCita}) => {
    //crear state de citas
    const [cita, actualizarCita] = useState({
        patient: "",
        name: "",
        date: "",
        time: "",
        email: "",
        symptoms: ""
    });
    const [error, updateError] = useState(false);

    const updateState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const {patient, name, date, time, email, symptoms} = cita;
    
    //enviar formulario del submitCitaForm
    const submitCitaForm = (e) => {
        e.preventDefault();
        //validar formulario //trim saca los espacios en blanco
        if( patient.trim() === '' || name.trim() === '' || date.trim() === '' || time.trim() === '' || email.trim() === '' || symptoms.trim() === ''){
            //alert
            updateError(true);
            return;
        } //eliminar alerta
        updateError(false);
        
        //asignar un id a la cita
        cita.id = uuidv4();
        //crear la cita
        createCita(cita);
        //reiniciar el formulario
        actualizarCita({
            patient: "",
            name: "",
            date: "",
            time: "",
            email: "",
            symptoms: ""
        });
    }

    return (
        <Fragment>
            <h1>Crear Cita</h1>
            
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={submitCitaForm}>
                <div className="form-group">
                    <label>
                        Nombre del Paciente
                    </label>
                    <input
                        type="text"
                        className="u-full-width"
                        name="patient"
                        placeholder="Nombre Completo"
                        onChange={updateState}
                        value={patient}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Nombre del Tutor
                    </label>
                    <input
                        type="text"
                        className="u-full-width"
                        name="name"
                        placeholder="Nombre Completo"
                        onChange={updateState}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Fecha
                    </label>
                    <input
                        type="date"
                        className="u-full-width"
                        name="date"
                        onChange={updateState}
                        value={date}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Hora
                    </label>
                    <input
                        type="time"
                        className="u-full-width"
                        name="time"
                        onChange={updateState}
                        value={time}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Email
                    </label>
                    <input
                        type="email"
                        className="u-full-width"
                        name="email"
                        placeholder="Correo Electronico"
                        onChange={updateState}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Síntomas</label>
                    <textarea
                        className="u-full-width"
                        name="symptoms"
                        onChange={updateState}
                        value={symptoms}
                    ></textarea>
                </div>
                <button
                    className="u-full-width button-primary"
                    type="submit"
                    
                >
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    createCita: PropTypes.func.isRequired
}

export default Form;