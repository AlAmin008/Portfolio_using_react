import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import AddressIcon from '@material-ui/icons/LocationCity'
import { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'


const Contact = () => {
  if (!contact.email) return null

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert('Thank you for your message! BUt the service is currently unavailable');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className='section contact center' id='contact'>
     
      {/* <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a> */}
  <div className="container">
  <h2 className='section__title'>Contact Me</h2>
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <AddressIcon/>
          <div className="topic">Address</div>
          <div className="text-one">324, Elephant Road</div>
          <div className="text-two">Dhaka -1205</div>
        </div>
        <div className="phone details">
          <PhoneIcon/>
          <div className="topic">Phone</div>
          <div className="text-one">+8801957-703927</div>
          {/* <div className="text-two">+0096 3434 5678</div> */}
        </div>
        <div className="email details">
          <EmailIcon />
          <div className="topic">Email</div>
          <div className="text-one">alamin2514@student.nstu.edu.bd</div>
          {/* <div className="text-two">info.codinglab@gmail.com</div> */}
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send A Message</div>
        <p>If you have any work from me or any question, you can send me message from here. It is my pleasure to help you.</p>
        <form action="#">
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-box message-box">
        <textarea
          type="text"
          placeholder="Enter your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="button">
        <input type="button" value="Send Now" onClick={handleSubmit} />
      </div>
    </form>
    </div>
    </div>
  </div>

  
    </section>
  )
}

export default Contact
