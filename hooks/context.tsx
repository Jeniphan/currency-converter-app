import React, { FC } from 'react'
import { Theme } from '@helper/types'

interface SharedState {
	theme: Theme
	setTheme?: (value: Theme) => void
	currencyChoice: any
	setCurrencyChoice?: (value: any) => void
}

const defaultState: SharedState = {
	theme: 'light',
	currencyChoice: ''
}

const AppContext = React.createContext<SharedState>(defaultState)

export const ContextWrapper: FC = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultState.theme)
	const [currencyChoice, setCurrencyChoice] = React.useState([])

	const sharedState = { currencyChoice, setCurrencyChoice, theme, setTheme }

	return (
		<AppContext.Provider value={sharedState}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => React.useContext<SharedState>(AppContext)
