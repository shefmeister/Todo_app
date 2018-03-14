import React, {Component} from "react";
import ToDoItems from "./ToDoItems";

class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items : []
        };

        this.addItem=this.addItem.bind(this);
    }

    addItem(e){
        if (this.inputElement.value !== ""){
            var newItem = {
                text : this.inputElement.value,
                key : Date.now()
            };

            this.setState((prevState) => {
                return {
                    items : prevState.items.concat(newItem)
                };
            });
            this.inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();

    }


    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this.inputElement = a}
                        placeholder="Enter task"/>
                        <button type="submit">ADD</button>
                        </form>
                </div>
                 <ToDoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default ToDoList;