import React, {Component} from "react";
import ToDoItems from "./ToDoItems";
import "./index.css"

class ToDoList extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            items : []
        };

        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
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

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key);
        });

        this.setState( {
            items:filteredItems
        });
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
                 <ToDoItems entries={this.state.items}
                            delete={this.deleteItem}/>
            </div>
        );
    }
}

export default ToDoList;