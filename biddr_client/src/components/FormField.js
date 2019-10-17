import React from "react";

function FormField({
    title,
    name,
    defaultValue = "",
    type = "text",
    submit = false,
    min=null
}) {
    return submit ? (
        <input type="submit" className="submit-button" value={title || name} />
    ) : (
        <div className="FormField">
            <label>{title}</label>

            {type === "textarea" ? (
                <textarea name={name} placeholder={title} defaultValue={defaultValue}>
                </textarea>
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={title}
                    defaultValue={defaultValue}
                    min={min}
                />
            )}
        </div>
    );
}

export default FormField;
