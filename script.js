let $ = document;

let nextIcon = $.querySelector(".next");
let image = $.querySelector(".image");
let beforeIcon = $.querySelector(".before")

let imgArray = ['image/img1.jpg', 'image/img2.jpg', 'image/img3.jpg', 'image/img4.jpg', 'image/img5.jpg']
let imageIndex = 0


function beforeImage() {
    imageIndex--
    if (imageIndex < 0) {
       imageIndex = imgArray.length -1
    }
    image.setAttribute("src", imgArray[imageIndex])
}

function nextImage() {
    imageIndex++
    if (imageIndex > imgArray.length - 1) {
        imageIndex = 0
    }
    image.setAttribute("src", imgArray[imageIndex])
}



setInterval(nextImage, 5000);

nextIcon.addEventListener("click", nextImage)
beforeIcon.addEventListener("click", beforeImage)
