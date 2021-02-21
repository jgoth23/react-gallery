import Axios from "axios";
import{useState} from 'react';


function GalleryItem({galleryItem}){
  const [likes, setLikes] = useState(0);
  
  
  function addLike(evt) {
    evt.preventDefault();

    Axios.put({
      method: 'PUT',
      url: `/gallery/likes/${galleryItem.id}`,
      data: likes
    })
    .then(() => {
      console.log('put on');
      fetchGallery();
    })
    .catch((error) => {
      alert('error in put', error);
    });
    


  }


return (
  <>
  <img src={galleryItem.path} />
  {galleryItem.description}
  <p>You're image has: {likes}</p>
  <button onClick={() => setLikes(likes + 1)}>
  Likes!
</button>
</>

)

}
export default GalleryItem;