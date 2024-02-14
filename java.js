

let counter = 1;
const noPhrases = ["Are you sure?", "Really?", "No way!", "Think again!"];


function onYesClick() {

  const yesBtn = document.getElementById('yesBtn')
  const noBtn = document.getElementById('noBtn')
  const message = document.getElementById('message')

  const propose = document.getElementById('propose')
  propose.style.display = `none`
  yesBtn.style.display = `none`
  noBtn.style.display = `none`
  message.style.display = `block`

  // confetti({
  //   particleCount: 100,
  //   spread: 70,
  //   origin: { y: 0.6 }
  // });

  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });



  var end = Date.now() + (15 * 1000);

  // go Buckeyes!
  var colors = ['#bb0000', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
  // setTimeout(() => {
  //   congratulationsEmoji.innerHTML = '';
  // }, 3000);
}


function onNoClick() {

  counter++;

  const noBtn = document.getElementById('noBtn')
  const yesBtn = document.getElementById('yesBtn')


  yesBtn.style.width = `${counter * 50}px`
  yesBtn.style.height = `${counter * 50}px`
  yesBtn.style.fontSize = `${counter * 20}px`

  const newText = noPhrases[counter % noPhrases.length]
  noBtn.innerText = newText

  if (counter * 50 >= window.innerWidth * 0.7) {
    yesBtn.style.width = '100vw';
    yesBtn.style.height = '90vh';
    noBtn.style.display = 'none';
  }


}
