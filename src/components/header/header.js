import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <>
            <div className='headerBlock'>
                <h3 className='headerTitle'>
                    <Link to='/'>
                    Game of Thrones DB
                    </Link>
                </h3>
                <ul className='headerLinks'>
                    <li>
                        <Link to='/characters/'>Characters</Link>
                    </li>
                    <li>
                        <Link to='/houses/'>Houses</Link>
                    </li>
                    <li>
                        <Link to='/books/'>Books</Link>   
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;