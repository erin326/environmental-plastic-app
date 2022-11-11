import {useState} from 'react';
import {Card, Image} from 'semantic-ui-react';


function ItemCard({item}) {

    const {id, name, number, type, insructions} = item;

    function handleDeleteItem() {
        fetch(`api/items/:${id}`)
        .then((r) => r.json())
        .then((data) => console.log(data))
        

    }

    return(
        <>
        <Card>
            <Card.Header>{name}</Card.Header>
            <Card.Content>Type: {type}</Card.Content>
            <br>
            </br>
            Recycling Number: {number}
            <br></br>
            Instructions: {insructions}
            <br></br>
            
            <button onClick={handleDeleteItem}>Delete</button> 
        </Card>
        </>
    )
}

export default ItemCard;