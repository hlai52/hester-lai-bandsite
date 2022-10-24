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

// createListValue("show__date", "Date", show.date)
const createListValue = (className, title, value) => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add(`${className}`);

  const titleDiv = document.createElement("div");
  titleDiv.classList.add(`${className}-title`);
  titleDiv.innerHTML = title;

  const valueDiv = document.createElement("div");
  valueDiv.classList.add(`${className}-value`);
  valueDiv.innerHTML = value;

  mainDiv.appendChild(titleDiv);
  mainDiv.appendChild(valueDiv);
  return mainDiv;
};

const render = () => {
  const showListContainer = document.querySelector(".show");

  shows.forEach((show) => {
    // const showContainer = document.createElement("div");
    // showContainer.classList.add("show__container");
    // showContainer.appendChild(showInfoCard);

    const showInfoCard = document.createElement("div");
    showInfoCard.classList.add("show__info");
    showListContainer.appendChild(showInfoCard);

    const showDate = createListValue("show__date", "Date", show.date);
    showInfoCard.appendChild(showDate);

    const showVenue = createListValue("show__venue", "Venue", show.venue);
    showInfoCard.appendChild(showVenue);

    const showLocation = createListValue(
      "show__location",
      "Location",
      show.location
    );
    showInfoCard.appendChild(showLocation);

    const submit = document.createElement("button");
    submit.innerHTML = "Buy Tickets";
    submit.classList = "shows__button";

    showListContainer.appendChild(submit);
  });
};

render();

// original code before utuilizing functions shortcut to clean up code:
//const showDate = document.createElement("div");
// showDate.classList.add("show__date");

// const showDateTitle = document.createElement("div");
// showDateTitle.classList.add("show__date-title");
// showDateTitle.innerHTML = "Date";

// const showDateValue = document.createElement("div");
// showDateValue.classList.add("show__date-value");
// showDateValue.innerHTML = show.date;

// showDate.appendChild(showDateTitle);
// showDate.appendChild(showDateValue);
