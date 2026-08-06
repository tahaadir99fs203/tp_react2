import React from "react";

const ChildComponent = (props) => {
    return (
        <div>
            <p>{props.message}</p>

            <p>{props.count}</p>

            {props.isActive ? (
                <p>This is active</p>
            ) : (
                <p>This is not active</p>
            )}
        </div>
    );
};

export default ChildComponent;