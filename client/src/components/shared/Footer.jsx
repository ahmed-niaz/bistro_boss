import { CiLocationOn, CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className=" bg-[#15151571] text-white p-10">
       <div className="footer">
       <aside>
          <p>Bistro Boss</p>
            <Link className="flex items-center gap-3">
            <MdOutlineEmail /> <span>info@bistroboss.com</span>

            </Link>
            <Link className="flex items-center gap-3">
            <CiPhone /> <span>910 468 582 552</span>

            </Link>
            <Link className="flex items-center gap-3">
            <CiLocationOn /> <span>Block: L, Road: 4, Aftabnagar, Dhaka</span>


            </Link>

        </aside>
        <nav>
          <h6 className="footer-title text-white">Information</h6>
        <Link>About us</Link>
        <Link>Testimonials</Link>
        <Link>Blog</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Our Menu</h6>
          <Link>Dessert</Link>
          <Link>Pizza</Link>
          <Link>Pasta</Link>
          <Link>Noddles</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Useful Links</h6>
          <Link>Services</Link>
          <Link>Help & Support</Link>
          <Link>Terms & Conditions</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Social</h6>
          <a className="flex items-center gap-3">
          <FaFacebook /> <span>Facebook</span>
          </a>
          <a className="flex items-center gap-3">
          <FaInstagram /> <span>Instagram</span>
          </a>
          <a className="flex items-center gap-3">
          <TfiYoutube /> <span>youTube</span>
          </a>
         
        </nav>
       </div>
       <div className="divider divide-white z-10">@ Copyright 2024</div>
      </footer>
    );
};

export default Footer;