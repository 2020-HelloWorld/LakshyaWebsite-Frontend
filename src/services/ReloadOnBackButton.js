import React, { useEffect } from 'react';

const ReloadOnBackButton = () => {
  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return null; // Since this component doesn't render anything, return null.
};

export default ReloadOnBackButton;
