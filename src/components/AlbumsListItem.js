import Button from './Button';
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {
    
    return (  
        <div>{album.title}</div>
    );
}

export default AlbumsListItem;