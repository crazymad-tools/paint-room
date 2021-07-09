export interface RoomListInfo {
  id: string;
  userCount: number;
}

export interface RoomDetailInfo {
  id: string;
  users: {
    userId: string;
    userName: string;
  }[];
}
