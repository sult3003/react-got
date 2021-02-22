import React from 'react';

const ErrorMessage = () => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/error.png'} alt='err'></img>
            <span>Something went wrong!</span>
        </>
    )
}

export default ErrorMessage;
