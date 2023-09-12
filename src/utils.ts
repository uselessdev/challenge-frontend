type Action<T, U> = (arg: T) => U

export function compose<T, U>(actions: Action<T, U>[]): Action<T, U> {
  // @ts-expect-error arg type
  return (arg: T) => {
    // @ts-expect-error result and args conflicts in type
    return actions.reduce((result, action) => {
      return action(result)
    }, arg)
  }
}
