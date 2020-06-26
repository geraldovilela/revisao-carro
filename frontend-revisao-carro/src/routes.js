import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ContentTableClient from './components/ContentTableClient/ContentTableClient';
import ClientForm from './components/ClientForm/ClientForm';
import ContentTableCars from './components/ContentTableCars/ContentTableCars';
import ContentTableReviews from './components/ContentTableReview/ContentTableReview';

 function Routes(){
    return(<>
        <Header></Header>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/clients" component={ContentTableClient}/>
                <Route path="/clientform" component={ClientForm}/>
                <Route path="/cars" component={ContentTableCars}/>
                <Route path="/reviews" component={ContentTableReviews}/>
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default Routes;