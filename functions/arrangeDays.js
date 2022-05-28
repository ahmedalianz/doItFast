const arrangeDays = (days, method) => {
  try {
    switch (method) {
      case "accending":
        days.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        break;
      case "decending":
        days.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
        break;

      default:
        days.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        break;
    }
    return days.map((day) => new Date(day).toLocaleDateString());
  } catch (error) {
    console.log("arrangeDays Error", error);
  }
};
module.exports = arrangeDays;
