import './web.css';
import mylogo from './mylogo.png';
import {Link} from 'react-router-dom';
function Nav() {
  return (
    
    <div className='Navigation'>
      <div className='logo'>
       <Link to="/"> <img src={mylogo} /></Link>
      </div>

      <div className='links'>
        <ul>
          <li><Link to="/shopmen">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><a href="#">Home&Living</a></li>
          <li><a href="#">Beauty</a></li>
          <li><a href="#">Studio<span><sup>New</sup></span></a></li>

        </ul>
      </div>
      <div className='search'>
        <input type='text' placeholder='search for products, brands and more'></input>
      </div>
      <div className='icons'>
        <div className='icon1'>
          <div><i class='bx bx-user'></i></div>
          <div>Profile</div>
        </div>
        <div className="icon2">
          <div><i class='bx bx-heart'></i></div>
          <div>Wishlist</div>
        </div>
        <div className="icon3">
          <div><i class='bx bx-cart' ></i></div>
          <div>Bag</div>
        </div>
      </div>
      </div>
     
    
    
  );
}

export default Nav;  