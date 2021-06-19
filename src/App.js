import React, {AppRegistry} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import  configureStore from './store'
import { Header, Todo } from './components/Todo';

const store = configureStore();

function App() {

  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

const registerRedux = () => 
  <Provider store={store}>
    <App />
  </Provider>

export default registerRedux;
