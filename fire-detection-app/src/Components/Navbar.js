import React from 'react';
import {Link} from 'react-reouter-dom';

const Navbar = () => {
    return (
        <>
        <nav>
            <Link to = '/'>About</Link>
            <Link to = '/Fire Detection'>Fire Detection</Link>
        </nav>
        </>
    );
};

export default Navbar;