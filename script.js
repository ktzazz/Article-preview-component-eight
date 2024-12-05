const share = document.getElementById("i-share");
const sCont = document.getElementById("sCont");
const arrow = document.querySelector(".arrow");

share.addEventListener("click", () => {

  if (sCont.style.display === "none") {
    sCont.style.display = "block";
  } else {
    sCont.style.display = "none";
  }

  });

  arrow.addEventListener("click", () =>{

    if(sCont.style.display === "block"){
      sCont.style.display = "none";
    } else {
      sCont.style.display = "block";
    }

  })

