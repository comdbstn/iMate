import React from 'react';
import { Bot, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="text-indigo-400 mr-2">
                <Bot className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">
                아이메이트<span className="text-indigo-400">.</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              아이메이트는 AI 어시스턴트로 업무 효율을 혁신적으로 높여주는 한국의 AI 기업입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">서비스</h3>
            <ul className="space-y-3">
              <li>
                <a href="#characters" className="text-gray-400 hover:text-white transition-colors">
                  AI 캐릭터
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  특별한 장점
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  요금제
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  맞춤형 솔루션
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">회사</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  미디어 키트
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">고객 지원</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-indigo-400 mt-0.5 mr-2" />
                <span className="text-gray-400">help@imate.co.kr</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-indigo-400 mt-0.5 mr-2" />
                <span className="text-gray-400">02-123-4567</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">뉴스레터 구독</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="py-2 px-4 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors">
                  구독
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 아이메이트. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                쿠키 정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};