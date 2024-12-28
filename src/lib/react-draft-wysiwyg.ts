export const editor_toolbar_options = {
   options: [
      'inline',
      'blockType',
      'fontSize',
      'fontFamily',
      'list',
      'textAlign',
      'colorPicker',
      'emoji',
      'image'
   ],
   fontSize: {
      inDropdown: true,
      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined
   },
   fontFamily: {
      inDropdown: true,
      options: [
         'Montserrat',
         'Roboto',
         'Inter',
         'Work Sans',
         'Dosis',
         'Inconsolata'
      ],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined
   },
   inline: {
      inDropdown: true,
      options: [
         'bold',
         'italic',
         'underline',
         'strikethrough',
         'monospace',
         'superscript',
         'subscript'
      ]
   },
   blockType: {
      inDropdown: true,
      options: [
         'Normal',
         'H1',
         'H2',
         'H3',
         'H4',
         'H5',
         'H6',
         'Blockquote',
         'Code'
      ]
   },
   list: {
      inDropdown: true,
      options: ['unordered', 'ordered', 'indent', 'outdent']
   },
   textAlign: {
      inDropdown: true,
      options: ['left', 'center', 'right', 'justify']
   },
   image: {
      inDropdown: true,
      options: ['image', 'unlink']
   }
}
