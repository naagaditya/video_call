import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Room from './room/Room';
import db from './firebase.config';

function App() {
  const roomId = window.location.search.split('=')[1];
  if (roomId) {
    return <Room/>
  }
  const createRoom = async () => {
    const roomRef = await db.collection('rooms').add({});
    window.location.href = `/?roomId=${roomRef.id}`
  }
  return (
    <div className="App">
      <Button
        variant="primary"
        onClick={createRoom}>
        Create Room →
      </Button>
    </div>
  );
}

export default App;
