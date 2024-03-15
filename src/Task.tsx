class TaskItem {
  public done: boolean = false
  public readonly name: string = ""
  constructor(name?: string, done?: boolean) {
    this.name = name ?? "Untitled Task" 
    if (done) this.done = done
  }
}

export default ({ done, name }: TaskItem) => <>
  
</>

export { TaskItem }