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
  //console.log(hello, post);
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
  clone.querySelector(".name").textContent = ambassador.username.rendered;
  //ig username
  clone.querySelector(".ig__username span").textContent =
    ambassador.instagram_user;
  //ig link
  clone.querySelector(".ig__link").textContent = ambassador.instagram_link;
  //image
  clone.querySelector("img").src =
    ambassador._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.medium.source_url;
  //brand

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}

getData();
