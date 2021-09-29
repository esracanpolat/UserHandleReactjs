import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import UserList from './components/userList';
import { Router, Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import userDetail from './components/userDetail';

function App() {
  const History = useHistory();
  return (
    <>
      <Header />
      <Router history={History}>
        <div className="body-middle">
          <Switch>
            <Route exact component={UserList} path="/" />
            <Route exact component={userDetail} path="/userDetails" />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}


export default App;
