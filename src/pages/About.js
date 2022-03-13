import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-me'>
        <h3 className='subheader'>History of the Madness Picks</h3>
        <p>

        </p>
        <br />
        <h3 className='subheader'>About the Developer</h3>
        <p>
          Hi I'm <a href='https://www.linkedin.com/in/taylor-%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-gaw-6b600333/'>Taylor Gaw</a>. I like to consider myself a software engineer on the run. I'm often working from various cities across the country, exploring what the USA has to offer. 
        </p>
        <p>Outside of work - when I'm not fishing rivers and streams, or hitting the slopes - I'm working on projects that I think are fun or that others would find useful in their day to day.
        </p>
        <p>
          Madness Picks is my first major release and I hope to put out more fun projects in the future for you all to enjoy! Follow me on <a href='https://github.com/taylorgaw'>Github</a> to see the latest projects or on <a href='https://www.instagram.com/thegawbageman/'>Instagram</a> to see what else I've been up to.
        </p>
        <br />
        <Link to='/'>Main Menu</Link>
    </div>
  )
}

export default About;
