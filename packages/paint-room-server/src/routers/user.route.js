const Router = require("@koa/router");
const uuid = require("uuid").v4;
const { ResponseData } = require("../common");
const router = new Router();

/**
 * 添加房间
 */
router.post("/api/user/info", (ctx) => {
  ctx.body = ResponseData.success({
		userId: ctx.session.userId,
		
  });
});

module.exports = router;
