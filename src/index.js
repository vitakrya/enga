import Vue from 'vue';
import _ from 'lodash';
import './style.css';
import Av from './av.jpg';
import Data from './data.csv';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Allo', 'LA'], ' ');
    element.classList.add('hello');

    const av = new Image();
    av.src = Av;

    element.appendChild(av);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
