import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const darkModeClass= 'dark-mode';
    const body = document.body;
    if(!isDarkMode)
      body.classList.add(darkModeClass);
    else
      body.classList.remove(darkModeClass);
  }, [isDarkMode])
  
  return [isDarkMode, setDarkMode];
}
export default useDarkMode;
