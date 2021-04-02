
import { css } from 'styled-components';

export const breakpoints = {
	smaller: '480px',
	small: '768px',
	medium: '992px',
	large: '1200px'
};

export const bp = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});