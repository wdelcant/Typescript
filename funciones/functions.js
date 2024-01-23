"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => 'Batiseñal activada!';
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
