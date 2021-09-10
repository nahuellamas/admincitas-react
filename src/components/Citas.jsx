import PropTypes from 'prop-types';

const citas = ({cita, deleteCita}) => {
    return ( 
        <div className="cita">
            <p>Paciente: <span>{cita.patient}</span></p>
            <p>Tutor: <span>{cita.name}</span></p>
            <p>Fecha: <span>{cita.date}</span></p>
            <p>Hora: <span>{cita.time}</span></p>
            <p>Correo: <span>{cita.email}</span></p>
            <p>Sintomas: <span>{cita.symptoms}</span></p>
            <button  onClick={ () => deleteCita(cita.id) } className="button eliminar u-full-width">Eliminar &times;</button>
        </div>

     );
}

citas.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
}

export default citas;