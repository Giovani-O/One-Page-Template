// Nav
function navActivate(tagId) {
    for (element of document.querySelectorAll(".active-border")){
        element.classList.remove("active-border");
    }

    document.getElementById(tagId).classList.add('active-border');
    
};

// About
function aboutAnimations() {
    setTimeout(function(){
        document.querySelector("#text-container h1").classList.add("from-the-top");
        document.querySelector("#text-container div").classList.add("from-the-right");
        document.querySelector("#text-container div:last-child").classList.add("from-the-left");
    }, 180);
}

// Pictures
function changePicture(tagId, tagSrc) {
    document.getElementById("main-picture").style.backgroundImage = `url(${tagSrc})`;

    for (element of document.querySelectorAll(".active-picture")){
        element.classList.remove("active-picture");
    }

    document.getElementById(tagId).classList.add("active-picture");
}

function photosAnimations() {
    setTimeout(function(){
        document.querySelector("#photos-section h1").classList.add("from-the-top");
        document.querySelector("#gallery").classList.add("from-the-top");
    }, 230);
}
