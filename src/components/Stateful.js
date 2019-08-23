import React, {component} from 'react';

class Stateful extends component{
    constructor(props){
        super(props);
        this.state = {
            hello: 'Hola Mundo'
        }
    }
    render(){
        return(
            <h1>this.state.hello</h1>
        )
    }

}
export default Stateful;