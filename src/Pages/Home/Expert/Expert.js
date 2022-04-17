import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>

        </div>
    );
};

export default Expert;