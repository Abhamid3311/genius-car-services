import React from 'react';

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';


const experts = [
    { id: 1, name: "will Smith", img: expert1 },
    { id: 2, name: "will Cook", img: expert2 },
    { id: 3, name: "Steven Smith", img: expert3 },
    { id: 4, name: "Tom Smith", img: expert4 },
    { id: 5, name: "Jessy Pinkman", img: expert5 },
    { id: 6, name: "Walter White", img: expert6 },
];

const Experts = () => {
    return (
        <div id='experts'>
            <h2 className='services-titel'>Our Experts</h2>
            <div className="services-container">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;