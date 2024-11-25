import User from "../model/user.model";

class UserService {
  async getalluser() {
    return await User.findAll();
  }
}

const userService = new UserService();

export default userService;
