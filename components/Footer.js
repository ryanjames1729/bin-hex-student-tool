import React from "react";
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

const Footer = ({landingPages}) => {
    return (
        <footer className="bg-darkBlue" id="footer">
            <div className="flex flex-row justify-center">
          <Link href="https://github.com/ryanjames1729"><a>Built by Ryan James</a></Link>
          </div>
        </footer>
    )
}

export default Footer

