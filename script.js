window.onload = init;

var imageList = [
    "arrow.jpg",
    "big_door.jpg",
    "bikes.jpg",
    "bridge.jpg",
    "building.jpg",
    "chairs.jpg",
    "christmas_tree.jpg",
    "cycle_lane.jpg",
    "door.jpg"
];

var imageNumber = 0;

function init() {
    
    var thumbContainer = document.getElementById("thumbs");
    
    //1. Add the thumbnail divs to the thumbs container
    for (var i = 0; i < imageList.length; i++) {
        var newThumb = document.createElement("div");
        newThumb.setAttribute("class", "single-thumb");
        newThumb.style.backgroundImage = "url(img/" + imageList[i] + ")";
        newThumb.addEventListener("click", showGalleryImage);
        
        thumbContainer.appendChild(newThumb);
    }
}

function showGalleryImage() {
    
    var galleryLarge = document.querySelector(".featured-image-placeholder");
    
    var imgCopy = this.cloneNode(true);
    imgCopy.setAttribute("class", "featured-image");
    
    galleryLarge.appendChild(imgCopy);
    
}