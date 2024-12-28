import * as z from 'zod'

export const birthdaySchema = z.object({
   id: z.string().uuid(),
   files: z.array(z.instanceof(File)).max(5, 'Maximum of 5 files allowed'),
   message: z.object({
      title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
      body: z.string().min(1, 'Message body is required')
   })
})

export type Birthday = z.infer<typeof birthdaySchema>
