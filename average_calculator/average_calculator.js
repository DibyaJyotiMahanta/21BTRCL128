const express = require('express');
const axios = require('axios');

const app = express();
const port = 9876;
const win_size = 10;
const url = 'http://20.244.56.144/test/';
const Qualifiers = {
    'p': 'primes',
    'f': 'fibo',
    'e': 'even',
    'r': 'rand'
};

let window = [];
async function fetchNumbers(qualifier) {
    try {
        const response = await axios.get(`${url}${Qualifiers[qualifier]}`, { timeout: 500 });
        return response.data.numbers || [];
    } catch (error) {
        console.error('Error fetching numbers:', error.message);
        return [];
    }
}
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

app.get('/numbers/:qualifier', async (req, res) => {
    const { qualifier } = req.params;
    
    if (!QUALIFIERS[qualifier]) {
        return res.status(400).json({ error: 'Invalid qualifier' });
    }

 
    const numbers = await fetchNumbers(qualifier);


    if (numbers.length === 0) {
        return res.status(500).json({ error: 'Failed to fetch numbers' });
    }

   
    const windowPrevState = [...window];
    window = window.concat(numbers).slice(-WINDOW_SIZE);

   

    return res.json(response);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});