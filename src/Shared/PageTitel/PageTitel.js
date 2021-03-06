import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitel = ({ title }) => {
    return (
        <Helmet>
            <title>{title} - Genius Car service</title>
        </Helmet>
    );
};

export default PageTitel;