
const options = {
    // root: document.querySelector('#scrollArea'),
    // rootMargin: '0px',
    threshold: 0.7,

}
let intersectingID = null;

function onObserve(props) {
    props.forEach(element => {
        // element.isIntersecting && console.log(element.target);
        if (element.isIntersecting) {
            intersectingID = element.target.id;

        }
    });
}

const observer = new IntersectionObserver(onObserve, options);

const sections = document.querySelectorAll("section");
sections.forEach(section => observer.observe(section))

// console.log('sections :', sections);