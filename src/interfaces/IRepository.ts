
export interface ICreate<T> {
  create(query: string): Promise<T>
}
export interface IFind<T> {
  find(query: string): Promise<T>
}
export interface IFindAll<T> {
  findAll(query: string): Promise<T>
}
export interface IUpdate<T> {
  updateT(query: string, id: string): Promise<T>
}
export interface IDelete {
  delete(query: string): Promise<void>
}

export interface IRepository<T> extends ICreate<T>, IFind<T>, IUpdate<T>, IDelete, IFindAll<T> { }
