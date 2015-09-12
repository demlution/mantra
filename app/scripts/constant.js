define(function () {
  'use strict';

  return {
    TRANSIENT_TIMELINE_NAME: '__transientTimeline'
    ,SUPPORTED_PROPERTIES: [
      {  name: 'opacity', defaultValue: 0 }
      ,{ name: 'rotateX', defaultValue: '0deg' }
      ,{ name: 'rotateY', defaultValue: '0deg' }
      ,{ name: 'rotateZ', defaultValue: '0deg' }
      ,{ name: 'scale', defaultValue: 0 }
      ,{ name: 'scaleX', defaultValue: 0 }
      ,{ name: 'scaleY', defaultValue: 0 }
      ,{ name: 'skewX', defaultValue: 0 }
      ,{ name: 'skewY', defaultValue: 0 }
      ,{ name: 'translateX', defaultValue: '0px' }
      ,{ name: 'translateY', defaultValue: '0px' }
    ]
  };
});
