import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard";

const Home = () => {
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row centered>
          <h1>Recent posts</h1>
        </Grid.Row>
        <Grid.Row>
          {loading ? (
            <h1>Loading posts...</h1>
          ) : (
            posts &&
            posts.map((post) => (
              <Grid.Column key={post.id} style={{ marginBottom: "20px" }}>
                <PostCard post={post}></PostCard>
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
export default Home;
