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
      <buuton className="button">
        <p className="tabItem">{displayText}</p>
        <hr className={isActive ? 'hrLine' : ''} />
      </buuton>
    </li>
  )
}

export default TabItem
