let id = setInterval(
  () => console.log("Interval"),
  2000
);

setTimeout(
  () => clearInterval(id),
  8200
);
