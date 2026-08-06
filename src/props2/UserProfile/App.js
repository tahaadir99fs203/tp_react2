import React from "react";
import UserProfile from "./UserProfile";

const App = () => {
    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    return (
        <div>
            <UserProfile username="JohnDoe" age={25} isAdmin={true} FonctionFromParent={handleButtonClick} />
            <UserProfile username="JaneDoe" isAdmin={false} FonctionFromParent={handleButtonClick} />
        </div>
    );
};

export default App;