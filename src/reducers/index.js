import { combineReducers } from 'redux';

import userReducer from './userReducer';
import menuListReducer from './menuListReducer';
import accountsReducer from './accountsReducer';
import pillStoresReducer from './pillStoresReducer';

export default combineReducers({ user: userReducer, menuList: menuListReducer, accounts: accountsReducer, pillStores: pillStoresReducer });
