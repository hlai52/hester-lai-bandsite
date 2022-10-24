// Add a comment section form

const formEl = document.getElementById("convoform");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  formEl.innerText = "";

  event.target.name.value;

  event.target.comment.value;
});

const headingEl = document.create;

// Band Review information
const uniqueID = () => Math.random().toString(36).substring(2, 9);

const comments = [
  {
    id: uniqueID(),
    picture:
      "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-1/273616670_10219528809645408_2353559906002298171_n.jpg?stp=c0.13.40.40a_cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dmd6y1FCdoAAX8F8Qf8&_nc_ht=scontent-sea1-1.xx&oh=00_AT9WSNnV6zDc7TNcV0fss-KsOoqQD8pdtlj0ZNtrrVMf9g&oe=635ABD70",
    name: "Connor Walton",
    time: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    id: uniqueID(),
    picture:
      "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-1/273616670_10219528809645408_2353559906002298171_n.jpg?stp=c0.13.40.40a_cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dmd6y1FCdoAAX8F8Qf8&_nc_ht=scontent-sea1-1.xx&oh=00_AT9WSNnV6zDc7TNcV0fss-KsOoqQD8pdtlj0ZNtrrVMf9g&oe=635ABD70",
    name: "Emilie Beach",
    time: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    id: uniqueID(),
    picture:
      "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-1/273616670_10219528809645408_2353559906002298171_n.jpg?stp=c0.13.40.40a_cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dmd6y1FCdoAAX8F8Qf8&_nc_ht=scontent-sea1-1.xx&oh=00_AT9WSNnV6zDc7TNcV0fss-KsOoqQD8pdtlj0ZNtrrVMf9g&oe=635ABD70",
    name: "Miles Acosta",
    time: "01/09/2021",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const renderComment = (comment) => {
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

  comments.forEach(renderComment);
};

render();
