import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { compose, legacy_createStore as createStore } from 'redux';
import Reducer from './store/reducers/index.ts';


const composeEnhancers = compose;
const enhancer = composeEnhancers();
const store = createStore(Reducer, enhancer);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Suspense fallback={null}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>,
)
