(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(' ')}`;
  };

  const name = fullName('Tony', 'Stark', 'Ironman');

  console.log({ name });
})();
