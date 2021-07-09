import { observer } from "mobx-react";
import React from "react";
import RoomManagerStore from "../../stores/RoomManagerStore";
import ChatBox from "./ChatBox";
import "./index.scss";

const PaintRoom: React.FC = (props) => {
  const { curRoom } = RoomManagerStore;

  return (
    <main className="paint-room-page">
      <header>room:{curRoom?.id}</header>
      <section>
        {/* 左侧用户列表 */}
        <aside>
          <ul>
            {curRoom?.users.map((user) => (
              <li key={user.userId}>{user.userName}</li>
            ))}
          </ul>
        </aside>
        {/* 右侧游戏内容 */}
        <aside>
          {/* 画布 */}
          <div className="canvas-container"></div>
          {/* 答题 聊天 */}
          <div className="chat-answer-container">
            <ChatBox placeholder="请输入答案" history={[]} disable={false} />
            <ChatBox placeholder="请输入聊天内容" history={[]} disable={false} />
          </div>
        </aside>
      </section>
    </main>
  );
};

export default observer(PaintRoom);
