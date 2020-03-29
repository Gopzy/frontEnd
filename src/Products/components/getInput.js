import React, { Component } from 'react';

const GetInput = (props) => {
    return (
        <form onSubmit={props.getUser} >

            <label for="prodname">Enter task:</label>
            <input type="text" name="prodname"></input>
            &nbsp;&nbsp;

            <label for="prodesc">Enter Discribtion:</label>
            <input type="text" name="prodesc"></input>
            &nbsp;&nbsp;

            <label for="birthday">Due Date:</label>
            <input type="date" id="birthday" name="birthday"></input>
            &nbsp;&nbsp;

            <button type="submit">Submit</button>
        </form>

    );
};
export default GetInput;

