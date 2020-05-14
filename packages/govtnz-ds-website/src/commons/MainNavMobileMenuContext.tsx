import React from 'react';

type MainNavMobileMenuContextProps = {
  children: React.ReactNode;
};

type MobileMenuContextValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenuContext = React.createContext<
  MobileMenuContextValue | undefined
>(undefined);

export default function MainNavMobileMenuContext({
  children,
}: MainNavMobileMenuContextProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

// export const useMobileMenuContext = (): MobileMenuContextValue => {
//   const value = React.useContext(MobileMenuContext);
//   if (!value) throw Error(`Mobile menu used outside context`);
//   return value;
// };
