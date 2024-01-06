(()=>{
    let avengers : number = 10;

    console.log(avengers);

    const villians: number = 20;

    if(avengers > villians){
        console.log('Estamos salvados');
    }else{
        console.log('Estamos muertos');
    }

    console.log({avengers, villians});

    avengers = Number('55A');
    console.log({avengers});

})();