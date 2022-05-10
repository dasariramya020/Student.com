function populat(selectObj)
{
// get the index of the selected option 
var idx = selectObj.selectedIndex; 
// get the value of the selected option 
var which = selectObj.options[idx].value;
const box=document.getElementById("");
box.setAttribute('name',which);

}