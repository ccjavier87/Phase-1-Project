//'Accept', 'application/json'

let joke = {
    getJoke: function () {
        fetch("https://icanhazdadjoke.com/search?term=" + searchTerm + "")
        .then((response) => response.json())
            .then((data) => console.log(data))

    }


}

