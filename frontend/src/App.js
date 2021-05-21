import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DataProvider from "./providers/DataProvider";

import FormEditPost from './components/forms/FormEditPost';
import FormNewPost from './components/forms/FormNewPost';
import DetailPost from './components/detail/DetailPost';
import Home from './pages/Home';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/detail/:id" component={DetailPost}/>
          <Route exact path="/newform" component={FormNewPost}/>
          <Route exact path="/editform/:id" component={FormEditPost}/> 
        </Switch>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
