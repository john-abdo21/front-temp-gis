import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FilterApi } from '../../app/FetchAPI';

export const fetchReducer = createAsyncThunk(
    'filter/fetchReducer',
    async (filter) => {
        const response = await FilterApi.post("/api/complexSearch",
            {
                data: filter
            });
        console.log(response.data);
        return JSON.parse(response.data);
    }
);
const initialState = {
    landOption: {
        l_min_area: '',
        l_max_area: '',
        l_min_aed: '',
        l_max_aed: ''
    },
    options: {
        forest: {
            minDistance: '',
            maxDistance: '',
            minArea: '',
            maxArea: ''
        },
        river: {
            minDistance: '',
            maxDistance: '',
            minLength: '',
            maxLength: '',
            minWidth: '',
            maxWidth: ''
        },
        lake: {
            minDistance: '',
            maxDistance: '',
            minArea: '',
            maxArea: ''
        },
        town: {
            minDistance: '',
            maxDistance: '',
            minArea: '',
            maxArea: '',
            hospital: false,
            station: false
        }
    },
    error: null
}
const optionReducer = createSlice({
    name: 'optionReducer',
    initialState,
    reducers: {
        setLMinArea: (state, action) => {
            state.landOption.l_min_area = action.payload;
        },
        setLMaxArea: (state, action) => {
            state.landOption.l_max_area = action.payload;
        },
        setLMinAed: (state, action) => {
            state.landOption.l_min_aed = action.payload;
        },
        setLMaxAed: (state, action) => {
            state.landOption.l_max_aed = action.payload;
        },
        setFMinDistance: (state, action) => {
            state.options.forest.minDistance = action.payload;
        },
        setFMaxDistance: (state, action) => {
            state.options.forest.maxDistance = action.payload;
        },
        setFMinArea: (state, action) => {
            state.options.forest.minArea = action.payload;
        },
        setFMaxArea: (state, action) => {
            state.options.forest.maxArea = action.payload;
        },
        setRMinDistance: (state, action) => {
            state.options.river.minDistance = action.payload;
        },
        setRMaxDistance: (state, action) => {
            state.options.river.maxDistance = action.payload;
        },
        setRMinLength: (state, action) => {
            state.options.river.minLength = action.payload;
        },
        setRMaxLength: (state, action) => {
            state.options.river.maxLength = action.payload;
        },
        setRMinWidth: (state, action) => {
            state.options.river.minWidth = action.payload;
        },
        setRMaxWidth: (state, action) => {
            state.options.river.maxWidth = action.payload;
        },
        setIMinDistance: (state, action) => {
            state.options.lake.minDistance = action.payload;
        },
        setIMaxDistance: (state, action) => {
            state.options.lake.maxDistance = action.payload;
        },
        setIMinArea: (state, action) => {
            state.options.lake.minArea = action.payload;
        },
        setIMaxArea: (state, action) => {
            state.options.lake.maxArea = action.payload;
        },
        setTMinDistance: (state, action) => {
            state.options.town.minDistance = action.payload;
        },
        setTMaxDistance: (state, action) => {
            state.options.town.maxDistance = action.payload;
        },
        setTMinArea: (state, action) => {
            state.options.town.minArea = action.payload;
        },
        setTMaxArea: (state, action) => {
            state.options.town.maxArea = action.payload;
        },
        setTHospitalExist: (state, action) => {
            state.options.town.hospital = action.payload;
        },
        setTStationExist: (state, action) => {
            state.options.town.station = action.payload;
        },
        setErrorMessage: (state, action) => {
            console.log('checking errors')
            state.error = action.payload;
        }
    }
});
export const {
    setLMinArea,
    setLMaxArea,
    setLMinAed,
    setLMaxAed,
    setFMinDistance,
    setFMaxDistance,
    setFMinArea,
    setFMaxArea,
    setRMinDistance,
    setRMaxDistance,
    setRMinLength,
    setRMaxLength,
    setRMinWidth,
    setRMaxWidth,
    setIMinDistance,
    setIMaxDistance,
    setIMinArea,
    setIMaxArea,
    setTMinDistance,
    setTMaxDistance,
    setTMinArea,
    setTMaxArea,
    setTHospitalExist,
    setTStationExist,
    setErrorMessage,
} = optionReducer.actions;
export default optionReducer.reducer;