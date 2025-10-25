// 확장프로그램 아이콘 클릭 시에만 사이드패널 열기
chrome.action.onClicked.addListener(async (tab) => {
    // 클릭된 탭에서 사이드패널 열기
    chrome.sidePanel.open({ tabId: tab.id });
}); 