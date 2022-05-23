import React from 'react'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Built by Aaron Durant in 2022</p>
      <p className="icons">
        <AiOutlineTwitter />
        <AiOutlineLinkedin />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer
