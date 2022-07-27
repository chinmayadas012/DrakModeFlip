const setPageBackgroundColor= () => {
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    
    let media = document.querySelectorAll("img, picture, video");
    media.every((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    })

  };
const revertPage = () => {
document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
let media = document.querySelectorAll("img, picture, video");
media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
})
}