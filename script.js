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

joke.getJoke();