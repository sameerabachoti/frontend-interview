import * as React from "react";
import RepositorySearchResults from "./RepositorySearchResults";

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

const Repositories = () => {

const [searchTerm, setSearchTerm] = React.useState("");

return (
    <div>
      <input name="search-terms" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      {searchTerm ? (
        <RepositorySearchResults searchTerm={searchTerm} />
      ) : (
        <div>Enter some text to search github repositories</div>
      )}
    </div>
  );
};

export default Repositories;
