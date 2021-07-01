import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "./rootReducer"
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

let persistedReducer = persistReducer({
    key: 'root',
    whitelist: ['UserReducer'],
    storage,
    stateReconciler: autoMergeLevel2
}, rootReducer)

let store = createStore(persistedReducer, composeWithDevTools());
let persistor = persistStore(
    store,
    null,
    () => {
        console.log("persist state", store.getState().UserReducer)
    }
)

export { store, persistor}
