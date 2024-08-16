<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>創作物紹介</title>
    <style>
        /* カスタムフォントや色の指定 */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        body {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #181818;
            color: #f1f1f1;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: auto;
            padding: 20px;
            background: #242424;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        h1, h2 {
            color: #ffcc00;
            margin-bottom: 10px;
        }
        h1 {
            font-size: 2.5em;
        }
        h2 {
            font-size: 1.8em;
        }
        .profile h2 {
            font-size: 2em;
        }
        p {
            line-height: 1.6;
            color: #ddd;
        }
        .tabs, .top-screen-buttons {
            display: flex;
            justify-content: space-around;
            border-bottom: 2px solid #444;
            margin-bottom: 20px;
        }
        .tabs button, .top-screen-buttons button, .back-button {
            padding: 12px 20px;
            cursor: pointer;
            background-color: #333;
            color: #ffcc00;
            border: 2px solid #ffcc00;
            border-radius: 50px;
            text-align: center;
            font-size: 1em;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .tabs button:hover, .top-screen-buttons button:hover, .back-button:hover {
            background-color: #ffcc00;
            color: #242424;
            transform: translateY(-3px);
        }
        .tabs button.active {
            background-color: #ffcc00;
            color: #242424;
        }
        .back-button {
            background-color: #ffcc00;
            color: #242424;
            display: block;
            margin: 20px auto;
            width: 50%;
            border-radius: 50px;
        }
        .tab-content {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 0.5s ease, max-height 0.5s ease;
        }
        .tab-content.active {
            opacity: 1;
            max-height: 1000px;
        }
        .tab-content img {
            margin: 10px;
            display: inline-block;
            max-width: 30%;
            height: auto;
            border-radius: 8px;
            transition: transform 0.3s ease;
        }
        .tab-content img:hover {
            transform: scale(1.05);
        }
        .profile {
            text-align: center;
            margin-bottom: 40px;
        }
        .profile img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }
        .photo-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 10px;
        }
        .photo-grid img {
            max-width: 32%;
            border-radius: 8px;
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
            <a href="https://apps.apple.com/jp/app/%E3%81%8A%E3%81%8B%E3%82%85%E3%83%BC%E9%81%93%E5%A0%B4/id6504088528">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150" style="display: block; margin: 20px auto;">
            </a>
        </div>

        <div id="daily-photo" class="tab-content">
            <button class="back-button" onclick="showTab(null)">プロフィールに戻る</button>
            <h1>Photograph</h1>
            <div class="photo-grid">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/tree.jpg" alt="tree">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/hato.jpg" alt="hato">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/hashi.jpg" alt="hashi">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/came.jpg" alt="came">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/toumoro.jpg" alt="toumoro">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/kago.jpg" alt="kago">
            </div>
        </div>
    </div>

    <script>
        function showTab(tabId) {
            // タブ切り替え
            document.getElementById('tabs').style.display = tabId ? 'flex' : 'none';
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelectorAll('.tabs button').forEach(button => {
                button.classList.remove('active');
            });
            if (tabId) {
                document.getElementById(tabId).classList.add('active');
                document.querySelector(`.tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
                document.getElementById('top-screen-buttons').style.display = 'none'; // トップ画面ボタンを隠す
            } else {
                document.getElementById('top-screen-buttons').style.display = 'flex'; // トップ画面ボタンを表示
            }
        }
        // デフォルトでトップ画面を表示
        showTab(null);
    </script>
</body>
</html>
