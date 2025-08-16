Every HTML element can have a 'name' attribute, just like the 'id' attribute.
However, many HTML elements can have the same name attribute unlike the 'id'
attribute.

To target all HTML elements with the same name attribute, you can use the 
getElementByName() method, as such:

const someName = document.getElementByName(name);

It returns a NodeList of elements, which is a live collection.