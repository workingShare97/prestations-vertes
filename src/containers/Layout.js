import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../redux/store'

import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Label from '../components/Label';
import LabelDetail from '../components/LabelDetail';
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
                <Provider store={store}>
                    <React.Fragment>
                        <MenuAppBar/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/etiquettes' component={Label} />
                            <Route exact path='/etiquettes/:id' component={LabelDetail} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/logout' component={Logout} />
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/plant' component={Plant} />
                            <Route exact path='/cart' component={Cart} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/search' component={Search} />
                        </Switch>                    
                        <LabelBottomNavigation/>
                    </React.Fragment>
                </Provider>
            </BrowserRouter>
        );
    }
};

export default Layout;