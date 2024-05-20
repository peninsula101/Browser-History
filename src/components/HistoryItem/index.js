import './index.css'

const HistoryItem = props => {
  const {item, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="cont-1">
        <p className="time">{timeAccessed}</p>
        <div className="details-container">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <p className="domain-title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="btn-container">
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
