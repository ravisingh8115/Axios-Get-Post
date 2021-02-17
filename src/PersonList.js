import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        name: '',
        persons: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }
    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        
        return (

            <div className="App">
                <div style={{backgroundColor:"black"}}><h1 style={{color:"white"}} >My Record</h1></div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>

                <div>
                    <table>
                        <tbody>
                        {this.state.persons.map((person,index) => <tr key= {index} ><td>{person.name}</td></tr>)}
                        </tbody>
                        </table>
                </div>
            </div>
        )
    }
}