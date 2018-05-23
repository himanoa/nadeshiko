import * as React from "react";
import { Box, Content } from "bloomer";
import styled from "styled-components";

const P = styled.p`
  word-break: break-all;
`;

const Headline = styled.h1`
  word-break: break-all;
`;

export const Article = props => {
  return (
    <Box>
      <Content>
        <a href={props.linkUrl} target="_blank">
          <Headline>{props.title}</Headline>
        </a>
        <small>{props.pubdate}</small>
        <P>{props.description}</P>
      </Content>
    </Box>
  );
};
