
import React from "react";

function jobCard({ jobInfo }) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{jobInfo.name}</h4>
                <h5>{jobInfo.company.name}</h5>



                <button className="btn btn-primary">Save</button>
            </div>
        </div>
    )
}

export default jobCard;