import React, { useState } from "react";

function ListingCard({listing, handleDeletion}) {

  const [isFavorited, setIsFavorited] = useState(false)

  function handleClick() {
    setIsFavorited(!isFavorited)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={(e) => handleDeletion(e, listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
