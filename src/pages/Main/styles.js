import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  .hide {
    display: none;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #ffe;
`;
export const MateriasContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

export const MateriaWrapper = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export const MateriaBox = styled.div`
  margin: 0 20px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 510px;

  img {
    width: 510px;
    height: 337px;
  }
  h3 {
    font-weight: bold;
    margin: 15px 0;
  }
  p {
  }
`;

export const EbookContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  background: var(--color-secondary-orange-1);
`;
export const EbookWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export const EbookImage = styled.div`
  flex-basis: 50%;
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;

  img {
    width: 240px;
    margin-top: -150px;
  }
`;
export const EbookActionArea = styled.div`
  max-width: 400px;
  flex-basis: 50%;
  padding: 20px;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  color: #fff;
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  a {
    display: flex;
    text-decoration: none !important;
    justify-content: center;
    align-items: center;
    width: 181px;
    height: 41px;
    background: #fff;
    color: #3c3c3c !important;
  }
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
export const SubscriptionContainer = styled.div`
  width: 100%;
  max-width: 1050px;
  background: var(--color-primary-blue-1);
`;

export const LeadContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeadForm = styled.form`
  margin-top: 30px;
  max-width: 1200px;
  height: 145px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;

  justify-content: space-around;
  align-items: center;
  background: var(--color-primary-blue-1);

  strong {
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 19px;
  }
  input.nome {
    width: 220px;
    height: 40px;
    padding-left: 22px;
  }

  input.email {
    width: 340px;
    height: 40px;
    padding-left: 22px;
  }
  button {
    background: var(--color-secondary-orange-1);
    width: 160px;
    height: 41px;
    border: none;
    color: #fff;
  }
`;

// post  (refatorar isso se der tempo)

export const PostContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h1 {
    color: #4d4d4d;
    margin-bottom: 30px;
  }
  p {
    font-family: "Open Sans";

    font-size: 16px;
    line-height: 22px;
    text-align: justify;
  }
`;
export const JumbotronContainer = styled.div`
  color: #fff;
  padding: 20px;
  height: 240px;
  width: 100%;
  background: var(--color-primary-blue-2);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  line-height: 26px;
  margin-bottom: 30px;
  h1 {
    font-style: normal;
    font-weight: normal;
    margin: 30px;
  }
  h3 {
    font-style: normal;
    font-weight: normal;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

export const BannerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export const EbookContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
`;
export const EbookDescription = styled.div`
  width: 510px;
  height: 600px;

  padding: 10px;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  h3 {
    font-weight: bold;
    margin: 15px 0;
  }

  p {
    margin: 15px 0;
  }
`;
export const EbookForm = styled.div`
  width: 500px;
  height: 450px;
  background: var(--color-primary-blue-1);
  justify-content: space-between;
`;
export const EbookFormHeader = styled.div`
  background: var(--color-secondary-orange-1);
  color: #fff;
  width: 500px;
  text-align: center;
  padding: 20px;
  p {
    margin: 15px 0;
  }
`;
export const EbookFormBody = styled.div`
  display: flex;
  height: 500px;
  width: 510px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  color: #fff;

  input {
    width: 340px;
    margin: 10px 0;
    height: 40px;
    padding-left: 22px;
  }
  button {
    background: var(--color-secondary-orange-1);
    width: 340px;
    height: 41px;
    border: none;
    color: #fff;
    margin: 10px 0;
  }
  p {
  }
`;
