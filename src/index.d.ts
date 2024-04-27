

declare function useStateCall<T>(initialState: T): [getState: () => T, setStateCallback: (state: T, callback: Function) => void]

export default useStateCall