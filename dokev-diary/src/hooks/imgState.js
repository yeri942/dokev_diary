import { useReducer } from 'react';

const reducer(state,action){
    return{
        ...state,
        [action.name]:action.value
    };
}

export default function imgState(a){
    const [state, dispatch] = useReducer(reducer, a)
    const onChange=e=>{
        dispatch(e.target);
    };
    return [state, onChange];
}