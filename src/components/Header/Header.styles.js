import styled from "styled-components";

export const Wrapper = styled.div /*css*/` {
    background: var(--darkGrey);
    padding: 0 20px
}`;

export const Content = styled.div /*css*/` {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;

    img {
        height: auto;
        width: 20%;
    }
}`;

export const LogoImg = styled.img``;

export const TMDBLogoImg = styled.img``;