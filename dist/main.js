var editor = grapesjs.init({
    showOffsets: 1,
    noticeOnUnload: 0,
    container: '#gjs',
    
    fromElement: true,
    storageManager: {
      type: 'remote',
      stepsBeforeSave: 1,
      contentTypeJson: true,
      storeStyles: true,
      storeHtml: true,
      storeCss: true,
      headers: {
        'Content-Type': 'application/json',
      },
      id: "gjs-",
      urlStore: `/pages/${location.pathname.split('/')[2]}/content`,
      urlLoad: `/pages/${location.pathname.split('/')[2]}/content`,
      
    },
    styleManager : {
      sectors: [{
          name: 'General',
          open: false,
          buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        },{
          name: 'Flex',
          open: false,
          buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
        },{
          name: 'Dimension',
          open: false,
          buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        },{
          name: 'Typography',
          open: false,
          buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
        },{
          name: 'Decorations',
          open: false,
          buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        },{
          name: 'Extra',
          open: false,
          buildProps: ['transition', 'perspective', 'transform'],
        }
      ],
    },
    plugins: [
    'gjs-blocks-basic',
    ],
  pluginsOpts: {
    'gjs-blocks-basic': { flexGrid: true },
  }
});
