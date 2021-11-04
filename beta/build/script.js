function clickFunction()
  {
    const element = document.getElementById('sub');
    element.classList.toggle("sub-click");

    if (element.innerHTML === "SUBSCRIBE") {
      element.innerHTML = "SUBSCRIBED";
    } else {
      element.innerHTML = "SUBSCRIBE";
    }
}
