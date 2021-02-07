import React, { useState } from 'react';

import { IMovieArticleData } from '../../components/MovieArticle/MovieArticle';
import { IMovieDetailsData } from '../../containers/MovieDetails/MovieDetails';
import { IActorArticleData } from '../../components/ActorArticle/ActorArticle';
import { IActorDetailsData } from '../../containers/ActorDetails/ActorDetails';

import { FilterTypes } from '../../hoc/TabbedWindow/TabbedWindow';

export enum TrendingDuration {
    Today = "day",
    Week = "week"
}

export const IMAGE_PARENT_URL = "https://image.tmdb.org/t/p/w185";

const API_ORIGIN = "https://api.themoviedb.org/3";
const API_KEY = "api_key=60c713cb032d351520ee1b18537262f5";

let pageFilter=1;
let selectedFilter="";

export const useFilter = () => {

    const [ movies, setMovies ] = useState([] as IMovieArticleData[]);
    const [ prevPageFilter, setPrevPageFilter ] = useState(0);
    const [ nextPageFilter, setNextPageFilter ] = useState(2);

    const setMoviesBasedOnFilter = async( filterType: FilterTypes, page?: number ) => {
        let apiUrl = API_ORIGIN;
        
        pageFilter = page ? page : 1;
        selectedFilter = filterType;
        setPrevPageFilter(pageFilter-1);
        setNextPageFilter(pageFilter+1);

        switch(filterType) {
            case FilterTypes.TrendingToday:
                apiUrl+='/trending/movie/'+TrendingDuration.Today;
                break;
            case FilterTypes.TrendingThisWeek:
                apiUrl+='/trending/movie/'+TrendingDuration.Week;
                break;
            case FilterTypes.Popular:
                apiUrl+='/movie/popular';
                break;
            default:
                return;
        }

        try {
            const response = await fetch( `${apiUrl}?${API_KEY}&page=${pageFilter}`);
            const result: any = await response.json();
            const movies: IMovieArticleData[] = result.results.map( (movie: any): IMovieArticleData => (
                {
                    title: movie.title,
                    id: movie.id,
                    posterSource: IMAGE_PARENT_URL+movie.poster_path,
                    isAdult: movie.adult,
                    rating: movie.vote_average
                }
            ) );
            setMovies(movies);
        }
        catch {
            alert( "Couldn't fetch your movies" );
        }
    };

    const setNextMoviesBasedOnFilter = () => {
        debugger;
        setPrevPageFilter(pageFilter);
        if( pageFilter < 1000 ) {
            setNextPageFilter(++pageFilter);
        }
        else {
            setNextPageFilter(0);
        }
        setMoviesBasedOnFilter( selectedFilter as FilterTypes, pageFilter );
    };

    const setPrevMoviesBasedOnFilter = () => {
        setNextPageFilter(pageFilter);
        if( pageFilter > 1 ){
            setPrevPageFilter(--pageFilter);
        }
        else {
            setPrevPageFilter(0);
        }

        setMoviesBasedOnFilter( selectedFilter as FilterTypes, pageFilter );
    };

    const setMoviesBasedOnSearch = async( searchTerm: string ) => {
        const validSearchTerm = searchTerm.split(" ").reduce( ( acc, current ) => (acc+"+"+current) );
        console.log(validSearchTerm);
        const apiUrl = API_ORIGIN + `/search/movie?${API_KEY}&query=${validSearchTerm}`;

        try {
            const response = await fetch( apiUrl );
            const result: any = await response.json();
            const movies: IMovieArticleData[] = result.results.map( (movie: any): IMovieArticleData => (
                {
                    title: movie.title,
                    id: movie.id,
                    posterSource: IMAGE_PARENT_URL+movie.poster_path,
                    isAdult: movie.adult,
                    rating: movie.vote_average
                }
            ) );
            setMovies(movies);
        }
        catch {
            alert( "Couldn't fetch your movies" );
        }

    };

    return {
        movies,
        prevPageFilter,
        nextPageFilter,
        setMoviesBasedOnFilter,
        setNextMoviesBasedOnFilter,
        setPrevMoviesBasedOnFilter,
        setMoviesBasedOnSearch
    };

};

export const useFindActorById = (defaultValue: IActorDetailsData): [ IActorDetailsData, (id: number) => Promise<void> ] => {
    const [ actor, setActor ] = useState(defaultValue);

    const setActorWithId = async(id: number) => {
        let apiUrl = API_ORIGIN+`/person/${id}?${API_KEY}&append_to_response=movie_credits`;
        try{
            const response = await fetch( apiUrl );
            const result = await response.json();

            const localActor: IActorDetailsData = {
                id: result.id,
                name: result.name,
                posterSource: IMAGE_PARENT_URL+result.profile_path,
                biography: result.biography,
                placeOfBirth: result.place_of_birth,
                birthdate: result.birthday,
                movies: result.movie_credits.cast.map( (movie: any): IMovieArticleData  => (
                    {
                        id: movie.id,
                        title: movie.title,
                        posterSource: IMAGE_PARENT_URL+movie.poster_path,
                        isAdult: movie.adult,
                        rating: movie.vote_average,
                    }
                ) )
            };

            setActor( localActor );
        }
        catch {
            alert( "Couldn't fetch your movies" );
        }
    };

    return [
        actor,
        setActorWithId
    ];
}

export const useFindMovieById = (defaultValue: IMovieDetailsData): [ IMovieDetailsData, (id: number) => Promise<void> ] => {
    const [ movie, setMovie ] = useState(defaultValue);

    const setMovieWithId = async( id: number ) => {
        let apiUrl = API_ORIGIN+`/movie/${id}?${API_KEY}&append_to_response=credits`
        try {
            const response = await fetch( apiUrl );
            const result = await response.json();
            const localMovie: IMovieDetailsData = {
                    title: result.title,
                    posterSource: IMAGE_PARENT_URL+result.poster_path,
                    isAdult: result.adult,
                    overview: result.overview,
                    rating: result.vote_average,
                    status: result.status,
                    releaseDate: result.release_date,
                    runtime: result.runtime,
                    actors: result.credits.cast.map( (actor: any): IActorArticleData => (
                        {
                            id: actor.id,
                            posterPath: IMAGE_PARENT_URL+actor.profile_path,
                            name: actor.name,
                            character: actor.character
                        }
                    ) )
                }
            setMovie(localMovie);
        }
        catch {
            alert( "Couldn't fetch your movies" );
        }
        
    }

    return [
        movie,
        setMovieWithId
    ];
}