function GalleryItem({galleryItem}){


return (
  <>
  <img src={galleryItem.path} />
  {galleryItem.description}
  </>

)
}
export default GalleryItem;