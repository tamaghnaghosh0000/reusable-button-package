import React from 'react';

const Button = ({ onClick, children }) => {
    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };
    return <button onClick={onClick} style={buttonStyle}>{children}</button>;
};

export default Button;
