import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import MenuIcon from "@atlaskit/icon/glyph/menu";
import Header from "../components/presentational/Header";
import Table from "../components/presentational/Table";
import Sidebar from "../components/presentational/Sidebar";

const ListTitle = styled.div`
  color: #000;
  font-weight: "bolder";
  font-size: 1.5em;
`;

const ListItem = styled.div`
  padding: 5px 0px 5px 0px;
`;

const ListItemLink = styled.a`
  color: #4a5870;
  text-decoration: none !important;
`;

class Welcome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false
    };
    // this.closeSidebar = this.closeSidebar.bind(this);
  }

  openSidebar = () => {
    this.setState({
      isSidebarOpen: true
    });
  };

  closeSidebar = () => {
    this.setState({
      isSidebarOpen: false
    });
  };

  render() {
    return (
      <Page>
        <Grid layout="fluid">
          <GridColumn>
            <Grid>
              <GridColumn medium={1}>
                <Button
                  onClick={() => {
                    this.openSidebar();
                  }}
                  type="button"
                  css={{
                    marginTop: "1rem"
                  }}
                >
                  <MenuIcon size="medium" />
                </Button>
              </GridColumn>
              <GridColumn>
                <h1>Hello mom!</h1>
              </GridColumn>
            </Grid>
          </GridColumn>
          <GridColumn>
            <h4>Content below which takes up remaining space</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
              commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
              possimus labore! Mollitia est quis minima asperiores.
            </p>
          </GridColumn>
          <GridColumn medium={2}>
            <ListTitle>Todos los menus</ListTitle>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Lorem</ListItemLink>
            </ListItem>
          </GridColumn>
          <GridColumn
            medium={2}
            css={{
              backgroundColor: "#f4f5f7"
            }}
          >
            <ListTitle>Gestión Académica</ListTitle>
            <ListItem selected>
              <ListItemLink href="#!">Universidades</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Carreras</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#!">Cursos</ListItemLink>
            </ListItem>
          </GridColumn>
          <GridColumn medium={8}>
            <Header />
            <Table />
          </GridColumn>
        </Grid>
        <Sidebar
          onClose={this.closeSidebar}
          isOpen={this.state.isSidebarOpen}
        />
      </Page>
    );
  }
}

export default Welcome;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Welcome />, wrapper) : false;
