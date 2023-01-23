import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';
import reducerAdmin from './reducer/reducerAdmin';
import reducerAdminClient from './reducer/reducerAdminClient';
import reducerAdminInformation from './reducer/reducerAdminInformation';
import reducerAdminPack from './reducer/reducerAdminPack';
import reducerAdminService from './reducer/reducerAdminService';


export const store = configureStore({
    reducer: {
        app: reducer,
        admin: reducerAdmin,
        adminClient: reducerAdminClient,
        adminInformation: reducerAdminInformation,
        adminPack: reducerAdminPack,
        adminService: reducerAdminService,
    }
});