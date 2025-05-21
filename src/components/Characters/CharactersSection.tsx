import React, { useState, useEffect } from 'react';
import { MessageCircle, Search, Calendar, PenTool, FileText, Terminal, ChevronRight, Info, Users, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import CharacterDetailPopup from './CharacterDetailPopup';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  greeting: string;
  dialogExamples: string[];
  bgColorClass: string; 
  textColorClass: string;
  highlightColorClass: string;
}

export const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });
  const [buttonRef, isButtonVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const characters: Character[] = [
    {
      id: 'jiyu',
      name: '지유',
      title: '만능 AI 비서',
      description: '일상 업무부터 복잡한 분석까지, 똑똑한 AI 비서가 당신의 시간을 아껴드립니다.',
      longDescription: '지유는 당신의 가장 유능한 디지털 팀원입니다. 이메일 관리, 일정 조율, 데이터 분석, 보고서 작성 등 다양한 업무를 신속하고 정확하게 처리합니다. 반복적인 작업에서 벗어나 더 중요한 일에 집중하세요!',
      image: '/images/ai-jiyu.webp', 
      tags: ['업무 자동화', '데이터 분석', '일정 관리', '문서 작성'],
      greeting: '안녕하세요! 저는 지유에요. 무엇을 도와드릴까요?',
      dialogExamples: [
        '오늘의 주요 뉴스 요약해줘.',
        '다음 주 마케팅팀 주간 회의 일정 잡아줘.',
        '지난 분기 매출 보고서 초안 작성해줄 수 있어?',
      ],
      bgColorClass: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-sky-300',
    },
    {
      id: 'harin',
      name: '하린',
      title: '데이터 분석 전문가',
      description: '방대한 데이터 속에서 숨겨진 인사이트를 발굴하여 비즈니스 의사결정을 지원합니다.',
      longDescription: '하린은 뛰어난 데이터 분석가입니다. 복잡한 데이터셋을 처리하고, 통계적 모델링과 머신러닝을 활용하여 예측 분석, 고객 세분화, 트렌드 예측 등 비즈니스 성장에 필요한 핵심 정보를 제공합니다.',
      image: '/images/ai-harin.webp',
      tags: ['데이터 마이닝', '예측 분석', '빅데이터 처리', '시각화'],
      greeting: '안녕하세요, 하린입니다. 어떤 데이터를 분석해드릴까요?',
      dialogExamples: [
        '최근 사용자 이탈 원인 분석해줘.',
        '신규 고객 확보를 위한 타겟 프로필 만들어줘.',
        '분기별 제품 판매량 예측해줄 수 있어?',
      ],
      bgColorClass: 'bg-gradient-to-br from-emerald-500 to-green-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-lime-300',
    },
    {
      id: 'sua',
      name: '수아',
      title: '콘텐츠 마케팅 전문가',
      description: '매력적인 콘텐츠를 제작하고 확산시켜 브랜드 인지도를 높이고 잠재 고객을 유치합니다.',
      longDescription: '수아는 창의적인 콘텐츠 마케터입니다. 블로그 포스트, 소셜 미디어 콘텐츠, 이메일 뉴스레터 등 다양한 형태의 콘텐츠를 기획하고 제작하여 타겟 고객의 참여를 유도하고 브랜드 메시지를 효과적으로 전달합니다.',
      image: '/images/ai-sua.webp',
      tags: ['콘텐츠 제작', 'SEO 최적화', '소셜 미디어 마케팅', '카피라이팅'],
      greeting: '안녕하세요! 수아에요. 어떤 콘텐츠를 만들어볼까요?',
      dialogExamples: [
        '신제품 출시 관련 블로그 포스트 작성해줘.',
        '다음 주 인스타그램 콘텐츠 아이디어 3가지 제안해줘.',
        '고객 참여를 높이는 이벤트 문구 만들어줘.',
      ],
      bgColorClass: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-amber-300',
    },
    {
      id: 'junho',
      name: '준호',
      title: '소프트웨어 개발 전문가',
      description: '아이디어를 현실로 만드는 AI 개발자입니다. 웹, 앱, AI 모델 등 맞춤형 솔루션을 제공합니다.',
      longDescription: '준호는 숙련된 소프트웨어 엔지니어입니다. 최신 기술 스택을 활용하여 웹사이트, 모바일 애플리케이션, AI 기반 서비스 등 다양한 소프트웨어를 개발합니다. 프로토타입 제작부터 배포 및 유지보수까지 개발 전 과정을 지원합니다.',
      image: '/images/ai-junho.webp',
      tags: ['웹 개발', '앱 개발', 'AI 모델링', 'API 연동'],
      greeting: '안녕하세요, 준호입니다. 어떤 소프트웨어를 만들어드릴까요?',
      dialogExamples: [
        '고객 관리용 웹 대시보드 만들어줘.',
        '이미지 인식 AI 모델 학습시켜줘.',
        '기존 서비스에 새로운 기능 추가해줘.',
      ],
      bgColorClass: 'bg-gradient-to-br from-sky-500 to-blue-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-cyan-300',
    },
    {
      id: 'taeo',
      name: '태오',
      title: '24/7 고객 지원 에이전트',
      description: '시간과 장소에 구애받지 않고 고객 문의에 신속하고 정확하게 답변하여 고객 만족도를 높입니다.',
      longDescription: '태오는 지치지 않는 고객 지원 전문가입니다. 24시간 실시간으로 고객 문의에 응대하며, FAQ 답변, 문제 해결, 정보 제공 등 다양한 지원 업무를 수행합니다. 고객 지원팀의 업무 효율성을 높이고 일관된 서비스 품질을 보장합니다.',
      image: '/images/ai-taeo.webp',
      tags: ['챗봇', '실시간 상담', '기술 지원', '다국어 지원'],
      greeting: '안녕하세요! 태오입니다. 무엇을 도와드릴까요?',
      dialogExamples: [
        '제품 사용법 알려줘.',
        '비밀번호를 잊어버렸어요.',
        '서비스 장애 현황 확인해줘.',
      ],
      bgColorClass: 'bg-gradient-to-br from-orange-500 to-amber-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-yellow-300',
    },
    {
      id: 'yungu',
      name: '윤구',
      title: 'UX/UI 디자인 전문가',
      description: '사용자 중심의 직관적이고 매력적인 디자인으로 최상의 사용자 경험을 제공합니다.',
      longDescription: '윤구는 감각적인 UX/UI 디자이너입니다. 사용자 연구를 바탕으로 와이어프레임, 프로토타입, UI 디자인 등 사용자 인터페이스를 설계하고, 사용성 테스트를 통해 지속적으로 개선하여 사용자와 서비스 간의 상호작용을 최적화합니다.',
      image: '/images/ai-yungu.webp',
      tags: ['UX 리서치', 'UI 디자인', '프로토타이핑', '디자인 시스템'],
      greeting: '안녕하세요, 윤구입니다. 어떤 디자인을 구상하고 계신가요?',
      dialogExamples: [
        '새로운 앱 디자인 컨셉 제안해줘.',
        '기존 웹사이트 사용성 개선 방안 알려줘.',
        '우리 브랜드에 맞는 아이콘 세트 만들어줘.',
      ],
      bgColorClass: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-pink-300',
    }
  ];

  const handleInfoClick = (character: Character) => {
    setSelectedCharacter(character);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setSelectedCharacter(null), 300);
  };

  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const CharacterCard = ({ character, onInfoClick, delay = 0 }: { character: Character; onInfoClick: (character: Character) => void; delay?: number; }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    return (
      <div
        ref={ref}
        className={`relative group bg-slate-800/70 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/10 transform transition-all duration-500 hover:shadow-purple-500/30 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="absolute top-4 right-4 z-20">
          <Button 
            variant="icon" 
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all transform group-hover:scale-110"
            onClick={() => onInfoClick(character)}
            aria-label={`${character.name} 상세 정보 보기`}
          >
            <Info size={20} />
          </Button>
        </div>
        <div className="relative h-64 md:h-72 w-full overflow-hidden">
          <img 
            src={character.image || '/images/placeholder-character.webp'} 
            alt={character.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent"></div>
        </div>
        <div className="p-6">
          <h3 className={`text-2xl font-bold mb-1 ${character.highlightColorClass}`}>{character.name}</h3>
          <p className="text-sm text-purple-300 font-medium mb-3">{character.title}</p>
          <p className="text-gray-300 text-sm mb-4 h-16 overflow-hidden group-hover:h-auto transition-all duration-300">
            {character.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {character.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="characters" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-purple-900 via-rose-800 to-indigo-900 text-white"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[650px] h-[650px] bg-rose-500/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-40' : 'opacity-0'} -top-32 -right-52`}></div>
        <div className={`absolute w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30 delay-500' : 'opacity-0'} bottom-[-200px] -left-40`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-500 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-300 mb-4 text-sm`}>
            <Users className="h-4 w-4" />
            <span>팀원 소개</span>
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              저희 팀원들을 소개할게요
            </span>
          </h2>
          <p 
            ref={descriptionRef}
            className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            각 분야의 전문가 AI 에이전트들이 여러분의 비즈니스 성장을 지원합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {characters.map((character, index) => (
            <CharacterCard 
              key={character.id} 
              character={character} 
              onInfoClick={handleInfoClick} 
              delay={200 + index * 100}
            />
          ))}
        </div>

        <div 
          ref={buttonRef}
          className={`text-center transition-all duration-500 delay-300 ${isButtonVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <Button
            onClick={handleContactScroll}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-full font-semibold text-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-pink-500/30 flex items-center justify-center mx-auto"
            aria-label="나만의 AI 팀원 상담받기"
          >
            나만의 AI 팀원 상담받기
            <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {selectedCharacter && (
        <CharacterDetailPopup 
          isOpen={isPopupOpen} 
          onClose={handleClosePopup} 
          character={selectedCharacter} 
        />
      )}
    </section>
  );
};