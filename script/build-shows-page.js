const serverUrl = "https://project-1-api.herokuapp.com";

const uniqueID = () => Math.random().toString(36).substring(2, 9);

let api_key = "";
const refreshApiKey = () => {
  return axios
    .get(`${serverUrl}/register`)
    .then((response) => {
      api_key = response.data.api_key;
    })
    .catch((error) => {
      alert(error);
    });
};

// const api_key = "22cab15b-5e2f-4cf5-b006-5864b37e5d25";
// async function myFn() {
//   const result = await axios(`${serverUrl}/comments?api_key=${api_key}`);
//   console.log(result.data);
// }

const getShows = () => {
  return axios
    .get(`${serverUrl}/showdates?api_key=${api_key}`)
    .then((result) => {
      const showContainer = document.querySelector(".show");
      showContainer.innerHTML = "";
      const showsToDisplay = result.data.map((show) => {
        return {
          id: uniqueID(),
          date: `${show.date}`,
          venue: `${show.place}`,
          location: `${show.location}`,
        };
      });

      showsToDisplay.forEach((show) => displayShow(show));
    });
};

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

const displayShow = (show) => {
  const showListContainer = document.querySelector(".show");
  const showContainer = document.createElement("div");
  showContainer.classList.add("show__container");
  //showContainer.appendChild(showInfoCard);

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

  showInfoCard.appendChild(submit);
};

const render = () => {
  refreshApiKey().then(() => getShows());
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
