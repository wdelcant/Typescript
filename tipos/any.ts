(() =>{

    let avengers : any = 10;

    avengers = 'Dr Strange';
    console.log(avengers);
    console.log(typeof avengers);

    console.log({avengers});
    console.log(avengers.charAt(0));
    console.log((avengers as string).charAt(1));

})();