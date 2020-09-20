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




var tabButtonsone=document.querySelectorAll(".tabContainerone .buttonContainerone button");
var tabPanelsone=document.querySelectorAll(".tabContainerone .tabPanelone");

function showPanelone(panelIndex){
tabButtonsone.forEach(function(node) {
node.style.backgroundColor="";
node.style.color="";
});

tabButtonsone[panelIndex].style.backgroundColor="";
tabButtonsone[panelIndex].style.color="";
tabPanelsone.forEach(function(node) {
node.style.display="none";
});

tabPanelsone[panelIndex].style.display="block";
tabPanelsone[panelIndex].style.backgroundColor="";

}
showPanelone(0,'');