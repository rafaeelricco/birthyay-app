/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
   KitchenSinkToolbar,
   codeBlockPlugin,
   codeMirrorPlugin,
   diffSourcePlugin,
   frontmatterPlugin,
   headingsPlugin,
   linkDialogPlugin,
   linkPlugin,
   listsPlugin,
   markdownShortcutPlugin,
   quotePlugin,
   tablePlugin,
   thematicBreakPlugin,
   toolbarPlugin
} from '@mdxeditor/editor'

export const EDITOR_PLUGINS = [
   toolbarPlugin({
      toolbarClassName:
         'bg-transparent border-t border-gray-200 border-r border-l rounded-t-lg rounded-b-none',
      //   toolbarContents: () => (
      //      <React.Fragment>
      //         <UndoRedo />
      //         <Separator />
      //         <BoldItalicUnderlineToggles />
      //         <StrikeThroughSupSubToggles />
      //         <Separator />
      //         <ListsToggle />
      //         <Separator />
      //         <BlockTypeSelect />
      //         <Separator />
      //         <CreateLink />
      //         <InsertThematicBreak />
      //      </React.Fragment>
      //   )
      toolbarContents: () => <KitchenSinkToolbar />
   }),
   listsPlugin(),
   quotePlugin(),
   headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
   linkPlugin(),
   linkDialogPlugin(),
   tablePlugin(),
   thematicBreakPlugin(),
   frontmatterPlugin(),
   codeBlockPlugin({ defaultCodeBlockLanguage: '' }),
   codeMirrorPlugin({
      codeBlockLanguages: {
         js: 'JavaScript',
         css: 'CSS',
         txt: 'Plain Text',
         tsx: 'TypeScript',
         '': 'Unspecified'
      }
   }),
   diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
   markdownShortcutPlugin()
]
