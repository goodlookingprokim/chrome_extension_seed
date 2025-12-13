# 🚀 크롬 확장프로그램 × Claude Code Skills 통합 가이드

> **목표**: 누구나 클릭 한 번으로 Claude Code의 강력한 Skills를 실행할 수 있게 만들기

---

## 📖 이 가이드를 읽기 전에: 왜 이 조합인가?

### 🎭 비유로 이해하기

**레스토랑 비유**를 떠올려 보세요:

|구성 요소|레스토랑 비유|역할|
|---|---|---|
|크롬 확장프로그램|주문 키오스크|누구나 쉽게 터치해서 주문|
|Claude Code Skills|주방 셰프|복잡한 요리를 전문적으로 처리|
|사용자|손님|버튼만 누르면 결과물을 받음|

**핵심 통찰**:

- 손님이 주방에 들어가서 직접 요리할 필요 없음
- 키오스크(크롬 확장)가 주문을 받아 주방(Skills)에 전달
- 손님은 맛있는 음식(결과물)만 받으면 됨!

---

## 💡 10가지 혁신적 아이디어

### 아이디어 1: 📋 웹페이지 → 문서 변환기

**시나리오**: 블로그 글을 읽다가 "이거 워드 문서로 저장하고 싶다"

- **크롬 확장**: 현재 페이지 내용 추출 → 버튼 클릭
- **Skill**: `docx` 스킬이 전문적인 문서로 변환
- **결과**: 깔끔하게 포맷된 .docx 파일 다운로드

### 아이디어 2: 📊 선택한 표 → 엑셀 변환기

**시나리오**: 위키피디아의 통계표를 엑셀로 분석하고 싶다

- **크롬 확장**: 표 드래그 선택 → 버튼 클릭
- **Skill**: `xlsx` 스킬이 수식 포함 스프레드시트 생성
- **결과**: 바로 분석 가능한 .xlsx 파일

### 아이디어 3: 🎨 웹 콘텐츠 → 프레젠테이션 생성기

**시나리오**: 연구 자료들을 발표용 PPT로 만들고 싶다

- **크롬 확장**: 여러 페이지 북마크 → "PPT 생성" 클릭
- **Skill**: `pptx` 스킬이 슬라이드 자동 구성
- **결과**: 발표용 .pptx 파일

### 아이디어 4: 📝 유튜브 영상 → 학습 노트 생성기

**시나리오**: 강의 영상을 정리된 학습 자료로 만들고 싶다

- **크롬 확장**: 유튜브 페이지에서 버튼 클릭
- **Skill**: 자막 추출 → 요약 → 마크다운 노트 생성
- **결과**: 옵시디언에 바로 붙여넣을 수 있는 학습 노트

### 아이디어 5: 🔍 선택 텍스트 → 리서치 리포트 생성기

**시나리오**: 모르는 개념을 깊이 조사하고 싶다

- **크롬 확장**: 텍스트 선택 → "리서치" 클릭
- **Skill**: 웹 검색 + 정보 수집 + 리포트 작성
- **결과**: 체계적인 리서치 문서

### 아이디어 6: 🌐 다국어 웹페이지 → 번역 문서 생성기

**시나리오**: 영문 기술 문서를 한글 PDF로 보관하고 싶다

- **크롬 확장**: 페이지에서 "번역 문서 생성" 클릭
- **Skill**: 번역 + PDF 생성
- **결과**: 번역된 .pdf 파일

### 아이디어 7: 📧 웹 양식 → 이메일 초안 생성기

**시나리오**: 채용 공고를 보고 지원 이메일을 쓰고 싶다

- **크롬 확장**: 채용 공고 페이지에서 버튼 클릭
- **Skill**: 공고 분석 → 맞춤형 이메일 초안 생성
- **결과**: 복사해서 바로 사용할 수 있는 이메일

### 아이디어 8: 📸 웹 이미지 → 설명 문서 생성기

**시나리오**: 인포그래픽의 내용을 텍스트로 정리하고 싶다

- **크롬 확장**: 이미지 우클릭 → "설명 문서 생성"
- **Skill**: 이미지 분석 → 내용 추출 → 문서화
- **결과**: 이미지 내용이 정리된 문서

