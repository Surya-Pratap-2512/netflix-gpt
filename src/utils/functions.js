export const getRandIntg = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const formatString = (teamplate, ...args) =>
  teamplate.replace(/{([0-9]+)}/g, function (match, index) {
    return typeof args[index] === "undefined" ? match : args[index];
  });
