import React from 'react';
import { Link } from 'react-router-dom';

import ActorArticle, { IActorArticleData } from '../ActorArticle/ActorArticle';

interface IActorGallery {
    actors: IActorArticleData[];
}

const ActorGallery = (props: IActorGallery ) => {

    const actorGallery = props.actors.map( actor => (
        <Link key={actor.id} to={"/actor/"+actor.id}>
            <ActorArticle 
                posterPath={ actor.posterPath }
                name={ actor.name }
                character={ actor.character }
                id={ actor.id }
            /> 
        </Link>
        
    ));

    return (
        <section>
            {actorGallery}
        </section>
    );
};

export default ActorGallery;