import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ balls, blue }) => {
    return (
        <ReactLoading type={balls} color={{ color: "#blue" }} />
    )
};

export default Loading;;