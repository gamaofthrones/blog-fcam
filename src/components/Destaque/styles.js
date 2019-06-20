import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const DestaqueTextWrapper = styled.div`
  width: 420px;
  height: 337px;
  background: url("https://firebasestorage.googleapis.com/v0/b/blog-fcam.appspot.com/o/hand-holding-white-light-bulb-with-crumpled-paper-balls-gray-background_23-2147873532.png?alt=media&token=9d8e9560-4d59-4153-ae25-549f4b5a628a");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
export const DestaqueImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
  width: 420px;
  color: #fff;
  height: 212px;
  background: var(--color-primary-blue-1);
  position: relative;
  left: 50px;
`;
