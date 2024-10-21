import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const clickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="time-content-container">
        <p className="time">{timeAccessed}</p>
        <div className="info-container">
          <div className="logo-title-domain-container">
            <img src={logoUrl} alt={title} className="logo-img" />
            <div className="title-url-container">
              <h1 className="title">{title}</h1>
              <p className="domain-url">{domainUrl}</p>
            </div>
          </div>
          <div className="btn-container">
            <button type="button" className="delete-btn" onClick={clickDelete}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="delete-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
