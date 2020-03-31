import React, { Component } from "react";
import { delectSelectedTask } from "../Redux/action/delectSelectedTask.action";
import { Button, Label } from "reactstrap";
import { connect } from "react-redux";
import { editSelectedtask } from "../Redux/action/editSelectedTask.action";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // taskId: ''
    };
  }

  render() {
    const { title, desc, date, taskId } = this.props;

    const delectTask = () => {
      const tId = this.props.taskId;
      this.props.delectSelectedTask(tId);
    };
    const editTask = e => {
      const pName = e.target.elements.editname.value;
      const dName = e.target.elements.editdesc.value;
      const Ddate = e.target.elements.editDate.value;
      const pId = this.props.taskId;
      const obj = {
        pName,
        dName,
        Ddate,
        pId
      };
      this.props.editSelectedtask(obj);
    };

    return (
      <form onSubmit={editTask}>
        <table align="center">
          {title} &nbsp;&nbsp;
          {desc}&nbsp;&nbsp;
          {date.substring(0, 10)} &nbsp;&nbsp;
          <Button className="pull-right" color="success" >
            edit
          </Button>
          &nbsp;
          <Button className="pull-right" color="success" onClick={delectTask}>
            delete
          </Button>
          <br></br>
          {/* <label for="editname">Edit task:</label>
                        <input type="text" name="editname"></input>
                                &nbsp;&nbsp;

                        <label for="editdesc">Edit Discribtion:</label>
                        <input type="text" name="editdesc"></input>
                                &nbsp;&nbsp;

                        <label for="editDate">edit Date:</label>
                        <input type="date" id="birthday" name="editDate"></input>
                                &nbsp;&nbsp;

                        <button type="submit">Submit to edit</button> */}
        </table>
      </form>
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
    delectSelectedTask: pId => dispatch(delectSelectedTask(pId)),
    editSelectedtask: pId => dispatch(editSelectedtask(pId))
  };
};
export default connect(mapStateProps, mapDispatchToProps)(TaskList);
