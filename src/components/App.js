import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

// App
// |- Header
//    |- Search
// |- Listings Container
//    |- Listings Card

const listingsAPI = "http://localhost:6001/listings"

function App() {

  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch(listingsAPI)
    .then(response => response.json())
    .then(setListings)
  }, [])

  function handleDeletion(e, deletedListing) {
    e.preventDefault()

    fetch(`${listingsAPI}/${deletedListing.id}`, {
      method: 'DELETE',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json'
      },
    }).then(() => deleteListing(deletedListing))
  }

  function deleteListing(deletedListing) {
    setListings(listings.filter(listing => listing.id !== deletedListing.id))
  }

  return (
    <div className="app">
      <Header setFilter={setFilter} />
      <ListingsContainer listings={listings.filter(li => li.description.startsWith(filter))} handleDeletion={handleDeletion} />
    </div>
  );
}

export default App;
