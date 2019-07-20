import React, { PureComponent } from 'react';
import { Switch, Route} from 'react-router';

import Home from './pages/homePagesComponent';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Switch>
                <Route path="/home" render={props => {
                    return <Home {...props}/>
                }}></Route>
            </Switch>
         );
    }
}
 
export default App;