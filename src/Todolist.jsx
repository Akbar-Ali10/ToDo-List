
import React, { useState } from "react";

function Todolist() {
    const [activity, setactivity] = useState("");
    const [listdata, setlistdata] = useState([]);

    function addactivity() {
        if (activity.trim() === "") {
            alert("Please enter an activity!");
            return;
        }
        setlistdata((prevList) => {
            const updatalist = [...prevList, activity];
            console.log("Updated List:", updatalist);
            setactivity(""); 
            return updatalist;
        });
    }

    function removeactivity(i) {
        console.log("Removing activity at index:", i);
        const updatelistdata = listdata.filter((elem, id) => id !== i);
        setlistdata(updatelistdata);
    }

    function removeall() {
        setlistdata([]);
    }

    return (
        <div className="container">
            <div className="header">TODO LIST</div>
            <input
                type="text"
                placeholder="Add Activity"
                value={activity}
                onChange={(e) => setactivity(e.target.value)}
            />
            <button onClick={addactivity}>Add</button>
            <p className="list-heading">Here is your List:</p>
            {listdata.length > 0 && listdata.map((data, i) => (
                <div key={i} className="list-item">
                    <div className="listdata">{data}</div>
                    <button onClick={() => removeactivity(i)}>Remove(-)</button>
                </div>
            ))}
            {listdata.length > 0 && <button onClick={removeall}>Remove All</button>}
        </div>
    );
}

export default Todolist;
