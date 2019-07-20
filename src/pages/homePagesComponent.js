import React, { PureComponent } from 'react';
import Helmet from 'react-helmet'
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log('home')
        this.clickConsole = () => {
            console.log('click console');
        }
    }

    render() { 
        return ( 
        <React.Fragment>
        <Helmet>
            <title>My home</title>
        </Helmet>
        <div>
            <h1>My home page</h1>
            <p>Some content</p>
            <button onClick={this.clickConsole}>click console.log</button>
        </div></React.Fragment> );
    }
}
 
export default Home;