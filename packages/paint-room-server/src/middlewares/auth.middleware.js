const uuid = require("uuid").v4;
const UserDao = require('../dao/user.dao');

const users = [];

function auth(ctx, next) {
  if (!ctx.session.userId) {
		UserDao.addUser();

    ctx.session.userId = userId;

    users.push({
      userId,
      userName,
    });
  }

  next();
}

module.exports = auth;
