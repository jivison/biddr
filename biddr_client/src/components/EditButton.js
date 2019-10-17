import React from "react"

function EditButton({editHandler}) {
    return (
        <button type="button" onClick={editHandler} className="EditButton">Edit</button>
    )
}

export default EditButton