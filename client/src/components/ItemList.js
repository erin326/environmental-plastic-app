
import {useEffect, useState} from 'react';
import ItemCard from './ItemCard';


function ItemList() {
    
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetch('/api/items')
        .then((r) => r.json())
        .then((data) => {setItems(data)})


    },[])
    console.log(items);

    return(
        <>
       {items.length > 0 ? (
        items.map((item) => (
            <ItemCard  key={item.id} item={item}/>
        ))
       ) : null}
        </>
    )
}

export default ItemList;