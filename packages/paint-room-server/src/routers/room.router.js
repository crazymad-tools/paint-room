const Router = require("@koa/router");
const uuid = require("uuid").v4;
const { ResponseData } = require("../common");
const router = new Router();

const rooms = [];

/**
 * 添加房间
 */
router.post("/api/room/add", (ctx) => {
  const id = uuid();
  rooms.push({
    id,
    users: [],
  });

  ctx.body = ResponseData.success({
    id,
    users: [],
  });
});

/**
 * 获取房间列表
 */
router.get("/api/rooms", (ctx) => {
  // const userId = ctx.session.userId;
  // console.log(userId);

  ctx.body = ResponseData.success(
    rooms.map((room) => ({
      id: room.id,
      userCount: room.users.length,
    }))
  );
});

/**
 * 获取房间信息
 */
router.get("/api/room/:id", (ctx) => {
  const { id } = ctx.params;

  ctx.body = ResponseData.success(rooms.find((room) => room.id === id));
});

module.exports = router;
