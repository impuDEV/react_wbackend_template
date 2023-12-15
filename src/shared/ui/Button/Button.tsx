import cls from './Button.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

export enum ButtonVariant {
    GHOST = 'ghost',
	GHOST_INVERTED = 'ghostInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    variant?: ButtonVariant
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
	children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = ButtonVariant.OUTLINE,
		square,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props

	const mods: Mods = {
		[cls[variant]]: true,
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]: disabled,
	}

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
})