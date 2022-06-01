// Types
export const LOAD_LOCAL_HOSTS = 'LOAD_LOCAL_HOSTS';
export const LOAD_HOSTS = 'LOAD_HOSTS';
export const SAVE_HOSTS = 'SAVE_HOSTS';
export const SET_HOSTS = 'SET_HOSTS';
export const OPEN_CAROUSEL = 'OPEN_CAROUSEL';
export const CLOSE_CAROUSEL = 'CLOSE_CAROUSEL';

// Creators
export const loadLocalHosts = () => ({
  type: LOAD_LOCAL_HOSTS,
});

export const loadHosts = () => ({
  type: LOAD_HOSTS,
});

export const saveHosts = (hosts) => ({
  type: SAVE_HOSTS,
  hosts,
});

export const setHosts = (hosts) => ({
  type: SET_HOSTS,
  hosts,
});

export const openCarousel = (index) => ({
  type: OPEN_CAROUSEL,
  index,
});

export const closeCarousel = () => ({
  type: CLOSE_CAROUSEL,
});
