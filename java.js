

let counter = 0;
const noPhrases = ["Are you sure?", "Really?", "No way!", "Think again!"];


function onYesClick(){
  counter++;
  // document.getElementById('yesBtn').style.width = `${counter * 50}px`;
  // document.getElementById('yesBtn').style.height = `${counter * 50}px`;
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

  if (counter * 50 >= window.innerWidth * 0.5) {
    yesBtn.style.width = '100vw';
    yesBtn.style.height = '90vh';
    noBtn.style.display = 'none';
  }


}
