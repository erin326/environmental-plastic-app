
import {useEffect, useState} from 'react';
import ItemCard from './ItemCard';


function ItemList({items, setItems}) {
    
    

    // useEffect(() => {
    //     fetch('/api/items')
    //     .then((r) => r.json())
    //     .then((data) => console.log((data)));


    // },[])

    return(
        <>
       {/* {items.length > 0 ? (
        items.map((item) => (
            <ItemCard  key={item.id} item={item}/>
        ))
       ) : null} */}
        </>
    )
}

export default ItemList;