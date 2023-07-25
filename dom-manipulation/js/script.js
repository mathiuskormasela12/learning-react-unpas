// Select a div element that has id app
const app = document.getElementById('app');

// Create a new heading element (h1)
const title = document.createElement('h1');

// Ceate text node element for heading element
const text = document.createTextNode('Belajar React bareng WPU');

// Append text node to the heading element
title.appendChild(text);

// Append heading element to app
app.appendChild(title);