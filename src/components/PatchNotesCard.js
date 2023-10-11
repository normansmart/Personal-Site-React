import React from "react";

function PatchNotesCard({ patch, patchSummary, fix1, fix2, fix3, fix4, fix5, date }) {

    return (
        <div className="patchnotes-container" style={{ backgroundColor: "#222532", color: "", fontFamily: "Lato" }}>
            <h2 style={{ width:"95%", margin:"auto"}}>{patch} </h2>
            <p style={{ width:"95%", margin:"auto"}}> {date} </p>
            <p style={{fontSize:"27px", fontWeight:"300", width:"95%", margin:"auto"}}> {patchSummary} </p>
            <h3 style={{width:"95%", margin:"auto"}}> BUGFIXES </h3>
            <ul>
                <p>{fix1}</p>
                <p>{fix2}</p>
                <p>{fix3}</p>
                <p>{fix4}</p>
                <p>{fix5}</p>
            </ul>
        </div>
    )
}

export default PatchNotesCard