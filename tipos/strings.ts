(()=>{
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Hero: Volcán Negro`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || 'No está presente');
    console.log(batman.charAt(10)?.toUpperCase() || 'No está presente');

    console.log(batman.toUpperCase() === 'BATMAN');

    console.log({batman, linternaVerde, volcanNegro});

    const concat = `${batman} ${linternaVerde} ${volcanNegro}`;
    console.log({concat});

})();