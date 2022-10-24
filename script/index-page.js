const uniqueID = () => Math.random().toString(36).substring(2, 9);

// Get random photos for avatars
const getPhotoUrl = () =>
  `https://loremflickr.com/350/350?random=${Math.floor(Math.random() * 1000)}`;

const comments = [
  {
    id: uniqueID(),
    picture: getPhotoUrl(),
    name: "Connor Walton",
    time: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    id: uniqueID(),
    picture: getPhotoUrl(),
    name: "Emilie Beach",
    time: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    id: uniqueID(),
    picture: getPhotoUrl(),
    name: "Miles Acosta",
    time: "01/09/2021",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// format dd/mm/yyyy
const formatDate = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + "/" + mm + "/" + yyyy;
};

const formEl = document.getElementById("convoform");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // Add new comment to the array
  comments.unshift({
    id: uniqueID(),
    picture: getPhotoUrl(),
    name: event.target.name.value,
    time: formatDate(new Date()),
    text: event.target.comment.value,
  });

  // reset form
  event.target.name.value = "";
  event.target.comment.value = "";

  // render all comments again
  render();
});

// Render an individual comment and add it to reviews__list
const displayComment = (comment) => {
  const commentsContainer = document.querySelector(".reviews__list");

  const commentsCard = document.createElement("div");
  commentsCard.classList.add("reviews__card");
  commentsContainer.appendChild(commentsCard);

  const image = document.createElement("img");
  image.classList.add("reviews__avatar");
  image.src = comment.picture;
  commentsCard.appendChild(image);

  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("reviews__container");

  const reviewHeader = document.createElement("div");
  reviewHeader.classList.add("reviews__header");
  reviewContainer.appendChild(reviewHeader);

  const reviewName = document.createElement("div");
  reviewName.classList.add("reviews__name");
  reviewName.innerHTML = comment.name;
  reviewHeader.appendChild(reviewName);

  const reviewDate = document.createElement("div");
  reviewDate.classList.add("reviews__date");
  reviewDate.innerHTML = comment.time;
  reviewHeader.appendChild(reviewDate);

  const reviewContent = document.createElement("div");
  reviewContent.classList.add("reviews__content");
  reviewContent.innerHTML = comment.text;
  reviewContainer.appendChild(reviewContent);

  commentsCard.appendChild(reviewContainer);
};

const render = () => {
  const commentsContainer = document.querySelector(".reviews__list");
  commentsContainer.innerHTML = "";
  comments.forEach(displayComment);
};

render();
