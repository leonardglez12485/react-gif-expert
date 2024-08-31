
import PropTypes from 'prop-types';
import { getGif } from '../helpers/getGifs';
import { useEffect, useState } from 'react';
import { GifItems } from './GifItems';



export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages =async ()=>{
    const newImages = await getGif(category)
    setImages(newImages)
  }

  useEffect(() => {
    getImages()
  }, [])

    return (
   
        <>
          <h3>category</h3>
          <div className='card-grid'>
          {images.map((image) => (
            <GifItems
              key={image.id}
              { ...image }
              />
          ))}
        </div>
        </>

  )};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
 


