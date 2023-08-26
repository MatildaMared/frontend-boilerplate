import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--color-primary: hotpink;
		--font-primary: "Montserrat", sans-serif;
	}

	body {
		font-family: var(--font-primary);
	}
`;

export default GlobalStyles;
