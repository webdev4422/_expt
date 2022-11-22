// Select node
const header = document.querySelector('.header')
// Attach shadow DOM - BREAK HTML!!! - it's removing node below host ?!
const shadowRoot = header.attachShadow({mode: 'open'})
// Define content
const myContent = document.createElement('div');
myContent.innerHTML =
`
<div class='shadow-style' style='background: turquoise;'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
`
// Define style
const myStyle = document.createElement('div');
myStyle.innerHTML =
`
<style>
.shadow-style {
  background: turquoise;
  color: red;
}
</style>
`
// Add content shadow DOM
shadowRoot.appendChild(myContent)
// Add style to content
myContent.appendChild(myStyle)