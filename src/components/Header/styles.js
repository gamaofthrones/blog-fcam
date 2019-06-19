import styled from "styled-components";

export const HeaderBlog = styled.div`
  /*Menu*/
  background: var(--color-secondary-orange-1);

  .menu {
    height: 60px;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .menu a {
    color: white;
  }

  .menu-logo a {
    font-weight: bold;
    text-decoration: none;
  }

  .menu-nav {
    height: 60px;
    display: flex;
  }
  .menu-nav ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .menu-nav a {
    font-size: 1.25em;
    display: block;
    padding: 10px;
    text-decoration: none;
  }

  .menu-nav a:hover {
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
`;

export const HeaderLogo = styled.div`
  background: var(--color-primary-blue-0);

  /* border: 1px solid #000000;
  display: flex;
  justify-content: center;
  font-size: 28px;
  align-items: center;
  width: 122px;
  height: 56px;
  color: #000000; */
`;
