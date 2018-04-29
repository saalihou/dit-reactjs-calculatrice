import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculatrice from './Calculatrice';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculatrice />, document.getElementById('root'));
registerServiceWorker();
