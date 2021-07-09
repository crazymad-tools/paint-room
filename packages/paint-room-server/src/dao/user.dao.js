const uuid = require("uuid").v4;

class UserDao {
  users = [];

  addUser() {
    const userId = uuid();
    const userName = userId.slice(`user${(userId.length - 4, userId.length)}`);

    this.users.push({
      userId,
      userName,
    });
  }

  removeUser() {}

  getUserInfo(id) {}
}

module.exports = new UserDao();
