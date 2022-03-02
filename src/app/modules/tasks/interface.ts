export default interface ITask {
  id: number;
  name: string;
  description: string;
  createAt: Date;
  completeAt: Date;
  deadline: Date;
}
