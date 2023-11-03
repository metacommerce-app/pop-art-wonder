import React from 'react';

export enum MintState {
    NotStarted,
    Completed,
    Failed,
    Pending,
}

export interface MintContextProps {
    mintState: MintState;
    mint: () => Promise<void>;
    txHash: string | null;
}

export const MintContext = React.createContext<MintContextProps>(undefined!);
export const useMint = () => React.useContext(MintContext);