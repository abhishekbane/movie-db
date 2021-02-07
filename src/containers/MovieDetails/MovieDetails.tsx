import React, { useEffect } from 'react';

import ActorGallery from '../../components/ActorGallery/ActorGallery';
import DetailsCard from '../../components/DetailsCard/DetailsCard';

import { IActorArticleData } from '../../components/ActorArticle/ActorArticle';

import styles from './MovieDetails.module.css';
import SubSection from '../../components/UI/SubSection/SubSection';
import ScrollableSection from '../../components/UI/ScrollableSection/ScrollableSection';

export interface IMovieDetailsData {
    posterSource: string;
    title: string;
    overview: string;
    rating: string;
    isAdult: boolean;
    status: string;
    actors: IActorArticleData[];
}

export interface IMovieDetails{
    movie: IMovieDetailsData;
}

const MovieDetails = ( props: IMovieDetails ) => {

    return (
        <ScrollableSection>
            <DetailsCard 
                title={props.movie.title} 
                posterSource={ props.movie.posterSource }
                posterAlt={ props.movie.title } >
                    <p className={ styles.paragraph }>{ props.movie.status }</p>
                    <p  className={ styles.paragraph }>{ props.movie.rating }</p>
            </DetailsCard>

            <SubSection title="Synopsis">
                <p className={ styles.paragraph }>{ props.movie.overview }</p>
            </SubSection>
                
            <SubSection title="Actors">
                <ActorGallery actors={ props.movie.actors } />
            </SubSection>
        </ScrollableSection>
    )
};

export default MovieDetails;