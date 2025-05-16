import React, { useState } from 'react';
import { MessageCircle, Search, Calendar, PenTool, FileText, Terminal, ChevronRight } from 'lucide-react';
import Button from '../common/Button';

export const CharactersSection = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const characters = [
    {
      id: 'jiyu',
      name: '지유',
      role: '고객 상담 전문가',
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      color: 'from-blue-500 to-blue-600',
      description: '고객 문의 응대, 채팅 상담, 음성 통화 지원, 감정 분석을 통한 맞춤형 서비스 제공'
    },
    {
      id: 'harin',
      name: '하린',
      role: '정보 리서치 & 요약',
      icon: <Search className="h-8 w-8 text-white" />,
      color: 'from-purple-500 to-purple-600',
      description: '웹 리서치, 문서 스캔 분석, 경쟁사 모니터링, 데이터 기반 인사이트 제공'
    },
    {
      id: 'sua',
      name: '수아',
      role: '일정 관리 & 회의 요약',
      icon: <Calendar className="h-8 w-8 text-white" />,
      color: 'from-green-500 to-green-600',
      description: '캘린더 관리, 회의 일정 조율, 회의록 작성, 중요 포인트 요약 및 할일 추출'
    },
    {
      id: 'junho',
      name: '준호',
      role: '마케팅 콘텐츠 제작',
      icon: <PenTool className="h-8 w-8 text-white" />,
      color: 'from-orange-500 to-orange-600',
      description: 'SNS 포스팅, 광고 카피라이팅, 브랜드 메시지 개발, 콘텐츠 아이디어 제안'
    },
    {
      id: 'soyeon',
      name: '소연',
      role: '문서 요약 & 정리',
      icon: <FileText className="h-8 w-8 text-white" />,
      color: 'from-pink-500 to-pink-600',
      description: '계약서 분석, 문서 요약, 보고서 작성, 콘텐츠 구조화 및 시각적 요소 추천'
    },
    {
      id: 'taeo',
      name: '윤구',
      role: '반복 업무 자동화',
      icon: <Terminal className="h-8 w-8 text-white" />,
      color: 'from-cyan-500 to-cyan-600',
      description: '데이터 수집 및 정리, 반복 이메일/메시지 발송, 정기 보고서 생성, 업무 프로세스 자동화'
    }
  ];

  const filteredCharacters = activeTab === 'all' 
    ? characters 
    : characters.filter(char => char.id === activeTab);

  const TabButton = ({ active, children, ...props }: { active: boolean; children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <Button
      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${active ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
      aria-pressed={active}
      {...props}
    >
      {children}
    </Button>
  );

  const CharacterCard = ({ character }: { character: any }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg hover:translate-y-[-4px]">
      <div className={`p-6 bg-gradient-to-r ${character.color}`}>
        <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          {character.icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{character.name}</h3>
        <p className="text-white/90 mb-4">{character.role}</p>
      </div>
      <div className="p-6">
        <div className="aspect-[2/3] w-full rounded-lg overflow-hidden mb-6 bg-gray-50 flex items-center justify-center">
          <img
            src={`/images/ai-${character.id}.webp`}
            alt={`${character.name} 캐릭터 이미지`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <p className="text-gray-600 mb-6">{character.description}</p>
        <a 
          href={`#${character.id}-details`}
          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          aria-label={`${character.name} 만나보기`}
        >
          {character.name} 만나보기
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );

  return (
    <section id="characters" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium text-sm mb-4">
            AI 팀원
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            저희 팀원들을 소개할게요!
          </h2>
          <p className="text-xl text-gray-600">
            나만의 맞춤형 AI 팀원을 만나보세요. 우리가 제안하는 캐릭터로 시작하거나, 
            당신의 비즈니스에 딱 맞는 AI를 제작해 드립니다.
          </p>
        </div>

        <div className="overflow-x-auto pb-4 mb-6">
          <div className="flex space-x-2 min-w-max justify-center">
            <TabButton active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
              모든 팀원
            </TabButton>
            {characters.map(char => (
              <TabButton key={char.id} active={activeTab === char.id} onClick={() => setActiveTab(char.id)}>
                {char.name}
              </TabButton>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-indigo-50 p-6 rounded-2xl max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              이 외에도 원하는 AI 팀원을 맞춤 제작해 드립니다
            </h3>
            <p className="text-gray-600 mb-6">
              지유, 하린, 수아, 준호, 소연, 윤구는 시작일 뿐입니다. 당신의 비즈니스에 필요한 특별한 AI 팀원이 있다면, 
              맞춤형으로 제작해 드립니다. 업종별 특화 기능, 브랜드 톤앤매너 반영, 내부 시스템 연동까지 - 
              상상하는 모든 AI 팀원을 현실로 만들어 드립니다.
            </p>
            <Button
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors transform hover:scale-105 duration-200 shadow-md"
              aria-label="나만의 AI 팀원 상담받기"
            >
              나만의 AI 팀원 상담받기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};