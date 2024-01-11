let selectedArt = "boyar";

function onArtClick(event){
    newSelectedArt = event.target.parentNode.className;
    document.getElementsByClassName(selectedArt)[0].firstChild.className="artImage";
    document.getElementsByClassName(newSelectedArt)[0].firstChild.className="artImageSelected";
    selectedArt = newSelectedArt;
    document.getElementsByClassName("toyResult")[0].firstChild.src=`data/art_inspired/${newSelectedArt}_toy.jpg`;
    document.getElementsByClassName("catResult")[0].firstChild.src=`data/art_inspired/${newSelectedArt}_cat.jpg`;
}

function initArtSelection(){
    Array.from(document.getElementsByClassName("artImage")).forEach((e) => {e.addEventListener("click", onArtClick)});
    document.getElementsByClassName(selectedArt)[0].firstChild.className="artImageSelected";
}

function getOther(className)
{
    if (className  == "personalization"){
        return "alignment";
    }
    return "personalization";
}
function hoverEffect(event)
{
    hoverClassName = event.target.className;
    otherClassName = getOther(hoverClassName);
    elist = Array.from(document.getElementsByClassName(otherClassName));
    elist.forEach((e) => {e.style.opacity = 0.1;});
}

function unHoverEffect(event)
{
    hoverClassName = event.target.className;
    otherClassName = getOther(hoverClassName);
    elist = Array.from(document.getElementsByClassName(otherClassName));
    elist.forEach((e) => {e.style.opacity = 1.0;});
}


function registerEventListeners(element)
{
    element.addEventListener(
        "mouseenter",
        hoverEffect,
        false,
      );
      element.addEventListener(
        "mouseleave",
        unHoverEffect,
        false,
      );
}

var test = Array.from(document.getElementsByClassName("personalization"));
test.forEach(registerEventListeners);

var test = Array.from(document.getElementsByClassName("alignment"));
test.forEach(registerEventListeners)
