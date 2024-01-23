"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        // el ? indica que el argumento es opcional
        return `${firstName} ${lastName || 'No lastName'}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
