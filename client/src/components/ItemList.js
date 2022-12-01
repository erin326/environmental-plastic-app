
import {useEffect, useState} from 'react';
import ItemCard from './ItemCard';
//  


function ItemList() {
    
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetch('/api/items')
        .then((r) => r.json())
        .then((data) => setItems(data))


    },[])


    console.log(items);
    
    function handleDeleteItem(id) {

        const updatedItems = items.filter((item) => item.id !== id)

      fetch(`/api/items/${id}`, {
          method: "DELETE"
      });
      console.log(id);
      setItems(updatedItems)

     
      

  }

    return(
        <>
       {items.length > 0 ? (
        items.map((item) => (
            <ItemCard key={item.id} item={item}  onDeleteItem={handleDeleteItem}/>
        ))
       ) : null}
        </>
    )
}

export default ItemList;