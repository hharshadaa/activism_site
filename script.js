/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps. As a student, my learning now depends on my access to the internet. For example, " + learning + ". Please support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps.";
}

//Move these variables to the top
var factList = [
  "The four types of depression are situational, biological, psychological and existential, each of which has its own primary causes", 
  "Ever having been diagnosed with either anxiety or depression” among children aged 6–17 years increased from 5.4% in 2003 to 8% in 2007 and to 8.4% in 2011–2012", 
  "A national WebMD survey found that parents rate school and friends as the biggest sources of stress in their kids' lives. The survey also found that 72% of children have negative behaviors linked to stress, and 62% have physical symptoms linked to it, such as headaches and stomachaches"
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
