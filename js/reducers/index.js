const initialNumberState =[];

export const numberReducer = (state=initialNumberState, action) =>{ 
    if (action.type === actions.GUESS_NUMBER){
        return[...state, {
            userNumber: action.userNumber
        }]
    }
    else if(action.type === actions.GENERATE_NUMBER){
        return[...state, {
            randomNumber: action.randomNumber
        }]
    }
    else if(action.type === actions.GENERATE_TEMP){
        return[...state, {
            temperature: action.temperature
        }]
    }
    else if(action.type === actions.GENERATE_GUESSES){
        return[...state, {
            numGuesses: action.numGuesses
        }]
    }
};