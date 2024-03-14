import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  return response.data;
  // return response whatever 
  // you return here is going to be automatically assigned to action.payload
});

// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

export { fetchUsers };
