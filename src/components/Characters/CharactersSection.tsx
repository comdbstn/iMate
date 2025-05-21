import React, { useState, useEffect } from 'react';
import { MessageCircle, Search, Calendar, PenTool, FileText, Terminal, ChevronRight, Info, Users, Sparkles, Briefcase, Brain, Users2, Mic, Edit3, Zap } from 'lucide-react';
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
  icon: React.ElementType;
  baseFunctions: string[];
  additionalFunctions: string[];
  useCases: string[];
  bgColorClass: string;
  textColorClass: string;
  highlightColorClass: string;
  characterSpecificBg?: string;
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
      title: '고객 상담 매니저',
      icon: MessageCircle,
      description: '실시간 채팅 상담, FAQ 자동 응답, 고객 문의 접수 및 분류',
      longDescription: '지유는 고객과의 최접점에서 빛을 발하는 상담 전문가입니다. 실시간 채팅, FAQ 기반 자동 응답은 물론, 고객 문의를 효율적으로 접수하고 분류하여 만족스러운 고객 경험을 선사합니다. CRM 연동으로 고객 히스토리를 즉시 파악하고, 상담 내용을 요약하여 보고서를 자동 생성함으로써 업무 효율을 극대화합니다. 음성 상담(Twilio 연동) 및 감정 분석을 통한 이슈 티켓 자동 생성, 이메일 자동 답변 기능까지 갖추고 있어 쇼핑몰 고객센터, SaaS 고객 지원, 예약 상담 등 다양한 분야에서 활약합니다.',
      image: '/images/character-jiyu.webp',
      baseFunctions: [
        "실시간 채팅 상담 (웹 채팅창, 메신저 연동)",
        "FAQ 기반 자동 응답",
        "고객 문의 접수 및 기본 분류"
      ],
      additionalFunctions: [
        "CRM 연동 (고객 히스토리 자동 조회·저장)",
        "상담 내용 요약 및 보고서 자동 작성",
        "음성 상담 (Twilio 등 활용)",
        "감정 분석 및 이슈 티켓 자동 생성",
        "이메일 자동 답변"
      ],
      useCases: ["쇼핑몰 고객센터", "SaaS 고객 지원", "예약 상담 대응"],
      bgColorClass: 'from-pink-500 to-rose-500',
      textColorClass: 'text-white',
      highlightColorClass: 'text-rose-300',
      characterSpecificBg: 'bg-gradient-to-br from-pink-600 via-rose-500 to-fuchsia-600',
    },
    {
      id: 'harin',
      name: '하린',
      title: '정보 리서처',
      icon: Search,
      description: '웹 검색 기반 주제 리서치, 문서 요약, 경쟁사 뉴스 수집',
      longDescription: '하린은 방대한 정보의 바다에서 핵심만을 찾아내는 유능한 리서처입니다. 웹 검색을 통해 필요한 주제를 심도 있게 리서치하고, PDF나 Word 문서를 업로드하면 내용을 빠르게 요약해줍니다. 기본적인 경쟁사 뉴스 수집 및 정리는 물론, 요약본에 출처 링크를 포함하고, 표나 차트를 활용해 리서치 결과를 시각화하여 가독성을 높입니다. 키워드별 중요도 분석과 보고서 자동 작성 및 이메일 발송 기능은 마케팅팀의 리서치 지원, 시장 조사, 내부 자료 정리 등에서 시간을 크게 절약해줍니다.',
      image: '/images/character-harin.webp',
      baseFunctions: [
        "웹 검색 기반 주제 리서치",
        "문서 업로드 (PDF, Word) 후 내용 요약",
        "기본 경쟁사 뉴스 수집·정리"
      ],
      additionalFunctions: [
        "요약본에 출처 링크 포함",
        "표·차트로 리서치 결과 시각화",
        "키워드별 중요도 분석",
        "보고서 자동 작성 및 이메일 발송"
      ],
      useCases: ["마케팅팀 리서치 지원", "시장 조사", "내부 자료 정리"],
      bgColorClass: 'from-sky-500 to-cyan-500',
      textColorClass: 'text-white',
      highlightColorClass: 'text-cyan-300',
      characterSpecificBg: 'bg-gradient-to-br from-sky-600 via-cyan-500 to-teal-600',
    },
    {
      id: 'sua',
      name: '수아',
      title: '일정·회의 도우미',
      icon: Calendar,
      description: '캘린더 연동, 일정 예약 및 알림, 회의록 작성 (텍스트 기반)',
      longDescription: '수아는 바쁜 당신의 스케줄을 빈틈없이 관리하고 회의 생산성을 높이는 스마트한 비서입니다. Google Calendar 및 Outlook 캘린더와 연동하여 일정을 손쉽게 예약하고 알림을 발송합니다. 텍스트 기반 회의 요약 및 회의록 작성은 기본이며, Zoom 및 Google Meet 통합 회의 요약 기능으로 화상회의 내용도 놓치지 않습니다. 참가자별 발언 요약, 자동 메모 태깅 후 Notion이나 Slack에 업로드하는 기능, 일정 중복 및 우선순위 최적화 제안 기능은 임원 비서 지원, 팀 미팅 관리, 프로젝트 매니지먼트에 필수적입니다.',
      image: '/images/character-sua.webp',
      baseFunctions: [
        "Google Calendar·Outlook 캘린더 연동",
        "일정 예약 및 알림 발송",
        "회의 요약 및 회의록 작성 (텍스트 기반)"
      ],
      additionalFunctions: [
        "Zoom·Google Meet 통합 회의 요약",
        "회의 참가자별 발언 요약",
        "자동 메모 태깅 및 Notion·Slack 업로드",
        "일정 중복·우선순위 최적화 제안"
      ],
      useCases: ["임원 비서 지원", "팀 미팅 관리", "프로젝트 매니지먼트"],
      bgColorClass: 'from-amber-500 to-yellow-500',
      textColorClass: 'text-white',
      highlightColorClass: 'text-yellow-300',
      characterSpecificBg: 'bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-600',
    },
    {
      id: 'junho',
      name: '준호',
      title: '마케팅 콘텐츠 제작자',
      icon: PenTool,
      description: 'SNS 포스트 문구 작성, 광고 문구 초안 생성, SEO 키워드 추천',
      longDescription: '준호는 당신의 브랜드를 빛낼 매력적인 마케팅 콘텐츠를 만들어내는 크리에이터입니다. 인스타그램, 블로그, 트위터 등 다양한 SNS 채널에 맞는 포스트 문구를 작성하고, Facebook 및 Google Ads 광고 문구 초안을 빠르게 생성합니다. 기본 SEO 최적화 키워드 추천은 물론, A/B 테스트용 광고 버전 자동 생성, CTA(Call To Action) 최적화 추천 기능으로 마케팅 성과를 극대화합니다. 브랜드별 맞춤 스타일 카피 제공과 해시태그 자동 추천 및 게시 예약 기능은 스타트업이나 중소기업 마케팅팀, 콘텐츠 크리에이터에게 강력한 지원군이 될 것입니다.',
      image: '/images/character-junho.webp',
      baseFunctions: [
        "SNS용 포스트 문구 작성 (인스타그램, 블로그, 트위터 등)",
        "광고 문구 (Facebook, Google Ads 등) 초안 생성",
        "기본 SEO 최적화 키워드 추천"
      ],
      additionalFunctions: [
        "A/B 테스트용 광고 버전 자동 생성",
        "CTA(Call To Action) 최적화 추천",
        "브랜드별 맞춤 스타일 카피 제공",
        "해시태그 자동 추천·게시 예약 기능"
      ],
      useCases: ["스타트업·중소기업 마케팅팀 지원", "콘텐츠 크리에이터 보조"],
      bgColorClass: 'from-lime-500 to-green-500',
      textColorClass: 'text-white',
      highlightColorClass: 'text-green-300',
      characterSpecificBg: 'bg-gradient-to-br from-lime-600 via-green-500 to-emerald-600',
    },
    {
      id: 'soyeon',
      name: '소연',
      title: '문서 정리·요약 담당',
      icon: FileText,
      description: '회의록 작성, 리포트 요약 및 핵심 추출, 계약서 초안 작성',
      longDescription: '소연은 복잡한 문서 업무를 깔끔하게 처리하는 문서 전문가입니다. 텍스트 입력을 통해 회의록을 작성하고, 장문의 리포트에서 핵심 포인트를 정확히 추출하여 요약합니다. 간단한 계약서나 안내문 템플릿을 기반으로 초안을 빠르게 작성할 수 있도록 돕습니다. 문서 자동 포맷팅(항목별 정리, 번호 매기기) 기능으로 가독성을 높이고, 조항별 요약 및 설명 삽입 기능으로 이해를 돕습니다. PDF나 워드 문서를 업로드하면 자동으로 분석하고 요약하며, 요약본을 메일로 자동 발송하는 기능은 팀 회의 기록, 보고서 정리, 계약 초안 작업 등에서 빛을 발합니다.',
      image: '/images/character-soyeon.webp',
      baseFunctions: [
        "회의록 작성 (텍스트 입력 요약)",
        "리포트 요약 및 핵심 포인트 추출",
        "간단한 계약서·안내문 템플릿 기반 초안 작성"
      ],
      additionalFunctions: [
        "문서 자동 포맷팅 (항목별 정리, 번호 매기기)",
        "조항별 요약 및 설명 삽입",
        "업로드된 문서 (PDF, 워드) 자동 분석·요약",
        "요약본 자동 메일 발송"
      ],
      useCases: ["팀 회의 기록", "보고서 정리", "계약 초안 작업"],
      bgColorClass: 'from-purple-500 to-indigo-500',
      textColorClass: 'text-white',
      highlightColorClass: 'text-indigo-300',
      characterSpecificBg: 'bg-gradient-to-br from-purple-600 via-indigo-500 to-violet-600',
    },
    {
      id: 'yungu',
      name: '윤구',
      title: '반복 업무 자동화 요정',
      icon: Zap,
      description: '데이터 수집·정리, 메일·SMS 정기 발송, 간단한 데이터 변환',
      longDescription: '윤구는 귀찮은 반복 업무를 마법처럼 자동화하는 요정입니다. 스프레드시트 자동 업데이트를 통한 데이터 수집 및 정리는 기본, 정기적인 메일이나 SMS 발송도 손쉽게 처리합니다. 데이터 포맷 통일이나 중복 제거 같은 간단한 데이터 변환 작업도 윤구에게 맡기세요. 주간, 월간 정기 보고서를 자동으로 생성하고 배포하며, 슬랙이나 이메일 등으로 알림을 자동화합니다. 외부 API와 연동하여 데이터를 가져오거나 업로드하고, 특정 조건 충족 시 메일을 발송하는 등 조건부 로직 설정도 가능하여 매출 집계, 재고 관리, 정기 리포트, 예약 알림 등 다양한 반복 업무에서 해방될 수 있습니다.',
      image: '/images/character-yungu.webp',
      baseFunctions: [
        "데이터 수집·정리 (스프레드시트 자동 업데이트)",
        "메일·SMS 정기 발송",
        "간단한 데이터 변환 (포맷 통일, 중복 제거)"
      ],
      additionalFunctions: [
        "정기 보고서 자동 생성·배포 (주간, 월간)",
        "알림 자동화 (슬랙, 이메일 등)",
        "외부 API 연동 데이터 Fetch·업로드",
        "조건부 로직 설정 (특정 조건 충족 시 메일 발송)"
      ],
      useCases: ["매출 집계", "재고 관리", "정기 리포트", "예약 알림"],
      bgColorClass: 'from-teal-500 to-emerald-500',
      textColorClass: 'text-white',
      highlightColorClass: 'text-emerald-300',
      characterSpecificBg: 'bg-gradient-to-br from-teal-600 via-emerald-500 to-green-600',
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
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    const IconComponent = character.icon;

    return (
      <div
        ref={ref}
        className={`relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-white/10 ${character.characterSpecificBg || 'bg-slate-800/80 backdrop-blur-sm'} ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className={`absolute inset-0 ${character.bgColorClass} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
        
        <div className="relative p-6 md:p-8 z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-lg bg-white/10 ${character.highlightColorClass}`}>
              <IconComponent size={28} />
            </div>
            <Button
              variant="icon"
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-all transform group-hover:scale-110 group-hover:rotate-12"
              onClick={() => onInfoClick(character)}
              aria-label={`${character.name} 상세 정보 보기`}
            >
              <Info size={20} />
            </Button>
          </div>

          <h3 className={`text-2xl font-bold mb-1.5 ${character.highlightColorClass}`}>{character.name}</h3>
          <p className={`text-sm font-semibold mb-3 ${character.textColorClass} opacity-80`}>{character.title}</p>
          
          <p className={`text-sm ${character.textColorClass} opacity-90 mb-5 flex-grow min-h-[60px]`}>
            {character.description}
          </p>

          <div className="mb-5">
            <h4 className={`text-xs font-semibold uppercase ${character.highlightColorClass} opacity-70 mb-2`}>주요 기능</h4>
            <div className="flex flex-wrap gap-1.5">
              {character.baseFunctions.slice(0, 2).map(func => (
                <span key={func} className={`px-2.5 py-1 text-xs bg-white/5 ${character.textColorClass} opacity-80 rounded-md`}>
                  {func.split('(')[0].trim()}
                </span>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            className={`w-full mt-auto border-white/20 hover:bg-white/10 ${character.textColorClass} transition-all group-hover:border-${character.highlightColorClass.split('-')[1]}-500/50 group-hover:text-${character.highlightColorClass.split('-')[1]}-300`}
            onClick={handleContactScroll}
            aria-label={`${character.name}와(과) 협업 문의하기`}
          >
            협업 문의하기 <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="characters"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl transition-all duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-50' : 'opacity-0'} -top-40 -right-60 animate-spin-slow`}></div>
        <div className={`absolute w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-40 delay-500' : 'opacity-0'} bottom-[-150px] -left-52 animate-spin-slow animation-delay-2000`}></div>
        <div className={`absolute w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl transition-all duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30 delay-1000' : 'opacity-0'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow animation-delay-4000`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${isTitleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'}`}
        >
          <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-purple-300 mb-5 text-sm shadow-md`}>
            <Users2 className="h-4.5 w-4.5" />
            <span>AI 어벤져스 팀</span>
            <Sparkles className="h-4.5 w-4.5 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              당신의 비즈니스를 위한 AI 드림팀
            </span>
          </h2>
          <p
            ref={descriptionRef}
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 ease-out delay-200 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            각 분야별 전문 AI 에이전트들이 모여 시너지를 창출합니다. iMate와 함께라면 어떤 도전과제도 해결할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {characters.map((character, index) => (
            <CharacterCard
              key={character.id}
              character={character}
              onInfoClick={handleInfoClick}
              delay={index * 150}
            />
          ))}
        </div>

        <div
          ref={buttonRef}
          className={`text-center transition-all duration-700 ease-out delay-500 ${isButtonVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            onClick={handleContactScroll}
            aria-label="지금 바로 AI 팀과 프로젝트 시작하기"
          >
            지금 바로 시작하기
            <ChevronRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {selectedCharacter && (
        <CharacterDetailPopup
          character={selectedCharacter}
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
};

export default CharactersSection;