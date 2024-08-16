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