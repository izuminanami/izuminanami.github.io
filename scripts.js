const worksData = {
  'believe': {
    title: 'Believe.', date: '2024/4/1 配信開始',
    description: [
      'ユニークでクリエイティブな写真を撮影できるカメラアプリです。',
      '集合写真や風景写真の撮影時に、記録のあり方を広げることを目的として開発しました。',
      'シャッターボタンの挙動や撮影の流れにこだわるため、AVFoundationを採用しています。'
    ],
    lang: 'Swift', lib: 'SwiftUI, AVFoundation', tool: 'Google AdMob',
    links: [{ url: 'https://apps.apple.com/app/id6480430036', img: 'images/appstore-badge.png', alt: 'Download on the App Store' }]
  },
  'oksh': {
    title: 'おかしゅー道場', date: '2024/6/8 配信開始',
    description: [
      '初心者から上級者まで楽しめる、あらゆるレベルに対応したドラム演奏アプリです。',
      'インフルエンサーのファンに向けて、打楽器の楽しさや魅力を伝えることを目的に開発しました。',
      'ビジュアルはBlenderで制作し、Firebaseによるタップ数ランキング機能を導入することで、継続的なユーザーの獲得を図りました。'
    ],
    lang: 'Swift', lib: 'SwiftUI, AVFoundation, SwiftGif, WidgetKit', tool: 'Blender, Firebase, Google AdMob',
    links: [{ url: 'https://apps.apple.com/app/id6504088528', img: 'images/appstore-badge.png', alt: 'Download on the App Store' }]
  },
  'es': {
    title: 'ESHub', date: '2025/4/30 配信開始',
    description: [
      '音楽イベントのエントリーシート提出・管理を効率化するアプリです。',
      'これまでExcelで行っていたエントリーシートの提出・管理をアプリ化することで、運営の負担軽減を目的に開発しました。',
      'GoogleAppsScriptを用いてデータを管理し、タイムテーブルもワンタップで自動作成できるように設計しています。'
    ],
    lang: 'Swift, Google Apps Script', lib: 'SwiftUI, StoreKit, Network, Alamofire, SwiftyJSON', tool: 'Git, Google AdMob',
    links: [{ url: 'https://apps.apple.com/app/id6745217075', img: 'images/appstore-badge.png', alt: 'Download on the App Store' }, { url: 'https://github.com/izuminanami/ESHub', img: 'images/github-badge.png', alt: 'View Source on GitHub' }]
  },
  'sas': {
    title: 'タイタニック号生存に関する解析', date: '2025/1/29 完成',
    description: [
      'SASを用いて、タイタニック号の生存率に関する統計的分析を行いました。',
      '人口統計学的および社会経済的要因が、タイタニック号における生存率にどのような影響を与えたかを明らかにすることを目的としました。',
      '要約統計量、度数表、ロジスティック回帰分析を用いてデータを解析しています。'
    ],
    lang: 'SAS',
    links: [{ url: 'docs/titanic-analysis-thesis.pdf', img: 'images/paper-badge.png', alt: 'View the Full Paper' }]
  }
};

const getEl = id => document.getElementById(id);

function openDynamicModal(workId) {
  const data = worksData[workId];
  if (!data) return;

  getEl('modal-title').textContent = data.title;
  getEl('modal-date').textContent = data.date;

  ['lang', 'lib', 'tool'].forEach(key => {
    const row = getEl(`modal-${key}-row`);
    if (data[key]) {
      getEl(`modal-${key}`).textContent = data[key];
      row.style.display = 'block';
    } else {
      row.style.display = 'none';
    }
  });

  getEl('modal-description').innerHTML = data.description.map(text => `<p>${text}</p>`).join('');
  
  getEl('modal-links').innerHTML = data.links.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer">
      <img src="${link.img}" alt="${link.alt}" class="store-button">
    </a>
  `).join('');

  const modal = getEl('dynamic-modal');
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);
}

function closeModal(id) {
  const modal = getEl(id);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  }
}

window.addEventListener('click', e => {
  if (e.target.id === 'dynamic-modal') closeModal('dynamic-modal');
});

window.addEventListener('load', () => {
  const loader = getEl('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = 0;
      setTimeout(() => loader.style.display = 'none', 500);
    }, 1500);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
});
