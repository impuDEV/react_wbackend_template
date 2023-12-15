import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommonTabs.module.scss'
import { SyntheticEvent, useEffect } from 'react'
import { Tab, Tabs } from '@mui/material'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getTabsValue } from 'shared/ui/Tabs/model/selectors/getTabsValue/getTabsValue'
import { tabsActions } from 'shared/ui/Tabs/model/slice/tabsSlice'

interface CommonTabsProps {
    className?: string
}

export const CommonTabs = (props: CommonTabsProps) => {

	const {
		className
	} = props

	const dispatch = useAppDispatch()
	const tabsValue = useSelector(getTabsValue)

	const setValue = (value: number) => {
		dispatch(tabsActions.setValue(value))
	}

	useEffect(() => {}, [])

	const allyProps = (index: number) => {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		}
	}

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Tabs
			className={classNames(cls.CommonTabs, {}, [className])}
			value={tabsValue}
			aria-label="basic tabs"
			onChange={handleChange}

		>
			<Tab label="Item 1" {...allyProps(0)}></Tab>
			<Tab label="Item 2" {...allyProps(1)}></Tab>
			<Tab label="Item 3" {...allyProps(2)}></Tab>
		</Tabs>

	)
}