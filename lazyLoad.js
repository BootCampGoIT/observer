
const images = document.querySelectorAll(".section img");

images.forEach(image => {
    lazyLoad(image)
})

const lazyLoad = target => {
    const options = {
        rootMargin: "50px 0px",
        threshold: "0.01"
    }

    const obser = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.lazy;
                observer.disconnect()
            }
        })
    }, options);

    obser.observe(target)

}