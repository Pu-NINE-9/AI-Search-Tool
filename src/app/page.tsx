'use client'
import Image from "next/image";
import { useState } from "react";
import rawData from '../../data.json';

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(rawData);

  const handleSearch = () => {
    if (!search.trim()) {
      setData(rawData);
      return;
    }

    const searchTerm = search.toLowerCase();
    const filteredData = rawData
      .map(section => ({
        ...section,
        cards: section.cards.filter(card => 
          card.name.toLowerCase().includes(searchTerm) || 
          card.description.toLowerCase().includes(searchTerm)
        )
      }))
      .filter(section => section.cards.length > 0);

    setData(filteredData);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div 
      className="h-min-screen w-full scroll-auto"
      style={{
        backgroundImage: 'url(/img/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}
    >
      {/* 背景覆盖层 - 进一步降低透明度 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 245, 247, 0.2) 0%, rgba(255, 228, 230, 0.2) 100%)',
          zIndex: 0,
        }}
      />
      
      {/* 内容区域 - 移除margin-left，由layout.tsx控制 */}
      <div className="relative z-10 w-full h-full">
        {/* 樱花搜索栏 - 统一透明度，去除毛玻璃 */}
        <div className="w-full h-72 flex flex-col justify-center items-center bg-rose-50/40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-20 w-8 h-8 bg-pink-300/40 rounded-full"></div>
            <div className="absolute top-20 right-32 w-6 h-6 bg-rose-300/40 rounded-full"></div>
            <div className="absolute bottom-16 left-40 w-4 h-4 bg-red-300/40 rounded-full"></div>
            <div className="absolute bottom-8 right-20 w-5 h-5 bg-pink-400/40 rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-6 text-rose-700 flex items-center justify-center">
              <Image 
                src="/favicon.ico" 
                alt="AI导航" 
                width={86} 
                height={86}
              />
              AI 工具导航
            </h1>
            
            <div className="flex flex-row justify-center w-full max-w-2xl mt-4 gap-3">
              <input 
                type="text"
                className="w-96 h-12 rounded-full border-2 border-pink-300 p-4 text-rose-700 placeholder-rose-400 focus:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-200 transition-all text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="搜索AI工具..."
              />
              <button 
                className="h-12 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg" 
                onClick={handleSearch}
              >
                🔍 搜索
              </button>
            </div>
            
            <p className="text-rose-500 mt-4 text-sm">✨Good Time✨</p>
          </div>
        </div>

        {/* 内容区域 - 去除毛玻璃，统一透明度 */}
        <div className="px-6 py-8 bg-rose-50/40">
          {data.map((section: any, sectionIndex: number) => (
            <div className="w-full flex flex-col mb-12" id={section.title} key={section.title}>
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-rose-700 flex items-center">
                  <span className="mr-3 text-2xl">{"🌸".repeat(sectionIndex % 3 + 1)}</span>
                  {section.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {section.cards.map((card: any) => (
                  <a 
                    href={card.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group cursor-pointer" 
                    key={card.id}
                  >
                    <div className="h-40 bg-white/50 rounded-2xl p-4 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-pink-200/30 hover:border-pink-300/50">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-100/60 to-rose-100/60 rounded-xl flex items-center justify-center mr-3 group-hover:from-pink-200/60 group-hover:to-rose-200/60 transition-all">
                          <Image 
                            src={`/img/${card.img}`} 
                            alt={card.name} 
                            width={48} 
                            height={48} 
                            className="rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-rose-700 mb-1 group-hover:text-rose-800 transition-colors">
                            {card.name}
                          </h3>
                          <p className="text-xs text-rose-500 line-clamp-2">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end items-center mt-2">
                        <span className="text-xs text-rose-400 group-hover:text-rose-600 transition-colors">
                          前往体验 →
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* 樱花页脚 - 统一透明度，去除毛玻璃 */}
        <footer className="h-32 w-full flex flex-col items-center justify-center bg-rose-50/40">
          <div className="text-center">
            <p className="text-rose-600 text-lg mb-2">🌸 AI 工具导航站 🌸</p>
            <p className="text-rose-500 text-sm">Copyright 2025 • NINE 所有权利保留</p>
          </div>
        </footer>
      </div>
    </div>
  );
}