import React from 'react';
import styled from 'styled-components';
import { useHamburguer } from '../../../contexts/hamburguer';

const Root = styled.li`
	list-style: none;
	${props => props.theme.mediaQueries.maxScreen.tablet} {
		width: 100%;
	}
`;

const Anchor = styled.a`
	color: black;
	text-decoration: none;
	font-size: ${props => props.theme.font.size.large};
	transition-duration: 200ms;
	transition-property: background-color color;
	outline: none;
	color: ${props => props.theme.colors.primary.main};
	:hover, :focus {
		background-color: ${props => props.theme.colors.primary.main};
		color: white;
	}
	${props => props.theme.mediaQueries.maxScreen.tablet} {
		// Mobile only
		display: block;
		padding: 16px 24px;
		width: 100%;
		width: 100%;
	}
	${props => props.theme.mediaQueries.minScreen.tablet} {
		// Desktop only
		margin: 0 8px;
		padding: 8px 12px;
		border-radius: 8px;
	}
`;

type NavLinkProps = React.PropsWithChildren<{
	/** The ID of the document object to scroll to */
	idToFocus: string,
}> & React.ComponentProps<'li'>;

type NavLinkComponent = React.FunctionComponent<NavLinkProps>;

const NavLink: NavLinkComponent = ({
	idToFocus,
	children,
	ref,
	onClick,
	...props
}) => {
	const { isHamburguerOpen } = useHamburguer();

	function handleClick (event: React.MouseEvent<HTMLLIElement>) {
		const targetElem = document.getElementById('#' + idToFocus);
		if (!targetElem) {
			console.warn(`Trying to scroll to invalid element of id '${idToFocus}'`);
			return;
		}
		// TODO - actual scroll
		console.log(`Scrolling to element...`, targetElem);

		if (onClick) onClick(event);
	}

	return (
		<Root onClick={handleClick} {...props}>
			<Anchor tabIndex={isHamburguerOpen ? 0 : -1} href='#'>
				{children}
			</Anchor>
		</Root>
	);
}

export default NavLink;