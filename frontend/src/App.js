import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DataProvider from "./providers/DataProvider";

import FormEditPost from './pages/FormEditPost';
import FormNewPost from './pages/FormNewPost';
import DetailPost from './pages/DetailPost';
import NotFound from './pages/NotFound';
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
          <Route component={NotFound}/> 
        </Switch>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
