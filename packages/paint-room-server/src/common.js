class ResponseData {
  static success(data, msg, state) {
    return {
      state: state ?? 1,
      msg: msg ?? "success",
      data: data,
    };
  }

  static fail(data, msg, state) {
    return {
      state: state ?? 0,
      msg: msg ?? "fail",
      data: data,
    };
  }
}

module.exports = {
  ResponseData,
};
