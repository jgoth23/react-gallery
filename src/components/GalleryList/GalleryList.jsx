import GalleryItem from '../GalleryItem/GalleryItem';
function GalleryList({ galleryList, fetchGallery }) {
  return (
    <div>
      {galleryList.map((image) => {
        return (
          <GalleryItem
            key={image.id}
            galleryItem={image}
            fetchGallery={fetchGallery}
          />
        );
      })}
    </div>
  );
}

export default GalleryList;
