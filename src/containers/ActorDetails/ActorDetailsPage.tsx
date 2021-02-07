import React, { useEffect } from 'react';

import ActorDetails from './ActorDetails';

import { useFindActorById } from '../../hooks/Fetch/Fetch';

import { RouteComponentProps } from 'react-router-dom';

const ActorDetailsPage = ( props?: RouteComponentProps ) => {
    const [ actor, setActor ] = useFindActorById(null as any);

    useEffect( () => {
        setActor( (props?.match.params as any).id );
    }, [ (props?.match.params as any).id ] );

    const actorDetails = actor ? <ActorDetails actor={ actor } /> : null;
    
    return actorDetails;
};

export default ActorDetailsPage;