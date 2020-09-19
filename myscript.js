var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex){
tabButtons.forEach(function(node) {
node.style.backgroundColor="";
node.style.color="";
});

tabButtons[panelIndex].style.backgroundColor="";
tabButtons[panelIndex].style.color="";
tabPanels.forEach(function(node) {
node.style.display="none";
});

tabPanels[panelIndex].style.display="block";
tabPanels[panelIndex].style.backgroundColor="";

}
showPanel(0,'');