### 아이디어 9: 🛒 상품 페이지 → 비교표 생성기 ⭐ (실습 예제)

**시나리오**: 여러 제품을 비교해서 결정하고 싶다

- **크롬 확장**: 상품 페이지들에서 정보 수집 버튼 클릭
- **Skill**: 정보 추출 → 비교표 생성
- **결과**: 한눈에 비교 가능한 엑셀 파일

### 아이디어 10: 📚 북마크 폴더 → 독서 목록 생성기

**시나리오**: 나중에 읽을 글들을 정리하고 싶다

- **크롬 확장**: 북마크 폴더 선택 → "목록 생성"
- **Skill**: 각 링크 분석 → 요약 → 우선순위 정리
- **결과**: 정리된 독서 목록 문서

---

## 🏃‍♂️ 실습: 가장 빠르게 만들 수 있는 프로젝트

### 선정 이유: "선택 텍스트 → 마크다운 노트 변환기"

|선정 기준|점수|이유|
|---|---|---|
|구현 난이도|⭐|크롬 API 기본만 사용|
|실용성|⭐⭐⭐⭐⭐|매일 쓸 수 있음|
|학습 효과|⭐⭐⭐⭐|전체 흐름 이해 가능|
|확장성|⭐⭐⭐⭐|다른 아이디어로 쉽게 확장|

---

## 🎓 Step-by-Step 실습 가이드

### Part 1: 전체 구조 이해하기 (5분)

```
┌─────────────────────────────────────────────────────────────┐
│                        사용자                                │
│                          │                                   │
│                    ① 텍스트 선택                             │
│                    ② 우클릭 → "노트로 변환"                  │
│                          ▼                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           크롬 확장프로그램 (프론트엔드)              │   │
│  │  • 선택된 텍스트 캡처                                │   │
│  │  • 페이지 URL, 제목 수집                             │   │
│  │  • 데이터를 JSON 형식으로 정리                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                    ③ 데이터 전달                            │
│                          ▼                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Claude Code Skill (백엔드)                 │   │
│  │  • 텍스트 분석 및 구조화                             │   │
│  │  • 마크다운 포맷 적용                                │   │
│  │  • 메타데이터 추가 (날짜, 출처 등)                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                    ④ 결과 반환                              │
│                          ▼                                   │
│                   📄 완성된 마크다운 노트                    │
│                   (클립보드에 복사됨)                        │
└─────────────────────────────────────────────────────────────┘
```

---

### Part 2: Claude Code Skill 만들기 (15분)

#### Step 2-1: 프로젝트 폴더 생성

```bash
# 작업 디렉토리 생성
mkdir -p ~/skills/web-to-markdown
cd ~/skills/web-to-markdown
```

#### Step 2-2: SKILL.md 파일 작성

`SKILL.md` 파일을 생성하고 아래 내용을 붙여넣으세요:

```markdown
---
name: web-to-markdown
description: 웹 페이지의 선택된 텍스트를 구조화된 마크다운 노트로 변환합니다. 크롬 확장프로그램에서 전달받은 웹 콘텐츠(텍스트, URL, 제목)를 분석하여 옵시디언 호환 마크다운 형식의 학습 노트를 생성합니다. 웹 클리핑, 노트 변환, 마크다운 생성 요청 시 사용합니다.
---

# Web to Markdown Skill

## 개요
웹에서 선택한 텍스트를 구조화된 마크다운 노트로 변환합니다.

## 입력 형식
크롬 확장프로그램에서 다음 JSON 형식으로 데이터를 전달받습니다:

\`\`\`json
{
  "selectedText": "선택된 텍스트 내용",
  "pageUrl": "https://example.com/article",
  "pageTitle": "페이지 제목",
  "timestamp": "2025-01-15T10:30:00Z"
}
\`\`\`

## 출력 형식
옵시디언 호환 마크다운 노트를 생성합니다:

\`\`\`markdown
---
title: "{제목}"
source: "{URL}"
created: "{날짜}"
tags: [web-clip, 자동생성태그]
---

# {제목}

## 📌 핵심 내용
{구조화된 핵심 내용}

## 💡 주요 포인트
- 포인트 1
- 포인트 2
- 포인트 3

## 📝 원문
> {원본 텍스트 인용}

## 🔗 출처
- [원문 링크]({URL})
- 클리핑 일시: {날짜}
\`\`\`

## 변환 규칙

### 1. 제목 생성
- 페이지 제목이 있으면 사용
- 없으면 텍스트 첫 문장에서 추출

### 2. 태그 자동 생성
- 텍스트 내용 분석하여 관련 태그 3-5개 생성
- 형식: 소문자, 하이픈 구분 (예: `machine-learning`)

### 3. 핵심 내용 구조화
- 긴 텍스트는 섹션으로 분리
- 나열 항목은 불릿 포인트로 변환
- 숫자 데이터는 표로 정리

### 4. 메타데이터
- YAML 프론트매터 필수 포함
- ISO 8601 날짜 형식 사용
```

