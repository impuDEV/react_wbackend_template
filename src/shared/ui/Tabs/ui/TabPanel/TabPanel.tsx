import { classNames } from 'shared/lib/classNames/classNames'
import cls from './TabPanel.module.scss'
import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'

interface TabPanelProps {
    className?: string
	children?: ReactNode
	index: number
	value?: number
}

export const TabPanel = (props: TabPanelProps) => {

	const {
		className,
		children,
		value,
		index,
		...otherProps
	} = props

	return (
		<div
			className={classNames(cls.TabPanel, {}, [className])}
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...otherProps}
		>
			{value === index && (
				<Box sx={{p:3}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}