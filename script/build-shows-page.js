const uniqueId = () => Math.random().toString(36).substring(2, 9);

const shows = [
  {
    id: uniqueId(),
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const render = () => {
  const showListContainer = document.querySelector(".show");
  const show = shows[0];
  const showInfoCard = document.createElement("div");
  showInfoCard.classList.add("show__info");

  const showDate = document.createElement("div");
  showDate.classList.add("show__date");

  const showDateTitle = document.createElement("div");
  showDateTitle.classList.add("show__date-title");
  showDateTitle.innerHTML = "Date";

  const showDateValue = document.createElement("div");
  showDateValue.classList.add("show__date-value");
  showDateValue.innerHTML = show.date;

  showDate.appendChild(showDateTitle);
  showDate.appendChild(showDateValue);

  showInfoCard.appendChild(showDate);

  showListContainer.appendChild(showInfoCard);
};
//create avatar in JS

render();
