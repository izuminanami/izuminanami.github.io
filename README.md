<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>アプリ紹介</title>
    <style>
        .tab-content {
            display: none;
        }
        .tab-content.active {
            display: block;
        }
        .tabs button {
            padding: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="tabs">
        <button onclick="showTab('believe')">Believe.</button>
        <button onclick="showTab('okashu')">おかしゅー道場</button>
    </div>

    <div id="believe" class="tab-content">
        <h1>Believe.</h1>
        <h2>概要</h2>
        <p><strong>Believe.</strong> はユニークな写真が撮影できるカメラアプリです。クリエイティブな写真撮影を楽しむための機能を搭載しています。</p>
        <h2>スクリーンショット</h2>
        <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/1.png" alt="スクリーンショット1" height="300">
        <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/2.png" alt="スクリーンショット2" height="300">
        <a href="https://apps.apple.com/jp/app/believe/id6480430036">
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150">
        </a>
    </div>

    <div id="okashu" class="tab-content">
        <h1>おかしゅー道場</h1>
        <h2>概要</h2>
        <p><strong>おかしゅー道場</strong> はドラムの演奏を学ぶためのアプリです。初心者から上級者まで楽しめる様々なコンテンツを提供します。</p>
        <h2>スクリーンショット</h2>
        <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/3.png" alt="スクリーンショット" width="300">
        <a href="https://apps.apple.com/jp/app/%E3%81%8A%E3%81%8B%E3%81%97%E3%82%85%E3%83%BC%E9%81%93%E5%A0%B4/id6504088528">
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150">
        </a>
    </div>

    <script>
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(function(tab) {
                tab.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        }
        // デフォルトでBelieveタブを表示
        showTab('believe');
    </script>
</body>
</html>
