import { observer } from "mobx-react";
import PaintRoom from "./pages/PaintRoom";
import RoomList from "./pages/RoomList";
import RoomManagerStore from "./stores/RoomManagerStore";

function App() {
  const { curRoom } = RoomManagerStore;

  return <div className="App">{curRoom ? <PaintRoom /> : <RoomList />}</div>;
}

export default observer(App);
