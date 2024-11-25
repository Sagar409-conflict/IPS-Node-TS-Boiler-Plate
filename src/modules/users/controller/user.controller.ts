import userService from "../service/user.service";

class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
    } catch (error) {}
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
    } catch (error) {}
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const i = await userService.getalluser();
    } catch (error) {
      console.log("k-------->", error);
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
    } catch (error) {}
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
    } catch (error) {}
  }
}

const userController = new UserController();
export default userController;
