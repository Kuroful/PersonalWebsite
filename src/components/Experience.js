import React from 'react'
import ExperienceItem from './ExperienceItem';
import './Experience.css'

function Experience(){
    return(
        <div className='experience'>
            <div className='experience__container'>
                <div className='experience__wrapper'>
                    <h2 class='subtitle'>Experience:</h2>
                    <ul className="experience__items">
                    <ExperienceItem 
                    src='images/Rogers.png'
                    location='Rogers Communications'
                    title='IT Asset Analyst Co-op'
                    date='May. 2021 - Aug. 2021'
                    text1='· Identified client issues and performed troubleshooting via remote desktop access'
                    text2='· Assisted and supported clients with the set-up of technologies and addressed potential concerns' 
                    text3='· Applied excellent customer service skills through step-by-step process to address IT issues'
                    />
                    <ExperienceItem 
                    src='images/Ontario.png'
                    location='Ontario MGCS'
                    title='Executive IT Support Services Co-op'
                    date='Sept. 2020 - Dec. 2020'
                    text1='· Identified client issues and performed troubleshooting via remote desktop access'
                    text2='· Assisted and supported clients with the set-up of technologies and addressed potential concerns' 
                    text3='· Applied excellent customer service skills through step-by-step process to address IT issues'
                    />
                    <ExperienceItem 
                    src='images/Innunco.png'
                    location='Innunco Academy'
                    title='Content Developer Project Coordinator'
                    date='May 2020 - Aug. 2020'
                    text1='· Modified traditional print-based learning content into the web/mobile-based interactive content using different software and programming code on WordPress'
                    text2='· Researched and tested different software functionality, suitability, and compatibility with Innunco Academy’s online learning platform in web and mobile mode'
                    text3='· Maintained various website components of the online learning web platform and mobile version'
                    />
                    <ExperienceItem
                    src='images/McDonalds.png'
                    location='McDonalds'
                    title='Crew Member'
                    date='Jun. 2016 - Aug. 2020'
                    text1='· March 2020 Employee of the Month'
                    text2='· 2018-2019 McDonald’s McOpCo Employee Scholarship'
                    text3='· Led team to deliver optimal service to guests within a fast-paced environment, by handling and preparing requests in a timely matter, giving customer satisfaction for potential revisits'
                    />
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Experience;