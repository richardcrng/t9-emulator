import * as R from 'ramda'
import { useEffect } from 'react'

// Based on from https://usehooks.com/useKeyPress/

/**
 * Use keydown and/or keyup listeners for the target key
 * 
 * @param {string} targetKey - The keyboard key to look for
 * @param {Object} handlers
 * @param {function} handlers.onKeyDown - Callback to trigger on keydown event
 * @param {function} handlers.onKeyUp - Callback to trigger on keyup event
 * @param {Array} dependencies - Array of effect dependencies 
 */
function useKeyListeners(targetKey, { onKeyDown = R.identity, onKeyUp = R.identity }, dependencies) {
  const downHandler = ({ key }) => {
    console.log('handling', key)
    if (key === targetKey) onKeyDown()
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) onKeyUp()
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, dependencies)
}

export default useKeyListeners