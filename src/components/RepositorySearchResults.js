import * as React from "react";
import { useState, useEffect } from 'react';
/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const RepositorySearchResults = searchTerm => {

  const [hasError, setErrors] = useState(false);
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/search/repositories?q={searchTerm.searchTerm}");
      res
        .json()
        .then(res => setSearchResults(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (<div>
      <span>{JSON.stringify(searchResults)}</span>
      <span><ul>
       searchResults.map(result => (
        <li>result.name</li>  
        <li>result.description</li>
       ));
        </ul>
      </span>
      <hr />
      <span>An error has occured: {JSON.stringify(hasError)}</span>
    </div>)
};

export default RepositorySearchResults;