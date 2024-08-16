const express = require('express');
const axios = require('axios');

const app = express();
const port = 9876;
const win_size = 10;
const url = 'http://20.244.56.144/test/';
const qualifiers = {
    'p': 'primes',
    'f': 'fibo',
    'e': 'even',
    'r': 'rand'
};

let window = [];