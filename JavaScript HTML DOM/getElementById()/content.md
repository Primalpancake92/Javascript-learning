The getElementbyId() method is a part of the document class, which acts on the document instance
you are working on.

This method returns the HTML element with a specific Id. Usually you would use this method in the 
following way:

const someElement = document.getElementById(someId);

The someId represents the id (string) of an element that is in the HTML document. However if there
is no argument provided the method will return 'null'.

Let's make an example.

Note that the only caveat with this method is when many elements have the same id, this method will
only return the first element that has this id. 