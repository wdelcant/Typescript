() => {
  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';
  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados2: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum fuerza {
    Acuaman = 0,
    Batman = 1,
    Flash = 5,
    Superman = 100,
  }

  const fuerzaFlash: fuerza = fuerza.Flash;
  const fuerzaSuperman: fuerza = fuerza.Superman;
  const fuerzaBatman: fuerza = fuerza.Batman;
  const fuerzaAcuaman: fuerza = fuerza.Acuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder = (poder as string).length;
  console.log(largoDelPoder);

  // funciones básicas
  function sumar(a: number, b: number): number {
    return a + b;
  }

  const contar = function (heroes: string[]): number {
    return heroes.length;
  };

  const superHeroes: string[] = [
    'Flash',
    'Arrow',
    'Superman',
    'Linterna Verde',
  ];
  contar(superHeroes);

  //Parametros por defecto
  function llamarBatman(llamar: boolean = true): void {
    if (llamar) {
      console.log('Batiseñal activada');
    }
  }

  llamarBatman();

  // Rest?
  function unirheroes(...personas: string[]): string {
    return personas.join(', ');
  }

  // Tipo funcion
  function noHaceNada(
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ): void {}

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: (
    n: number,
    t: string,
    b: boolean,
    a: string[]
  ) => void;
  noHaceNadaTampoco = noHaceNada;
};
