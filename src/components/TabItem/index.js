// Write your code here
import './index.css'

const TabItem = props => {
  const {details, changeTabFun, isActive} = props
  const {displayText, tabId} = details

  const changeTab = () => {
    changeTabFun(tabId)
  }

  return (
    <li onClick={changeTab} className="tabItemContainer">
      <p className="tabItem">{displayText}</p>
      <hr className={isActive ? 'hrLine' : ''} />
    </li>
  )
}

export default TabItem
