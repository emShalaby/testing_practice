function capitalize(string) {
  return string.trim()[0].toUpperCase() + string.trim().split("").splice(1).join("");
}
module.exports = capitalize;
