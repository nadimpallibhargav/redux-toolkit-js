const store = require("./app/store");
const fetchUsers = require("./features/user/userSlice").fetchUsers;
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions;

// console.log('initial cakes, IceCream: ', store.getState());
const unSubscribe = store.subscribe(() => {console.log(()=>{})});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.orderCake());
// store.dispatch(iceCreamActions.orderIceCream());
// store.dispatch(cakeActions.restockCake(1));

// unSubscribe();