import React, { Children, ReactNode } from 'react';

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      
        {children}
      
    </main>
  );
}

export default Rootlayout;
