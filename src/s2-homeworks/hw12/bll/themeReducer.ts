const initState: initStateType = {
    themeId: 1,
}

type initStateType = {
    themeId: number,
}
type ChangeThemeAction = {
    type: 'SET_THEME_ID',
    id: number
}


export const themeReducer = (state = initState, action: ChangeThemeAction): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeAction => ({ type: 'SET_THEME_ID', id }) // fix any



