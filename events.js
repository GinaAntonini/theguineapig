console.log("my js");


// Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// ✏️ Output target is the output-target element.

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

// When you type characters into the input field, the output element should mirror the text in the input field.

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById('add-color').addEventListener('click', changeColor);

function changeColor() {
    this.style.color = "blue";
    return false;
}
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener('click', hulkifyFont);

function hulkifyFont() {
    this.style.fontSize = "larger";
    return false;
}
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener('click', addAborder);

function addAborder() {
    this.style.border = "thick solid blue";
    return false;
}
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener('click', makeRounded);

function makeRounded() {
    this.style.borderRadius = "20%";
    return false;
}
// The first section's text should be bold.

// The last section's text should be bold and italicized.

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
