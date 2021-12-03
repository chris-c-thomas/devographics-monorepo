import { Locale } from 'core/i18n/translator'
import React, { createContext, useContext, FC } from 'react'

interface PageContextValue {
    locale?: Locale
}

const pageContext = createContext({})

export const PageContextProvider: FC<{ value: PageContextValue }> = (props) => {
    return <pageContext.Provider value={props.value}>{props.children}</pageContext.Provider>
}

export const usePageContext = () => useContext<PageContextValue>(pageContext)
