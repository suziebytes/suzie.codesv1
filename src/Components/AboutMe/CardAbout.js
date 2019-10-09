import React from "react";
// import "./App.css";
// import styles from "./styles";
import aboutimg from "./aboutimg.jpg";
import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CardAbout() {
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Front End Developer</Card.Header>
        <Card.Meta>
          <span className="date">& Web Designer</span>
        </Card.Meta>
        <Card.Description>
          I merge my creative design background with my technical experience to
          build eye catching & functional products for my clients
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}
