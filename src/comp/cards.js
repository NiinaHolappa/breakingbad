import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function Cards() {
    // tilamuuttuja
    const [items, setItems] = useState([]);
    // globaali muuttuja
    const URL = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

    // hakee tiedot apista
    const fetchQuotes = () => {
        axios.get(URL)
        .then((response) => {
            setItems(response.data)
        })
    }

  return (
    <div>
        <img src='/img/Breakingbad.jpg' />
        <Card className='card'>
            <h3>Breaking Bad quotes</h3>
            {/* käydään itemit läpi */}
            {items.map((data) =>{
                return (
                <div>
                    <p>{data.quote}</p>
                    <p>by: {data.author}</p>
                </div>
                )
                })}
            {/* nappia painamalla kutsutaan fetchQuotes funktiota ja käyttöliittymään tulee quote näkyviin */}
            <Button onClick={fetchQuotes}>Click for a quote</Button>
        </Card>
    </div>
  )
}
