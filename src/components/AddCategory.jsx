
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

const [inputValue, setInputValue] = useState('')

const onInputChange = (event)=>{
    setInputValue(event.target.value)
}

const onSubmit= (event)=>{
   event.preventDefault()
   if(inputValue.trim().length <= 1){
     return
   }
   onNewCategory( inputValue.trim() )
   //setCategories((categories)=> [inputValue, ...categories])
   setInputValue('')
}

  return (
   <form  onSubmit={onSubmit}>
   <input
     type="text"
     placeholder="Search Gifs"
     value={inputValue}
     onChange={(event)=> onInputChange(event)}
   />
   </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
  };


