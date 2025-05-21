import React from 'react';
import { X, Bot, CheckCircle } from 'lucide-react';
import Button from '../common/Button';

interface CharacterDetailPopupProps {
  character: {
    id: string;
    name: string;
    role: string;
    icon: React.ReactNode;
    color: string;
    image?: string;
    description: string;
    tagline?: string;
    // 상세 소개를 위한 추가 필드 (예시)
    detailedIntro?: string;
    features?: { title: string; description: string }[];
    useCases?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const CharacterDetailPopup: React.FC<CharacterDetailPopupProps> = ({ character, isOpen, onClose }) => {
  if (!isOpen || !character) return null;

  // 임시 상세 데이터 (실제로는 character 객체에 포함되어야 함)
  const tempDetails = {
    detailedIntro: `${character.name}은(는) ${character.role}로서, 귀사의 비즈니스 성장을 돕기 위해 최선을 다합니다. ${character.tagline} ${character.description} 외에도 다음과 같은 특징과 활용 사례를 가지고 있습니다.`,
    features: [
      { title: '핵심 기능 1', description: `${character.name}만의 특화된 첫 번째 기능 설명입니다.` },
      { title: '핵심 기능 2', description: `${character.name}만의 특화된 두 번째 기능 설명입니다.` },
      { title: '핵심 기능 3', description: `다른 AI 에이전트와 차별화되는 ${character.name}의 세 번째 강점입니다.` },
    ],
    useCases: [
      `${character.role}로서 특정 산업/업무에서의 활용 사례 1`,
      `다른 종류의 비즈니스에서 ${character.name}을(를) 활용하여 성공한 사례 2`,
      `${character.name} 도입 후 예상되는 구체적인 효과 및 ROI 예시`,
    ],
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 transition-opacity duration-300 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden transform transition-all duration-300 animate-scale-in">
        {/* Header */}
        <div className={`flex items-center justify-between p-5 border-b border-gray-200 bg-${character.color}-50`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 bg-${character.color}-100 text-${character.color}-600 rounded-full`}>{character.icon}</div>
            <div>
              <h3 className={`text-2xl font-bold text-${character.color}-700`}>{character.name}</h3>
              <p className={`text-sm text-${character.color}-600`}>{character.role}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className={`text-gray-500 hover:text-${character.color}-500`}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow">
          {/* 이미지 (요청 시 추가) */}
          {character.image && (
            <div className="mb-6 rounded-lg overflow-hidden aspect-video bg-gray-100">
              <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
            </div>
          )}
          
          <p className="text-slate-700 text-lg mb-6 leading-relaxed">
            {character.detailedIntro || tempDetails.detailedIntro}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">주요 기능</h4>
              <ul className="space-y-2">
                {(character.features || tempDetails.features).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 text-${character.color}-500 mr-2 mt-1 flex-shrink-0`} />
                    <span className="text-slate-600"><span className="font-medium text-slate-700">{feature.title}:</span> {feature.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">활용 사례</h4>
              <ul className="space-y-2 list-disc list-inside pl-1">
                {(character.useCases || tempDetails.useCases).map((useCase, index) => (
                  <li key={index} className="text-slate-600">
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200 bg-slate-50 text-right">
          <Button 
            onClick={() => { 
              onClose(); 
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`bg-${character.color}-600 hover:bg-${character.color}-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg`}
          >
            {character.name} 도입 문의하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPopup; 