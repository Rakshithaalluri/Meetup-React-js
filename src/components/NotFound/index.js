import {
  NotFoundCon,
  NotFoundImg,
  NotFoundHeading,
  NotFoundMsg,
} from './styledComponents'

const NotFound = () => (
  <NotFoundCon>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading> Page Not Found </NotFoundHeading>
    <NotFoundMsg>
      {' '}
      We are sorry, the page you requested could not be found.{' '}
    </NotFoundMsg>
  </NotFoundCon>
)

export default NotFound
