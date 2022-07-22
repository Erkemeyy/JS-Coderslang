import { checkInitCompleted, updateGold } from "./functions";

export const handleKeyPress = (term, state) => {
    return (name, matches, data) => {
        if (
            String.fromCharCode(data.code) === "g" ||
            String.fromCharCode(data.code) === "G"
        ) {
             state.gold++
        }
        for (let i = 0; i < state.producers.length; i++){
            if (String.fromCharCode(data.code) === `${state.producers[i].id}`) {
                state.gold -= state.producers[i].cost;
                state.producers[i].cost *= state.producers[i].growthRate;
                state.producers[i].count++;
                state.productionRate += state.producers[i].baseProduction;
            }
        } 

        if (!state.isInitCompleted && state.gold >= 10) {
            checkInitCompleted(term, state);
        }
    }
}

export const handleStateChange = (term, state) => () => {
    updateGold(term,state);
};