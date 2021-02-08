# Movie-DB
### The web app project is divided into two major chunks
- Web app UI
- Custom Hooks
### UI Components
    The UI components follow a flow.
    1. The web app consists of a Layout component which has a header component in it.
    2. the rest of the space is reserved for the content area.
    3. The content area is switched from home page to the movie details page or to actor details page using react-router.
#### The UI components are segregated based on 4 types
- Basic UI ( more on UI components [here](https://github.com/abhishekbane/movie-db/tree/main/src/components/UI) )
- components ( more on components [here](https://github.com/abhishekbane/movie-db/tree/main/src/components) )
- containers ( more on containers [here](https://github.com/abhishekbane/movie-db/tree/main/src/containers) )
- hoc ( more on hoc [here](https://github.com/abhishekbane/movie-db/tree/main/src/hoc) )
### Custom hooks
The hooks are used to fetch filtered data or to search movies based on user keywords. 
( more on hooks [here](https://github.com/abhishekbane/movie-db/tree/main/src/hooks) ).
### Theme
css variables used for theme colours are,
- --dark-colour: #292827; 
- --semidark-colour: #3b3a39;
- --light-colour: #edebe9;
- --primary-colour: #0078d4;
- --primary-colour-translucent: rgba( 0, 120, 212, 0.2 );
these variables are added in index.css