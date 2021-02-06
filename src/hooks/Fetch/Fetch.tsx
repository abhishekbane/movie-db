import React, { useState } from 'react';
import { IMovieArticle } from '../../components/MovieArticle/MovieArticle';

import { FilterTypes } from '../../components/UtilityBar/UtilityBar';

export enum TrendingDuration {
    Today = "day",
    Week = "week"
}

export const IMAGE_PRENT_URL = "https://image.tmdb.org/t/p/w185";

const API_ORIGIN = "https://api.themoviedb.org/3";
const API_KEY = "api_key=60c713cb032d351520ee1b18537262f5";

export const useFilter = (): [ IMovieArticle[], (filterType: FilterTypes) => Promise<void> ] => {

    const [ movies, setMovies ] = useState([] as IMovieArticle[]);

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
            const movies: IMovieArticle[] = result.results.map( (movie: any): IMovieArticle => (
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

export const useSearch = (): [ IMovieArticle[], (searchTerm: string) => Promise<void> ] => {
    const [ movies, setMovies ] = useState([] as IMovieArticle[]);

    const setMoviesBasedOnSearch = async( searchTerm: string ) => {
        const validSearchTerm = searchTerm.split(" ").reduce( ( acc, current ) => (acc+"+"+current) );
        console.log(validSearchTerm);
        const apiUrl = API_ORIGIN + `/search/movie?${API_KEY}&query=${validSearchTerm}`;

        try {
            const response = await fetch( apiUrl );
            const result: any = await response.json();
            const movies: IMovieArticle[] = result.results.map( (movie: any): IMovieArticle => (
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
        setMoviesBasedOnSearch
    ];
};