# Woojae Portfolio

프론트엔드 개발자 우재의 개인 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (권장)

## ✨ 주요 기능

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🌙 다크 모드 지원
- ⚡ 빠른 로딩 속도
- 🎨 현대적인 UI/UX
- 📧 연락처 기능
- 🎯 스무스 스크롤 네비게이션

## 🛠️ 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
my-portfolio/
├── app/
│   ├── globals.css      # 전역 스타일
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 메인 페이지
├── public/              # 정적 파일
└── package.json         # 프로젝트 설정
```

## 🎨 커스터마이징

### 색상 변경
`app/globals.css`에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### 내용 수정
`app/page.tsx`에서 다음 내용들을 수정할 수 있습니다:
- 개인 정보
- 프로젝트 목록
- 기술 스택
- 연락처 정보

## 📱 반응형 디자인

- **모바일**: 햄버거 메뉴, 세로 레이아웃
- **태블릿**: 중간 크기 그리드
- **데스크톱**: 전체 네비게이션, 가로 레이아웃

## 🌐 배포

Vercel을 통한 배포를 권장합니다:

1. GitHub에 코드 푸시
2. Vercel에서 프로젝트 연결
3. 자동 배포 완료

## 📄 라이선스

MIT License

---

개발자 우재의 포트폴리오 웹사이트입니다. 새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요!
