import React from 'react';
import ProjectItem from './ProjectItem';
import '../App.css';
import './Projects.css'

function Projects(){
    return (
        <div className='project'>
        <div className='project__container'>
            <div className='project__wrapper'>
                <h2 class='subtitle'>Projects:</h2>
                <ul className="project__items">
                    <ProjectItem 
                    src='images/Casino.jpg'
                    title='Casino Computer Science Application'
                    date='April 2018'
                    text='Collaborated with a team of 3 people to develop casino games such as Blackjack and War. We used C# and object-oriented programming, along with images and graphics, to display an effective simulation of the game'
                    />
                    <ProjectItem
                    link='https://weatherapp.kevin7ma.ca/'
                    src='images/weather.jpg'
                    title='Weather App'
                    date='January 2021'
                    text='Utilized OpenWeather API to fetch weather information. Users can search any city to find out the weather. Created with React.js.
                    '
                    text2='Click me to visit Weather App!'
                    />

                </ul>
                <ul className="project__items">
                    <ProjectItem
                    src='images/Poker.jpg'
                    title='Poker Hands Simulation'
                    date='March 2020'
                    text='Programmed using Elixir and Haskell on Microsoft Visual Studio Code and simulates the winner based on two five-card poker hands
                    '
                    />
                    <ProjectItem
                    src='images/CarDealership.jpg'
                    title='Java Car Dealership Application'
                    date='March 2019'
                    text='Programmed using Java to make an effective simulation of a car dealership
                    '
                    />
                </ul>
            </div>
            <div className="copyright"><p>© 2021 <a className="copyright" href="https://github.com/Kuroful">Kevin Ma</a></p></div>
        </div>
        </div>

    )
}

export default Projects;