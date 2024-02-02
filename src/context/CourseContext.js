import React from 'react'

const TopicContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})

export default TopicContext
