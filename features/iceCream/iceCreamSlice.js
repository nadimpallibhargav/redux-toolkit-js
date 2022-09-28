const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cake/cakeSlice').cakeActions;

const initialState = {
    numberOfIceCream: 10
}

const iceCreamSlice = createSlice({
    name: 'IceCream',
    initialState: initialState,
    reducers: {
        orderIceCream: (state) => {
            state.numberOfIceCream--
        },
        restockIceCream: (state, action) => {
            state.numberOfIceCream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.orderCake, (state) => {
            state.numberOfIceCream--
        });
    },
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;