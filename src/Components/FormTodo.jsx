import { useState } from "react";
import React from "react";

const FormTodo = props => {
    const { handleAddItem } = props;
    const [description, setDescritption] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            done: false,
            id: (+new Date()).toString(), description
        });
        setDescritption("")
    }
    return (


        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="input">
                    <input type="text"
                        className="text"
                        placeholder="Ingrese tarea..."
                        value={description}
                        onChange={e => setDescritption(e.target.value)}
                    />

                    <button
                        className="button pink"
                        disabled={description ? "" : "disabled"}
                    >
                        +
                    </button>
                </div>
            </div>
        </form>

    );
};

export default FormTodo