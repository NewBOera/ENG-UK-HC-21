const hotelElements = [
  "clermont",
  "hippodrome",
  "aspers",
  "genting",
  "alea",
  "rainbow",
];

const $hotels = document.getElementById("hotels");

hotelElements.forEach((id) => {
  const element = document.getElementById(id);

  element.addEventListener("click", () => {
    $hotels.value = id;
  });
});
