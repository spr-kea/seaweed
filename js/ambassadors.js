async function getData() {
  let result = await fetch(
    "https://johannela.dk/cartel/wp-json/wp/v2/ambassador?_embed"
  );
  dataReceived(await result.json());
}

function dataReceived(data) {
  //do something with the data
  console.log(data);
  data.forEach(showSingleAmbassador);
}

//STOP
function showSingleAmbassador(ambassador) {
  //template
  const template = document.querySelector("template").content;
  //clone
  const clone = template.cloneNode(true);
  console.log(ambassador);
  //put the content into it
  //ambassador name
  clone.querySelector(".name").textContent = ambassador.username;
  clone.querySelector(".ig__username span").textContent =
    ambassador.instagram_user;
  //ig username
  clone.querySelector(".favorite span").textContent =
    ambassador.favorite_sea_creature;
  clone.querySelector(".description").textContent =
    ambassador.why_i_am_an_ambassador;
  //ig link using dollar sign (Template litterals)
  clone.querySelector(
    ".ig__link"
  ).textContent = `Link to IG profile: ${ambassador.instagram_link}`;
  //image
  clone.querySelector("img").src =
    ambassador._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.medium.source_url;
  //brand

  const parent = document.querySelector("#meet_ambassadors");
  parent.appendChild(clone);
}

getData();
