import React from 'react';
import { Link } from 'react-router-dom';

import ActorArticle, { IActorArticleData } from '../ActorArticle/ActorArticle';

import styles from './ActorGallery.module.css';

interface IActorGallery {
    actors: IActorArticleData[];
}

const ActorGallery = (props: IActorGallery ) => {
    const actorGallery = props.actors.map( (actor, index) => (
        <ActorArticle 
            key={index}
            posterPath={ actor.posterPath }
            name={ actor.name }
            character={ actor.character }
            id={ actor.id }
        />
    ));

    return (
        <section className={ styles.actorGallery }>
            {actorGallery}
        </section>
    );
};

export default ActorGallery;