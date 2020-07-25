'use script'

const nameH1 = document.querySelector('h1')
nameH1.addEventListener('click', onClick)

function onClick(event){
  const  x = Math.floor(Math.random() * 256);
    const  y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  nameH1.style.color=bgColor
  const test = document.createElement('div')
  test.textContent = 'test'
  nameH1.appendChild(test)
  console.log(test);
}

