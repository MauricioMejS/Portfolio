import React, { useRef } from 'react'
import './contact.sass'

const Contact = () => {
  const form = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()
    const data = new FormData(form.current)
    const subject = encodeURIComponent('Portfolio Contact')
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nMessage: ${data.get('message')}`)
    window.location.href = `mailto:example@example.com?subject=${subject}&body=${body}`
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className='container contact__container'>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required />
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </section>
  )
}

export default Contact
