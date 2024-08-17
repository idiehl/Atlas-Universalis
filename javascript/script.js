//Adding Label Headers to the evolution grid//

function speciesLabels() {

const ancestorlabel = ["Species","Chronology", "Industry", "Height", "Characteristics"];

ancestorlabel.forEach(bindCol);

function bindCol(column, index, array) {
  
  var number = document.createTextNode(column);
  
  var ancestorlabel = document.createElement("div");
  
  ancestorlabel.className = "ancestorlabel";
  
  let txt = document.createElement("h1");
  
  txt.appendChild(number);
  ancestorlabel.appendChild(txt);
  document.querySelector(".evolutionheader").appendChild(ancestorlabel) 
}}

speciesLabels();0