import React, { useState } from 'react';
import { Button } from "../index";
import "../../styles/Components/admin/Pageheader.css"

const PageHeader = ({ title, buttonText, onButtonClick, onFilterClick }) => {

    const style = {
        justifyContent: buttonText ? 'space-between' : 'right',
    };

    return (
        <div className="page-header">
            <h1>{title}</h1>
            <div className="header-actions"
                style={style}
            >
                {buttonText ? <Button onClick={onButtonClick}>{buttonText}</Button> : ""}
                <button className="filter-icon" onClick={onFilterClick}><i className="bi bi-funnel"></i></button>
            </div>
        </div>
    );
};

export default PageHeader;