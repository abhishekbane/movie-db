import React, { useState } from 'react';

import { IMovieArticleData } from '../../components/MovieArticle/MovieArticle';
import { IMovieDetailsData } from '../../containers/MovieDetails/MovieDetails';

import { FilterTypes } from '../../components/UtilityBar/UtilityBar';

export enum TrendingDuration {
    Today = "day",
    Week = "week"
}

export const IMAGE_PRENT_URL = "https://image.tmdb.org/t/p/w185";

const API_ORIGIN = "https://api.themoviedb.org/3";
const API_KEY = "api_key=60c713cb032d351520ee1b18537262f5";

export const useFilter = (): [ IMovieArticleData[], (filterType: FilterTypes) => Promise<void> ] => {

    const [ movies, setMovies ] = useState([] as IMovieArticleData[]);

    const setMoviesBasedOnFilter = async( filterType: FilterTypes ) => {
        let apiUrl = API_ORIGIN;

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
            const response = await fetch( `${apiUrl}?${API_KEY}`);
            const result: any = await response.json();
            const movies: IMovieArticleData[] = result.results.map( (movie: any): IMovieArticleData => (
                {
                    title: movie.title,
                    movieId: movie.id,
                    posterSource: IMAGE_PRENT_URL+movie.poster_path,
                    isAdult: movie.adult
                }
            ) );
            setMovies(movies);
        }
        catch {
            alert( "Couldn't fetch your movies" );
        }
    };

    return [
        movies,
        setMoviesBasedOnFilter
    ];

};

export const useSearch = (): [ IMovieArticleData[], (searchTerm: string) => Promise<void> ] => {
    const [ movies, setMovies ] = useState([] as IMovieArticleData[]);

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
                    movieId: movie.id,
                    posterSource: IMAGE_PRENT_URL+movie.poster_path,
                    isAdult: movie.adult
                }
            ) );
            setMovies(movies);
        }
        catch {
            
        }

    };

    return [
        movies,
        setMoviesBasedOnSearch
    ];
};

export const useFindActorById = () => {
    const [ movie, setMovie ] = useState();

}

export const useFindMovieById = (): [ IMovieDetailsData, (id: number) => Promise<void> ] => {
    const [ movie, setMovie ] = useState({} as IMovieDetailsData);

    const setMovieWithId = async( id: number ) => {
        let apiUrl = API_ORIGIN+`/movie/${id}?${API_KEY}`
        try {
            const response = await fetch( apiUrl );
            const result = await response.json();
            const movie: IMovieDetailsData = {
                    title: result.title,
                    posterSource: IMAGE_PRENT_URL+result.poster_path,
                    isAdult: result.adult,
                    overview: result.overview,
                    rating: result.vote_average,
                    status: result.status
                }
            setMovie(movie);
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