import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from './ListUserComponents';
import EditUserComponent from './EditUserComponent';
import React from "react";
import AddUserComponent from './AddUserComponent';
import WorkerList from './WorkerList';
import ViewRequest from '../Worker/ViewRequest';
const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <Switch>
                      <Route path="/" exact component={ListUserComponent} />
                      <Route path="/users" component={ListUserComponent} />
                      <Route path="/add-user" component={AddUserComponent} />
                      <Route path="/edit-user" component={EditUserComponent} />
                      <Route path="/viewworkers" component={WorkerList}/>
                      <Route path="/viewrequest" component={ViewRequest} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;