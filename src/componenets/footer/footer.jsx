import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
const Footer = () => {

    return (
        <footer className="footer" id='contact'>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h2>Contact Us</h2>
                <p>Email: <span className=' font-bold underline'>info@example.com</span></p>
                <p>Phone:<span className='font-bold'>+1 123-456-7890</span> </p>
            </div>
            <div className="col-md-4">
                <h4> <a target='_blank' href='https://portfolio-tabsir.vercel.app' className=' text-green-500 font-bold' >Follow Us</a></h4>
                <ul className="social-icons">
                     <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                     <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                     <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                     <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                 </ul>
            </div>
            <div className="col-md-4">
                <h4>Subscribe to Our Newsletter</h4>
                <form action='https://portfolio-tabsir.vercel.app' method='GET' id='form'>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>

        <div className='my-8 text-red-500 font-bold'> [ It is a Demo Project for showcase Only ] </div>
    </div>

</footer>
    )
}

export default Footer;