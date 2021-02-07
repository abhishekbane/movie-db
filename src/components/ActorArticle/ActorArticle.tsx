import React from 'react';

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
    return (
        <article>
            <img src={ props.posterPath } alt={ props.name }/>
            <h3>{ props.name }</h3>
            <h3>{ props.character }</h3>
        </article>
    );
};

export default ActorArticle;