import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { nanoid } from '@reduxjs/toolkit';

export type TaskStructure = {
  id: string;
  name: string;
  description: string;
  createAt: string;
  completed: boolean;
  deadline: number;
};

export interface CreateTaskDto {
  name: string;
  description: string;
  deadline: number;
  completed?: boolean;
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

  @IsBoolean()
  completed: boolean;

  @IsNumber()
  deadline: number;

  constructor(props: CreateTaskDto) {
    this.id = nanoid();
    this.name = props.name;
    this.description = props.description;
    this.createAt = new Date().toDateString();
    this.deadline = props.deadline;
    this.completed = props.completed;
    if (!props.completed) {
      this.completed = false;
    }
  }
}
