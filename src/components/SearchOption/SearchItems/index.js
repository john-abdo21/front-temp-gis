import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

import './css.css'

const SearchItems = () => {
  return (
    <div className='right-checkbox-group'>
      <ListItem text='Land' />
      <ListItem text='Forest' />
      <ListItem text='River' />
      <ListItem text='Lake' />
      <ListItem text='Others' />
    </div>
  );
}

export default SearchItems