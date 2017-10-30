export class iocContainer {

  private _registry = {};

  register <I, T> (
    type : I, 
    factory : (container : iocContainer) => T
  ) {
    this._register(type, factory);
  }

  registerSingleton <I, T> (
    type : I, 
    singleton : T
  ) {
    this._register(type, singleton);
  }

  resolve <T> (type : T) : T {

    let name = type['name'];
    let factory = this._registry[name];

    if (factory === undefined)
      throw new Error(`Dependency of type "${name}" was not found.`);

    return (factory['constructor'] === Function)
      ? factory(this)
      : factory;
  }

  private _register(
    type : any, 
    factory : any
  ) : void {
    this._registry[type['name']] = factory;
  }
}
