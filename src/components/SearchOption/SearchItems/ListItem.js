import React from 'react';
import { Checkbox, ColorPicker } from 'antd'

import './css.css'

const ListItem = (props) => {
  return (
    <div className='item-set'>
      <Checkbox />
      <span className='checkbox-label'>{props.text}</span>
      <ColorPicker size="small" />
    </div>
  )
}

export default ListItem