#### Step 2-3: 스킬 동작 확인

스킬 구조가 올바른지 확인합니다:

```bash
# 파일 구조 확인
ls -la ~/skills/web-to-markdown/
# 결과: SKILL.md 파일이 보여야 함

# SKILL.md 내용 확인
cat ~/skills/web-to-markdown/SKILL.md
```

---

### Part 3: 크롬 확장프로그램 만들기 (20분)

#### Step 3-1: 확장프로그램 폴더 생성

```bash
mkdir -p ~/chrome-extension/web-to-markdown
cd ~/chrome-extension/web-to-markdown
```

#### Step 3-2: manifest.json 작성

크롬 확장프로그램의 설정 파일입니다:

```json
{
  "manifest_version": 3,
  "name": "Web to Markdown - Claude Skills",
  "version": "1.0.0",
  "description": "선택한 텍스트를 마크다운 노트로 변환합니다",
  "permissions": [
    "activeTab",
    "contextMenus",
    "clipboardWrite",
    "storage"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```

#### Step 3-3: background.js 작성 (핵심 로직)

```javascript
// background.js - 확장프로그램의 두뇌 역할

// ============================================
// 1. 컨텍스트 메뉴 생성 (우클릭 메뉴)
// ============================================
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "convertToMarkdown",
    title: "📝 마크다운 노트로 변환",
    contexts: ["selection"]  // 텍스트 선택 시에만 표시
  });
  
  console.log("✅ Web to Markdown 확장프로그램이 설치되었습니다!");
});

// ============================================
// 2. 메뉴 클릭 이벤트 처리
// ============================================
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "convertToMarkdown") {
    // 선택된 텍스트와 페이지 정보 수집
    const clipData = {
      selectedText: info.selectionText,
      pageUrl: tab.url,
      pageTitle: tab.title,
      timestamp: new Date().toISOString()
    };
    
    console.log("📋 수집된 데이터:", clipData);
    
    // 마크다운으로 변환
    convertToMarkdown(clipData, tab.id);
  }
});

// ============================================
// 3. 마크다운 변환 함수 (Skill 로직 구현)
// ============================================
function convertToMarkdown(data, tabId) {
  // 태그 자동 생성 (간단한 키워드 추출)
  const tags = generateTags(data.selectedText);
  
  // 핵심 포인트 추출
  const keyPoints = extractKeyPoints(data.selectedText);
  
  // 마크다운 노트 생성
  const markdown = `---
title: "${escapeYaml(data.pageTitle)}"
source: "${data.pageUrl}"
created: "${formatDate(data.timestamp)}"
tags: [web-clip, ${tags.join(', ')}]
---

# ${data.pageTitle}

## 📌 핵심 내용
${summarizeText(data.selectedText)}

## 💡 주요 포인트
${keyPoints.map(point => `- ${point}`).join('\n')}

## 📝 원문
> ${data.selectedText.split('\n').join('\n> ')}

