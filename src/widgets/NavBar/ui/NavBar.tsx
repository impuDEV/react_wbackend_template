import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { CommonTabs } from 'shared/ui/Tabs'
import { useLocation } from 'react-router-dom'

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
	const location = useLocation()

	return (
		<div className={classNames(cls.NavBar, {}, [className])}>
			{location.pathname === RoutePath.about &&
				<CommonTabs/>
			}
			<div className={cls.links}>
				<AppLink
					variant={AppLinkVariant.SECONDARY}
					to={RoutePath.main}
					className={cls.mainLink}
				>Главная</AppLink>
				<AppLink
					variant={AppLinkVariant.SECONDARY}
					to={RoutePath.about}
					className={cls.mainLink}
				>О нас</AppLink>
			</div>
		</div>
	)
}