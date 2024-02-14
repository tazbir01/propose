

let counter = 1;
const noPhrases = ["Are you sure?", "Really?", "No way!", "Think again!"];


function onYesClick(){

  const yesBtn = document.getElementById('yesBtn')
  const noBtn = document.getElementById('noBtn')
  const message = document.getElementById('message')

  const propose = document.getElementById('propose')
  propose.style.display = `none`
  yesBtn.style.display = `none`
  noBtn.style.display = `none`
  message.style.display = `block`

  // setTimeout(() => {
  //   congratulationsEmoji.innerHTML = '';
  // }, 3000);
}


function onNoClick(){
 
  counter++;

  const noBtn = document.getElementById('noBtn')
  const yesBtn = document.getElementById('yesBtn')


  yesBtn.style.width = `${counter*50}px`
  yesBtn.style.height = `${counter*50}px`
  yesBtn.style.fontSize = `${counter*20}px`

  const newText = noPhrases[counter % noPhrases.length]
  noBtn.innerText = newText

  if (counter * 50 >= window.innerWidth * 0.7) {
    yesBtn.style.width = '100vw';
    yesBtn.style.height = '90vh';
    noBtn.style.display = 'none';
  }


}
