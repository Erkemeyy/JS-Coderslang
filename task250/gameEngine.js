import { init } from './functions.js'
import { handleKeyPress, handleStateChange } from './handlers.js';
 
export const startMiningGame = (term, state) => {
    
    init(term);
    term.on('key',  handleKeyPress(term, state));
    setInterval(handleStateChange(term, state), 1000);
}