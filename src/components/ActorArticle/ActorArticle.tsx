import React from 'react';
import { Link } from 'react-router-dom';

import OverviewArticle from '../UI/OverviewArticle/OverviewArticle';
import Poster from '../UI/Poster/Poster';
import RouterLink from '../UI/RouterLink/RouterLink';

import styles from './ActorArticle.module.css';

export interface IActorArticleData {
    id: number;
    posterPath: string;
    name: string;
    character?: string;
}

interface IActorArticle extends IActorArticleData {
}

const ActorArticle = ( props: IActorArticle ) => {

    const name = props.name.length > 18 ? props.name.slice(0, 15)+"..." : props.name;

    let character="";
    if(props.character){
        const splitCharacter = props.character.split('(', 2);
        character = splitCharacter.length===2 ? `(${splitCharacter[1].trim()} ${splitCharacter[0].trim()}` : props.character;
        character = character.length > 18 ? character.slice(0, 15)+"..." : character;
    }

    return (
        <OverviewArticle>
            <RouterLink to={"/actor/"+props.id}>
                <Poster src={ props.posterPath } alt={ props.name } />
                <div className={ styles.details }>
                    <h3 className={ styles.title }>{ name }</h3>
                    <h3 className={ styles.alias }>{ character }</h3>
                </div>
            </RouterLink>
        </OverviewArticle>
    );
};

export default ActorArticle;