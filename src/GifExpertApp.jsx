
import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Breaking Bad']);

    const onAddCategory = (newCategory) => {
      // categories.push('Valorant')

      const categoriesUpper = categories.map(element => {
        return element.toUpperCase();
      });

      if(categoriesUpper.includes(newCategory.toUpperCase())) return;

      setCategories([newCategory, ...categories]);
  
    }

  return (
    <>
    <h1>Titulua</h1>

    <AddCategory  
    // setCategories={setCategories}
    onNewCategory={event => onAddCategory(event)}
    />

        { categories.map( category => (
        <GifGrid key={ category } category={category}/>
        )
        )}

    </>
  )
}
