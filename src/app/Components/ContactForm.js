// import React, { useState } from 'react'
'use client';
import { useState } from 'react'

const ContactForm = () => {

    const [user,setUser]=useState({
        usename:'',
        email:'',
        phone:'',
        message:''
    })

    const changeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value

        setUser((prevUser)=>({...prevUser,[name]:value}));
    }

    const submitHandler=()=>{

    }

  return (
        <form className='contact-form' onSubmit={submitHandler}>
            <div className='input-field'>
                <label htmlFor='usename'>
                    Enter your Name:
                    <input type='text' name='username' id='username'
                        placeholder='Enter your name'
                        value={user.usename}
                        onChange={changeHandler}

                    />
                </label>
            </div>
            <div className='input-field'>
                <label htmlFor='email'>
                    Enter your Email:
                    <input type='text' name='email' id='email'
                        placeholder='Enter your Email'
                        value={user.email}
                        onChange={changeHandler}

                    />
                </label>
            </div>
            <div className='input-field'>
                <label htmlFor='phone'>
                    Enter your Phone:
                    <input type='text' name='phone' id='phone'
                        placeholder='Enter your phone'
                        value={user.phone}
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <div className='input-field'>
                <label htmlFor='message'>
                    Message:
                    <textarea  name='message' id='message' rows={5}
                        placeholder='Enter your message'
                        value={user.message}
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <div>
                <button type='submit'>Send Message</button>
            </div>
        </form>
  )
}

export default ContactForm