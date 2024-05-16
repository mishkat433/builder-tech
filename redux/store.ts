import { configureStore } from "@reduxjs/toolkit"
import { api } from "./api/apiSlice";


export const makeStore = () => {
    return configureStore({
        reducer: {
            // counter: counterReducer,
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']