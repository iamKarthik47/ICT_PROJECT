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
    <Container>
      <Typography variant="h4" component="div" sx={{ margin: '20px 0' }}>
        Blog Dashboard
      </Typography>
      <Grid container spacing={3}>
        {blogs.map(blog => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
