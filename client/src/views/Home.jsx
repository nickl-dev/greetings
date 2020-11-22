import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard.jsx";
import PostForm from "../components/PostForm.jsx";
import { FETCH_POSTS_QUERY } from "../util/graphql";

function Home() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);

  return user ? (
    <Grid columns={3} style={{ margin: "0" }}>
      <Grid.Row style={{ margin: "50px 0 100px 0" }}>
        <h1 className="home__title">@{user.username}'s feed</h1>
      </Grid.Row>
      <Grid.Row style={{ margin: "0", padding: "0 20px" }}>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  ) : (
    <Grid.Row className="home__wrapper">
      <h1 className="home__title">
        Greetings
        <span role="img" aria-label="emoji" className="emoji">
          👋
        </span>
      </h1>
      <h2 className="home__subtitle">The social media app.</h2>
      <Button
        as={Link}
        to="/login"
        primary
        className="home__button"
        style={{ margin: "20px 0" }}
      >
        Login
      </Button>
      <br />
      <Link to="/register" className="home__link">
        Don't have an account?
      </Link>
    </Grid.Row>
  );
}

export default Home;
