import "./App.css";
import { useEffect, useState } from "react";
import CharactersContainer from "../Characters/CharactersContainer";
import CharacterContainer from "../Character/CharacterContainer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCharacters } from "../../store/actions/actions";

export default function App() {
  const dispatch = useDispatch();
  const [isFetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (isFetching) {
      // set page
      dispatch(fetchCharacters(currentPage));
      setCurrentPage(currentPage + 1);
      setFetching(false);
      // add pageTotalCount
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function scrollHandler(e: any) {
    if (
      e.target.documentElement.scrollHeight ===
      e.target.documentElement.scrollTop + window.innerHeight
    ) {
      setFetching(true);
    }
  }

  return (
    <Router>
      <Switch>
        <>
          <div className="wrapper">
            <Route exact path="/" render={() => <CharactersContainer />} />
            <Route exact path="/:id" render={() => <CharacterContainer />} />
          </div>
        </>
      </Switch>
    </Router>
  );
}
