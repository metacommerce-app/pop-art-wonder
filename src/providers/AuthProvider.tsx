import React, { useEffect, useMemo } from 'react';
import DisplayIf from '../components/conditionals/DisplayIf';
import { AuthContext, AuthContextProps } from '@/client/home/useAuth';
import PageSpinner from '@/components/spinners/PageSpinner';
import { useAccount, useDisconnect } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { EngageEventTypes } from '@/types/engage';
import useEngage from '@/hooks/useEngage';

interface AuthProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { address, isConnecting } = useAccount();
  const { disconnectAsync, isLoading } = useDisconnect();

  const { openConnectModal } = useConnectModal();
  const { publishEvent } = useEngage();
  const logout = async () => {
    await disconnectAsync();
  };

  useEffect(() => {
    if (!!address) {
      publishEvent(EngageEventTypes.ConnectedWallet, { walletAddress: address });
    }
  }, [address]);

  const wrapper: AuthContextProps = useMemo(
    () => ({
      address: address,
      isLoading: isConnecting || isLoading,
      login: openConnectModal!,
      logout,
    }),
    [address],
  );

  return (
    <AuthContext.Provider value={wrapper}>
      <DisplayIf condition={!isLoading} falsy={<PageSpinner />}>
        {children}
      </DisplayIf>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
