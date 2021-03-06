
let colors = ["#40E0D0","#FF7F50","#6495ED","#FFBF00","#DE3163","#FFA600","#B200FF","#FF005D","#5694EE","#72E824"];
let i = 0;
document.querySelector("a").addEventListener("click", () => {
    let color = getRandomGradient();
    if (Math.random() < 0.5) {
        i = i < colors.length - 1 ? ++i : 0;
        color = colors[i];
    }
    document.querySelector("body").style.background = color;
});

function getRandomGradient() {
    const random1 = Math.floor(Math.random() * colors.length);
    const random2 = Math.floor(Math.random() * colors.length);
    const degree = Math.floor(Math.random() * 360);
    return `linear-gradient(${degree}deg, ${colors[random1]}, ${colors[random2]})`
}

/*
let color = ["#40E0D0","#FF7F50","#6495ED","#FFBF00","#DE3163","#FFA600","#B200FF","#FF005D","#5694EE","#72E824"];
let i = 0;
document.querySelector("p").addEventListener("click", () => {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
});

*/
const button = document.querySelector('a');
button.addEventListener('click', function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

     setTimeout(() => {
         ripples.remove()
        },1000);
     })

function userInputColor(){
    let color = document.getElementById("input").value;
    document.body.style.backgroundColor = color;
    document.getElementById("input").value = ''
}


