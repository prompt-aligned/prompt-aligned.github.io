let selectedArt = "boyar";
let selectedSub = "toy"
function onArtClick(event){
    newSelectedArt = event.target.parentNode.className;
    document.getElementsByClassName(selectedArt)[0].firstChild.className="artImage";
    document.getElementsByClassName(newSelectedArt)[0].firstChild.className="artImageSelected";
    selectedArt = newSelectedArt;
    document.getElementsByClassName("artResult")[0].firstChild.src=`data/art_inspired/${newSelectedArt}_${selectedSub}.jpg`;
}

function initArtSelection(){
    Array.from(document.getElementsByClassName("artImage")).forEach((e) => {e.addEventListener("click", onArtClick)});
    document.getElementsByClassName(selectedArt)[0].firstChild.className="artImageSelected";
}

function onSubjectClick(event){
    newSelectedSub = event.target.parentNode.className;
    document.getElementsByClassName(selectedSub)[0].firstChild.className="artRefImage";
    document.getElementsByClassName(newSelectedSub)[0].firstChild.className="artRefImageSelected";
    selectedSub = newSelectedSub;
    document.getElementsByClassName("artResult")[0].firstChild.src=`data/art_inspired/${selectedArt}_${selectedSub}.jpg`;
}

function initSubjectSelection(){
    Array.from(document.getElementsByClassName("artRefImage")).forEach((e) => {e.addEventListener("click", onSubjectClick)});
    document.getElementsByClassName(selectedSub)[0].firstChild.className="artRefImageSelected";
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
