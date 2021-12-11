// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="appItem">
      <img className="appImage" alt={appName} src={imageUrl} />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
