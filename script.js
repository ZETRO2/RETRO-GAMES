const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ[]=+/*$%#@!^&*()_-|/?.>,<`~;:"

document.querySelector("span").onmouseover = event => {
  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 55)]
      })
      .join("");

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 70);
}

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 3000,
  delay: 300
});

ScrollReveal().reveal('h1, h4', { origin: 'top' });
ScrollReveal().reveal('h2', { origin: 'bottom' });