const LOCAL_STORAGE = 'LOCAL_STORAGE'
const SESSION_STORAGE = 'SESSION_STORAGE'

/*
 *  DEVELOPER NOTE
 *
 *  Some browsers can block storage (localStorage, sessionStorage)
 *  access for privacy reasons, and all browsers can have storage
 *  that's full, and so they'll throw exceptions.
 *
 *  These exceptions can even be thrown when testing
 *      `if (window.localStorage)`
 *  !!!
 *
 *  Also sometimes localStorage/sessionStorage are enabled
 *  AFTER page load on mobiles. This is a browser bug we need to
 *  handle it gracefully.
 *
 *  So,
 *
 *****************************************************************
 *           we need to wrap all usage in try/catch
 *****************************************************************
 *
 *  and,
 *
 ****************************************************************
 *     we need to defer actual usage of these until necessary,
 *    hence using CONSTANTS to indirectly refer to these storages
 *     rather than window.localStorage/window.sessionStorage
 *                         directly
 ****************************************************************
 */

const storage = (STORAGE_TYPE: string) => ({
  setItem: (
    key: string,
    value: any,
    exceptionMessage?: string /* if exception include this message */
  ): void => {
    // if Window doesn't exist it's probably server-side rendering
    if (typeof window === 'undefined') return
    try {
      STORAGE_TYPE === LOCAL_STORAGE
        ? window.localStorage.setItem(key, value)
        : window.sessionStorage.setItem(key, value)
    } catch (e) {
      console.log(e, exceptionMessage)
    }
  },
  getItem: (
    key: string,
    exceptionMessage?: string /* if exception include this message */
  ): undefined | null | string => {
    // if Window doesn't exist it's probably server-side rendering
    if (typeof window === 'undefined') return
    try {
      return STORAGE_TYPE === LOCAL_STORAGE
        ? window.localStorage.getItem(key)
        : window.sessionStorage.getItem(key)
    } catch (e) {
      console.log(e, exceptionMessage)
    }
  },
  removeItem: (
    key: string,
    exceptionMessage?: string /* if exception include this message */
  ): void => {
    // if Window doesn't exist it's probably server-side rendering
    if (typeof window === 'undefined') return
    try {
      STORAGE_TYPE === LOCAL_STORAGE
        ? window.localStorage.removeItem(key)
        : window.sessionStorage.removeItem(key)
    } catch (e) {
      console.log(e, exceptionMessage)
    }
  },
})

export const localStorageWrapper = storage(LOCAL_STORAGE)
export const sessionStorageWrapper = storage(SESSION_STORAGE)
