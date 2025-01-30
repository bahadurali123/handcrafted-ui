import { useState } from 'react';
import Button from '../Other_components/Button.component';

const SingleShippingAddress = ({ address, onEdit, onDelete, onStatusChange }) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleOptionsClick = () => {
        setShowOptions(!showOptions);
    };

    return (
        <tr className="shipping-address-item">
            <td className="status" onClick={() => onStatusChange(address._id)}>
                <span className={`status-indicator ${address.isPrimary ? 'active' : ''}`}></span>
            </td>
            <td>{address.street}</td>
            <td>{address.building}</td>
            <td>{address.state}</td>
            <td>{address.city}</td>
            <td>{address.postalCode}</td>
            <td>{address.countryCode}</td>
            <td className="options action-container">
                <i className="options-icon bi bi-three-dots-vertical" onClick={handleOptionsClick}></i>
                {showOptions && (
                    <div className="actions-popup">
                        <Button
                            type='button'
                            onClick={() => onEdit(address._id)}>Edit
                        </Button>
                        <Button
                            type='button'
                            onClick={() => onDelete(address._id)}>Delete
                        </Button>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default SingleShippingAddress;