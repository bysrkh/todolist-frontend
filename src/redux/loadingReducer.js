/**
 * bysrkh
 * @2019 GNU GPL v2, Jogja - Indonesia
 *
 * bysrkh@gmail.com
 */

const initialState = {loading: false }

const loadingReducer = (state = initialState, action) => {
    console.log(`action type : ${action.type} and data: ${JSON.stringify(action.data)}`)

    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: action.data
            }
        default:
            return {...state}
    }
}

export default loadingReducer