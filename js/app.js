"use strict";

document.getElementById("button1").addEventListener("click", getText);
var bb = "https://api.github.com/users/";
console.log(bb);
var cc = "";
document.querySelector("#button2").addEventListener("click", function () {
  var aa = document.querySelector(".body_input").value;
  console.log(aa);
  if (aa != "") {
    cc = bb + aa;
  } else {
    document.querySelector(".massage11").style.transform = "translateY(40rem)";
    const error0 = setTimeout(function () {
      document.querySelector(".massage11").style.transform =
        "translateY(-40rem)";
    }, 6000);
  }
});
console.log(cc);
function getText() {
  fetch(`${cc}`)
    .then((response) => response.json())
    .then((data) => {
      var adf = data.id;
      console.log(data);
      if (data.message === "Not Found") {
        var erorrborder = document.querySelector(".massage22");
        erorrborder.style.transform = "translateY(-45rem)";
        const error = setTimeout(function () {
          erorrborder.style.transform = "translateY(+45rem)";
        }, 6000);
      } else {
        document.querySelector(".card__img").src = data.avatar_url;
        document.querySelector(".card__header-text1").innerHTML = data.name;
        document.querySelector(".card__header-text22").innerHTML = data.id;
        document.querySelector(".card__main-reposyy").innerHTML =
          data.public_repos;
        document.querySelector(".card__main-followingg").innerHTML =
          data.following;
        document.querySelector(".card__main-followerss").innerHTML =
          data.followers;
        document.querySelector(".body__data-card").style.visibility = "visible";
      }
    });
}
