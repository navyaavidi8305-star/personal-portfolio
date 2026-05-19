import { useState } from "react";
import axios from "axios";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://personal-portfolio-zfbj.onrender.com/api/contact",
                formData
            );

            alert("Message sent successfully");

            setFormData({
                name: "",
                email: "",
                message: ""
            });

        }

        catch (error) {

            console.log(error);

            alert("Error sending message");

        }

    };

    return (

        <section id="contact">

            <h2>Contact Me</h2>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    rows="6"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">

                    Send Message

                </button>

            </form>

        </section>

    );

}

export default Contact;