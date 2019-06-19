import React from "react";

import { Container, HeaderDate, TitleBlog, SubTitleBlog } from "./styles";

const HeaderPost = (props) => (
    <Container>
    <HeaderDate>{ props.titulo }</HeaderDate>
    <TitleBlog>PrimeiroPost</TitleBlog>
    <SubTitleBlog>Our Eggs</SubTitleBlog>
    </Container>);

export default HeaderPost;
