import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="e2faa274-eecf-4cfe-98bb-1b108b1cd4b3"
      userName="BakshInternational"
      userSecret="BakshInternational"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App