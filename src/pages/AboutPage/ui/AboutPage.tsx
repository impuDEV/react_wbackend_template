import { TabPanel } from 'shared/ui/Tabs'
import { useSelector } from 'react-redux'
import { getTabsValue } from 'shared/ui/Tabs/model/selectors/getTabsValue/getTabsValue'

const AboutPage = () => {
	const value = useSelector(getTabsValue)

	return (
		<div>
			<TabPanel
				value={value}
				index={0}
			>
				Item One
			</TabPanel>
			<TabPanel
				value={value}
				index={1}
			>
				Item Two
			</TabPanel>
			<TabPanel
				value={value}
				index={2}
			>
				Item Three
			</TabPanel>

			'О сайте'
		</div>
	)
}

export default AboutPage