import { v4 as uuid } from 'uuid';
import { IsNumber, IsString } from 'class-validator';

export type TaskStructure = {
  id: string;
  name: string;
  description: string;
  createAt: string;
  completeAt: string;
  deadline: number;
};

export interface CreateTaskDto {
  name: string;
  description: string;
  deadline: number;
  completeAt: string;
}

export class Task implements TaskStructure {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  createAt: string;

  @IsString()
  completeAt: string;

  @IsNumber()
  deadline: number;

  constructor(props: CreateTaskDto) {
    this.id = uuid();
    this.name = props.name;
    this.description = props.description;
    this.createAt = new Date().toDateString();
    this.completeAt = props.completeAt;
    this.deadline = props.deadline;
  }
}
