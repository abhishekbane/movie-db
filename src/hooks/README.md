# Hooks
### Fetch
Has the following hooks,
#### useFilter() hook
contains,
##### setMoviesBasedOnFilter(filterType: FilterTypes, page?: number)
Fetches movies based on the passed in filterType, and (optional) page number.
##### setNextMoviesBasedOnFilter()
Fetches next page of movies based on the current filterType.
##### setPrevMoviesBasedOnFilter()
Fetches previous page of movies based on the current filterType.
##### setMoviesBasedOnSearch(searchTerm: string)
Fetches movies based on user search keywords. It retreives movies with matching titles.

#### useFindActorById() hook
contains,
##### setActorWithId( id: number )
fetches detailed actor information based on actor id passed in.

#### useFindMovieById()
contains,
##### setMovieWithId( id: number )
fetches detailed movie information based on movie id passed in.