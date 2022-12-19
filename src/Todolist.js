import { Component } from 'react';


export class Todolist extends Component {
    state = {
        userInput: '',
        List: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter an item")
        }
        else {
        let listArray = this.state.List;
        listArray.push(input);
        this.setState({List: listArray, userInput: ''});
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');        
    }

    deleteItem() {
        let listArray = this.state.List;
        listArray = []; 
        this.setState({List: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();        
    }

    render() {
        return (

        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                    placeholder="What are your plans for today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}
                    />
            </div>

            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn btn-add">Add</button>
            </div>

            <ol>
                {this.state.List.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>                    
                    {item}
                </li>
                ))}
            </ol>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn btn-delete">Delete</button>
            </div>
            </form>
        </div>
        )
    }

}