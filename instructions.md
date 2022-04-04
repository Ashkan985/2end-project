There are two pages:
- the home pages, with a search


The TV show API to use:
https://www.tvmaze-com/api

Tasks:
- create a new repository (invite your coworker)
- create a first commit with the initial HTML/CSS
- make the home pages dynamic: search = load the tv shows list
--> https://api.tvmaze.com/search/shows?q={search-query}
- make the single page dynamic: when page loads get the query string and fetch the single movie info --> https://api.tvmaze.com/shows/{movieID}

For the single item page:
- we need a link with a query string: /single-item.html?movieid={movieID}
- on the single item page, get this id by using window.location.search
- then include the id to load a single movie info
