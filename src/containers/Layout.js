import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome';
import Register from '../components/Register';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Label from '../components/Label';
import Cart from '../components/Cart';
import Plant from '../components/Plant';
import Search from '../components/Search';
import Contact from '../components/Contact';
import NoMatch from '../components/NoMatch';

import MenuAppBar from './MenuAppBar';
import LabelBottomNavigation from './LabelBottomNavigation';


class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                    <React.Fragment>
                        <MenuAppBar/>
                        <Switch>
                            <Route exact path='/Welcome' component={Welcome}/>
                            <Route exact path='/Login' component={Login} />
                            <Route exact path='/Logout' component={Logout} />
                            <Route exact path='/Register' component={Register} />
                            <Route exact path='Plant' component={Plant} />
                            <Route exact path='/Label' component={Label} />
                            <Route exact path='/Cart' component={Cart} />
                            <Route exact path='/Contact' component={Contact} />
                            <Route exact path='/Search' component={Search} />
                        </Switch>                    
                        <LabelBottomNavigation/>
                    </React.Fragment>
            </BrowserRouter>
        );
    }
};

export default Layout;