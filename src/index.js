import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import AppMain from './components/AppMain'

ReactDOM.render(<AppMain />, document.getElementById('root'));
registerServiceWorker();
