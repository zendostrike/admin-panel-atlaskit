// @flow
import React from "react";
import { BreadcrumbsStateless, BreadcrumbsItem } from "@atlaskit/breadcrumbs";
import Button, { ButtonGroup } from "@atlaskit/button";
import { StatelessSelect } from "@atlaskit/single-select";
import PageHeader from "@atlaskit/page-header";
import styled from "styled-components";

import Select from "./Select";

const Filters = styled.div`
  flex: 1;
`;

const breadcrumbs = (
  <BreadcrumbsStateless onExpand={() => {}}>
    <BreadcrumbsItem text="Some project" key="Some project" />
    <BreadcrumbsItem text="Parent page" key="Parent page" />
  </BreadcrumbsStateless>
);
const actionsContent = (
  <ButtonGroup>
    <Button appearance="primary">Crear</Button>
    <Button>...</Button>
  </ButtonGroup>
);
const barContent = (
  <Filters>
    <Select />
  </Filters>
);

export default () => (
  <PageHeader
    breadcrumbs={breadcrumbs}
    actions={actionsContent}
    bottomBar={barContent}
  >
    Universidades
  </PageHeader>
);
