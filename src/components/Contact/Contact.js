import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import AddressIcon from '@material-ui/icons/LocationCity'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

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
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any question, you can send me message from here. It is my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
          <textarea type="text" placeholder="Enter your Message"/>
        </div>
        <div className="button">
          <input type="button" value="Send Now"/>
        </div>
      </form>
    </div>
    </div>
  </div>

  
    </section>
  )
}

export default Contact
