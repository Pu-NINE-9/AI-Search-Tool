'use client'
import React from 'react'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText'
import WhatshotIcon from '@mui/icons-material/Whatshot' 
import ChatIcon from '@mui/icons-material/Chat'
import EditNoteIcon from '@mui/icons-material/EditNote'
import CodeIcon from '@mui/icons-material/Code'
import BrushIcon from '@mui/icons-material/Brush'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import DeviceHubIcon from '@mui/icons-material/DeviceHub'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import { useRouter } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter()
  
  const handleClick = (text: string) => {
    if (window.location.pathname === '/') {
      if (text === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.getElementById(text)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push('/')
      setTimeout(() => {
        const element = document.getElementById(text)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    }
  }

  return (
    <div className="w-60 h-screen bg-gradient-to-b from-pink-200 to-rose-200 flex flex-col items-center gap-4 fixed shadow-lg">
      <div className='mt-6 w-3/4 h-full flex flex-col gap-8'>
        {/* logo */}
        <div className="flex items-center gap-2 cursor-pointer p-4 bg-white/30 rounded-xl backdrop-blur-sm hover:bg-white/50 transition-all" onClick={() => handleClick('/')}>
          <FormatColorTextIcon className="h-10 w-10 bg-pink-300 rounded-full p-1 text-white"/>
          <p className="text-2xl font-bold text-rose-700">AI导航</p>
        </div>
        {/* menu */}
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="flex w-full h-10 items-center gap-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 transition-all group">
            <WhatshotIcon className="text-rose-500 group-hover:text-rose-700" />
            <p className="tracking-widest text-rose-700 group-hover:text-rose-900">AI 热门工具</p>
          </div>
          <div className="flex w-full h-10 items-center gap-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 transition-all group">
            <ChatIcon className="text-rose-500 group-hover:text-rose-700" />
            <p className="tracking-widest text-rose-700 group-hover:text-rose-900">AI 对话聊天</p>
          </div>
          <div className="flex w-full h-10 items-center gap-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 transition-all group">
            <EditNoteIcon className="text-rose-500 group-hover:text-rose-700" />
            <p className="tracking-widest text-rose-700 group-hover:text-rose-900">AI 文本工具</p>
          </div>
          <div className="flex w-full h-10 items-center gap-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 transition-all group">
            <CodeIcon className="text-rose-500 group-hover:text-rose-700" />
            <p className="tracking-widest text-rose-700 group-hover:text-rose-900">AI 编程工具</p>
          </div>
          <div className="flex w-full h-10 items-center gap-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 transition-all group">
            <BrushIcon className="text-rose-500 group-hover:text-rose-700" />
            <p className="tracking-widest text-rose-700 group-hover:text-rose-900">AI 绘画</p>
          </div>
          <div className="flex w-full h-10 items-center gap-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 transition-all group">
            <AnnouncementIcon className="text-rose-500 group-hover:text-rose-700" />
            <p className="tracking-widest text-rose-700 group-hover:text-rose-900">AI 新闻</p>
          </div>
          <div className="flex w-full h-10 items-center gap-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 transition-all group">
            <DeviceHubIcon className="text-rose-500 group-hover:text-rose-700" />
            <p className="tracking-widest text-rose-700 group-hover:text-rose-900">大模型 API</p>
          </div>
          <div className="flex w-full h-10 items-center gap-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 transition-all group">
            <PsychologyAltIcon className="text-rose-500 group-hover:text-rose-700" />
            <p className="tracking-widest text-rose-700 group-hover:text-rose-900">Agent 工具</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar