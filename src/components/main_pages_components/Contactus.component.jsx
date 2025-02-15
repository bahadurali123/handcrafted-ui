import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from "../index";
import '../../styles/Ui/ContactUs.css';
import messageService from '../../../services/message.service';

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // console.log("message data: ", data);
            const response = await messageService.createMessage(data);
            // console.log("message Response: ", response);
            if (response) {
                reset();
            }
        } catch (error) {
            console.log("Message submitting Error: ", error);
        }
    };

    return (
        <div className="contact-us">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-container">
                {/* Left Section: Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <Input
                        label="Name:"
                        type="text"
                        placeholder="Enter Name"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}

                    <Input
                        label="Email:"
                        type="email"
                        placeholder="Enter email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Enter a valid email',
                            },
                        })}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}

                    <Input
                        label="Phone Number:"
                        type="tel"
                        placeholder="Enter Phone Number"
                        {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                                value: /^\+?[1-9]\d{1,14}$/,
                                message: 'Enter a valid 10-digit phone number',
                            },
                        })}
                    />
                    {errors.phone && <span className="error-message">{errors.phone.message}</span>}

                    <label>Message:</label>
                    <textarea
                        placeholder="Enter Message"
                        {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message.message}</span>}

                    <div className='btn-section'>
                        <Button type='submit' >Submit</Button>
                    </div>
                </form>

                {/* Right Section: Map */}
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.695378250003!2d-74.01091365463586!3d40.71277537923305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19bbda1e87%3A0x78f9a60f64f6e3f5!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1615407000000!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;