import {useState} from 'react';
import {Card, Image} from 'semantic-ui-react';


function ItemCard({item, onDeleteItem}) {

    const {id, name, number, type, insructions} = item;
    console.log(id);

    // function handleDeleteItem() {

    //       const updatedItems = 
    //     fetch(`/api/items/:${id}`, {
    //         method: "DELETE"
    //     });

       
        

    // }

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
            
            <button onClick={() => onDeleteItem(id)}>Delete</button> 
        </Card>
        </>
    )
}

export default ItemCard;