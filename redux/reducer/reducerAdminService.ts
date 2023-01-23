import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    name: '',
    example: '',
    price: 1,
    priceDetails: '',
    packsId: '',
    isEdit: false,
    deleteAction: false,
    isDelete: false
}

type typeAction = {
    payload: {
        name: string;
        value: string;
    };
}

type handleSelectChange = {
    payload: {
        name: string;
        target: string;
    };
}

export const ReducerSlice = createSlice({
    name: 'northhelper',
    initialState,
    reducers: {
        handleCloseModalService: (state) => {
            state.name = '',
            state.example = '',
            state.price = 1,
            state.priceDetails = '',
            state.packsId = '',
            state.deleteAction = false
        },
        handleChangeService: (state: any, action: typeAction) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleSelectChangeService: (state: any, action: handleSelectChange) => {
            const { name, target } = action.payload;
            state[name] = target
        },
        handleDeleteServiceAction: (state) => {
            state.deleteAction = true
        },
        handleAddServiceSucces: (state) => {
            state.name = '',
            state.example = '',
            state.price = 1,
            state.priceDetails = '',
            state.packsId = ''
        },
        handleAddServiceError: (state) => {
            state.hasError = true
        },
        handleEditServiceSucces: (state) => {
            state.name = '',
            state.example = '',
            state.price = 1,
            state.priceDetails = '',
            state.packsId = '',
            state.isEdit = true
        },
        handleEditServiceError: (state) => {
            state.hasError = true
        },
        handleDeleteServiceSucces: (state) => {
            state.name = '',
            state.example = '',
            state.price = 1,
            state.priceDetails = '',
            state.packsId = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeleteServiceError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalService, handleChangeService, handleSelectChangeService, handleDeleteServiceAction, handleAddServiceSucces, handleAddServiceError, handleEditServiceSucces, handleEditServiceError, handleDeleteServiceSucces, handleDeleteServiceError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;