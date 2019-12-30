import React, { Component } from 'react';
import axios from 'axios';

class Toti extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/repositories')
            .then(({data})=>{
                this.setState({ data }) 
            })

    }

    render(){
        const { data } = this.state
        return(
            <div className="Toti">
                {data.map(item => <li>{item.full_name}</li>)}
            </div>
        );
    }

}

export default Toti;