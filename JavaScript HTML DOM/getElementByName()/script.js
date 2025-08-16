const nameStuff = document.getElementsByName("someName");

// This for loop prints out the tag content of each NodeList from 'nameStuff'.
nameStuff.forEach((name) => {
    console.log(name.innerHTML);
});