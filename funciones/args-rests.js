"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const name = fullName('Tony', 'Stark', 'Ironman');
    console.log({ name });
})();
