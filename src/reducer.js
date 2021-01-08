export const initialState = {
    user: null,
    // token: "gSrM8AD0hczr81QOICMww23MdDzhFL5V983p335C3JjB6q0gK5AG8z3GV9RffPIAAo4uQlTskvQKGKVuPIOaJU6Ilp3BxmA55lHYTWUW",
    playlists:[],
    playing:false,
    item:null
}

const reducer = (state, action) => {
// console.log(action)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists

            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
            default:
                return state;
    }
}

export default reducer