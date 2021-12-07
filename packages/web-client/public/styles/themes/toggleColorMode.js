function ToggleColorMode(setMode) {
  const colorMode = useMemo(() => (
    {
      toggleColorMode: () => { setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')); }
    }),
    [],
  );
};

export default ToggleColorMode;
