import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import Formulario from '../components/Formulario';

class Home extends Component{
    state ={};
    changing = (e) => {
        console.log("hola");
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <p>Testing</p>
                    <Formulario onChange={this.changing}/>
                </div>
            </div>
        )
    }

}
export default Home;