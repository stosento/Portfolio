import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Nav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' id='nav-logo' onClick={closeMobileMenu}>
                        <i className='fas fa-street-view'/> STEPHEN OSENTOSKI
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={click || button ? 'nav-item' : 'nav-item disabled'}>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                RESUME
                            </Link>
                        </li>
                        <li className={click || button ? 'nav-item' : 'nav-item disabled'}>
                            <Link to='/code' className='nav-links' onClick={closeMobileMenu}>
                                CODE
                            </Link>
                        </li>
                        <li className={click || button ? 'nav-item' : 'nav-item disabled'}>
                            <Link to='/videos' className='nav-links' onClick={closeMobileMenu}>
                                VIDEOS
                            </Link>
                        </li>
                        {/* <li>
                            <Link to='/email' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Reach Out
                            </Link>
                        </li> */}
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'> Reach Out </Button>} */}
                </div>
            </nav>
        </>
    );
}

export default Nav
