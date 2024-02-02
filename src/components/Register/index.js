import CourseContext from '../../context/CourseContext'
import Navbar from '../Navbar'
import {
  RegistrationCon,
  RegistrationImgFormCon,
  RegistrationImage,
  RegistrationForm,
  JoinText,
  LabelText,
  Input,
  Select,
  Option,
  RegisterNowButton,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <CourseContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const onSubmit = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeCourse = event => {
        changeTopic(event.target.value)
      }
      const onChangeName = event => {
        changeName(event.target.value)
      }

      return (
        <>
          <Navbar />
          <RegistrationCon>
            <RegistrationImgFormCon>
              <RegistrationImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegistrationForm onSubmit={onSubmit}>
                <JoinText> Let us join </JoinText>
                <>
                  <LabelText htmlFor="name">NAME </LabelText>
                  <Input
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your name"
                  />
                </>
                <>
                  <LabelText htmlFor="topic"> TOPICS </LabelText>
                  <Select id="topic" onChange={onChangeCourse} value={topic}>
                    {topicsList.map(each => (
                      <Option key={each.id} value={each.id}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Select>
                </>
                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>
                {showError === true ? <p> Please enter your name </p> : ''}
              </RegistrationForm>
            </RegistrationImgFormCon>
          </RegistrationCon>
        </>
      )
    }}
  </CourseContext.Consumer>
)

export default Register
