import React, { Fragment } from 'react';
import spinner from './spinner.png';

const Spinner = () => (
  <Fragment>
    <div style={{ position: 'fixed', left: '50%', top: '50%', transform: `translateX(-50%) translateY(-50%)`,backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%',height: '100%' , zIndex: 10001  }}>
    <div style={{ position: 'fixed', left: '50%', top: '50%', transform: `translateX(-50%) translateY(-50%)`}}>
      <div style={{ position: 'relative' }}>
      <img
        src={spinner}
        style={{ width: '300px', margin: 'auto', display: 'block', position: 'fixed', left: '50%', top: '50%', transform: `translateX(-50%) translateY(-50%)`  }}
        alt="Loading..." 
      />
      <div className='motion-demo-1' style={{ position: 'fixed', left: '-25px', top: '-76px' }}></div>
      <div className='motion-demo-2' style={{ position: 'fixed', left: '-69px', top: '19px' }}></div>
      <div className='motion-demo-3' style={{ position: 'fixed', left: '33px', top: '32px' }}></div>
      <div className='motion-demo-4' style={{ position: 'fixed', left: '45px', top: '-50px' }}></div>
    </div>
    </div>
    </div>
  </Fragment>
);

export default Spinner;
