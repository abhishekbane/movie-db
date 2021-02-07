import React, { useEffect, useState } from 'react';

import MovieGallery from '../../components/MovieGallery/MovieGallery';
import { IMovieArticleData } from '../../components/MovieArticle/MovieArticle';
import TabbedWindow, { FilterTypes } from '../../hoc/TabbedWindow/TabbedWindow';

import { useFilter } from '../../hooks/Fetch/Fetch';

import styles from './PagingBar.module.css';

interface IPagingBar {
    prevIconSrc?: string;
    nextIconSrc?: string;
    prevButtonText?: string;
    nextButtonText?: string
    disablePrevButton: boolean;
    disableNextButton: boolean;
    onPrevClick(): void;
    onNextClick(): void;
}

const MovieExplorer= ( props: IPagingBar ) => {

    return (
        <div className={ styles.pagingBar }>
            <button 
                className={ styles.pagingButton } 
                disabled={ props.disablePrevButton } 
                onClick={ () => props.onPrevClick() }
                >
                {`Previous`}
            </button>
            <button 
                className={ styles.pagingButton } 
                disabled={ props.disableNextButton } 
                onClick={ () => props.onNextClick() }>{`Next`}</button>
        </div>
    );
};

export default MovieExplorer;