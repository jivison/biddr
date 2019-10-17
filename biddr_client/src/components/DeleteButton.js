import React from "react";

function DeleteButton({ deleteHandler }) {
    return (
        <button
            type="button"
            className="DeleteButton"
            onClick={deleteHandler}
        >Delete</button>
    );
}

export default DeleteButton;
