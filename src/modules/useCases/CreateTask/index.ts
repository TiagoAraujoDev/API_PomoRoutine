import { TasksRepository } from "../../repositories/implamentations/TasksRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export default (): CreateTaskController => {
  const tasksRepository = new TasksRepository();
  const createTaskUseCase = new CreateTaskUseCase(tasksRepository);
  const createTaskController = new CreateTaskController(createTaskUseCase);
  return createTaskController;
};
