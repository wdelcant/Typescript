(() => {
  const abc = (message: string): never => {
    throw new Error(message);
  };

  abc('Help!!!');
})();
