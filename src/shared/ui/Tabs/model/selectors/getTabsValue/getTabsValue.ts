import { StateSchema } from 'app/providers/StoreProvider'

export const getTabsValue = (state: StateSchema) => state.tabs?.value
// 	createSelector(
// 	getTabs,
// 	(tabs: TabsSchema) => tabs.value
// )