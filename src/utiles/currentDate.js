export  const currentDate = () =>  {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const currentDate = new Date();
  return currentDate.toLocaleDateString('en-US', options);
  }