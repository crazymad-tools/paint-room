const uuid = require("uuid").v4;

const users = [];

function auth(ctx, next) {
  if (!ctx.session.userId) {
    const userId = uuid();
    const userName = userId.slice(`user${(userId.length - 4, userId.length)}`);
    ctx.session.userId = userId;

    users.push({
      userId,
      userName,
    });
  }

  next();
}

module.exports = auth;
