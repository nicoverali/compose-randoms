function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const servicesList = process.env.REACT_APP_SERVICES || "";
const requests = servicesList.split(",").map((s) => ({
  url: s,
  color: "#" + randomColor(),
}));

export default requests;
