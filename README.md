<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>創作物紹介</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e;
            color: #e0e0e0;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: auto;
            padding: 20px;
            background: #2c2c2c;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
        }
        .tabs, .top-screen-buttons {
            display: flex;
            border-bottom: 2px solid #3a3a3a;
            margin-bottom: 20px;
        }
        .tabs button, .top-screen-buttons button, .back-button {
            flex: 1;
            padding: 12px;
            cursor: pointer;
            background-color: #444;
            color: #e0e0e0;
            border: none;
            border-radius: 5px;
            text-align: center;
            font-size: 16px;
            transition: background-color 0.3s, transform 0.2s;
        }
        .tabs button.active, .top-screen-buttons button.active {
            background-color: #444; /* ボタンが一度クリックされた後も色が変わらないように */
        }
        .tabs button:hover, .top-screen-buttons button:hover, .back-button:hover {
            background-color: #555;
            transform: translateY(-2px);
        }
        .back-button {
            background-color: #666;
            margin: 10px 0;
        }
        .back-button:hover {
            background-color: #555;
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
            max-width: 35%; /* スクリーンショットをさらに小さく */
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
            background-color: #444;
            color: #e0e0e0;
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
        .profile p {
            margin: 10px 0;
            font-size: 1.2em;
            border-bottom: none; /* 下の線を無くす */
            border-top: none; /* 上の線を無くす */
            display: inline-block;
            padding-bottom: 5px;
            padding-top: 5px;
            width: 100px; /* 線の幅を調整 */
        }
        .photo-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .photo-grid img {
            max-width: 30%;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="top-screen" id="top-screen">
            <h1>プロフィール</h1>
            <div class="profile">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/Imymemine.png" alt="プロフィール画像">
                <h2>Izumi Nanami</h2>
                <p>天才大学生</p>
            </div>
            <h1>創作物紹介</h1>
            <div class="top-screen-buttons" id="top-screen-buttons">
                <button onclick="showTab('believe')">Believe.</button>
                <button onclick="showTab('okashu')">おかしゅー道場</button>
                <button onclick="showTab('daily-photo')">Photograph</button>
            </div>
        </div>

        <div class="tabs" id="tabs" style="display: none;">
            <button onclick="showTab('believe')">Believe.</button>
            <button onclick="showTab('okashu')">おかしゅー道場</button>
            <button onclick="showTab('daily-photo')">Photograph</button>
        </div>

        <div id="believe" class="tab-content">
            <button class="back-button" onclick="showTab(null)">プロフィールに戻る</button>
            <h1>Believe.</h1>
            <h2>概要</h2>
            <p><strong>Believe.</strong> はユニークな写真が撮影できるカメラアプリです。クリエイティブな写真撮影を楽しむための機能を搭載しています。</p>
            <h2>スクリーンショット</h2>
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/1.png" alt="スクリーンショット1">
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/2.png" alt="スクリーンショット2">
            <a href="https://apps.apple.com/jp/app/believe/id6480430036">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150" style="display: block; margin: 20px auto;">
            </a>
        </div>

        <div id="okashu" class="tab-content">
            <button class="back-button" onclick="showTab(null)">プロフィールに戻る</button>
            <h1>おかしゅー道場</h1>
            <h2>概要</h2>
            <p><strong>おかしゅー道場</strong> はドラムの演奏を学ぶためのアプリです。初心者から上級者まで楽しめる様々なコンテンツを提供します。</p>
            <h2>スクリーンショット</h2>
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/3.png" alt="スクリーンショット">
            <a href="https://apps.apple.com/jp/app/%E3%81%8A%E3%81%8B%E3%81%97%E3%82%85%E3%83%BC%E9%81%93%E5%A0%B4/id6504088528">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150" style="display: block; margin: 20px auto;">
            </a>
        </div>

        <div id="daily-photo" class="tab-content">
            <button class="back-button" onclick="showTab(null)">プロフィールに戻る</button>
            <h1>Photograph</h1>
            <div class="photo-grid">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/hashi.jpg" alt="hashi">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/hato.jpg" alt="hato">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/tree.jpg" alt="tree">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/came.jpg" alt="came">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/toumoro.jpg" alt="toumoro">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/kago.jpg" alt="kago">
            </div>
        </div>
    </div>

    <script>
        function showTab(tabId) {
            // トップ画面の表示/非表示
            document.getElementById('top-screen').style.display = tabId ? 'none' : 'block';
            document.getElementById('tabs').style.display = tabId ? 'flex' : 'none';

            // 各タブコンテンツの表示/非表示
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelectorAll('.tabs button').forEach(button => {
                button.classList.remove('active');
            });
            if (tabId) {
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
