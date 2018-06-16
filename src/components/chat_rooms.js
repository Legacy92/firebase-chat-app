import React, { Component } from 'react';
import db from '../firebase';

class ChatRooms extends Component {
    componentDidMount() {
    db.ref('chat-rooms').orderByChild('name').on('value', snapshot => {
        console.log("Rooms:", snapshot.val());
    });
}

render(){
    return (
        <div>
            <h1 className='center'>Available Chat Rooms</h1>
        </div>
    )
}
}

export default ChatRooms;
