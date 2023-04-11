## Phase-1-Project

# Some goals
- Design and architect features across a frontend (I'm guessing the look and feel, and style of the html page)
- Integrate JavaScript and an external API
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

# App structure
- Background related to Dad Jokes
- Get a random joke. Especiallu when page first loads.
- Have a random button that produces a random joke.
- Have a search button exist.
- Have users search for a joke.
- Search button does something when mouse is hovering over the buttons.
- Fetch a random joke if the search bar is empty.

Background: url(https://source.unsplash.com/random/?father+child)
- new background made on page refresh
- background is fixed with details in style.css

Fonts: href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Open+Sans&family=Permanent+Marker&display=swap"

# JS functions

- 
- getData: fetches api data and turns into json. However, the api has a limit of 20 jokes to return per page.
- allJokes: uses fetched data and iterates through it. There is a maximum of 20 jokes provided per page, therefore to get all jokes, we must iterate through each page starting with "page = 1" as the passed element. With each iteration We then push jokes in the page into the "jokeBox" array. jokeBox array is declared at the top of the script. Once all jokes have been collected, jokeBox will be our main joke source. This function is triggered when DOM is loaded. 
- filterJokes: uses ".filter" to sort through jokeBox for jokes that include values that have been input into the search bar (i.e. pants). With the getJoke() function, we can get a random item from the filtered jokes array.
    If the value of the input is blank or "", then all jokes will be searched through. A joke list is present to display other jokes available. If the list of jokes is greater than 5 (>5), then we display on 5 random jokes. If the list size is less than or equal to 5 (<=5>), then we display the list of jokes up to the length of the array. Each joke is given a new "li" and displayed.
- getJoke: picks a random item from the array of jokes passed into it.

# Event Listeners
- randomButton: triggered with "click", and changes image when mouse hovers over it.
- searchButton: triggered with "click" and runs filterJokes function where the search bar value/input is taken as the filter parameter. The button also changes opacity when mouse hovers over it.
- search bar event listener for when the "Enter" key is pressed. This will trigger the searchButton function and produce a joke that includes the search value, or a random joke if the search value is blank