import slice from './state/slice';

export * from './shared/task.dto';
export const taskActions = slice.actions;
export default slice.reducer;
