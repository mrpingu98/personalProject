import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
})

sagaMiddleWare.run(rootSaga); 

//This part is us actually creating the Redux store
//All you have to do is pass in your rootReducer to its reducer property 
//Apparently it simplifies the middleware stuff (which you would usually have to configure yourself), for asynchronous calls (for API calls) 
//This creates your redux store (as the function name itself describes)
//We then pass this into the <Provider store={store}>, which we then wrap around the App element