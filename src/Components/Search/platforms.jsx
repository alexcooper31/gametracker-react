import React from 'react';

import {
  PlatformWrapper,
  Platform
} from './styled';
import consoles from '../../Helpers/consoles';

const Platforms = (props) => {
  return (
    <PlatformWrapper>
      {
        props.platforms.map((item, index) => {
          const console = consoles(item);
        
          if(console !== 'OTHERS') {
            return (
              <Platform console={item} key={index}>
                { console }
              </Platform>
            );
          }
          return '';
        })
      }
    </PlatformWrapper>
  );
}

export default React.memo(Platforms);
