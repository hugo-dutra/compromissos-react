import React from 'react';
import Principal from './containers/Principal/Principal';
import { Provider } from 'react-redux'
import storeConfig from './store/configStore';
const store = storeConfig();

function App() {
  return (
    <div>
      <Provider store={store}>
        <Principal></Principal>
      </Provider>
    </div>
  );
}

export default App;
