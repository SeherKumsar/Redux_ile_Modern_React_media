import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';

function UsersList() {
  const dispatch = useDispatch();
  useSelector((state) => {
    return state.users; // { data: [], isLoading: false, error: null}
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  
  return 'Users List';
}

export default UsersList;
