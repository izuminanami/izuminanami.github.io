<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>創作物紹介</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background-color: #121212;
      color: #f0f0f0;
      line-height: 1.6;
      font-size: 16px;
    }

    .container {
      width: 90%;
      max-width: 1000px;
      margin: 20px auto;
      padding: 20px;
      background: #1f1f1f;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }

    h1, h2 {
      color: #ffffff;
    }

    .profile-header {
      font-size: 1.8em;
      font-weight: bold;
      margin-bottom: 10px;
      color: #cccccc;
    }

    .profile {
      text-align: center;
      margin-bottom: 30px;
    }

    .profile h1 {
      font-size: 2em;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .tabs {
      display: flex;
      gap: 10px;
      margin: 30px 0 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .tabs button {
      flex: 1;
      min-width: 120px;
      background: #2a2a2a;
      color: #f0f0f0;
      border: none;
      padding: 12px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1em;
      transition: 0.2s ease;
    }

    .tabs button:hover {
      background: #3a3a3a;
      transform: translateY(-2px);
    }

    .tabs button.active {
      background: #555;
    }

    .tab-content {
      display: none;
      animation: fadeIn 0.4s ease;
    }

    .tab-content.active {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .tab-content img.screenshot {
      width: 30%;
      max-width: 30%;
      height: auto;
      margin: 10px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      display: inline-block;
    }

    .tab-content img.landscape {
      height: 180px;
      width: auto;
      margin: 10px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      display: inline-block;
    }

    a img {
      transition: transform 0.3s ease;
    }

    a img:hover {
      transform: scale(1.05);
    }

    .appstore-badge {
      display: block;
      margin: 20px auto;
      width: 120px;
    }

    @media (max-width: 600px) {
      body {
        font-size: 14px;
      }

      .tabs {
        flex-direction: column;
      }

      .tabs button {
        width: 100%;
        margin-bottom: 10px;
      }

      .profile h1 {
        font-size: 1.6em;
      }

      h2 {
        font-size: 1.2em;
      }

      .tab-content img.screenshot,
      .tab-content img.landscape {
        width: 100% !important;
        height: auto !important;
        margin: 10px 0;
      }

      .appstore-badge {
        width: 100px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="profile-header">Profile</div>
    <div class="profile">
      <h1>Nanami Izumi</h1>
 　　　　<p>Languages: Swift, SAS, Python</p>
       <p>4000+ app installs | 50th in App Store (Music)</p>
       <p><strong>Location history:</strong><br>
       2003–2007: Machida, Tokyo<br>
       2007–2022: Chiba, Chiba<br>
       2022–now: Sumida, Tokyo</p>
    </div>

    <div class="tabs">
      <button onclick="showTab('believe')">Believe.</button>
      <button onclick="showTab('okashu')">おかしゅー道場</button>
      <button onclick="showTab('eshub')">ESHub</button>
    </div>

    <div id="believe" class="tab-content">
      <h1>Believe.</h1>
      <h2>概要</h2>
      <p><strong>Believe.</strong> はユニークな写真が撮影できるカメラアプリです。クリエイティブな写真撮影を楽しむための機能を搭載しています。</p>
      <h2>スクリーンショット</h2>
      <img class="screenshot" src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/1.png" alt="スクリーンショット1">
      <img class="screenshot" src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/2.png" alt="スクリーンショット2">
      <a href="https://apps.apple.com/jp/app/believe/id6480430036">
        <img class="appstore-badge" src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store">
      </a>
    </div>

    <div id="okashu" class="tab-content">
      <h1>おかしゅー道場</h1>
      <h2>概要</h2>
      <p><strong>おかしゅー道場</strong> はドラムの演奏を学ぶためのアプリです。初心者から上級者まで楽しめる様々なコンテンツを提供します。</p>
      <h2>スクリーンショット</h2>
      <img class="landscape" src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/3.png" alt="スクリーンショット">
      <a href="https://apps.apple.com/jp/app/%E3%81%8A%E3%81%8B%E3%81%97%E3%82%85%E3%83%BC%E9%81%93%E5%A0%B4/id6504088528">
        <img class="appstore-badge" src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store">
      </a>
    </div>

    <div id="eshub" class="tab-content">
      <h1>ESHub</h1>
      <h2>概要</h2>
      <p><strong>ESHub</strong> は音楽ライブでのエントリーシートの提出・管理を効率化するアプリです。出演者はスマホから簡単に提出でき、主催者はリアルタイムで内容を確認、タイムテーブルの作成、音響照明係への共有が可能です。</p>
      <h2>スクリーンショット</h2>
      <img class="screenshot" src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/4.png" alt="スクリーンショット1">
      <img class="screenshot" src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/5.png" alt="スクリーンショット2">
      <a href="https://apps.apple.com/jp/app/eshub/id6745217075">
        <img class="appstore-badge" src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store">
      </a>
    </div>
  </div>

  <script>
    function showTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
      if (tabId) {
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`.tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
      }
    }
    showTab('null'); // 初期画面
  </script>
</body>
</html>
