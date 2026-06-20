function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function

  let viewStr;

  if (views >= 1000000) {
    viewStr = (views / 1000000).toFixed(1) + "M"; // here we are using toFixed(1) to round the number to 1 decimal place
  } else if (views >= 1000) {
    viewStr = (views / 1000).toFixed(1) + "K";
  } else {
    viewStr = views;
  }
  let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h3>${title}</h3>
        <p>${cName} . ${viewStr} views . ${monthsOld} years ago</p>
    </div> 
</div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  7400000,
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA",
);
