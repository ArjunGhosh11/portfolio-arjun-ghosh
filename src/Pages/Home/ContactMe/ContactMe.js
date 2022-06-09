import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import './ContactMe.css';
import { send } from 'emailjs-com'
const ContactMe = () => {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = data => {
        if (data.name === '' || data.mobile === '' || data.email === '') {
            return;
        }
        console.log(data)
        send(
            'service_vc9vfae',
            'template_c7lxm4m',
            data,
            '3a5IZk9BzPsjBD7i0'
        )
            .then(res => {
                console.log(res);
            });
        reset()
    };
    return (
        <div className='m-10' id='getInTouch'>
            <h2 className='lg:text-5xl text-4xl font-bold text-center text-primary'>GET IN TOUCH</h2>
            <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="name">Name<span style={{ color: 'red' }}>*</span> </label>
                <input
                    id="name"
                    placeholder="Your Name"
                    {...register("to_name")}
                    required
                />

                <label htmlFor="mobile">Mobile No.<span style={{ color: 'red' }}>*</span></label>
                <input
                    id="mobile"
                    type="tel"
                    placeholder="Your Mobile No."
                    {...register("mobile")}
                    required
                />

                <label htmlFor="email">Email<span style={{ color: 'red' }}>*</span></label>
                <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    {...register("reply_to")}
                    required
                />

                <label htmlFor="queries">Your Queries<span style={{ color: 'red' }}>*</span></label>
                <textarea
                    id="queries"
                    placeholder="....."
                    {...register("message")}
                    style={{ resize: 'none' }}
                    required
                ></textarea>

                <button className=" btnSubmit btn-accent btn rounded-2xl " type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactMe;