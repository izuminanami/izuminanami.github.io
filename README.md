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
            background-color: #f2f2f2;
            color: #333;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: auto;
            padding: 20px;
            background: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .tabs, .top-screen-buttons {
            display: flex;
            border-bottom: 2px solid #dcdcdc;
            margin-bottom: 20px;
        }
        .tabs button, .top-screen-buttons button, .back-button {
            flex: 1;
            padding: 12px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            text-align: center;
            font-size: 16px;
            transition: background-color 0.3s, transform 0.2s;
        }
        .tabs button.active, .top-screen-buttons button.active {
            background-color: #0056b3;
        }
        .tabs button:hover, .top-screen-buttons button:hover, .back-button:hover {
            background-color: #0056b3;
            transform: translateY(-2px);
        }
        .back-button {
            background-color: #6c757d;
            margin: 10px 0;
        }
        .back-button:hover {
            background-color: #5a6268;
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
            margin: 10px 5px;
            display: inline-block;
            max-width: 48%;
            height: auto;
        }
        .photo-upload {
            margin-top: 20px;
        }
        .photo-upload input[type="file"] {
            display: none;
        }
        .photo-upload label {
            padding: 12px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            display: inline-block;
            text-align: center;
        }
        .profile {
            text-align: center;
            margin-bottom: 20px;
        }
        .profile img {
            border-radius: 50%;
            width: 120px;
            height: 120px;
            object-fit: cover;
        }
        .profile h2 {
            margin: 10px 0;
            font-size: 1.5em;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="top-screen" id="top-screen">
            <div class="profile">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/3.png" alt="プロフィール画像">
                <h2>ユーザー名</h2>
                <p>プロフィールの説明がここに入ります。簡単な自己紹介やスキルなどを記載できます。</p>
            </div>
            <h1>アプリ紹介</h1>
            <div class="top-screen-buttons" id="top-screen-buttons">
                <button onclick="showTab('believe')">Believe.</button>
                <button onclick="showTab('okashu')">おかしゅー道場</button>
                <button onclick="showTab('daily-photo')">日常の写真アップロード</button>
            </div>
        </div>

        <div class="tabs" id="tabs" style="display: none;">
            <button onclick="showTab('believe')">Believe.</button>
            <button onclick="showTab('okashu')">おかしゅー道場</button>
            <button onclick="showTab('daily-photo')">日常の写真アップロード</button>
        </div>

        <div id="believe" class="tab-content">
            <button class="back-button" onclick="showTab(null)">トップに戻る</button>
            <h1>Believe.</h1>
            <h2>概要</h2>
            <p><strong>Believe.</strong> はユニークな写真が撮影できるカメラアプリです。クリエイティブな写真撮影を楽しむための機能を搭載しています。</p>
            <h2>スクリーンショット</h2>
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/1.png" alt="スクリーンショット1">
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/2.png" alt="スクリーンショット2">
            <a href="https://apps.apple.com/jp/app/believe/id6480430036">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150">
            </a>
        </div>

        <div id="okashu" class="tab-content">
            <button class="back-button" onclick="showTab(null)">トップに戻る</button>
            <h1>おかしゅー道場</h1>
            <h2>概要</h2>
            <p><strong>おかしゅー道場</strong> はドラムの演奏を学ぶためのアプリです。初心者から上級者まで楽しめる様々なコンテンツを提供します。</p>
            <h2>スクリーンショット</h2>
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/3.png" alt="スクリーンショット">
            <a href="https://apps.apple.com/jp/app/%E3%81%8A%E3%81%8B%E3%81%97%E3%82%85%E3%83%BC%E9%81%93%E5%A0%B4/id6504088528">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150">
            </a>
        </div>

        <div id="daily-photo" class="tab-content">
            <button class="back-button" onclick="showTab(null)">トップに戻る</button>
            <h1>日常の写真アップロード</h1>
            <p>ここに日常の写真をアップロードできます。</p>
            <div class="photo-upload">
                <label for="daily-photo-upload">日常の写真をアップロード</label>
                <input type="file" id="daily-photo-upload" accept="image/*">
            </div>
        </div>
    </div>

    <script>
        function showTab(tabId) {
            // トップ画面の表示/非表示
            document.getElementById('top-screen').style.display = tabId ? 'none' : 'block';
            document.getElementById('tabs').style.display = tabId ? 'flex' : 'none';
            
            // コンテンツの表示
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
                document.getElementById('top-screen-buttons').style.display = 'none'; // ボタンを隠す
            } else {
                document.getElementById('top-screen-buttons').style.display = 'flex'; // ボタンを再表示
            }
        }
        // デフォルトでトップ画面を表示
        showTab(null);
    </script>
</body>
</html>
