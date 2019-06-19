import React, { Fragment } from "react";
import DownloadLink from "react-download-link";
import { Container } from "./styles";

import Header from "../../components/Header";

const Ebook = () => (
  <Fragment>
    <Header />
    <Container>
      <DownloadLink
        filename="gs://blog-fcam.appspot.com/eBook OKR.pdf"
        exportFile={() => "My cached data"}
      >
        Save to disk
      </DownloadLink>
    </Container>
  </Fragment>
);

export default Ebook;
