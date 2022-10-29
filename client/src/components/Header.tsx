import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1 className='app__title'>CC28 Meme Generator 🦋</h1>
            <button className='nav__menubutton'><span className="material-symbols-outlined">
            menu
            </span></button>
        </header>
    )
}


export default Header