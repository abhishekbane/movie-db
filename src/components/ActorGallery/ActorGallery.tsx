import React from 'react';
import { Link } from 'react-router-dom';

import ActorArticle, { IActorArticleData } from '../ActorArticle/ActorArticle';

interface IActorGallery {
    actors: IActorArticleData[];
}

const ActorGallery = (props: IActorGallery ) => {
    const actorGallery = props.actors.map( actor => (
        <ActorArticle 
            posterPath={ actor.posterPath }
            name={ actor.name }
            character={ actor.character }
            id={ actor.id }
        />
    ));

    return (
        <section>
            {actorGallery}
        </section>
    );
};

export default ActorGallery;