# Containers
##### The ActorDetails/MovieDetails has two components
- ActorDetails/MovieDetails
Can be used by passing actor/movie information as props.

- ActorDetailsPage/MovieDetailsPage
Wraps the ActorDetails/MovieDetailsPage component. This component takes actor/movie id from the router params and fetches the actor/movie information and then passes it to the ActorDetails/MovieDetails component as props.

##### The MovieExplorer component is the homepage
- It is a self contained component and needs no props to be passed.
- It takes user input from TabbedWindow, like filter type of movies and user search query and uses custom hooks to fetch movies.
- It also has its own pagination input to fetch multiple pages.

##### The Layout component helps share common UI across pages
- The Layout component has the Header component.
- It wraps other components to share the header with them.