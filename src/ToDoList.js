import React, {Component} from "react";

class ToDoList extends Component {
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="Enter task"/>
                        <button type="submit">ADD</button>
                        </form>
                </div>
            </div>
        );
    }
}

export default ToDoList;