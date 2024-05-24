import { useEffect, useMemo, useRef, useState } from "react";


export default function useStateCall(initialState) {

  const [state, setState] = useState(initialState);
  const callbackRef = useRef({
    state: initialState,
    handle: null,
    setHandle(handle) {
      this.handle = handle;
    },
    setState(state) {
      this.state = state
    }
  });

  useEffect(() => {
    callbackRef.current.handle?.()
  }, [state])

  const setStateEffect = (state, handle) => {
    callbackRef.current.setState(state);
    callbackRef.current.setHandle(handle)
    setState(state);
  }

  const getState = useMemo(() => {
    const fun = () => callbackRef.current.state
    Object.defineProperty(fun, 'value', {
      get() {
        return callbackRef.current.state
      }
    })
    return fun
  })

  return [getState, setStateEffect];
}