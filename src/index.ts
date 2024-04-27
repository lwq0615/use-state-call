import { useEffect, useState } from "react";


export default function useStateCall(initialState) {

  const [state, setState] = useState(initialState);
  const [callback] = useState({
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
    callback.handle?.()
  }, [state])

  const setStateEffect = (state, handle) => {
    callback.setState(state);
    callback.setHandle(handle)
    setState(state);
  }

  return [() => callback.state, setStateEffect];
}