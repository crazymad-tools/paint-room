import React from "react";
import styles from "./index.module.scss";

export interface ChatBoxProps {
  placeholder: string;
  disable: boolean;
  history: string[];
}

const ChatBox: React.FC<ChatBoxProps> = (props) => {
  return (
    <section className={styles.section}>
      <ul>
        {props.history.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <input placeholder={props.placeholder} disabled={props.disable} />
    </section>
  );
};

export default ChatBox;
