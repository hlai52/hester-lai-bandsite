// const apiURL =
//   "https://project-1-api.herokuapp.com/comments?api_key=f2b00800-3d32-4544-877c-4a94a8b11418";

// axios
//   .get(apiURL)
//   .then((response) => {
//     console.log(response.data);
//   })

//   .catch((error) => {
//     console.log(error);
//   });

//create funciton to get comments, make a post then clear the exisiting comments, then call that getting comment function, when posting comment, clears everything out and gets 4 comments and updatesß

const serverUrl = "https://project-1-api.herokuapp.com";
let api_key = "";

const uniqueID = () => Math.random().toString(36).substring(2, 9);

// Get random photos for avatars
const getPhotoUrl = () =>
  `https://loremflickr.com/350/350?random=${Math.floor(Math.random() * 1000)}`;

// format dd/mm/yyyy
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + "/" + mm + "/" + yyyy;
};

const refreshApiKey = () => {
  return axios.get(`${serverUrl}/register`).then((response) => {
    api_key = response.data.api_key;
  });
};

const getComments = () => {
  return axios
    .get(`${serverUrl}/comments?api_key=${api_key}`)
    .then((result) => {
      const commentsContainer = document.querySelector(".reviews__list");
      commentsContainer.innerHTML = "";
      const commentsToDisplay = result.data.map((comment) => {
        return {
          id: uniqueID(),
          picture: getPhotoUrl(),
          name: `${comment.name}`,
          time: `${formatDate(comment.timestamp)}`,
          text: `${comment.comment}`,
        };
      });

      commentsToDisplay.forEach(displayComment);
    });
};

const postComment = (name, comment) => {
  return axios.post(
    `${serverUrl}/comments?api_key=${api_key}`,
    {
      name: name,
      comment: comment,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const onSubmit = (event) => {
  // Prevent page refresh
  event.preventDefault();

  const newComment = {
    id: uniqueID(),
    picture: getPhotoUrl(),
    name: event.target.name.value,
    time: formatDate(new Date()),
    text: event.target.comment.value,
  };

  // Add new comment to the array
  displayComment(newComment, true);

  // reset form
  event.target.name.value = "";
  event.target.comment.value = "";

  // Send it to the API then refresh comments
  postComment(newComment.name, newComment.text)
    .then(() => getComments())
    .catch((error) => alert(error));
};

// Render an individual comment and add it to reviews__list
const displayComment = (comment, showOnTop = false) => {
  const commentsContainer = document.querySelector(".reviews__list");

  const commentsCard = document.createElement("div");
  commentsCard.classList.add("reviews__card");
  if (showOnTop) {
    commentsContainer.prepend(commentsCard);
  } else {
    commentsContainer.appendChild(commentsCard);
  }

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
  const formEl = document.getElementById("convoform");
  formEl.addEventListener("submit", onSubmit);

  refreshApiKey().then(() => getComments());
};

render();
