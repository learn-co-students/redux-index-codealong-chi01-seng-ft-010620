import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Todo from './Todo'

class TodosContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.todos.map((todo, id) => {
                    return <Todo key={id} todo={todo}/>
                })}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)