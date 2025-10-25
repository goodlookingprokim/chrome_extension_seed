# chrome_extension_seed

## 🚀 4060 미들스쿨 주니어 개발자를 위한 크롬 확장 프로그램 가이드

**안녕하세요! 미래의 크롬 확장 프로그램 개발자님!** 🎉

이 저장소는 **전통적인 방법**으로 크롬 확장 프로그램을 만드는 방법을 배우는 분들을 위한 **씨앗 파일(Seed Files)**을 제공합니다. 프레임워크 없이 순수 HTML/CSS/JavaScript만으로 확장 프로그램을 만들 수 있어요!

> **💡 팁**: 이 README만 읽어도 여러분은 크롬 확장 프로그램 주니어 개발자가 될 수 있습니다! 하나씩 따라 하다 보면 자연스럽게 실력이 쌓일 거예요.

---

## 🎯 이 저장소는 누구를 위한가요?

- ✅ **4060 미들스쿨 학생**들 (주니어 개발자 지망생)
- ✅ **프레임워크 없이 기초부터 배우고 싶은 분**
- ✅ **간단한 크롬 확장 프로그램을 만들고 싶은 분**
- ✅ **HTML/CSS/JavaScript만으로 시작하고 싶은 분**

### 🤔 Plasmo vs 전통적 방법

| 방법 | 난이도 | 속도 | 추천 상황 |
|------|--------|------|----------|
| **Plasmo** | ⭐⭐⭐ | 🚀 빠름 | 복잡한 기능, React 사용 |
| **전통적 방법** | ⭐⭐ | 🐌 느림 | 기초 학습, 간단한 기능 |

**전통적 방법을 추천하는 이유:**
- 학습 곡선이 낮음
- 추가 도구 설치 불필요
- 코드가 그대로 실행되어 디버깅 쉬움

---

## 📦 제공되는 Seed Files

### 1. 기본 Popup 템플릿 (`SeedFiles/`)
```
SeedFiles/
├── manifest.json      # 확장 프로그램 설정
├── popup.html         # 팝업 UI
└── notion_face.PNG    # 아이콘
```

**특징:**
- 가장 간단한 구조
- Chrome 우측 상단 아이콘 클릭 → 작은 팝업 표시
- 타이머, 메모, 계산기 같은 간단한 기능에 perfect!

### 2. Side Panel 템플릿 (`SeedFiles_SidePanel/`)
```
SeedFiles_SidePanel/
├── manifest.json      # Side Panel 설정 포함
├── background.js      # 백그라운드 스크립트
├── popup.html         # Side Panel UI
└── notion_face.PNG    # 아이콘
```

**특징:**
- Chrome 좌측에 넓은 패널 표시
- 노트 작성, 번역, 참고 자료에 유용
- 백그라운드 스크립트로 고급 기능 구현 가능

### 3. ExtensionKit 템플릿 (`popup-template/`)
```
popup-template/
├── manifest.json      # 상세 설정
├── index.html         # 메인 HTML
├── css/              # 스타일시트
├── icons/            # 아이콘들
├── images/           # 이미지
└── README.md         # 자세한 설명
```

**특징:**
- 프로페셔널한 구조
- 완성도 높은 템플릿
- 팀 프로젝트나 스토어 배포에 적합

---

## 🛠️ 시작하기 - 첫 번째 확장 프로그램 만들기

### Step 1: 프로젝트 설정

1. **Seed Files 다운로드**
   ```bash
   # 이 저장소를 클론하거나 다운로드하세요
   git clone https://github.com/goodlookingprokim/chrome_extension_seed.git
   cd chrome_extension_seed
   ```

2. **템플릿 선택**
   - 처음이라면 `SeedFiles/` 폴더를 사용하세요
   - 복사해서 새 폴더에 붙여넣기: `cp -r SeedFiles/ my-first-extension/`

3. **VS Code로 열기**
   ```bash
   cd my-first-extension
   code .
   ```

### Step 2: manifest.json 이해하기

