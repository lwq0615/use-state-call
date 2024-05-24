
type GetState<T> = () => T

declare function useStateCall<T>(initialState?: T): [getState: GetState<T> & { value: T }, setStateCallback: (state: T, callback: Function) => void]

export default useStateCall