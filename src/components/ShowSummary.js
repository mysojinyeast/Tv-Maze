// ShowSummary.js
import React from 'react';
import { Link, useParams } from 'react-router-dom'; 

function ShowSummary({ shows }) {
  const { id } = useParams();
  const showDetails = shows.find(show => show.show.id === parseInt(id, 10));

  return (
    <div className="show-summary-container">
      {showDetails && (
        <div className="show-details">
          <img
            className="show-image"
            src={showDetails.show.image && showDetails.show.image.medium}
            alt={showDetails.show.name}
          />
          <div className="show-info">
            <h3 className="show-name">{showDetails.show.name}</h3>
            <div
              className="show-summary"
              dangerouslySetInnerHTML={{ __html: showDetails.show.summary }}
            />
            <Link
              to={`/booking/${showDetails.show.id}/${encodeURIComponent(showDetails.show.name)}`}
            >
              <button>Book Ticket</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowSummary;
