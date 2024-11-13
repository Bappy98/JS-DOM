/**
 * -change the background color by generating random rgb color by clicking button
 */
let div = null

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const output = document.getElementById("input");
  const copyBtn = document.getElementById("copyBtn");

  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor.slice(1).toUpperCase
    ();
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output.value}`);
    if(div!== null) {
        div.remove()
        div = null
    }

    if(isValidHex(output.value)) {
      generateTostMessage(`#${output.value} copied`);

    }
    else {
      alert('invalid Color code')
    }
    
  });

  output.addEventListener('keyup',function(e){
    let color = e.target.value
   if(color) {
    output.value = color.toUpperCase()
    if( isValidHex(color)) {
      root.style.backgroundColor = `#${color}`    
  }
   }
    
    
  })
}

function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateTostMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "tost-msg tost-msg-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("tost-msg-slide-in");
    div.classList.add("tost-msg-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

/**
 * 
 * @param {string} color 
 * @returns {boolean} 
 */

function isValidHex(color) {
    // if(color.startsWith('#')) {
    //   color = color.slice(1)
    // }
    return color.length === 6 && /^[0-9A-Fa-f]{6}$/i.test(color)
}
