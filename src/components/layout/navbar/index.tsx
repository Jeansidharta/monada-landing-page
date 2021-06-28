import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Images from '../../../images';
import ContactForm from '../../reusable/contact-form';

export const NAVBAR_HEIGHT = 118;
export const CONTACT_FORM_WIDTH = 340;

const Root = styled.div`
	display: flex;
	width: 100%;
	height: ${NAVBAR_HEIGHT}px;
	background-color: ${({ theme }) => theme.colors.primary.main};
	box-shadow: ${({ theme }) => theme.shadows.card.medium};
	z-index: ${props => props.theme.zIndex.navbar};
	position: fixed;
	left: 0;
	top: 0;
	column-gap: 96px;
	padding: 16px 32px;

	font-size: 32px;
	${props => props.theme.mediaQueries.maxScreen.custom(739)} {
		column-gap: 64px;
		font-size: 24px;
	}

	${props => props.theme.mediaQueries.maxScreen.custom(600)} {
		column-gap: 32px;
		font-size: 18px;
	}

	${props => props.theme.mediaQueries.maxScreen.custom(450)} {
		column-gap: 8px;
		font-size: 14px;
	}
`;

const Logo = styled(Images.main)`
	height: 100%;
	width: 100%;
	cursor: pointer;
`;

const LogoAnchor = styled.a.attrs({ href: `#` })`
	background-color: ${({ theme }) => theme.colors.white.full};
	border-radius: 100%;
	padding: 10px;
	height: 80px;
	width: 80px;
	align-self: center;
`;

const Text = styled.p`
	color: ${props => props.theme.colors.white.full};
	margin: 0;
	text-align: center;
	height: max-content;
	align-self: center;
`;

const ContactFormContainer = styled.div`
	position: absolute;
	top: calc(100% - 0px);
	right: 0px;
	z-index: -1;
	box-shadow: ${props => props.theme.shadows.card.medium};
	background-color: ${props => props.theme.colors.white.full};
	padding: 32px;
	border-radius: 0 0 0 8px;
	width: ${CONTACT_FORM_WIDTH}px;

	${props => props.theme.mediaQueries.maxScreen.custom(1130)} {
		display: none;
	}
`;

type NavbarProps = React.PropsWithoutRef<{}>;

type NavbarComponent = React.FunctionComponent<NavbarProps>;

const Navbar: NavbarComponent = () => {
	return (
		<Root>
			<Link href="/">
				<LogoAnchor>
					<Logo />
				</LogoAnchor>
			</Link>
			<Text>
				Descubra o quanto seus esforços
				<br />
				em D&I impactam sua empresa.
			</Text>
			<ContactFormContainer>
				<ContactForm />
			</ContactFormContainer>
		</Root>
	);
};

export default Navbar;
