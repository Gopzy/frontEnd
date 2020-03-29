import React, { Component } from 'react';

const GetInput = (props) => {
    return (
        <form onSubmit={props.getTask} >

            <label for="tskname">Enter task:</label>
            <input type="text" name="tskname"></input>
            &nbsp;&nbsp;

            <label for="tskdesc">Enter Discribtion:</label>
            <input type="text" name="tskdesc"></input>
            &nbsp;&nbsp;

            <label for="tskdate">Due Date:</label>
            <input type="date" id="birthday" name="tskdate"></input>
            &nbsp;&nbsp;

            <button type="submit">Submit</button>
        </form>

    );
};
export default GetInput;

