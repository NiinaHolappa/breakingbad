import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function Cards() {
    const [items, setItems] = useState([]);
    const URL = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

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
            {items.map((data) =>{
                return (
                <div>
                    <p>{data.quote}</p>
                    <p>by: {data.author}</p>
                </div>
                )
                })}

            <Button onClick={fetchQuotes}>Click for a quote</Button>
        </Card>
    </div>
  )
}
