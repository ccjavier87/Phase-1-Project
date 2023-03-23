//'Accept', 'application/json'

let joke = {
    getJoke: function () {
        fetch("https://icanhazdadjoke.com/search?term=" + searchTerm + "")
        .then((response) => response.json())
            .then((data) => console.log(data))

    },

    //get a random joke (prefer when loading page)
    getRandom: function () {},

    //search for a joke
    searchJoke: function () {},

    //display the joke searched
    displayJoke: function () {}

};

//random joke happens when page is loaded
//when random button is clicked/selected, run random joke function
document.querySelector("#randomButton").addEventListener("click", function () {
    joke.getRandom();
});

//search for a joke when type in search bar
//search for a joke when search button selected
//run random joke if search bar is empty

joke.getJoke();