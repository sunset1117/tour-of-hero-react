import { MESSAGE_API } from '../../api';
import './Messages.scoped.css';

const Msg = ({ msgs }: { msgs: string[] }) => {
  return msgs.map((msg) => <div>{msg}</div>);
};

const Messages = () => {
  const msgs = MESSAGE_API.messages;
  const hasMsg = msgs.length > 0;

  const handleButtonClick = () => {
    MESSAGE_API.clear();
  };

  return (
    <>
      <h2>Messages</h2>
      <div>
        <button type="button" className="clear" onClick={handleButtonClick}>
          Clear messages
        </button>
        {hasMsg && <Msg msgs={msgs} />}
      </div>
    </>
  );
};

export default Messages;
