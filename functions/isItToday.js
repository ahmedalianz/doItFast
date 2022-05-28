const isItToday = (date) => {
  return (
    new Date(date).toLocaleDateString() === new Date().toLocaleDateString()
  );
};
module.exports = isItToday;
