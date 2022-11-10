/* eslint-disable indent */
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const isWindow = typeof window !== 'undefined';

const HAVE_SESSION = isWindow ? localStorage.getItem('accessToken') !== null : false;
/** @const isDevMode
 * principal use for dibuging for another issues and prevent
 * to create unused console.logs in production
*/
const isDevMode = isWindow && (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'preview' || window.location.hostname === 'localhost');

const languageLabel = {
  es: 'spanish',
  us: 'english',
};

const assetTypeValues = {
  read: 'LESSON',
  practice: 'EXERCISE',
  code: 'PROJECT',
  answer: 'QUIZ',
};

const slugify = (str) => (typeof str === 'string' ? str
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '')
  : '');

const unSlugify = (str) => (typeof str === 'string' ? str
  .replace(/-/g, ' ')
  .replace(/\w\S*/g,
  (txt) => txt.charAt(0) + txt.substr(1).toLowerCase())
  : '');

const cleanQueryStrings = (url) => url.split('?')[0];

const isPlural = (element) => {
  if (element.length > 1) {
    return true;
  }
  return false;
};

const getStorageItem = (key) => {
  if (isWindow) {
    return localStorage.getItem(key);
  }
  return null;
};
const tokenExists = String(getStorageItem('accessToken')).length > 5;

const setStorageItem = (key, value) => {
  if (isWindow) {
    return localStorage.setItem(key, value);
  }
  return null;
};

const removeStorageItem = (key) => {
  if (isWindow) {
    return localStorage.removeItem(key);
  }
  return null;
};

const includesToLowerCase = (text, keyValue) => text.toLowerCase().includes(keyValue.toLowerCase());

const getExtensionName = (key) => {
  // from: https://github.com/example/ipynbrepo/prob_stats.ipynb
  // to: ipynb
  const extExtractor = /(?:\.([^.]+))?$/;
  return extExtractor.exec(key)[1];
};

const devLog = (msg, ...params) => { // Relevant logs only in dev mode
  if (isDevMode) console.log(`🛠️ ${msg}`, ...params);
};

const devLogTable = (msg, array) => { // Relevant table logs with title only in dev mode
  if (isDevMode) {
    console.group();
      console.log(`%c🛠️${msg}`, 'font-size: 14px');
      console.table(array);
    console.groupEnd();
  }
};

const objectAreNotEqual = (t1, t2) => Object.keys(t1).map((l) => t1[l] === t2[l]).includes(false);

function removeURLParameter(url, parameter) {
  const urlparts = url.split('?');
  if (urlparts.length >= 2) {
      const prefix = `${encodeURIComponent(parameter)}=`;
      const pars = urlparts[1].split(/[&;]/g);

      // reverse iteration as may be destructive
      // eslint-disable-next-line no-plusplus
      for (let i = pars.length; i-- > 0;) {
          // idiom for string.startsWith
          if (pars[i].lastIndexOf(prefix, 0) !== -1) {
              pars.splice(i, 1);
          }
      }

      return urlparts[0] + (pars.length > 0 ? `?${pars.join('&')}` : '');
  }
  return url;
}

const getTimeProps = (date) => {
  const kickoffDate = {
    en: date?.kickoff_date && format(new Date(date.kickoff_date), 'MMMM do YYY'),
    es:
      date?.kickoff_date
      && format(new Date(date.kickoff_date), "d 'de' MMMM YYY", { locale: es }),
  };
  const weekDays = {
    en: date.timeslots.length > 0 && date.timeslots.map((l) => (l.starting_at && format(new Date(l.starting_at), 'EEEE'))),
    es: date.timeslots.length > 0 && date.timeslots.map((l) => (l.starting_at && format(new Date(l.starting_at), 'EEEE', { locale: es }))),
  };
  const shortWeekDays = {
    en: date.timeslots.length > 0 && date.timeslots.map((l) => (l.starting_at && format(new Date(l.starting_at), 'EEE'))),
    es: date.timeslots.length > 0 && date.timeslots.map((l) => (l.starting_at && format(new Date(l.starting_at), 'EEE', { locale: es }))),
  };
  const getHours = (time) => new Date(time).toLocaleTimeString([], { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' });
  const availableTime = date.timeslots.length > 0 && `${getHours(date.timeslots[0].starting_at)} - ${getHours(date.timeslots[0].ending_at)}`;

  return {
    kickoffDate,
    weekDays,
    shortWeekDays,
    availableTime,
  };
};

// convert the input array to camel case
const toCapitalize = (input = '') => input.charAt(0).toUpperCase() + input.toLowerCase().slice(1);

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

const resizeMasonryItem = (item) => {
  /* Get the grid object, its row-gap, and the size of its implicit rows */
  const grid = document.getElementsByClassName('masonry')[0];
  // eslint-disable-next-line radix
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  // eslint-disable-next-line radix
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

  /*
   * Spanning for any brick = S
   * Grid's row-gap = G
   * Size of grid's implicitly create row-track = R
   * Height of item content = H
   * Net height of the item = H1 = H + G
   * Net height of the implicit row-track = T = G + R
   * S = H1 / T
   */

  // We add the 2 to include the height od the 'Read Lesson' link
  const rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)) + 3;

  /* Set the spanning as calculated above (S) */
  // eslint-disable-next-line no-param-reassign
  item.style.gridRowEnd = `span ${rowSpan}`;
};

const resizeAllMasonryItems = () => {
  // Get all item class objects in one list
  const allItems = document.getElementsByClassName('masonry-brick');

  /*
   * Loop through the above list and execute the spanning function to
   * each list-item (i.e. each masonry item)
   */
  for (let i = 0; i < allItems.length; i += 1) {
    resizeMasonryItem(allItems[i]);
  }
};

export {
  isWindow, assetTypeValues, HAVE_SESSION, slugify, unSlugify,
  isPlural, getStorageItem, includesToLowerCase, getExtensionName,
  removeStorageItem, isDevMode, devLogTable, devLog, languageLabel,
  objectAreNotEqual, cleanQueryStrings, removeURLParameter,
  setStorageItem, toCapitalize, tokenExists, getTimeProps, formatBytes,
  resizeAllMasonryItems,
};
