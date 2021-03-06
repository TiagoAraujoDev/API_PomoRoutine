import { Request, Response } from "express";

import { ListAllTasksUseCase } from "./ListAllTasksUseCase";

class ListAllTasksController {
  constructor(private listAllTasksUseCase: ListAllTasksUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const tasks = await this.listAllTasksUseCase.execute();

      return response.json({ tasks });
    } catch (err) {
      return response.status(500).json({
        error: err.message,
      });
    }
  }
}

export { ListAllTasksController };
