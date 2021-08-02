import React, { useState, useEffect, useRef } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
// Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {

	const [state, setStaet] = useState("");
	const initial = useRef(true);

	useEffect(() => {

		if (initial.current) {
			initial.current = false;
			return;
		}

		const timer = setTimeout(() => {
			setSearchTerm(state);
		}, 500);
		
		return () => clearTimeout(timer);
		
	}, [setSearchTerm, state]);

	return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt="search-con" />
				<input
					type="text"
					placeholder="Search Movie"
					onChange={(event) => setStaet(event.currentTarget.value)}
					value={state}
				/>
			</Content>
		</Wrapper>
	);
	
};

export default SearchBar;
