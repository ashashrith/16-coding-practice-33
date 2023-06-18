// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {eachItem} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachItem

  return (
    <div className="bg">
      <img src={avatarUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <div className="div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="image"
        />
        <p className="p">{starsCount}</p>
      </div>
      <div className="div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="stars"
          className="image"
        />
        <p className="p">{forksCount}</p>
      </div>
      <div className="div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="stars"
          className="image"
        />
        <p className="p">{issuesCount}</p>
      </div>
    </div>
  )
}
export default RepositoryItem
