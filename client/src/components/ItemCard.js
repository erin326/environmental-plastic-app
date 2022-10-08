import {useState} from 'react';
import {Card, Image} from 'semantic-ui-react';


function ItemCard({item}) {

    const {id, name, number, type, insructions} = item;

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
            
        </Card>
        </>
    )
}

export default ItemCard;