`manifest.json`은 확장 프로그램의 **설계도**입니다.

```json
{
    "manifest_version": 3,
    "name": "나의 첫 확장 프로그램",
    "version": "1.0.0",
    "description": "4060 미들스쿨에서 만든 첫 번째 크롬 확장 프로그램",
    "action": {
        "default_popup": "popup.html"
    }
}
```

**중요 필드 설명:**
- `manifest_version: 3`: 최신 버전 사용
- `name`: 확장 프로그램 이름
- `action.default_popup`: 아이콘 클릭 시 보여줄 파일

### Step 3: popup.html 커스터마이징

기본 popup.html을 열어서 수정해보세요:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      width: 300px;
      padding: 20px;
      font-family: sans-serif;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>🎉 안녕하세요!</h1>
  <p>나의 첫 크롬 확장 프로그램</p>
  <button onclick="alert('잘했어요!')">클릭해보세요</button>
</body>
</html>
```

### Step 4: Chrome에 로드하기

1. Chrome 주소창에 `chrome://extensions/` 입력
2. 우측 상단 **개발자 모드** 켜기
3. **압축해제된 확장 프로그램 로드** 클릭
4. 프로젝트 폴더 선택
5. 확장 프로그램이 추가됨!

이제 Chrome 우측 상단에 아이콘이 나타나요. 클릭해서 테스트해보세요!

---

## 🎨 예제 프로젝트

### 예제 1: 간단한 인사 팝업

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      width: 350px;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>🎉 환영합니다!</h1>
  <p>4060 미들스쿨 크롬 확장 프로그램</p>
  <p id="time"></p>
  <button onclick="showAlert()">클릭하세요!</button>

  <script>
    function updateTime() {
      const now = new Date();
      document.getElementById('time').textContent = now.toLocaleTimeString('ko-KR');
    }
    updateTime();
    setInterval(updateTime, 1000);

    function showAlert() {
      alert('안녕하세요! 주니어 개발자님! 🚀');
    }
  </script>
</body>
</html>
```

### 예제 2: 클릭 카운터

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      width: 300px;
      padding: 20px;
      text-align: center;
    }
    #count {
      font-size: 48px;
      color: #667eea;
    }
  </style>
</head>
<body>
  <h2>🔢 클릭 카운터</h2>
  <div id="count">0</div>
  <button onclick="increase()">+1</button>
  <button onclick="decrease()">-1</button>
  <button onclick="reset()">초기화</button>

  <script>
    let count = 0;
    function updateDisplay() {
      document.getElementById('count').textContent = count;
    }
    function increase() { count++; updateDisplay(); }
    function decrease() { count--; updateDisplay(); }
    function reset() { count = 0; updateDisplay(); }
  </script>
</body>
</html>
```

---

## 🎯 다음 단계

1. **기본 팝업 마스터하기**
   - HTML/CSS로 UI 디자인
   - JavaScript로 상호작용 추가

2. **Side Panel 도전하기**
   - 더 넓은 작업 공간 활용
   - 백그라운드 스크립트 배우기

3. **고급 기능 추가**
   - Chrome Storage로 데이터 저장
   - 알림 기능 구현

4. **Chrome Web Store 배포**
   - 완성된 확장 프로그램 공유

---

## 💡 Pro Tips

- **작게 시작하세요**: 너무 욕심내지 말고 간단한 기능부터
- **자주 테스트하세요**: Chrome 확장 관리 페이지에서 새로고침
- **에러를 두려워하지 마세요**: 콘솔 로그로 디버깅
- **커뮤니티 활용**: 비슷한 프로젝트 코드 참고

---

## 📚 추가 자료

- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [JavaScript 기초](https://developer.mozilla.org/ko/docs/Web/JavaScript)

---

**🎉 여러분의 첫 크롬 확장 프로그램을 응원합니다!**  
**질문 있으면 언제든 물어보세요. 함께 성장해요! 🚀**

---

*이 가이드는 4060 미들스쿨 학생들을 위해 만들어졌습니다.*
