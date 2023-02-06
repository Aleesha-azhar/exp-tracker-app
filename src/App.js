import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { persistor } from './redux/store';
import {store} from './redux/store';
import {Provider}  from 'react-redux';
import Main from './containers/Main';
import {Header} from './MyComponents/Header';





function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Main />
        </PersistGate>
      </Provider>
      
    </div>
  );
}


export default App;
