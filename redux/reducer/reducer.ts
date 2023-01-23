import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    isToggle: true,
    index: '',
    isZoom: false,
    lastname: '',
    firstname: '',
    email: '',
    telephone: '',
    city: '',
    zipCode: '',
    selectPackForFormContact: '',
    nameForPack: '',
    details: '',
    selectServiceForFormContact: ''
}

type handleChange = {
    payload: {
        name: string;
        value: string;
    };
}

type handleTargetChange = {
    payload: {
        name: string;
        target: string;
        id: string;
    };
}

type handleChangeDetails = {
    payload: {
        name: string;
        target: string;
    };
}

export const ReducerSlice = createSlice({
    name: 'northhelper',
    initialState,
    reducers: {
        closeZoom: (state) => {
            state.isZoom = false
        },
        createHandleChange: (state: any, action: handleChange) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        createHandleChangeInt: (state: any, action: handleTargetChange) => {
            const { name, target, id } = action.payload;
            state[name] = target,
            state.selectPackForFormContact = target,
            state.nameForPack = id,
            state.selectServiceForFormContact = ''
        },
        createHandleChangeText: (state: any, action: handleTargetChange) => {
            const { name, target, id } = action.payload;
            state[name] = target,
            state.selectServiceForFormContact = id

        },
        createHandleChangeDetails: (state: any, action: handleChangeDetails) => {
            const { name, target } = action.payload;
            state[name] = target

        },
        sendEmailSuccess: (state) => {
            state.lastname = '',
            state.firstname = '',
            state.email = '',
            state.telephone = '',
            state.city = '',
            state.zipCode = '',
            state.selectPackForFormContact = '',
            state.nameForPack = '',
            state.details = '',
            state.selectServiceForFormContact = ''
        },
        sendEmailError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    closeZoom, createHandleChange, createHandleChangeInt,
    createHandleChangeText, createHandleChangeDetails, sendEmailSuccess,
    sendEmailError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;