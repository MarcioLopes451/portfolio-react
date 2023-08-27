import React from 'react'
import Github from '../images/icon-github.svg';
import Linkedin from '../images/icon-linkedin.svg';
import Twitter from '../images/icon-twitter.svg';


export default function Nav() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
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
