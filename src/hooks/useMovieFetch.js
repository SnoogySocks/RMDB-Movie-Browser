import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
	const [state, setState] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const sessionState = isPersistedState(movieId);
		if (sessionState) {
			console.log("getting session state");
			setState(sessionState);
			setError(false);
			setLoading(false);
			return;
		}

		// Fetch a movie
		(async () => {
			try {
				setLoading(true);
				setError(false);

				const movie = await API.fetchMovie(movieId);
				const credits = await API.fetchCredits(movieId);
				// Get directors only
				const directors = credits.crew.filter(
					(member) => member.job === "Director"
				);

				console.log("fetching data");
				setState({
					...movie,
					actors: credits.cast,
					directors,
				});

				setLoading(false);
			} catch (error) {
				setError(true);
			}
		})();
	}, [movieId]);

	// Write to sessionStorage
	useEffect(() => {
		const sessionState = sessionStorage.getItem(movieId);
		if (sessionState===null || sessionState==="{}") {
			sessionStorage.setItem(movieId, JSON.stringify(state));
		}
	}, [movieId, state]);

	return { state, loading, error };
};
