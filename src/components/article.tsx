import * as React from "react";
import { Box, Content } from "bloomer";

export const Article = props => (
  <Box>
    <Content>
      <a href={props.linkUrl} target="_blank">
        <h1>{props.title}</h1>
      </a>
      <small>{props.pubdate}</small>
      <p>{props.description}</p>
    </Content>
  </Box>
);
