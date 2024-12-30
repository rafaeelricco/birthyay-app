'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/routes/general'
import { DictionaryProps } from '@/types/dictionary'
import { useRouter } from 'next/navigation'

import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import HeroVideoDialog from '@/components/ui/hero-video-dialog'
import WordRotate from '@/components/ui/word-rotate'
import confetti from 'canvas-confetti'

const HomeComponent: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   const router = useRouter()
   const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0)

   React.useEffect(() => {
      const interval = setInterval(() => {
         setTimeout(() => {
            setCurrentMessageIndex(
               (prevIndex) => (prevIndex + 1) % messages.length
            )
         }, 300)
      }, 4000)

      return () => clearInterval(interval)
   }, [])

   return (
      <React.Fragment>
         <div className="relative min-h-screen">
            <Header dictionary={dictionary} />
            <div className="relative flex h-[calc(100vh-88px)] flex-col items-center justify-center md:mt-28 md:h-full">
               <div className="z-10 flex w-full flex-col items-center justify-center gap-4 pb-12 md:space-y-4 md:pb-16">
                  <div
                     className="no-selection z-10 flex cursor-pointer items-center justify-center transition-all duration-300 active:scale-90"
                     onClick={() => {
                        confetti({
                           particleCount: 100,
                           spread: 70,
                           origin: { y: 0.6 },
                           colors: ['#8a30e3', '#ee6ba1', '#eac893']
                        })
                     }}
                  >
                     <AnimatedGradientText className="bg-transparent backdrop-blur-sm">
                        <WordRotate
                           word={messages[currentMessageIndex]}
                           className="text-black-primary"
                        />
                     </AnimatedGradientText>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4">
                     <div className="space-y-2 md:space-y-4">
                        <h1 className="text-center text-3xl font-bold tracking-tight text-black-primary md:text-6xl">
                           Crie uma{' '}
                           <span className="bg-gradient-to-tl from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
                              cartinha digital
                           </span>{' '}
                           <br />
                           cheia de carinho
                        </h1>
                        <p className="px-4 text-center text-sm font-medium text-gray-primary md:px-0 md:text-base">
                           Transforme suas memórias mais queridas em uma
                           surpresa inesquecível.
                           <br className="hidden md:block" /> Adicione fotos,
                           vídeos e mensagens especiais para quem você ama.
                        </p>
                     </div>
                     <div className="flex gap-4">
                        <Button
                           variant="gradient-animated"
                           onClick={() => {
                              router.push(ROUTES.CREATE_BIRTHDAY_CARD.path)
                           }}
                        >
                           Criar minha cartinha digital
                        </Button>
                     </div>
                  </div>
                  <div className="relative mt-4 px-4 md:mt-0">
                     <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                     />
                     <HeroVideoDialog
                        className="hidden dark:block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                     />
                  </div>
               </div>
            </div>
            <AnimatedGridPattern
               numSquares={200}
               maxOpacity={0.1}
               duration={3}
               repeatDelay={1}
               className={cn(
                  '[mask-image:radial-gradient(100%_100%_at_center,white,transparent)]',
                  'fixed inset-0 -z-10 h-screen w-screen opacity-50'
               )}
            />
            <div className="fixed right-0 top-52 -z-10 h-[481px] w-[481px] rounded-full bg-gradient-to-r from-[#cdb6ff] via-[#ff94c6] to-[#ffc78c] opacity-40 blur-[100px] md:top-14 md:h-[962px] md:w-[962px] md:blur-[200px]" />
         </div>
      </React.Fragment>
   )
}

const messages = [
   '🎁 Transforme momentos em memórias eternas',
   '💝 Cada cartinha tem um significado especial',
   '💌 Surpreenda com uma mensagem do coração',
   '📸 Suas fotos contam histórias únicas',
   '✨ Eternize momentos que marcaram vocês',
   '💕 Demonstre carinho de uma forma especial',
   '🎨 Cada detalhe conta uma parte dessa história',
   '🎉 Crie surpresas que tocam o coração',
   '💫 Guarde momentos para sempre',
   '🤗 Celebre com quem você ama',
   '💝 Compartilhe mais que uma mensagem',
   '⭐ Memórias que merecem ser eternizadas',
   '🎈 Cada momento merece ser celebrado',
   '🎀 Dê um presente cheio de significado',
   '📱 Suas lembranças em uma cartinha especial',
   '💖 Transforme carinho em surpresa',
   '✨ Mostre o quanto alguém é especial',
   '🌟 Crie momentos inesquecíveis',
   '💫 Faça parte dessa história',
   '🎊 Celebre cada momento importante'
]

export { HomeComponent }
