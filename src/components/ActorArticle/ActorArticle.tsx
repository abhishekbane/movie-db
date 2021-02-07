import React from 'react';
import { Link } from 'react-router-dom';

export interface IActorArticleData {
    id: number;
    posterPath: string;
    name: string;
    character?: string;
}

interface IActorArticle extends IActorArticleData {
    onClick( id: number ): void;
}

const ActorArticle = ( props: IActorArticleData ) => {

    const name = props.name.length > 20 ? props.name.slice(0, 18)+"..." : props.name;

    return (
        <article>
            <Link to={"/actor/"+props.id}>
                <img src={ props.posterPath } alt={ props.name }/>
                <h3>{ props.name }</h3>
                <h3>{ props.character }</h3>
            </Link>
        </article>
    );
};

export default ActorArticle;