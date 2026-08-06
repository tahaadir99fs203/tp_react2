import React from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
    return (
        <div>
            <ChildComponent message="Hello, props!" count={42} isActive={true} />
            <ChildComponent message="Another message" count={99} isActive={false} />
        </div>    
    );
};

export default App;