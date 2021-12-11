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
      <button className="button">
        <p className="tabItem">{displayText}</p>
        <hr className={isActive ? 'hrLine' : ''} />
      </button>
    </li>
  )
}

export default TabItem
