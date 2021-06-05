# M4_D5_HW_REACT_GRP_PRO

_Team Project with Ingrid, Hedri, Janusz and Kapil_

#### _We had to copy our previous Netflix project from Module 3 and make it into React.Features to include were:_

- Create into components
- Minimum of 3 "gallaries/carousel" with your choice of theme (Harry Potter, Fast n Furios etc)
- Search component to search for other movies from API
- Loader components, validations & error handeling
- Use state and props
- when clicking movie, show comments
- add comments to movie (CRUD)
- Sort movies by release date (year)

**Initial distribution of work:**

###### _Hedri:_ Search feature

###### _Janusz:_ Gallaries

###### _Ingrid:_ Nav & Footer

###### _Kapil:_ Comments CRUD (Back Office)

I (Hedri), will be re-working this project to complete it with all extra request.
Original project with all members of group was last submitted on: 04 June 2021 on the develop branch.
[Original Repository Link](https://github.com/kapilthapliyal0001/M4_D5_HW_REACT_GRP_PRO/tree/develop)

### CURRENT PROJECT STATUS : In progress

<details><Summary>Full summary of homework brief<summary>
Today your Team Challenge will be about refactoring your previous Netflix project with ReactJS and remote fetchings.__

API INFO:

Register to http://www.omdbapi.com/

Once registered, you'll receive via email an api key.

The API has a search method:

http://www.omdbapi.com/?apikey=[YOUR API KEYHERE]&s=harry%20potter

This search returns an object like this:

<details>
<summary><em><h5>JSON example</h5></em></summary>   
{
"Search": [
    <ul>
<li>   {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "imdbID": "tt1201607",
        "Type": "movie",
        "Poster": "https://bit.ly/3sufYok"
    },</li>
<li>  {
        "Title": "Harry Potter and the Sorcerer's Stone",
        "Year": "2001",
        "imdbID": "tt0241527",
        "Type": "movie",
        "Poster": "https://bit.ly/3tTtx0H"
    },</li>
<li>  {
        "Title": "Harry Potter and the Chamber of Secrets",
        "Year": "2002",
        "imdbID": "tt0295297",
        "Type": "movie",
        "Poster": "https://bit.ly/31gVxzb"
    },</li>
<li>  {
        "Title": "Harry Potter and the Prisoner of Azkaban",
        "Year": "2004",
        "imdbID": "tt0304141",
        "Type": "movie",
        "Poster": "https://bit.ly/2QzHt1n"
    },</li>
],</ul>
<li>"totalResults": "80",</li>
<li>"Response": "True",</li>
}</details>

--> PLEASE NOTE THAT THE ARRAY WITH THE MOVIES IS INTO THE .Search PROPERTY OF THE RESPONSE <--

### _You have a CRUD endpoint for comments on:_

https://striveschool-api.herokuapp.com/api/comments/

This means you can GET, DELETE, POST, PUT data from there.

<details><summary>The Comment structure is this:<summary>
<li>{
"comment": "A good movie but definitely I don't like many parts of the plot",
"rate": 3,
"elementId": "tt1756545"
}</li>
</details>

Where:

comment is the text of the comment inserted by the user
rate is a value between 1 and 5
elementId is the imdbID of the movie / serie

<hr>
### Suggested steps:

- [ ] Start from the best old Netflix project your team members achieved in M2 and create the main page (with all the styles and the search bar)
- [ ] Create, using components, the several "galleries" for the movies (at least 3 galleries with 3 sagas you like (es.: Harry Potter, Lord of the Rings etc.))
- [ ] Implement a working search bar that triggers the APIs and propose the result.
- [ ] Implement loaders, form validation and error messages throughout the app
- [ ] [EXTRA] Implement empty state and loaders also for the search
- [ ] [EXTRA] When clicking on a movie show its Comment list
- [ ] [EXTRA] Let the user add a comment to a movie in the Comment list
- [ ] [EXTRA] Sort every AJAX response per Year (from newer to older)
<hr>
</details>
