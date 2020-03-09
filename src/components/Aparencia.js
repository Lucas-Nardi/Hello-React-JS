import React, { Component } from 'react'
import './Aparencia.css'    

export default class Aparencia extends Component {
    render() {
        return (
            <div>
                <img src='https://pbs.twimg.com/profile_images/496367847052832770/-O9_0jWV_400x400.jpeg' />  
                <p className='texto-borda'> Hello React </p>  
            </div>
        )
    }
}
