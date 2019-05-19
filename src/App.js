import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom'
import Header from './common/header'
import store from './store'
import {Provider} from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div>
              <Header/>
              <Route exact path="/" component={Home} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/login" exact component={Login} />
              <Route path="/write" exact component={Write} />
            </div>
        </BrowserRouter>
    </Provider> 
  );
}

export default App;
