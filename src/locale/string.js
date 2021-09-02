import {pl} from './pl.js';
import {defaultLanguage} from '../tools/config';


export const getString = (area, elem)  => {
    
    if (defaultLanguage === 'pl') {
      return pl[area][elem];
    }
    return pl[area][elem];
  }




