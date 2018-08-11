import React, { Fragment, Component } from "react";
import Drawer from "@atlaskit/drawer";
import styled from "styled-components";

const ListTitle = styled.div`
  color: #000;
  font-weigth: "bold";
`;

const ListItem = styled.div`
  padding: 5px 0px 5px 0px;
`;

const Sidebar = props => (
  <Fragment>
    <Drawer onClose={props.onClose} isOpen={props.isOpen} width="narrow">
      <h2>Hello Drawer</h2>
      <ListTitle>Hola</ListTitle>
      <ListItem>
        <a href="#!">Lorem</a>
      </ListItem>
      <ListItem>
        <a href="#!">Lorem</a>
      </ListItem>
      <ListItem>
        <a href="#!">Lorem</a>
      </ListItem>
      <ListItem>
        <a href="#!">Lorem</a>
      </ListItem>
      <ListItem>
        <a href="#!">Lorem</a>
      </ListItem>
      <ListItem>
        <a href="#!">Lorem</a>
      </ListItem>
      <ListTitle>Chau</ListTitle>
      <ListItem>
        <a href="#!">Lorem</a>
      </ListItem>
      <ListItem>
        <a href="#!">Lorem</a>
      </ListItem>
      <ListTitle>Cuenta</ListTitle>
      <ListItem>
        <a href="#!">Perfil</a>
      </ListItem>
      <ListItem>
        <a href="#!">Configuración</a>
      </ListItem>
      <ListItem>
        <a href="#!">Salir</a>
      </ListItem>
    </Drawer>
  </Fragment>
);

export default Sidebar;
