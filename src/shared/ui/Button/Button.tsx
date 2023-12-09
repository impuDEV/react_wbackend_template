import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonVariant {
    GHOST = 'ghost',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		variant,
		...otherProps
	} = props

	return (
		<button
			className={classNames(cls.Button, {}, [className])}
			{...otherProps}
		>
			{children}
		</button>
	)
}