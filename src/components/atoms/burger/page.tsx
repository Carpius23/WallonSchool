import React, { useState } from 'react';

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className='flex' onClick={handleToggle}>_ _ _</button>
            {isOpen && (
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            )}
        </div>
    );
};

export default BurgerMenu;