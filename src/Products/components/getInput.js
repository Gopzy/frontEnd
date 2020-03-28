import React, { Component } from 'react';

const GetInput = (props) => {
    return (
        <form onSubmit={props.getUser} >
            <input type="text" name="prodname"></input>
            <input type="text" name="prodesc"></input>
            <button type="submit">Submit</button>
        </form>

    );
};
export default GetInput;

