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
        .tabs button, .top-screen-buttons button {
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
            background-color: #555;
        }
        .tabs button:hover, .top-screen-buttons button:hover {
            background-color: #555;
            transform: translateY(-2px);
        }
        .tab-content {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 0.3s, max-height 0.3s;
        }
        .tab-content.active {
            opacity: 1;
            max-height: 1000px;
        }
        .tab-content.hidden {
            display: none;
        }
        .tab-content img {
            margin: 10px 5px;
            display: inline-block;
            max-width: 30%;
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
            border-top: none;
            border-bottom: none;
            display: inline-block;
            padding-bottom: 5px;
            padding-top: 5px;
            width: 100px;
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
        .profile-header {
            text-align: left; /* 左寄せに変更 */
            margin-bottom: 20px;
            font-size: 1.5em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="profile-header">Profile</h1>
        <div class="profile">
            <h1>Izumi Nanami</h1>
        </div>

        <div class="tabs" id="tabs">
            <button onclick="showTab('believe')">Believe.</button>
            <button onclick="showTab('okashu')">おかしゅー道場</button>
            <button onclick="showTab('eshub')">ESHub</button>
        </div>

        <div id="believe" class="tab-content">
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
            <h1>おかしゅー道場</h1>
            <h2>概要</h2>
            <p><strong>おかしゅー道場</strong> はドラムの演奏を学ぶためのアプリです。初心者から上級者まで楽しめる様々なコンテンツを提供します。</p>
            <h2>スクリーンショット</h2>
            <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/3.png" alt="スクリーンショット" style="max-width: 60%; height: auto;">
            <a href="https://apps.apple.com/jp/app/%E3%81%8A%E3%81%8B%E3%81%97%E3%82%85%E3%83%BC%E9%81%93%E5%A0%B4/id6504088528">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150" style="display: block; margin: 20px auto;">
            </a>
        </div>

        <div id="eshub" class="tab-content">
            <h1>ESHub</h1>
            <h2>概要</h2>
            <p><strong>Believe.</strong> 真撮影を楽しむ音楽ライブでのエントリーシートの提出・管理を効率化するアプリです。出演者はスマホから簡単に提出でき、主催者はリアルタイムで内容を確認、タイムテーブルの作成、音響照明係への共有が可能です。</p>
            <h2>スクリーンショット</h2>
            <img src="https://github.com/user-attachments/assets/a024bc64-2f64-4161-bd2e-91ee197a055e" alt="スクリーンショット1">
            <img src="https://github.com/user-attachments/assets/3431679a-42f4-45ae-bb31-396d0f0c4a8a" alt="スクリーンショット2">  
            <a href="https://apps.apple.com/jp/app/eshub/id6745217075">
                <img src="https://raw.githubusercontent.com/izuminanami/izuminanami.github.io/main/AppStore.png" alt="App Store" width="150" style="display: block; margin: 20px auto;">
            </a>
        </div>
    </div>

    <script>
        function showTab(tabId) {
            const currentTab = document.querySelector('.tab-content.active');

            // トップ画面の表示/非表示
            if (tabId && currentTab && currentTab.id === tabId) {
                currentTab.classList.remove('active');
                document.querySelectorAll('.tabs button').forEach(button => {
                    button.classList.remove('active');
                });
            } else {
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.querySelectorAll('.tabs button').forEach(button => {
                    button.classList.remove('active');
                });

                if (tabId) {
                    document.getElementById(tabId).classList.add('active');
                    document.querySelector(`.tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
                }
            }
        }
        showTab(null);
    </script>
</body>
</html>