## 🔗 출처
- [원문 링크](${data.pageUrl})
- 클리핑 일시: ${formatDate(data.timestamp)}
`;

  // 클립보드에 복사
  copyToClipboard(markdown, tabId);
}

// ============================================
// 4. 유틸리티 함수들
// ============================================

// 태그 생성 함수
function generateTags(text) {
  // 간단한 키워드 추출 로직
  const words = text.toLowerCase()
    .replace(/[^\w\s가-힣]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  // 빈도수 계산
  const frequency = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  // 상위 3개 키워드 반환
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([word]) => word);
}

// 핵심 포인트 추출 함수
function extractKeyPoints(text) {
  // 문장 분리
  const sentences = text
    .split(/[.!?。]+/)
    .map(s => s.trim())
    .filter(s => s.length > 10);
  
  // 상위 3개 문장 반환 (길이 기준 간단 선택)
  return sentences
    .sort((a, b) => b.length - a.length)
    .slice(0, 3);
}

// 텍스트 요약 함수
function summarizeText(text) {
  const sentences = text.split(/[.!?。]+/).filter(s => s.trim());
  if (sentences.length <= 3) {
    return text;
  }
  // 처음 3문장을 요약으로 사용
  return sentences.slice(0, 3).join('. ') + '.';
}

// 날짜 포맷 함수
function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// YAML 특수문자 이스케이프
function escapeYaml(str) {
  return str.replace(/"/g, '\\"').replace(/\n/g, ' ');
}

// 클립보드 복사 함수
function copyToClipboard(text, tabId) {
  // content script를 통해 클립보드에 복사
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: (markdown) => {
      navigator.clipboard.writeText(markdown).then(() => {
        // 성공 알림 표시
        showNotification("✅ 마크다운 노트가 클립보드에 복사되었습니다!");
      });
      
      function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #4CAF50;
          color: white;
          padding: 16px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
          z-index: 999999;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
          notification.style.animation = 'slideOut 0.3s ease';
          setTimeout(() => notification.remove(), 300);
        }, 3000);
      }
    },
    args: [text]
  });
}
```

