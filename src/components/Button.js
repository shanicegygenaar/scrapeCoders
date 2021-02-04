import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const styles = [
    'btn--primary',
    'btn--outline'
];
const sizes = [
    'btn--medium', 'btn--large'
];
export const Button =({
    children,
    type,
    onClick,
    ButtonStyle,
    ButtonSize
    
}) => {
    const checkButtonStyle = styles.includes(ButtonStyle)? ButtonStyle : styles[0]
    const checkButtonSize = sizes.includes(ButtonSize) ? ButtonSize : sizes[0]
    return (
        <Link to='../FindOutMore.js' className='findoutmore'>
    <button 
    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    onClick={onClick} 
    type={type}> 
    {children}
   
    </button>
</Link>
)

}

