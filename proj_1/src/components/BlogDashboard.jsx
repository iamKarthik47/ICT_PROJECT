// BlogDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container maxWidth="lg" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Typography variant="h4" component="div" gutterBottom>
        Blog Dashboard
      </Typography>
      <Grid container spacing={3}>
        {blogs.map(blog => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {blog.body}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ID: {blog.id}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogDashboard;
