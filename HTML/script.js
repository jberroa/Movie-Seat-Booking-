const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
populateUI();
let ticketPrice = +movieSelect.value;

container.addEventListener("click", e => {
  if (isSeatSelected(e)) {
    e.target.classList.toggle("selected");
    updateSelectedSeats(e);
  }
});

movieSelect.addEventListener("change", e => {
  ticketPrice = e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedSeats();
});

function isSeatSelected(event) {
  return (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  );
}

function updateSelectedSeats(event) {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}

function setMovieData(index, price) {
  localStorage.setItem("selectedMovieIndex", index);
  localStorage.setItem("selectedMoviePrice", price);
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  addSelectedClassToList(selectedSeats);

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

function addSelectedClassToList(selectedSeats) {
  if (selectedSeats !== null && selectedSeats.length) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
}

updateSelectedSeats();