#### Step 3-4: popup.html 작성 (팝업 UI)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      width: 320px;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .header h1 {
      font-size: 18px;
      margin-bottom: 8px;
    }
    
    .header p {
      font-size: 12px;
      opacity: 0.9;
    }
    
    .instructions {
      background: rgba(255,255,255,0.15);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    
    .step {
      display: flex;
      align-items: flex-start;
      margin-bottom: 12px;
    }
    
    .step:last-child {
      margin-bottom: 0;
    }
    
    .step-number {
      background: white;
      color: #667eea;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 12px;
      margin-right: 12px;
      flex-shrink: 0;
    }
    
    .step-text {
      font-size: 13px;
      line-height: 1.5;
    }
    
    .footer {
      text-align: center;
      font-size: 11px;
      opacity: 0.8;
    }
    
    .emoji {
      font-size: 24px;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="emoji">📝</div>
    <h1>Web to Markdown</h1>
    <p>웹 텍스트를 마크다운 노트로 변환</p>
  </div>
  
  <div class="instructions">
    <div class="step">
      <span class="step-number">1</span>
      <span class="step-text">변환하고 싶은 텍스트를 드래그하여 선택하세요</span>
    </div>
    <div class="step">
      <span class="step-number">2</span>
      <span class="step-text">마우스 우클릭 → "📝 마크다운 노트로 변환" 클릭</span>
    </div>
    <div class="step">
      <span class="step-number">3</span>
      <span class="step-text">옵시디언에 Ctrl+V로 붙여넣기!</span>
    </div>
  </div>
  
  <div class="footer">
    Claude Code Skills 연동
  </div>
</body>
</html>
```

#### Step 3-5: 아이콘 생성

간단한 SVG 아이콘을 만들어봅시다:

```bash
mkdir -p ~/chrome-extension/web-to-markdown/icons
```

`icons/icon48.svg` (다른 크기도 동일하게):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea"/>
      <stop offset="100%" style="stop-color:#764ba2"/>
    </linearGradient>
  </defs>
  <rect width="48" height="48" rx="8" fill="url(#grad)"/>
  <text x="24" y="32" font-size="24" text-anchor="middle" fill="white">📝</text>
</svg>
```

> **팁**: PNG 아이콘이 필요하면 온라인 SVG to PNG 변환기를 사용하세요.

---

### Part 4: 크롬에 확장프로그램 설치하기 (5분)

#### Step 4-1: 개발자 모드 활성화

1. 크롬 브라우저 열기
2. 주소창에 `chrome://extensions` 입력
3. 우측 상단의 **"개발자 모드"** 토글 ON

#### Step 4-2: 확장프로그램 로드

1. **"압축해제된 확장 프로그램을 로드합니다"** 클릭
2. `~/chrome-extension/web-to-markdown` 폴더 선택
3. 확장프로그램 목록에 추가된 것 확인!

#### Step 4-3: 테스트하기

1. 아무 웹페이지 방문 (예: 뉴스 기사, 블로그)
2. 텍스트 드래그하여 선택
3. 우클릭 → **"📝 마크다운 노트로 변환"** 클릭
4. 옵시디언 열고 `Ctrl+V` (또는 `Cmd+V`)
5. 🎉 마크다운 노트 완성!

---

## 🔧 고급: Claude Code와 실제 연동하기

위의 기본 버전은 JavaScript만으로 동작합니다. 더 강력한 AI 분석을 원한다면 Claude Code와 실제로 연동할 수 있습니다.

### 방법 1: 로컬 서버 활용

```
크롬 확장프로그램
       │
       ▼ HTTP 요청
┌─────────────────┐
│   로컬 서버     │  (Python Flask/Node Express)
│   localhost:5000│
└─────────────────┘
       │
       ▼ 실행
┌─────────────────┐
│  Claude Code    │  claude -p "web-to-markdown skill 사용..."
│  + Skills       │
└─────────────────┘
```

### 방법 2: 클립보드 + 단축키 조합

1. 크롬 확장에서 데이터를 특정 형식으로 클립보드에 복사
2. Alfred/Raycast 등의 단축키로 Claude Code 호출
3. 클립보드 데이터를 입력으로 전달

### 방법 3: 파일 기반 통신

1. 크롬 확장에서 JSON 파일을 특정 폴더에 저장
2. Claude Code가 해당 폴더를 모니터링
3. 새 파일 감지 시 자동으로 Skill 실행

---

## 📊 아이디어별 구현 난이도 비교

|순위|아이디어|난이도|예상 시간|추천도|
|---|---|---|---|---|
|1|텍스트→마크다운 노트|⭐|30분|⭐⭐⭐⭐⭐|
|2|유튜브→학습노트|⭐⭐|1시간|⭐⭐⭐⭐⭐|
|3|표→엑셀 변환|⭐⭐|1시간|⭐⭐⭐⭐|
|4|웹페이지→문서|⭐⭐|1시간|⭐⭐⭐⭐|
|5|이메일 초안 생성|⭐⭐|1시간|⭐⭐⭐⭐|
|6|번역 문서 생성|⭐⭐⭐|2시간|⭐⭐⭐|
|7|리서치 리포트|⭐⭐⭐|2시간|⭐⭐⭐⭐|
|8|상품 비교표|⭐⭐⭐|2시간|⭐⭐⭐|
|9|프레젠테이션 생성|⭐⭐⭐⭐|3시간|⭐⭐⭐|
|10|이미지 설명 문서|⭐⭐⭐⭐|3시간|⭐⭐⭐|

---

## 🎯 핵심 정리

### 이 가이드에서 배운 것

1. **아키텍처 설계**: 크롬 확장(프론트) + Skills(백엔드) 분리
2. **크롬 확장 기초**: manifest.json, background.js, popup.html
3. **Claude Code Skill 구조**: SKILL.md 작성법
4. **데이터 흐름**: 웹 → 크롬 확장 → Skill → 결과물

### 다음 단계

1. 기본 버전 완성 후, 다른 아이디어로 확장해보기
2. Claude API 연동하여 AI 분석 강화
3. 옵시디언 플러그인과 직접 연동

---

## 🔗 참고 자료

- [Chrome Extensions 공식 문서](https://developer.chrome.com/docs/extensions/)
- [Claude Code 공식 문서](https://docs.anthropic.com/claude-code)
- [Manifest V3 마이그레이션 가이드](https://developer.chrome.com/docs/extensions/mv3/intro/)

---

> 💬 **피드백 환영합니다!**  
> 이 가이드가 도움이 되었다면, 더 발전시킬 아이디어를 공유해주세요.
