"use client";

import React from 'react';

interface Props {
    children: React.ReactNode;
}

// This component is no longer needed as ClerkProvider is set up in App.tsx
// Keeping it as a simple wrapper for potential future providers
const Providers = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default Providers