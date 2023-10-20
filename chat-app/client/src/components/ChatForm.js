import { useState } from 'react';

import styles from './styles.module.css';
import { sendMessage } from "../socketApi";

function ChatForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    sendMessage(message);
    setMessage('');
  }

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  )
}

export default ChatForm