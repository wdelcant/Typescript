(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    // el ? indica que el argumento es opcional
    return `${firstName} ${lastName || 'No lastName'}`;
  };

  const name = fullName('Tony', 'Stark');

  console.log({ name });
})();
