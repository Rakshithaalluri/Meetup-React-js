// import {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import CourseContext from '../../context/CourseContext'

import {
  HomeCon,
  RegisterCon,
  WelcomeHeading,
  RegisterText,
  RegisterButton,
  RegisterImage,
  Name,
  Topic,
  Image,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <CourseContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <>
            <Navbar />
            {isRegistered === true ? (
              <HomeCon>
                <Name>Hello {name} </Name>
                <Topic>Welcome to {topic} </Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeCon>
            ) : (
              <HomeCon>
                <RegisterCon>
                  <WelcomeHeading> Welcome to Meetup </WelcomeHeading>
                  <RegisterText> Please register for the topic </RegisterText>
                  <Link to="/register">
                    <RegisterButton type="button" onClick={onRegister}>
                      {' '}
                      Register{' '}
                    </RegisterButton>
                  </Link>
                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </RegisterCon>
              </HomeCon>
            )}
          </>
        )
      }}
    </CourseContext.Consumer>
  )
}

export default Home
