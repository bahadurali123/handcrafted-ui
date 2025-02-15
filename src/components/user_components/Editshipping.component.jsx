import { Button, Input } from "../index";
import "../../styles/Components/user/Writereview.css";
import { useForm } from "react-hook-form";
import shippingService from '../../../services/shipping.service';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateShipping } from '../../store/slices/shipping.slice';

const EditShipping = () => {
    const Id = useParams();
    const shippId = Id.Id;
    // console.log("Editable shipping id: ", shippId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const shippingsdata = useSelector((state) => state.shipping);
    const shippings = shippingsdata.shippings.ShippingsData;
    const shipping = shippings.find(item => item._id === shippId);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            street: shipping?.street || "",
            building: shipping?.building || "",
            state: shipping?.state || "",
            city: shipping?.city || "",
            postalCode: shipping?.postalCode || "",
            countryCode: shipping?.countryCode || "",
        },
    });

    const onSubmit = async (data) => {
        // console.log("Edit Shipping Address Form Data is: ", data);
        try {
            const response = await shippingService.updateShipping(shippId, data);
            // console.log("Edit Shipping Response: ", response);
            if (response) {
                const shippingData = response.data;
                if (shippingData) {
                    dispatch(updateShipping({ shippingData }));
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
            <h2 className='review-heading'>Update Shipping Address</h2>
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
                            // type="number"
                            type="text"
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
                        Update
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditShipping;