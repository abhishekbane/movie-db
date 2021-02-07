import React from 'react';

import MovieGallery from '../../components/MovieGallery/MovieGallery';

import { IMovieArticleData } from '../../components/MovieArticle/MovieArticle';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import SubSection from '../../components/UI/SubSection/SubSection';
import ScrollableSection from '../../components/UI/ScrollableSection/ScrollableSection';

import styles from './ActorDetails.module.css';

export interface IActorDetailsData {
    id: number;
    name: string;
    posterSource: string;
    biography: string;
    placeOfBirth: string;
    birthdate: string;
    movies: IMovieArticleData[];
}

interface IActorDetails {
    actor: IActorDetailsData;
}

const ActorDetails = ( props: IActorDetails ) => {
    return (
        <ScrollableSection>
            <DetailsCard
                posterSource={ props.actor.posterSource } 
                posterAlt={ props.actor.name }
                title={ props.actor.name } >
                <SubSection title="Born:">
                    <p className={ styles.paragraph }>{ props.actor.placeOfBirth }</p>
                    <p className={ styles.paragraph }>{ props.actor.birthdate }</p>
                </SubSection>
            </DetailsCard>
            
            <SubSection title="Biography">
                <p className={ styles.paragraph }>{ props.actor.biography }</p>
            </SubSection>

            <SubSection title="Movies">
                <MovieGallery movies={ props.actor.movies } />
            </SubSection>
        </ScrollableSection>
    );
};

export default ActorDetails;