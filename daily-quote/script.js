// 명언 데이터
const quotes = [
  {
    text: "천 리 길도 한 걸음부터 시작된다.",
    author: "노자"
  },
  {
    text: "실패는 성공의 어머니다.",
    author: "토마스 에디슨"
  },
  {
    text: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "벤저민 프랭클린"
  },
  {
    text: "배움에는 끝이 없다.",
    author: "공자"
  },
  {
    text: "작은 기회로부터 종종 위대한 업적이 시작된다.",
    author: "데모스테네스"
  },
  {
    text: "성공은 매일 반복한 작은 노력의 합이다.",
    author: "로버트 콜리어"
  },
  {
    text: "시작이 반이다.",
    author: "아리스토텔레스"
  },
  {
    text: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테"
  }
];

// 랜덤 명언 표시 함수
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  document.getElementById('quote').textContent = `"${quote.text}"`;
  document.getElementById('author').textContent = `— ${quote.author}`;
}

// 페이지 로드 시 명언 표시
document.addEventListener('DOMContentLoaded', showRandomQuote);

// 버튼 클릭 시 새 명언 표시
document.getElementById('refreshBtn').addEventListener('click', showRandomQuote);
