import React from "react";
import { Grid, Card, Icon } from "semantic-ui-react";
import "../layouts/projects.scss";
import Layout from "../components/layout";

const SecondPage = () => (
  <Layout>
    <div className="animated fadeInRight">
      <h1>
        <a href="/">
          <Icon name="chevron left" />
        </a>
        A B O U T
      </h1>
      <hr />
      <Grid
        className="projectGrid"
        centered
        doubling
        divided
        stackable
        columns={3}
      >
        <Grid.Row>
          <Grid.Column>
            <a
              href="https://github.com/rshah03/WeatherUp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card centered>
                <Card.Content>
                  <Card.Header> Weather Up </Card.Header>
                  <Card.Meta> JavaScript / NodeJS(React) </Card.Meta>
                  <Card.Description>
                    A React based, simple weather conglomerate application using
                    Redux for state management.
                  </Card.Description>
                </Card.Content>
              </Card>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://github.com/rshah03/Minesweeper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card centered>
                <Card.Content>
                  <Card.Header> Minesweeper </Card.Header>
                  <Card.Meta> Java </Card.Meta>
                  <Card.Description>
                    Minesweeper recreated in Java using Swing UI, JUnit for TDD,
                    and packaged with Gradle.
                  </Card.Description>
                </Card.Content>
              </Card>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://github.com/rshah03/Minesweeper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card centered>
                <Card.Content>
                  <Card.Header> GithubBattle </Card.Header>
                  <Card.Meta> JavaScript(React) </Card.Meta>
                  <Card.Description>
                    The application compares two github profiles and determines
                    a winner / loser based on statistical metrics.
                  </Card.Description>
                </Card.Content>
              </Card>
            </a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <a
              href="https://github.com/rshah03/Capp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card centered>
                <Card.Content>
                  <Card.Header> Capp </Card.Header>
                  <Card.Meta> iOS App (Swift) </Card.Meta>
                  <Card.Description>
                    An iOS app to find specialty local coffee shops. Uses
                    Google's Firebase for backend architecture.
                  </Card.Description>
                </Card.Content>
              </Card>
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </Layout>
);

export default SecondPage;
