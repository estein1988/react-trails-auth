import React, {useEffect} from 'react'
import CardsContainer from './CardsContainer'

export default function Home(props){

    useEffect(() => {
        props.fetchModels()
    }, [])
    
        return(
            <div>
            <div>
                <h1>Welcome {props.user.username}!</h1>
            </div>
            <CardsContainer fetchModels={props.fetchModels} allTrails={props.allTrails}/>
            </div>
        );
}