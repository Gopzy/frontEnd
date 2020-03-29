import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Label } from 'reactstrap';
import { getTasks } from './Redux/action/getTasks.action';
import { Table } from "react-bootstrap";
import TaskList from './components/taskList';
import { addTasks } from './Redux/action/addtasks.action';
import GetInput from './components/getInput';



class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getTasks();
    }

    getTask = () => {
        console.log("get task action called..........");
        this.props.getTasks();
    }

    addProduct = () => {
        console.log("Add task action called..........");
        this.props.addTasks();


    }
    getTaksInput = (e) => {
        e.preventDefault();
        const pName = e.target.elements.tskname.value;
        const dName = e.target.elements.tskdesc.value;
        const Ddate = e.target.elements.tskdate.value
        const obj = {
            pName,
            dName,
            Ddate
        }

        this.props.addTasks(obj);
    }

    render() {

        return (
            <div>
                <p>
                    To Do Tasks
               </p>

                <Button onClick={this.getTask} color="primary">Get All Tasks</Button>

                <p>
                    <GetInput getTask={this.getTaksInput} />
                </p>

                {this.props.tasks && this.props.tasks.tasksData && this.props.tasks.tasksData.data.map((el, index) => {
                    console.log("elements_____>>>", el);
                    return (
                        <TaskList key={el.index} title={el.title} desc={el.desc} date={el.date} taskId={el.id} />
                    )
                })}
            </div>
        );
    }
}

const mapStateProps = ({ tasks }) => {
    return {
        tasks: tasks.tasksData
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getTasks: () => dispatch(getTasks()),
        addTasks: (pName) => dispatch(addTasks(pName))
    };
};
export default connect(
    mapStateProps,
    mapDispatchToProps
)(Tasks);
