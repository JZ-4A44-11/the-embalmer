import { IsNotEmpty, IsString } from 'class-validator';

export interface Task {
  id: string;
  title: string;
  description: string;
}

export class TaskDto implements Task {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  constructor(props: Task) {
    this.title = props.title;
    this.description = props.description;
  }
}
