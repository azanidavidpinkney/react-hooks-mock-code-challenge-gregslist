import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeletion}) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard key={listing.id} listing={listing} handleDeletion={handleDeletion} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
