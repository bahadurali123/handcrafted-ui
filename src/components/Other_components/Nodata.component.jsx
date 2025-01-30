import React from "react";
import "../../styles/Others/Nodata.css"

const NoData = ({ type = "items", message = "No data available", imageSrc }) => {
    return (
        <div className="no-data">
            <div className="no-data-content">
                {imageSrc && (
                    <div className="no-data-image">
                        <img src={imageSrc} alt={`No ${type}`} />
                    </div>
                )}
                <h2 className="no-data-message">{message}</h2>
                <p className="no-data-description">No {type} to display at the moment.</p>
            </div>
        </div>
    );
};

export default NoData;