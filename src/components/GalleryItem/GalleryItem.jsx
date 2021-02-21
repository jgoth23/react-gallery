import Axios from "axios";
import{useState} from 'react';


function GalleryItem({galleryItem, fetchGallery}){
  const [imageStatus, setImageStatus] = useState(false);
  
  
  const addLike = (evt) => {
    evt.preventDefault();

    Axios.put(`/gallery/like/${galleryItem.id}`)
    .then(() => {
      console.log('put on');
      fetchGallery();
    })
    .catch((error) => {
      alert('error in put', error);
    });

  }

  const imageClicked = () => {
    if (imageStatus === false) {
      setImageStatus(true);
    } else if (imageStatus === true) {
      setImageStatus(false);
      
    }
  }


return (
  <>
  {imageStatus ? <div onClick={imageClicked}>{galleryItem.description}</div> :  <img onClick={imageClicked}src={galleryItem.path} />
  }
  <p>This image has: {galleryItem.likes} likes!</p>
  <button onClick={addLike}>
  Likes!
</button>
</>

)

}
export default GalleryItem;