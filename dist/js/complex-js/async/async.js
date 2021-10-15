let wrapper = document.querySelector('.wrapper');
let btn = document.querySelector('.btn');

btn.addEventListener('click', fireworks);




function fireworks() {

  function createElem() {
    let red = Math.round(Math.random(1) * 255);
    let green = Math.round(Math.random(1) * 255);
    let blue = Math.round(Math.random(1) * 255);

    let posLeft = Math.round(Math.random(1) * 90);
    let posTop = Math.round(Math.random(1) * 90);



    let z = document.createElement('div');
    z.classList.add('async-elem');
    wrapper.appendChild(z);
    console.log('vvv');
    z.style.left = `${posLeft}%`;
    z.style.top = `${posTop}%`;
    z.style.background = `rgb(${red}, ${green}, ${blue})`;
    if (red < 255 && green < 255 && blue < 255) {
      red++;
      green++;
      blue++;
    }
  }

  setInterval(createElem, 1000);


  setTimeout(function() {
    setInterval(function() {
      wrapper.firstChild.remove();
    }, 1000);
  }, 5000)
}
