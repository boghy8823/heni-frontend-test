import { useLocalStorage } from '.'

export const UseLocalStorageExample = () => {
    const [storedValue, setValue] = useLocalStorage('test', 'test');
    
  return (
    <div>
      <div>
        <div data-testid="localstorage-test">
          {storedValue}
        </div>
        <button data-testid="localstorage-set-test" onClick={() => setValue('test2')}>
          {storedValue}
        </button>
      </div>
     
    </div>
  )
};