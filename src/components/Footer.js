import React from 'react'
import { Link } from 'react-router-dom'
import "../asset/css/footer.css"
export default function Footer() {
  return (
    <div className='mainFooter'>
        <div className='row'>
            <div className='col-3'>
               <div className='holder'>
               <h3 className='footerBold'>
                HELP & INFORMATION
                </h3>
                <Link to='/' className='help'><p>delivery and returns</p></Link>
                <Link to='/' className='help'><p>Track order</p></Link>
                <Link to='/' className='help'><p>Help</p></Link>
               </div>
            </div>
            <div className='col-3'>
            <div className='holder'>
               <h3 className='footerBold'>
                About iXXi
                </h3>
                <Link to='/' className='help'><p>Coporate Responsibility</p></Link>
                <Link to='/' className='help'><p>Careers</p></Link>
                <Link to='/' className='help'><p>about</p></Link>
               </div>
            </div>
            <div className='col-3'>
            <div className='holder'>
               <h3 className='footerBold'>
                More From iXXi
                </h3>
                <Link to='/' className='help'><p>Mobile & iXXi Apps</p></Link>
                <Link to='/' className='help'><p>Gift Voucher</p></Link>
                <Link to='/' className='help'><p>Black Friday</p></Link>
                <Link to='/' className='help'><p>iXXi Market</p></Link>
               </div>
            </div>
            <div className='col-3'>
            <div className='holder'>
               <h3 className='footerBold'>
               Shoping From
                </h3>
                <Link to='/' className='help'><p>You Are Here</p></Link>
               
               </div>
            </div>
        </div>
    </div>
  )
}
