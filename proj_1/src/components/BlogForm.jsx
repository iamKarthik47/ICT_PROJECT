// BlogForm.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const BlogForm = () => {
  const [blog, setBlog] = useState({
    name: '',
    description: '',
    author: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Blog:', blog);
    // Code to handle blog submission
    // You can add API call or state update logic here
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="div" sx={{ margin: '20px 0' }}>
        Add Blog
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Blog Name"
          name="name"
          value={blog.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
          label="Description"
          name="description"
          value={blog.description}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Author Name"
          name="author"
          value={blog.author}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Blog
        </Button>
      </Box>
    </Container>
  );
};

export default BlogForm;
