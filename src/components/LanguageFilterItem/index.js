// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {item, onClickLanguage, isTrueId} = props
  const {language} = item

  const onClickChangeLanguage = () => {
    onClickLanguage(language)
  }

  const clsName = isTrueId ? 'ex-cls' : 'btn'

  return (
    <div className="list">
      <button type="button" className={clsName} onClick={onClickChangeLanguage}>
        <li>{language}</li>
      </button>
    </div>
  )
}

export default LanguageFilterItem
