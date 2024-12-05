const share = document.querySelector("ion-icon");
const socials = document.querySelectorAll(".sCount"); // Use querySelectorAll

share.addEventListener("click", () => {
    if (socials.style.display === "none") {
      socials.style.display = "block";
    } else {
      socials.style.display = "none";
    }
    
  });