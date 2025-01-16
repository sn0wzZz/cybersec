'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type MenuContextType = {
  activeMenu: string | null
  setActiveMenu: (id: string | null) => void
}

const MenuContext = createContext<MenuContextType>({
  activeMenu: null,
  setActiveMenu: () => null,
})

export function MenuProvider({ children }: { children: ReactNode }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}

export { MenuContext }
