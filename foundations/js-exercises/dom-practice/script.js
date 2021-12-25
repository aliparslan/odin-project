// given example code
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style['color'] = 'red';
container.appendChild(p);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style['color'] = 'blue';
container.append(h3);

// 3. a <div> with a black border and pink background color with the 
//    following elements inside of it:
//  1. another <h1> that says “I’m in a div”
//  2. a <p> that says “ME TOO!”
//  3. Hint for this one: after creating the div with createElement, append
//     the <h1> and <p> to it before adding it to the container.
const div = document.createElement('div')
document.body.append(div);
div.style['border'] = '1px solid black';
div.style['background-color'] = 'pink';

header2 = document.createElement('h1');
div.appendChild(header2);
header2.textContent = "I'm in a div"

p2 = document.createElement('p');
p2.textContent = "ME TOO!";
div.appendChild(p2);
