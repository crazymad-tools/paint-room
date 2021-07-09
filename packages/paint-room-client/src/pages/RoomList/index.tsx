import { observer } from "mobx-react";
import React, { useRef } from "react";
import RoomManagerStore from "../../stores/RoomManagerStore";
import "./index.scss";

const Rooms: React.FC = (props) => {
  const { rooms, addRoom, enterRoom } = RoomManagerStore;

  return (
    <div className="room-list-page">
      <button className="common-button" onClick={addRoom}>
        新建房间
      </button>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <span>
              房间{room.id}：{room.userCount}/8
            </span>
            <button onClick={() => enterRoom(room.id)}>进入</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(Rooms);
