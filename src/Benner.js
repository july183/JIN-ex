import React, {Component} from "react";
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
      src: './benner/b1.png',

    },
    {
      src: './benner/b2.png',
    
    },
    {
      src: './benner/b3.jpg',
    }
];

class Benner extends Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }


    render(){
        return(
            <UncontrolledCarousel items={items} ></UncontrolledCarousel>
        );
    }
}
export default Benner;