import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import Button from './Button';

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center text-white">
    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span>{children}</span>
  </div>
);

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    character: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    // 실제 전송 로직은 API 연동 필요. 여기선 1초 후 성공 처리
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setSuccess('문의가 성공적으로 접수되었습니다!');
      setForm({ name: '', email: '', company: '', character: '' });
    } catch {
      setError('오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-indigo-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 bg-gradient-to-br from-indigo-600 to-purple-700">
              <h2 id="contact-heading" className="text-3xl font-bold text-white mb-6">
                지금 바로 새로운 팀원을 만나보세요
              </h2>
              <p className="text-indigo-100 mb-6">
                14일 무료 체험으로 AI 팀원의 효과를 직접 경험해보세요. 아이메이트는 일하는 방식을 혁신적으로 바꿔줄 것입니다.
              </p>
              <div className="space-y-2">
                <FeatureItem>신용카드 정보 불필요</FeatureItem>
                <FeatureItem>간편한 설정</FeatureItem>
                <FeatureItem>언제든지 해지 가능</FeatureItem>
              </div>
            </div>
            
            <div className="bg-white p-10 md:p-12">
              <form className="space-y-4" onSubmit={handleSubmit} aria-busy={loading} aria-live="polite">
                <Input
                  label="이름"
                  id="name"
                  type="text"
                  placeholder="이름을 입력하세요"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="이메일"
                  id="email"
                  type="email"
                  placeholder="회사 이메일을 입력하세요"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="회사명"
                  id="company"
                  type="text"
                  placeholder="회사명을 입력하세요"
                  value={form.company}
                  onChange={handleChange}
                />
                <Select
                  label="관심 AI 캐릭터"
                  id="character"
                  value={form.character}
                  onChange={handleChange}
                  options={[
                    { value: '', label: 'AI 캐릭터 선택' },
                    { value: 'jiyu', label: '지유 (고객 상담)' },
                    { value: 'harin', label: '하린 (정보 리서치)' },
                    { value: 'sua', label: '수아 (일정 관리)' },
                    { value: 'junho', label: '준호 (마케팅 콘텐츠)' },
                    { value: 'soyeon', label: '소연 (문서 요약)' },
                    { value: 'taeo', label: '태오 (업무 자동화)' },
                    { value: 'custom', label: '맞춤형 AI' },
                  ]}
                />
                <Button
                  type="submit"
                  loading={loading}
                  aria-label="무료 체험 시작하기"
                  className="w-full"
                >
                  무료 체험 시작하기
                </Button>
                {success && <p className="text-green-600 text-center" role="status">{success}</p>}
                {error && <p className="text-red-600 text-center" role="alert">{error}</p>}
                <p className="text-xs text-gray-500 text-center mt-4">
                  제출 시 아이메이트의 <a href="#" className="text-indigo-600 hover:underline">서비스 약관</a> 및 <a href="#" className="text-indigo-600 hover:underline">개인정보처리방침</a>에 동의합니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};