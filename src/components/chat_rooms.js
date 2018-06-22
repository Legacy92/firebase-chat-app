import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRooms, setRoom } from '../actions';
import db from '../firebase';

class ChatRooms extends Component {
    componentDidMount() {
        db.ref('chat-rooms').on('value', snapshot => {
            this.props.updateRooms(snapshot.val());
        });
    }

    selectRoom(room) {
        console.log('Selected Room:', room);
        this.props.setRoom(room.name);

        this.props.history.push(`/chat/${room.chatId}`);
    }

    render() {
        const { rooms } = this.props;

        const roomList = Object.keys(rooms).map(k => {
            return (
                <li className="collection-item" key={k} onClick={() => this.selectRoom(rooms[k])}>
                    {rooms[k].name}
                </li>
            );
        });

        return (
            <div>
                <h1 className='center'>Available Chat Rooms</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <ul className="collection">
                            {roomList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.chat.rooms
    }
}

export default connect(mapStateToProps, { updateRooms, setRoom })(ChatRooms);
