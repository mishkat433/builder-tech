import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductFiler {
    status: boolean;
    priceRange: number;
}


const initialState: IProductFiler = {
    status: false,
    priceRange: 150,

}
const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        toggleState: (state) => {
            state.status = !state.status
        },
        setPriceRange: (state, action: PayloadAction<number>) => {
            state.priceRange = action.payload
        }

    }
})

export const { toggleState, setPriceRange } = productsSlice.actions;

export default productsSlice.reducer;