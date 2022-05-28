const appendItem = (formData, key, value) => {
  try {
    switch (typeof value) {
      case "object":
        if (value === null) break;
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          Object.keys(value).forEach((i) => {
            formData.append(`${key}[${i}]`, value[i]);
          });
        }
        break;
      case "boolean":
        formData.append(key, value ? 1 : 0);
        break;
      default:
        formData.append(key, value);
        break;
    }
  } catch (err) {
    console.log("appendItem Error", err);
  }
};
module.exports = appendItem;
