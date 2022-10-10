import {useState} from 'react';

function NewItem({setItems, items}) {

    const [itemName, setItemName]= useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('')
    const [instructions, setInstructions] = useState('');

    function addItem(e) {
        e.preventDefault();

        fetch(`/api/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({name: itemName, number, item_type: type, insructions: instructions})

        })
        .then((r) => r.json())
        .then((data)=> {
            setItems([...items], data)
            console.log(data)})
    }

    console.log(items);

    return(
        <>
        <form className="item-form"
          onSubmit={addItem}>
              {/* {errors.map((error) => (
                <li key={error}>{error}</li>
            ))} */}
            <br></br>
            <label>Name: </label>
            <input
            type="text"
            id="name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            ></input> <br></br>
            <label>Type: </label>
            <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType( e.target.value)}
            ></input> <br></br>
              <label>Number: </label>
            <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber( e.target.value)}
            ></input> <br></br>
              <label>Instructions: </label>
            <input
            type="text"
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            ></input> <br></br>
            <button className="button" type='submit'>Submit</button>
     
            </form>
            
        </>
    )
}

export default NewItem;