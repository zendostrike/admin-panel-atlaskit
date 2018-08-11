import React, { Component } from "react";
import styled from "styled-components";
import DynamicTable from "@atlaskit/dynamic-table";
import { caption, head, rows } from "./TableRow";

const Wrapper = styled.div`
  min-width: 600px;
`;

const Table = () => (
  <Wrapper>
    <DynamicTable
      caption={caption}
      head={head}
      rows={rows}
      rowsPerPage={10}
      defaultPage={1}
      loadingSpinnerSize="large"
      isLoading={false}
      isFixedSize
      defaultSortKey="term"
      defaultSortOrder="ASC"
      onSort={() => console.log("onSort")}
      onSetPage={() => console.log("onSetPage")}
    />
  </Wrapper>
);

export default Table;
