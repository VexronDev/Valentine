
/* The Function to make the element visible after a delay */

function makeInvisible() {
  document.getElementById("Svg1").style.display = "none";
}

function makeVisible() {
  document.getElementById("Svg2").style.display = "block";
}

function makeInvisible2() {
  document.getElementById("Svg4").style.display = "none";
}

function makeInvisible3() {
  document.getElementById("Svg5").style.display = "none";
}

function makeVisible2() {
  document.getElementById("Svg5").style.display = "block";
}

function makeVisible5() {
  document.getElementById("backletter").style.display = "flex";
}


/* Set a timeout to call the function after a delay (in milliseconds) */

setTimeout(makeInvisible, 3700);
setTimeout(makeVisible, 3700);

const mySVG = document.getElementById('Svg2');


document.getElementById("Svg2").addEventListener('mouseenter', function()
{
  this.setAttribute('id','Svg3');
});

document.getElementById("Svg2").addEventListener('click', function()
{
  this.setAttribute('id','Svg4');
  setTimeout(makeInvisible2, 500);
  setTimeout(makeVisible2, 500);
  setTimeout(makeInvisible3, 4700);
  setTimeout(makeVisible5, 4700);
  setTimeout(Change1, 4700);
  setTimeout(DisplayFlex, 7700);
});

/* End of javascript for first two animations */
/*Another Function to start the typing animation (This should add some animation into the class if the thing is visible) */

/* Function to check Visibility of an element (only check for "block" and "flex" type) */


function CheckVisible(TargetID)
{
  const Target = document.getElementById(TargetID);
  if (window.getComputedStyle(Target).display == "block" || window.getComputedStyle(Target).display == "flex" )
  {
    return "True";
  }
  else
  {
    return "False";
  }

}

function easter21(){
  if(CheckVisible("nobutton2") == "True")
  {
    document.getElementById("nobutton2").textContent = "Click Yes >:";
  }
}

function easter22(){
  if(CheckVisible("nobutton2") == "True")
  {
    document.getElementById("nobutton2").textContent = "Stop";
  }
}

function easter23(){
  if(CheckVisible("nobutton2") == "True")
  {
    document.getElementById("nobutton2").textContent = "QwQ";
  }
}

function easter24(){
  if(CheckVisible("nobutton2") == "True")
  {
    document.getElementById("nobutton2").textContent = "Fine, chase it";
  }
}

function easter25(){
  if(CheckVisible("nobutton2") == "True")
  {
    document.getElementById("nobutton2").style.animation = "out2 1.5s ease-in-out forwards";
  }
}

function easter26(){
  if(CheckVisible("yesbutton") == "True")
  {
    document.getElementById("yesbutton").textContent = ":>";
  }
}

function easter27(){
  if(CheckVisible("yesbutton") == "True")
  {
    document.getElementById("yesbutton").textContent = "Ehehehe";
  }
}

function easter28(){
  if(CheckVisible("yesbutton") == "True")
  {
    document.getElementById("yesbutton").textContent = "Gotcha";
  }
}

function easter29(){
  if(CheckVisible("yesbutton") == "True")
  {
    document.getElementById("yesbutton").textContent = "Yes";
  }
}

function Change1()
{
  const message2nd1 = document.querySelector("#message2nd1")
  message2nd1.style.animation = "typing 3s steps(25), cursor 0.3s step-end infinite alternate ";
}


/* For Button Animation */


function DisplayFlex()
{
  document.getElementById("yesbutton").style.display = "flex";
  document.getElementById("yesbutton").style.animation = "real2 2s ease-in-out forwards";
  document.getElementById("nobutton").style.display = "flex";
  document.getElementById("nobutton").style.animation = "real2 2s ease-in-out forwards";
}


/* For The Escaping Button */


document.getElementById("nobutton").addEventListener('click', function()
{
  this.style.display = "none";
  document.getElementById("yesnodivider").style.display = "none";
  document.getElementById("nobutton2").style.display = "flex"; 
  setTimeout(easter21,10000);
  setTimeout(easter22,15000);
  setTimeout(easter23,20000);
  setTimeout(easter24,25000);
  setTimeout(easter25,48000);
  setTimeout(easter26,52000);
  setTimeout(easter27,55000);
  setTimeout(easter28,58000);
  setTimeout(easter29,61000);
});

