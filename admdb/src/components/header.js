import React, { Component } from 'react';
import '../css/styles.css';

// const getYear = () => {
//     const newDate = new Date();
//     return newDate.getFullYear();
// }
// const user = {
//     name: 'Francis',
//     lastName: 'Jones',
//     age: 16
// }

class Header extends Component {
    
    state = {
        keywords: ''
    }

    inputChangeHandler = (event) => {
        // console.log(event.target.value);
        const value = event.target.value === '' ? 'active' : 'non-active';
        this.setState({
            active: value,
            keywords: event.target.value
        });
    }
    render() {
        // const style = {
        //     background:'red'
        // }
        // if(this.state.keywords != '') {
        //     style.background = 'blue';
        // } else {
        //     style.background = 'red';
        // }

        return (
            <header class={this.state.active}>
                <div 
                className="logo">Logo</div>
                <input 
                    type="text" 
                    onChange={this.inputChangeHandler}
                />
            </header>
        )
    }
}

export default Header;