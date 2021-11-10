export class TodoItem {
  title: string;
  duration: string;
  importance: number;

  constructor(title: string, duration: string, importance: number) {
    this.title = title;
    this.duration = duration;
    this.importance = importance;
  }
}
