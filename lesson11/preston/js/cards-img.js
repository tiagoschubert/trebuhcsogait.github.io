
//Place holder JS
//get all the imgs on the page with data-src
const imagesTobeLoad = document.querySelectorAll('img[data-src]')
const imgOptions = {
    threshold:0.4,
    rootMargin: "0px 0px 50px 0px"
};
const loadingImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');};
    };


  if('IntersectionObserver' in window ) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadingImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesTobeLoad.forEach((img ) => {
    observer.observe(img);
  });
} else {
  imagesTobeLoad.forEach((img) => {
    loadingImages(img );
  });
}

