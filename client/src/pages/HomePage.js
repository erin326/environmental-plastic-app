import {useEffect, useReducer} from 'react';
import ItemList from '../components/ItemList';

function HomePage({user}) {

    useEffect(() => {
        fetch('https://data.edmonton.ca/resource/444z-a7fx.json')
        .then((r) => r.json())
        .then((data) => console.log(data))

    },[]);

    return(
        <>
        <p>Welcome {user.username}!</p>

        <h2>Recycled Items</h2>
       <ItemList />
        </>
    )
}

export default HomePage;