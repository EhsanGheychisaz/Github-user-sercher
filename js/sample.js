
"use strict";

var url = "https://api.github.com/users/";
var link = "";
var get__button = $("#button2");
var show__button = $("#button1");
var empty__war = $("#massage11");
var erorrborder = $("#massage22");
get__button.click(() => {
    var username = $("#body_input").val();
    if (username != "") {
        link = url + username;
    }
    else{
        empty__war.css("transform",
            "translateY(40rem)");
        setTimeout(()=>{
            empty__war.css("transform",
            "translateY(-40rem)");
        }, 3000)
    }
    }
)
show__button.click(()=>{
    fetch(link)
    .then(Response => {
        if(Response.ok){
            return Response.json()
        }
        else{
            throw Error("error");
        }

})
.then((data) =>{
    console.log(data)
    $("#card__img").attr("src" , data.avatar_url);
    $(".card__header-text1").html("Name : " + data.name);
    $("#card__main-reposyy").html("Repository : " + data.public_repos);
    $("#card__main-followingg").html("Following : " + data.following);
    $("#card__main-followerss").html("Followers : " + data.followers);
    $("#modal__bg").css("visibility" ,"visible");
    $("#body__data-card").css("visibility" ,"visible");
    // $("#body__data-card").css("transform" ,"translateY(170rem)");
    })
.catch(err =>{
    console.log(err);
    erorrborder.css("transform" , "translateY(40rem)");
        setTimeout(() => {
          erorrborder.css("transform" , "translateY(-40rem)");
        }, 3000);
})
    })