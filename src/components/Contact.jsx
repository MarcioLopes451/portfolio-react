import {useState} from 'react';
import Github from '../images/icon-github.svg';
import Linkedin from '../images/icon-linkedin.svg';
import Twitter from '../images/icon-twitter.svg';

export default function Contact() {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit =(e) => {
        e.preventDefault();
    }
  return (
    <div className='contact'>
        <div className='contact-container'>
            <div className='contacting'>
            <h1>Contact</h1>
            <p>I would love to hear about your project and how I could help. 
            Please fill in the form, and I will get back to you as soon as possible.
            </p>
            </div>
            <div className='form-section'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'></label>
                   <br />
                   <input 
                   type='text'
                   id='name'
                   value={name}
                   onChange={(e) => setName(e.target.value)} />
                   <br />
                   <label htmlFor='name'></label>
                   <br />
                   <input 
                   type='text'
                   id='email'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)} />
                   <br />
                   <label htmlFor='message'>
                    <textarea
                    id='message'
                    name='message'
                    rows='4'
                    cols='40'
                    placeholder='Message'
                    >
                    </textarea>
                   </label>
                   <br />
                   <button onClick={handleSubmit}>Send Message</button>
                </form>
            </div>
        </div>
        <div className='footer-container'>
        <p>Marcio Lopes</p>
            <div className='social-media'>
                <img src={Github} alt='github' />
                <img src={Linkedin} alt='linkedin' />
                <img src={Twitter} alt='twitter' />
            </div>
        </div>
    </div>
   
  )
}
