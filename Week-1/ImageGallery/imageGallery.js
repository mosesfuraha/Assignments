const galleryData = {
  gallery: [
    {
      id: 1,
      url: "images/image1.jpg",
      caption: "A juicy and vibrant watermelon slice.",
    },
    {
      id: 2,
      url: "images/image2.jpg",
      caption: "A bowl of fresh, tangy strawberries.",
    },
    {
      id: 3,
      url: "images/image3.jpg",
      caption: "A bunch of ripe and sweet bananas.",
    },
    {
      id: 4,
      url: "images/image4.jpg",
      caption: "Crisp and refreshing green apples.",
    },
    {
      id: 5,
      url: "images/image5.jpg",
      caption: "A collection of juicy, sun-ripened oranges.",
    },
    {
      id: 6,
      url: "images/image6.jpg",
      caption: "A vibrant mix of assorted berries.",
    },
    {
      id: 7,
      url: "images/image7.jpg",
      caption: "Lush and delicious red grapes.",
    },
    {
      id: 8,
      url: "images/image8.jpg",
      caption: "A perfectly ripe and fragrant pineapple.",
    },
  ],
};

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = galleryData.gallery[currentIndex].url;
  document.querySelector(".current-img").textContent = currentIndex + 1;
  document.querySelector(".total-img").textContent = galleryData.gallery.length;
  document.querySelector(".lightbox-caption").textContent =
    galleryData.gallery[currentIndex].caption;
  document.querySelector(".preview-box").style.display = "flex";
}

function hideLightbox() {
  document.querySelector(".preview-box").style.display = "none";
}

function navigateLightbox(direction) {
  if (direction === "next") {
    currentIndex++;
    // If currentIndex exceeds the last index, reset it to 0
    if (currentIndex >= galleryData.gallery.length) {
      currentIndex = 0;
    }
  } else {
    currentIndex--;
    // If currentIndex goes below 0, set it to the last index
    if (currentIndex < 0) {
      currentIndex = galleryData.gallery.length - 1;
    }
  }

  showLightbox(currentIndex);
}

// The initializeGallery function sets up the image gallery by creating image elements for each image in the galleryData,
function initializeGallery() {
  const galleryContainer = document.querySelector(".gallery");

  galleryData.gallery.forEach((image, index) => {
    // Create a div element to wrap the image
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("image-wrapper");

    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.caption;
    imgElement.classList.add("image");

    // When the image is clicked, the showLightbox function is called with the index of the image
    imgElement.addEventListener("click", () => showLightbox(index));

    imgWrapper.appendChild(imgElement);
    galleryContainer.appendChild(imgWrapper);
  });
  // This element is presumably the close button for the lightbox
  document.querySelector(".fa-times").addEventListener("click", hideLightbox);
  document
    .querySelector(".prev")
    .addEventListener("click", () => navigateLightbox("prev"));
  document
    .querySelector(".next")
    .addEventListener("click", () => navigateLightbox("next"));
}

document.addEventListener("DOMContentLoaded", initializeGallery);
