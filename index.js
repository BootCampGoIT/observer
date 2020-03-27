// ================= throttle ======================
// window.addEventListener("scroll", _.throttle(onScroll, 1500))
// function onScroll() {
//     console.log("object");
// }

// === 2 ===
// const asd = () => {
//     i += 1;
//     console.log('i :', i);
// }
// let i = 0;
// const clicker = document.querySelector('.clicker');
// clicker.addEventListener('click', _.throttle(asd, 2500))

// clicker.addEventListener('click', (e) => {
//     e.target.classList.toggle("active");
// })


// ================ debounce =======================
// const input = document.querySelector('.inputElem').addEventListener("input", _.debounce(onInput, 3000))
// function onInput() {
//     console.log("waiting")
// }


// window.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll event handler invocation every 300ms.');
//   }, 300),
// );

// document.querySelector('input').addEventListener(
//   'input',
//   _.debounce(() => {
//     console.log(
//       'Input event handler invocation after 300ms of inactivity past burst.',
//     );
//   }, 300),
// );

// const options = {
//     root: document.querySelector('#scrollArea'),
//     rootMargin: '0px',
//     threshold: 1.0,
//   };
//   const callback = function(entries, observer) {
//     /* Content excerpted, show below */
//   };
//   const observer = new IntersectionObserver(callback, options);

// console.log('DocumentFragment  :', DocumentFragment);



