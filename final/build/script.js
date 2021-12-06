function clickFunction()
  {
    const element = document.getElementById('sub');
    const ring = document.getElementById('bell');

    element.classList.toggle("sub-click");
    ring.classList.add("grow");

    if (element.innerHTML === "SUBSCRIBE") {
        element.innerHTML = "SUBSCRIBED";
    } else {
      element.innerHTML = "SUBSCRIBE";
      ring.classList.remove("ringOnce");
      ring.classList.remove('grow');
    }
}

function bellClick()
  {
    const element = document.getElementById('bell');
    element.classList.toggle("ringOnce");
    element.classList.remove('grow');
  }
  

function bellInvis()
  {
    const element = document.getElementById('bell');
    element.classList.toggle("invis");
  }

function audio() {

}