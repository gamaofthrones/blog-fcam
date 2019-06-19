import styled from "styled-components";

export const HeaderBlog = styled.div`
  width: 100%;
  height: 80px;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  color: #fff;
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
  border: 1px solid #000000;
  display: flex;
  justify-content: center;
  font-size: 28px;
  align-items: center;
  width: 122px;
  height: 56px;
  color: #000000;
`;

export const HeaderNavigation = styled.ul`
  list-style: none;
  display: flex;
  font-size: 24px;
  flex-direction: row;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
