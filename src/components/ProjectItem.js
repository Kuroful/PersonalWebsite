import React from 'react';
function ProjectItem(props){
    return(
        <li className='project__item'>
            
            <figure className='project__item__pic-wrap' data-category={props.label}>
                <img
                className='project__item__img'
                alt=''
                src={props.src}
                />
            </figure>
            <div className='project__item__info'>
                <h2 className='project__item__title'> {props.title}</h2>
                <h3 className='project__item__title'>Date: {props.date}</h3>
                <h3 className='project__item__link'><a href={props.link}>{props.text2}</a></h3>
                <p className='project__item__text'> {props.text}</p>
            </div>
          
        </li>
    )
}


export default ProjectItem;