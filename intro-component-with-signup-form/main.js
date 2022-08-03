const form = document.querySelector("form");
form.setAttribute("novalidate", "");

form.addEventListener("submit", (event) => {
    const allValid = form.checkValidity();
    if (!allValid) {
        event.preventDefault();
    }
});

const fields = Array.from(form.elements);
fields.pop(); //remove button from fields.


fields.forEach((field) => {
    field.setAttribute("aria-invalid", false);
    
    const errorMsg = document.createElement("div");
    errorMsg.setAttribute("aria-live", "assertive");

    errorMsg.classList.add("error");
    const errorId = field.id + "Error";
    errorMsg.setAttribute("id", errorId);

    field.setAttribute("aria-describedby", errorId);
    field.insertAdjacentElement("afterend", errorMsg); 

    field.addEventListener("invalid", () => {
        field.setAttribute("aria-invalid", true);
        const message = getMessage(field);
        errorMsg.textContent = message || field.validationMessage;
    });

    field.addEventListener("blur", () => {
        field.checkValidity();
    });

    field.addEventListener("input", () => {
        const valid = field.checkValidity();
        if(valid) {
            field.setAttribute("aria-invalid", false);
            errorMsg.textContent = "";
        }
    });

    function getMessage(field) {
        const validity = field.validity;
        if (validity.valueMissing) return `${field.name || field.id } cannot be empty`;
        if (validity.typeMismatch) return `Please enter a valid ${field.type}`;
        if (validity.tooShort) return `${field.name} must be more than 6 characters`
    }
});

