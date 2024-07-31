export let initialState = {
};

export let dataReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case "REMOVE_DATA":
            return {
                ...state,
                data: state.data.filter((item: any) => item.id !== action.payload)
            };
        default:
            return state;
    }
}