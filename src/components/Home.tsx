import { createContext } from 'react';
import Links from './Links';

export function reducer(state: { age: number }, action: { type: string }) {
    switch (action.type) {
        case 'increment':
            return { age: state.age + 1 };
        case 'decrement':
            return { age: state.age - 1 };
        default:
            return state;
    }
}

//todo:move this into a separate file
export const ThemeContext = createContext('')

function Home() {
    return (
        <ThemeContext.Provider value="hello">
            <Links />
        </ThemeContext.Provider>
    )

}
export default Home;
