

    const button= document.querySelector(".button");
    const circle= document.querySelector(".circle");
   
    
    let buttonOn= false;
       function invert() {
        alert("hi")
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
    
    
    button.addEventListener("click", async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if(!buttonOn){
            buttonOn=true;
            circle.style.animation= "mymoveright 1s forwards";
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: setPageBackgroundColor,
            });
        }
        else{
            buttonOn=false;
            circle.style.animation= "mymoveleft 1s forwards";
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: revertPage,
            });
        }
    });
    
    
    
    const setPageBackgroundColor= () => {
        document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
        
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
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
 