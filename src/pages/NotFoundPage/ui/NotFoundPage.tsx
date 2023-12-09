import cls from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
// import { Navigate } from 'react-router-dom'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	return (
	// for single page
	// <Navigate to="/" replace={true} />

		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			Page not found!
		</div>
	)
}