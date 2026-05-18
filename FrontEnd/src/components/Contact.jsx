import { useState } from "react";
import axios from "axios";

function Contact() {

    const [formData,setFormData] =
    useState({

        name:"",
        email:"",
        message:""

    });

    const handleChange =
    (e)=>{

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });

    };

    const handleSubmit =
    async(e)=>{

        e.preventDefault();

        await axios.post(

            "https://personal-portfolio-zfbj.onrender.com/api/contact",

            formData

        );

        alert(
            "Message Sent"
        );

    };

    return(

        <section>

            <h2>
                Contact Me
            </h2>

            <form
            className="contact-form"

            onSubmit={
                handleSubmit
            }
            >

                <input

                type="text"

                name="name"

                placeholder=
                "Enter name"

                onChange=
                {handleChange}

                />

                <input

                type="email"

                name="email"

                placeholder=
                "Enter email"

                onChange=
                {handleChange}

                />

                <textarea

                name="message"

                placeholder=
                "Enter message"

                onChange=
                {handleChange}

                />

                <button>

                    Send

                </button>

            </form>

        </section>

    );

}

export default Contact;