import React from 'react';
import Menu from '../../components/organisms/Menu';

export default class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            name:  '',
            email: '',
            date: new Date().getSeconds()
        };

        this.clockSeconds = this.clockSeconds.bind(this)
    };

    changeState(i , e){
        this.setState({
            [i]: e.target.value
        });
    };

    clockSeconds(){
        this.setState({
            date: new Date().getSeconds()
        });
    };

    render() {
        return (
            <>
            <Menu />
                <form id="hola" action=''>
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder="Name" onChange={e => this.changeState('name' , e)} />
                    <label htmlFor="">Email: </label>
                    <input type="Email" placeholder="Email" onChange={e => this.changeState('email' , e)} />
                    <input type="submit" value="Submit"/>
                </form>
                <div className="">
                    <h2>Name: {this.state.name}</h2>
                    <h4>Email: {this.state.email}</h4>
                </div>
                <h2>{this.state.date}</h2>
            </>
        )
    }  

    componentDidMount() {
        this.clockInterval = setInterval(this.clockSeconds, 1000)
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval)
    }

}

