import React from 'react';
import awardDatas from '../../../datas/awardData';
import './Award.css'

const Award = () => {
    return (
        <div className='award-section'>
            <div className="container">
                <div className="header-area">
                    <h6 className='header-subtitle'>HONORS & MENTIONS</h6>
                    <h2 className='section-title'>Awards are an agency's best way to get independent feedback on the quality of their work.</h2>
                </div>
                <div className='content'>
                    {awardDatas.map((item, index) => (
                        <div key={index} className='single-content'>
                            <h4 className='year'> {item?.year}</h4>
                            <p className='section-desc desc'>{item?.details}</p>
                        </div>
                    ))}

                </div>
                <div className="award-footer">
                    <p className='section-fancyText'>For the past four years, we've always been enjoying to experiment new technologies,
                        working with people coming from different backgrounds and creating products that solve
                        business & people needs.</p>
                </div>
            </div>
        </div>
    );
};

export default Award;