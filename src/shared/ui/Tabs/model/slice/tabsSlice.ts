import { TabsSchema } from 'shared/ui/Tabs/model/types/tabsSchema'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TabsSchema = {
	value: 0
}

export const tabsSlice = createSlice({
	name: 'commonTabs',
	initialState,
	reducers: {
		setValue: (state, action: PayloadAction<number>) => {
			console.log('Tabs slice set value... ' + action.payload)
			state.value = action.payload
		}
	}
})

export const { actions: tabsActions } = tabsSlice
export const { reducer: tabsReducer } = tabsSlice