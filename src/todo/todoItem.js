import React from 'react'
import PropTypes from 'prop-types'

function todoItem ({todo,index}) {
        return(
            <li><strong>{index+1}</strong>    {todo.title}</li>
        )
}

export default todoItem
