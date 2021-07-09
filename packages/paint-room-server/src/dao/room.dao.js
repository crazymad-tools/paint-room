const uuid = require("uuid").v4;

const rooms = [];

class RoomDao {
  rooms = [];

  getRooms() {
    return this.rooms;
  }

  getRoomDetail(id) {
    return this.rooms.find((room) => room.id === id);
  }

  addRoom() {
    const id = uuid();
    this.rooms.push({
      id,
      users: [],
    });

    return {
      id,
      users: [],
    };
  }
}

module.exports = new RoomDao();
