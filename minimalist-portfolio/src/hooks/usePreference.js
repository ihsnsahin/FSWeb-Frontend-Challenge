import useLocalStorage from "./useLocalStorage";

const usePreference = (key, initialValue) => {
    const [prefer, setPrefer] = useLocalStorage(key, initialValue);
    return [prefer, setPrefer]
}
export default usePreference;