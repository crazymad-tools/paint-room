import React, { useRef } from "react";
import { useEffect } from "react";
import styles from "./index.module.scss";

interface ChatLine {
  type: "user" | "system";
  text: string;
  userName?: string;
}

export interface ChatBoxProps {
  placeholder: string;
  disable: boolean;
  history: ChatLine[];
}

const ChatBox: React.FC<ChatBoxProps> = (props) => {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!ulRef.current) return;

    ulRef.current.scrollTop =
      ulRef.current.scrollHeight - ulRef.current.clientHeight;
  }, [props.history]);

  const getMsgLine = (msg: ChatLine) => {
    if (msg.type === "system") {
      return <span className={styles.systemMsg}>{msg.text}</span>;
    } else if (msg.type === "user") {
      return (
        <span className={styles.userMsg}>
          <label>{msg.userName}:</label>
          <span>{msg.text}</span>
        </span>
      );
    }
  };

  return (
    <section className={styles.section}>
      <ul ref={ulRef}>
        {props.history.map((msg, idx) => (
          <li key={idx}>{getMsgLine(msg)}</li>
        ))}
      </ul>
      <input placeholder={props.placeholder} disabled={props.disable} />
    </section>
  );
};

export default ChatBox;
