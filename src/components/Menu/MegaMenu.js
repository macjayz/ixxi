import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../../asset/css/menustyles.css'
import Images from '../../config/Images';

// list of menu items

const menuItems = [
  {id:1, title: "New Products",  },
  {id:2, text: "bla bla blue",  },

  // Add more menu items as needed
];

const menuWithImageVertical = [
  {id:1, title: "Trending Now", text: "Essentails", to: "/",src:Images.img2 },
  {id:2, title: "Trending Now", text: "Essentails", to: "/",src:Images.img4},
  // Add more menu items as needed
];

const menuWithImageHorizontal = [
  {id:1,  text: "Essentails", to: "/",src:Images.img1 },
  {id:2,  text: "iXXi Design", to: "/",src:Images.img20 },
  // Add more menu items as needed
];

const Menu = ({ texts,imagesVertical, imagesHorizontal}) => {
  return (
    <div className='mainmenu'>
      {/* just text */}
    <ul className="menu">
      {texts.map((item) => (
        <li key={item.id}>
          <Link to="/" className="menulink">
            <h4 className='menutitle'>
            {item.title}
            </h4>
            <div className='line'>
           <hr className='innerline2'/>
           </div>
            <h5 className="menutext">{item.text}</h5>
            </Link>
        </li>
      ))}
    </ul>

{/* image and text vertical */}
    <ul className="menu">
      {imagesVertical.map((item) => (
        <li key={item.id}>
            <h4 className='menutitle'>
            {item.title}
            </h4>
            <div className='line'>
           <hr className='innerline'/>
           </div>
          <Link to="/" className="menulink2">
            <img className='menuimage' src={item.src} alt="ixxi"/>
            <h5 className="menutext">{item.text}</h5>
            <div className='line'>
           <hr className='innerline2'/>
           </div>
            </Link>
        </li>
      ))}
    </ul>

{/* image and text horizontal */}
    <ul className="menu">
            <h4 className='menutitle'>
            Shop By  BodyFit
            </h4>
           <div className='line'>
           <hr className='innerline'/>
           </div>
      {imagesHorizontal.map((item) => (
        <li key={item.id}>
          <Link to="/" className="menulink2">
           <div className='datahorizontal'>
           <img className='menuimage' src={item.src} alt="ixxi"/>
          
            <h5 className="menutext">{item.text}</h5>
            
           </div>
           <br/>
            </Link>
        </li>
      ))}
    </ul>
    </div>
  );
};

const HoverMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
      };
  
    const handleMouseLeave = (e) => {
        // Get the target element that the mouse is leaving to
        const toElement = e.toElement || e.relatedTarget;
        if (toElement && (toElement.nodeName === "UL" || toElement.parentNode.nodeName === "UL")) {
          // The mouse is moving to a child element of the menu, so keep the menu open
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      };

  return (
    <div className="hover-menu" >
      <div className='container menu2'>
      <Link  className='link speciallink' to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>Sale</span></Link>
       <Link className='link' to="/newin" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>New In</Link>
       <Link className='link' to="/cloth" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Clothing</Link>
       <Link className='link' to="/shoe" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Shoe</Link>
       <Link className='link' to="/dress" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Dress</Link>
       <Link className='link' to="/sport" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>SportWear</Link>
       <Link className='link' to="/jean" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Jeans</Link>
       <Link className='link' to="/access" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Accessories</Link>
       <Link className='link' to="/topshop" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>TopShop</Link>
       <Link className='link' to="/facebody" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Face +Body</Link>
       <Link className='link' to="/brand" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Brands</Link>
       <Link className='link speciallink' to="/outlet" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>Outlet</span></Link>
       <Link className='link marketunique' to="/market" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>MarketPlace</Link>
      
      </div>
      {isOpen && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Menu texts={menuItems} imagesVertical={menuWithImageVertical} imagesHorizontal={menuWithImageHorizontal} /> </div>
        )}
        
    </div>
  );
};


export default function MegaMenu() {
   
    return (
     <HoverMenu/>
      );
}
