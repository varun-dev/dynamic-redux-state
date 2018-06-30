import GoldenLayoutWrapper from './components/GoldenLayoutWrapper';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './ActionCreators';

import '../css/main.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(setState({ 'count': 10 }));

ReactDOM.render(
    <Provider store={store}>
        <GoldenLayoutWrapper/>
    </Provider>,
    document.getElementById('root')
);
