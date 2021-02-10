import React from 'react';

function ExperienceItem(props){
    return(
        <li className='experience__item'>
            
            <figure className='experience__item__pic-wrap' data-category={props.label}>
                <img
                className='experience__item__img'
                alt=''
                src={props.src}
                />
            </figure>
            <div className='experience__item__info'>
                <h2 className='experience__item__title'> {props.title}</h2>
                <h3 className='experience__item__title'>Location: {props.location}</h3>
                <h3 className='experience__item__title'>Date: {props.date}</h3>
                <p className='experience__item__text'> {props.text1}</p>
                <p className='experience__item__text'> {props.text2}</p>
                <p className='experience__item__text'> {props.text3}</p>
            </div>
          
        </li>
    )
}


export default ExperienceItem