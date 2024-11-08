import { useState } from "react";
import Input from "./Input";
import Card from "./Card";

function App() {
    //Aqui deberias agregar los estados y los handlers para los inputs
    const [name, setName] = useState({ data: null, error: null });
    const [lastName, setLastName] = useState({ data: null, error: null });
    const [document, setDocument] = useState({ data: null, error: null });

    const [submitBtn, setSubmitBtn] = useState(null);
    const [userExist, setUserExist] = useState(null);

    const handlerName = ({ target: { value } }) => {
        if (value.length < 3) {
            setName({ data: null, error: "El nombre debe tener al menos 3 caracteres" });
        } else {
            setName({ data: value, error: null });
        }
    };

    const handlerLastName = ({ target: { value } }) => {
        if (value.length < 3) {
            setLastName({ data: null, error: "El apellido debe tener al menos 3 caracteres" });
        } else {
            setLastName({ data: value, error: null });
        }
    };

    const handlerDocument = ({ target: { value } }) => {
        if (isNaN(value)) {
            setDocument({ data: null, error: "El documento debe ser numérico" });
        } else if (value.length < 6) {
            setDocument({ data: null, error: "El documento debe tener como máximo 6 caracteres" });
        } else {
            setDocument({ data: value, error: null });
        }
    };

    const handlerForm = (event) => {
        event.preventDefault();

        if (!name.data) {
            setName({ data: null, error: "El nombre es requerido" });
        }

        if (!lastName.data) {
            setLastName({ data: null, error: "El apellido es requerido" });
        }

        if (!document.data) {
            setDocument({ data: null, error: "El documento es requerido" });
        }

        if (!name.data || !lastName.data || !document.data) {
            setUserExist(false);
            setSubmitBtn("red");
        } else {
            setUserExist(true);
            setSubmitBtn("green");
        }
    };

    const listInputs = [
        {
            label: "Nombre",
            value: name.data,
            type: "text",
            name: "name",
            handlerInput: handlerName,
            errorMessage: name,
        },
        {
            label: "Apellido",
            value: lastName.data,
            type: "text",
            name: "lastName",
            handlerInput: handlerLastName,
            errorMessage: lastName,
        },
        {
            label: "Documento",
            value: document.data,
            type: "document",
            name: "document",
            handlerInput: handlerDocument,
            errorMessage: document,
        },
    ];

    return (
        <article className="App">
            <h1>Ingresa tus datos</h1>
            <form onSubmit={handlerForm}>
                {listInputs.map((input, index) => (
                    <Input
                        key={index}
                        label={input.label}
                        type={input.type}
                        name={input.name}
                        handlerInput={input.handlerInput}
                        errorMessage={input.errorMessage}
                    />
                ))}

                <button style={{ backgroundColor: submitBtn }} type="submit">
                    Enviar
                </button>
            </form>

            {userExist ? <Card name={name} lastName={lastName} document={document} /> : null}
        </article>
    );
}

export default App;
