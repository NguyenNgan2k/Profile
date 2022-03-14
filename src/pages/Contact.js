import { Row, Col, Container, Card } from 'react-bootstrap'
import { FaFacebookSquare, FaGooglePlusSquare, FaDribbbleSquare, FaAddressCard } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { BiUser, BiPhone, BiEnvelope } from 'react-icons/bi'
import { BsCalendar2Date } from 'react-icons/bs'
import { MdLanguage } from 'react-icons/md'
function Contact() {
    return (
        <>
        <div className="card-box">
            <div className="section-title">
                <h2>Contact</h2>
                <div className='title-border'></div>
            </div>
            <div className="contact">
                <form action="">
                    <div className="inputBox">
                        <input type='text' placeholder='Name' required />
                        <input type='number' placeholder='Phone' required />
                        <input type='email' placeholder='Email' required />
                    </div>
                    <textarea name="" id="message" cols="30" rows="10" placeholder='Your message' required></textarea>
                    <button type='submit'>SUBMIT NOW</button>
                </form>

                <div class="social-links header-links text-center">
                    <ul>
                        <li><a href="#" ><FaFacebookSquare className='icon' /></a></li>
                        <li><a href="#" ><FaTwitterSquare className='icon' /></a></li>
                        <li><a href="#" ><FaGooglePlusSquare className='icon' /></a></li>
                        <li><a href="#" ><FaDribbbleSquare className='icon' /></a></li>
                    </ul>
                    <p>© 2022.Design Nguyen Thi Ngan</p>
                </div>

            </div>
        </div>
    </>
    );
}
export default Contact