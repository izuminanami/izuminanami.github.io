<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>アプリ紹介</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .tabs {
            display: flex;
            border-bottom: 2px solid #ccc;
        }
        .tabs button {
            flex: 1;
            padding: 10px;
            cursor: pointer;
            background-color: #f1f1f1;
            border: none;
            border-bottom: 2px solid transparent;
            transition: background-color 0.3s, border-bottom 0.3s;
        }
        .tabs button.active {
            background-color: #fff;
            border-bottom: 2px solid #007BFF;
        }
        .tab-content {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 0.3s, max-height 0.3s;
        }
        .tab-content.active {
            opacity: 1;
            max-height: 1000px; /* 高さはコンテンツのサイズに合わせて調整 */
        }
        .tab-content.hidden {
            display: none;
        }
        .tab-content img {
            margin: 10px 0;
            display: block;
        }
        .photo-upload {
            margin-top: 20px;
        }
        .photo-upload input[type="file"] {
            display: none;
        }
        .photo-upload label {
            padding: 10px;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            border-radius: 5px;
        }
        .top-screen {
            display: block;
            text-align: center;
            margin: 20px;
        }
        .top-screen button {
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .top-screen button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="top-screen" id="top-screen">
        <h1>アプリ紹介</h1>
        <button onclick="showTab(null)">トップ画面</button>
    </div>

    <div class="tabs" id="tabs">
        <button onclick="showTab('believe')">Believe.</button>
        <button onclick="showTab('okashu')">おかしゅー道場</button>
        <button onclick="showTab('daily-photo')">日常の写真アップロード</button>
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

    <div id="daily-photo" class="tab-content">
        <h1>日常の写真アップロード</h1>
        <p>ここに日常の写真をアップロードできます。</p>
        <div class="photo-upload">
            <label for="daily-photo-upload">日常の写真をアップロード</label>
            <input type="file" id="daily-photo-upload" accept="image/*">
        </div>
    </div>

    <script>
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(function(tab) {
                tab.classList.remove('active');
                tab.classList.add('hidden');
            });
            document.querySelectorAll('.tabs button').forEach(function(button) {
                button.classList.remove('active');
            });
            if (tabId) {
                document.getElementById(tabId).classList.remove('hidden');
                document.getElementById(tabId).classList.add('active');
                document.querySelector(`.tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
                document.getElementById('top-screen').style.display = 'none';
                document.getElementById('tabs').style.display = 'flex';
            } else {
                document.getElementById('top-screen').style.display = 'block';
                document.getElementById('tabs').style.display = 'none';
            }
        }
        // デフォルトでトップ画面を表示
        showTab(null);
    </script>
</body>
</html>
