const Router = require("@koa/router");
const { ResponseData } = require("../common");
const RoomDao = require("../dao/room.dao");
const router = new Router();

/**
 * 添加房间
 */
router.post("/api/room/add", (ctx) => {
  const room = RoomDao.addRoom();

  ctx.body = ResponseData.success(room);
});

/**
 * 获取房间列表
 */
router.get("/api/rooms", (ctx) => {
  const rooms = RoomDao.getRooms();

  ctx.body = ResponseData.success(
    rooms.map((room) => ({ userCount: room.users.length, id: room.id }))
  );
});

/**
 * 获取房间信息
 */
router.get("/api/room/:id", (ctx) => {
  const { id } = ctx.params;
  const room = RoomDao.getRoomDetail(id);

  ctx.body = ResponseData.success(room);
});

module.exports = router;
