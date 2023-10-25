import React from "react";

function Panel(props) {
return(
    <section className="panel">
        <h3>{props.title}</h3>
        {props.isActive ? (
            <p>{props.children}</p>
        ) : (
            <button onClick={props.onShow}>Show</button>
        )}
    </section>
)
}
export default Panel;