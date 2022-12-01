import {useEffect, useReducer} from 'react';
import ItemList from '../components/ItemList';

function HomePage({user}) {

    // useEffect(() => {
    //     fetch('https://data.edmonton.ca/resource/444z-a7fx.json')
    //     .then((r) => r.json())
    //     .then((data) => console.log(data))

    // },[]);

    // function normalize(inputTime) {
    //     parseInt(inputTime)
     
    //     let d = new Date(inputTime)
    //     let strTime = d.toUTCString();
      
    //     while (strTime.slice(0,3) !== 'Thu') {
    //         inputTime -= 24*60*60
    //         d = new Date(inputTime)
    //         strTime = d.toUTCString();
    //      } 
    //      while (strTime.slice(17,19) !== '00') {
    //         inputTime -= 60*60 
    //         d = new Date(inputTime)
    //         strTime = d.toUTCString();
          
    //     } while (strTime.slice(20,22) !== '00') {
            
    //         inputTime -= 60 
    //         d = new Date(inputTime)
    //         strTime = d.toUTCString();
    //     } while (strTime.slice(23,25) !== '00') {
         
    //         inputTime -=1
    //         d = new Date(inputTime)
    //         strTime = d.toUTCString();
    //     }
    //     return strTime;
    //     }
       

    // normalize('11111111')


    // function testFor() {
    //     let a = 2;
    //     let b = 0;
    //     let c = -1;
    //     for(b = 0; a < 12; b++) { //1
    //         a = (a + a) * c;  //-4, 8, -16, 32
         
    //     }
    //     console.log(a,b);
    // }   
 
    return(
        <>
        {/* <p>Welcome {user.username}!</p> */}

        <h2>Recycled Items</h2>
       <ItemList />
        </>
    )
}

export default HomePage;