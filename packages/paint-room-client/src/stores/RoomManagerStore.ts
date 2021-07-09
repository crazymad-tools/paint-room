import { makeAutoObservable } from "mobx";
import { get, post } from "../services/request";
import { ROOM, ROOMS, ROOM_ADD } from "../services/url";
import { RoomDetailInfo, RoomListInfo } from "../types/common";

class RoomManagerStore {
  /**
   * 房间列表
   */
  rooms: RoomListInfo[] = [];

  /**
   * 用户当前所在房间
   */
  curRoom?: RoomDetailInfo;

  constructor() {
    makeAutoObservable(this);

    this.getRooms();
  }

  /**
   * 获取房间列表
   */
  getRooms = async () => {
    const res = await get(ROOMS);

    if (res.state === 1) {
      this.rooms = res.data;
    }
  };

  /**
   * 添加房间
   */
  addRoom = async () => {
    const res = await post(ROOM_ADD);

    if (res.state === 1) {
      this.curRoom = res.data;
    }
  };

  /**
   * 进入房间
   */
  enterRoom = async (id: string) => {
    const res = await get(ROOM.replace(":id", id));

    if (res.state === 1) {
      this.curRoom = res.data;
    }
  };
}

export default new RoomManagerStore();
