import GalleryItem from '../GalleryItem/GalleryItem';
function GalleryList({ galleryList }) {
  return (
    <>
      <div>
        {galleryList.map((image) => {
          return <GalleryItem key={image.id} galleryItem={image} />;
        })}
      </div>
    </>
  );
}

export default GalleryList;

