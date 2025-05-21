import React, { useState } from 'react';
import { MessageCircle, Search, Calendar, PenTool, FileText, Terminal, ChevronRight, Info } from 'lucide-react';
import Button from '../common/Button';
import CharacterDetailPopup from './CharacterDetailPopup';

export const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);
  
  const characters = [
    {
      id: 'jiyu',
      name: '지유',
      image: '/images/ai-jiyu.webp',
      role: '고객 상담 전문가',
      icon: <MessageCircle className="h-6 w-6 text-blue-500" />,
      color: 'blue',
      tagline: '24시간 친절한 고객 응대, 제가 책임질게요!',
      description: '고객 문의 응대, 채팅 상담, 음성 통화 지원, 감정 분석을 통한 맞춤형 서비스 제공'
    },
    {
      id: 'harin',
      name: '하린',
      image: '/images/ai-harin.webp',
      role: '정보 리서치 & 요약',
      icon: <Search className="h-6 w-6 text-purple-500" />,
      color: 'purple',
      tagline: '세상의 모든 정보, 하린이가 찾아드릴게요!',
      description: '웹 리서치, 문서 스캔 분석, 경쟁사 모니터링, 데이터 기반 인사이트 제공'
    },
    {
      id: 'sua',
      name: '수아',
      image: '/images/ai-sua.webp',
      role: '일정 관리 & 회의 요약',
      icon: <Calendar className="h-6 w-6 text-green-500" />,
      color: 'green',
      tagline: '꼼꼼한 일정 관리와 회의록 정리, 수아에게 맡기세요!',
      description: '캘린더 관리, 회의 일정 조율, 회의록 작성, 중요 포인트 요약 및 할일 추출'
    },
    {
      id: 'junho',
      name: '준호',
      image: '/images/ai-junho.webp',
      role: '마케팅 콘텐츠 제작',
      icon: <PenTool className="h-6 w-6 text-orange-500" />,
      color: 'orange',
      tagline: '톡톡 튀는 마케팅 콘텐츠, 준호가 만들어 드립니다!',
      description: 'SNS 포스팅, 광고 카피라이팅, 브랜드 메시지 개발, 콘텐츠 아이디어 제안'
    },
    {
      id: 'soyeon',
      name: '소연',
      image: '/images/ai-soyeon.webp',
      role: '문서 요약 & 정리',
      icon: <FileText className="h-6 w-6 text-pink-500" />,
      color: 'pink',
      tagline: '복잡한 문서도 깔끔하게! 소연이가 정리해 드려요.',
      description: '계약서 분석, 문서 요약, 보고서 작성, 콘텐츠 구조화 및 시각적 요소 추천'
    },
    {
      id: 'taeo',
      name: '윤구',
      image: '/images/ai-taeo.webp',
      role: '반복 업무 자동화',
      icon: <Terminal className="h-6 w-6 text-cyan-500" />,
      color: 'cyan',
      tagline: '단순 반복 업무는 이제 그만! 윤구가 대신할게요.',
      description: '데이터 수집 및 정리, 반복 이메일/메시지 발송, 정기 보고서 생성, 업무 프로세스 자동화'
    }
  ];

  const handleOpenDetailPopup = (character: any) => {
    setSelectedCharacter(character);
    setIsDetailPopupOpen(true);
  };

  const handleCloseDetailPopup = () => {
    setIsDetailPopupOpen(false);
    setSelectedCharacter(null);
  };

  const CharacterCard = ({ character }: { character: any }) => (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 relative flex flex-col">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => handleOpenDetailPopup(character)} 
        className={`absolute top-4 right-4 bg-${character.color}-500/20 text-${character.color}-300 hover:bg-${character.color}-500/40 z-10 rounded-full p-2`}
        aria-label={`${character.name} 만나보기`}
      >
        <Info className="h-5 w-5" />
      </Button>

      <div className="aspect-[3/2] w-full overflow-hidden bg-slate-700/30 flex items-center justify-center">
        <img
          src={character.image || `/images/ai-placeholder.webp`}
          alt={`${character.name} 캐릭터 이미지`}
          className="w-full h-full object-contain transition-transform hover:scale-105 duration-300 max-h-[200px] md:max-h-[250px]"
          loading="lazy"
          onError={e => { e.currentTarget.src = '/images/ai-placeholder.webp'; }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <div className={`p-2 bg-${character.color}-500/10 rounded-full mr-3`}>
            {React.cloneElement(character.icon, { className: `h-6 w-6 text-${character.color}-400`})}
          </div>
          <div>
            <h3 className={`text-xl font-bold text-${character.color}-300`}>{character.name}</h3>
            <p className="text-sm text-gray-400">{character.role}</p>
          </div>
        </div>
        <p className="text-sm text-gray-300 mb-4 flex-grow min-h-[60px]">{character.description}</p>
        <p className={`text-center text-md font-semibold text-${character.color}-300 bg-${character.color}-500/10 p-3 rounded-md`}>{character.tagline}</p>
      </div>
    </div>
  );

  return (
    <section id="characters" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-300 -top-40 right-0 opacity-60"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-800 bottom-10 -left-20 opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 text-purple-300 rounded-full font-medium text-sm mb-4 border border-white/20">
            AI 팀원
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            저희 팀원들을 소개할게요!
          </h2>
          <p className="text-lg text-gray-300">
            나만의 맞춤형 AI 팀원을 만나보세요. 우리가 제안하는 캐릭터로 시작하거나, 
            당신의 비즈니스에 딱 맞는 AI를 제작해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              이 외에도 원하는 AI 팀원을 맞춤 제작해 드립니다
            </h3>
            <p className="text-gray-300 mb-8">
              지유, 하린, 수아, 준호, 소연, 윤구는 시작일 뿐입니다. 당신의 비즈니스에 필요한 특별한 AI 팀원이 있다면, 
              맞춤형으로 제작해 드립니다. 업종별 특화 기능, 브랜드 톤앤매너 반영, 내부 시스템 연동까지 - 
              상상하는 모든 AI 팀원을 현실로 만들어 드립니다.
            </p>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 text-lg flex items-center justify-center mx-auto"
              aria-label="나만의 AI 팀원 상담받기"
            >
              나만의 AI 팀원 상담받기
              <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      { selectedCharacter && isDetailPopupOpen && (
        <CharacterDetailPopup 
          character={selectedCharacter} 
          isOpen={isDetailPopupOpen} 
          onClose={handleCloseDetailPopup} 
        />
      ) }
    </section>
  );
};