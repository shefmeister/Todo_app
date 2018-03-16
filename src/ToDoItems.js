import React, {Component} from "react";

class ToDoItems extends Component {
    constructor(props,context){
        super(props,context);

        this.createTasks=this.createTasks.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    createTasks(task){
        return (
            <li onClick = {() => this.delete(task.key)}
            key = {task.key}>{task.text}</li>
        )
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default ToDoItems;