const button = document.getElementById("nobutton2");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) 
{
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => 
{
  return Math.floor(Math.random() * (num + 1));
};


/* After Clicking Yes Button */


document.getElementById("yesbutton").addEventListener('click', function()
{
  document.getElementById("nobutton2").style.animation = "out2 1.5s ease-in-out forwards";
  document.getElementById("yesbutton").style.animation = "out2 1.5s ease-in-out forwards";
  document.getElementById("messageyesnodiv").style.animation = "out2 1.5s ease-in-out forwards";
  document.getElementById("message2nd1").style.animation = "out2 1.5s ease-in-out forwards";
  document.getElementById("buttoncont").style.animation = "out2 1.5s ease-in-out forwards";
  document.getElementById("yesnodivider").style.animation = "out2 1.5s ease-in-out forwards";
  
  setTimeout(removeall1, 1500);
  setTimeout(addletterin, 1500);
  setTimeout(addheartcon2in, 5800);
});

function addheartcon2in()
{
  document.getElementById("heartcon2").style.display = "block";
}


function addletterin()
{
  document.getElementById("letterin").style.display = "block";
}
function removeall1()
{
  document.getElementById("nobutton2").style.display = "none";
  document.getElementById("yesbutton").style.display = "none";
  document.getElementById("messageyesnodiv").style.display = "none";
  document.getElementById("message2nd1").style.display = "none";
  document.getElementById("buttoncont").style.display = "none";
  document.getElementById("yesnodivider").style.display = "none";
}


/* Heart Animation and Heart Click */
document.getElementById("heartcon2").addEventListener('mouseenter', function()
{
  const heart = document.getElementById("heartshape");
  heart.style.animation = "pulse 0.3s linear, pulse2 0.7s 0.3s infinite;"
  heart.setAttribute('class','heart');
});

document.getElementById("heartcon2").addEventListener('click', function()
{  
  document.getElementById("backletter").style.animation = "outrot 1.5s ease-in-out forwards";
  setTimeout(paper3, 1500);
  setTimeout(paper2, 3000);
  setTimeout(paper, 4500);
});

function paper(){
  document.getElementById("paper").style.display = "block";
  document.getElementById("paper").style.animation = "real2 1.5s forwards";
}

function paper2(){
  document.getElementById("paper2").style.display = "block";
  document.getElementById("paper2").style.animation = "real2 1.5s forwards";
}

function paper3(){
  document.getElementById("paper3").style.display = "block";
  document.getElementById("paper3").style.animation = "real2 1.5s forwards";
}



function removeall2()
{
  document.getElementById("backletter").style.display = "none";
}

document.getElementById("heartcon2").addEventListener('mouseleave', function()
{
  const heart = document.getElementById("heartshape");
  heart.setAttribute('class','heart2');
});

document.getElementById("paper").addEventListener('mouseenter', function()
  {
    document.getElementById("paper2").style.animation = "rotatepaperback 0.2s ease-in-out forwards";
    document.getElementById("paper2").style.opacity = "1";
    document.getElementById("paper3").style.animation = "rotatepaperback 0.2s ease-in-out forwards";
    document.getElementById("paper3").style.opacity = "1";
});

document.getElementById("paper").addEventListener('mouseleave', function()
  {
    document.getElementById("paper2").style.animation = "rotpaper2 0.7s ease-in-out forwards";
    document.getElementById("paper2").style.opacity = "1";
    document.getElementById("paper3").style.animation = "rotpaper3 0.7s ease-in-out forwards";
    document.getElementById("paper3").style.opacity = "1";
});

document.getElementById("easter1").addEventListener('click', function()
  {
    document.getElementById("easter1-1").style.display = "block";
    document.getElementById("easter1-1").style.animation = "real2 1.5s forwards";
    document.getElementById("easter1-2").style.display = "block";
    document.getElementById("easter1-2").style.animation = "real2 1.5s forwards";
  }
);
  