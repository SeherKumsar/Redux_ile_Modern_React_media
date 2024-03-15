import { useFetchAlbumsQuery } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  // const results = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = data.map(album => {
      const header = <div>{album.title}</div>;

      return <ExpandablePanel key={album.id} header={header}>
        List of photos in the album
    </ ExpandablePanel>
    })
    
  }

  return <div>
    <div>
      Albums for {user.name}
    </div>
    <div>
      {content}
    </div>
  </div>;
}

export default AlbumsList;
