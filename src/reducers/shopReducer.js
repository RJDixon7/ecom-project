import {
    // SET_SHOP_CATEGORIES
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    productsSelected: []
}

export default function(staet = INITIAL_STATE, action) {
    switch (action.type) {
        // case SET_SHOP_CATEGORIES:
        //     return {
        //         ...state,
        //         categories: action.payload
        //     }
        default: return state;
    }
}