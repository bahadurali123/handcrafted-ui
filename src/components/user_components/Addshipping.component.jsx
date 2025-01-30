import "../../styles/Components/user/Writereview.css";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";
import shippingService from '../../../services/shipping.service';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addShipping } from '../../store/slices/shipping.slice';
import { login } from '../../store/slices/auth.slice';

const AddShipping = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log("Add Shipping Address Form Data is: ", data);
        try {
            const response = await shippingService.createShipping(data);
            console.log("Add Shipping Response: ", response);
            if (response) {
                const shippingData = response.data.shipping;
                const userData = response.data.user;
                if (shippingData && userData) {
                    dispatch(addShipping({ shippingData }));
                    dispatch(login({ userData }));
                    reset();
                }
                navigate(`/account/shipping`)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="write-review">
            <h2 className='review-heading'>Add Shipping Address</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="review-form">
                <div className="input-group">
                    <div className="field">
                        <Input
                            label="Street:"
                            type="text"
                            placeholder="Enter Street number or name"
                            {...register("street", { required: 'Street is required' })}
                        />
                        {errors.street && <p className="error-message">{errors.street.message}</p>}
                    </div>

                    <div className="field">
                        <Input
                            label="Building:"
                            type="text"
                            placeholder="Enter building number or name"
                            {...register("building", { required: 'Building is required' })}
                        />
                        {errors.building && <p className="error-message">{errors.building.message}</p>}
                    </div>
                </div>

                <div className="input-group">
                    <div className="field">
                        <Input
                            label="State/Province:"
                            type="text"
                            placeholder="Enter state, province."
                            {...register("state", { required: 'State is required' })}
                        />
                        {errors.state && <p className="error-message">{errors.state.message}</p>}
                    </div>

                    <div className="field">
                        <Input
                            label="City/Town:"
                            type="text"
                            placeholder="Enter City or Town."
                            {...register("city", { required: 'City is required' })}
                        />
                        {errors.city && <p className="error-message">{errors.city.message}</p>}
                    </div>
                </div>
                <div className="input-group">
                    <div className="field">
                        <Input
                            label="Postal Code:"
                            type="number"
                            placeholder="Enter postal code."
                            {...register("postalCode", { required: 'Postal code is required' })}
                        />
                        {errors.postalCode && <p className="error-message">{errors.postalCode.message}</p>}
                    </div>

                    <div className="field">
                        <Input
                            label="Country Code:"
                            type="text"
                            placeholder="Enter US."
                            {...register("countryCode", { required: 'Country code is required' })}
                        />
                        {errors.countryCode && <p className="error-message">{errors.countryCode.message}</p>}
                    </div>
                </div>

                <div className='btn-section'>
                    <Button
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddShipping;