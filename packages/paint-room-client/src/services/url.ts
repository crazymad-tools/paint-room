/**
 * api地址
 */
export const API_HOST = window.HOSTS.api[process.env.NODE_ENV];

// 新建房间
export const ROOM_ADD = `${API_HOST}/api/room/add`;
// 获取房间列表
export const ROOMS = `${API_HOST}/api/rooms`;
// 获取房间详情
export const ROOM = `${API_HOST}/api/room/:id`;
