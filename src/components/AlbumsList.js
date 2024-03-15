import { useFetchAlbumsQuery } from '../store';

function AlbumsList({ user }) {
  // const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const results = useFetchAlbumsQuery(user);
  
  console.log(results);
  // console.log(data, error, isLoading);

  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
