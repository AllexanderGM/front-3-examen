import PropTypes from "prop-types";
//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ name, lastName, document }) {
    return (
        <article>
            <h2>Datos ingresados</h2>
            <p>Nombre: {name.data}</p>
            <p>Apellido: {lastName.data}</p>
            <p>Documento: {document.data}</p>
        </article>
    );
}

Card.propTypes = {
    name: PropTypes.object.isRequired,
    lastName: PropTypes.object.isRequired,
    document: PropTypes.object.isRequired,
};

export default Card;
