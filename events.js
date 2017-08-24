var outputTargetDiv = document.getElementById("output-target");
var sectionContainer = document.getElementById("section-container");
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

sectionContainer.addEventListener('click', function(event){
	outputTargetDiv.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
});

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
document.getElementById('page-title').addEventListener('mouseenter', function(){
	outputTargetDiv.innerHTML = "You moved your mouse over the header";
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById('page-title').addEventListener('mouseout', function(){
	outputTargetDiv.innerHTML = "You left me!!";
});

// When you type characters into the input field, the output element should mirror the text in the input field.
var inputField = document.getElementById('keypress-input');
	inputField.addEventListener('keypress', function(e){
		console.log(e);
		outputTargetDiv.innerHTML = e.target.value;
	});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var guineaPigElement = document.getElementById('guinea-pig');

document.getElementById('add-color').addEventListener('click', changeColor);

function changeColor() {
    guineaPigElement.classList.toggle('color');
}
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener('click', hulkifyFont);

function hulkifyFont() {
    guineaPigElement.classList.toggle('hulkify');
}
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener('click', addAborder);

function addAborder() {
    guineaPigElement.classList.toggle('addTheBorder');
}
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener('click', makeRounded);

function makeRounded() {
    guineaPigElement.classList.toggle('border-radius');
}
// The first section's text should be bold.
// The last section's text should be bold and italicized.

function sectionStyles() {
	var child = sectionContainer.children;
	for(var i = 0; i < child.length; i++){

if (i === 0) {
	child[i].classList.add('firstSectionBold');
} else if (i === 5) {
		child[i].classList.add('lastSectionBoldAndItalic');
	}
}
}

sectionStyles(sectionContainer);

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
// var theButtons = document.getElementById('buttons');
// function changeButtons() {
// 	var children = document.body.childNodes;
// 	for (var i = 0; i < children.length; i++) {
// 	console.log(children[i]);
// }
// }
// changeButtons();




