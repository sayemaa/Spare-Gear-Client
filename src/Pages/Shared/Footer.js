import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer class="p-10 mx-auto bg-neutral text-neutral-content mt-32">
            <div className='footer lg:flex lg:flex-row lg:justify-center lg:gap-72'>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='mt-16 mb-5 text-center'>
                <p>Copyright © {year} - All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;