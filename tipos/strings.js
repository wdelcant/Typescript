"use strict";
(() => {
    var _a, _b;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Hero: Volcán Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
    console.log(((_b = batman.charAt(10)) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || 'No está presente');
    console.log(batman.toUpperCase() === 'BATMAN');
    console.log({ batman, linternaVerde, volcanNegro });
    const concat = `${batman} ${linternaVerde} ${volcanNegro}`;
    console.log({ concat });
})();
