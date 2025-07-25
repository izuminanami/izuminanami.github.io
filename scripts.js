function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';
    setTimeout(() => {
      modal.classList.add('show');
    }, 10); // アニメーションのためにわずかに遅延
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // CSSアニメーションと同じ秒数
  }
}

window.addEventListener('click', function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(function (modal) {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.transition = "opacity 0.5s ease";
      loader.style.opacity = 0;

      setTimeout(() => {
        loader.style.display = "none";
      }, 500); // フェードアウト時間
    }, 1500); // 表示させておく時間
  }
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
  });
});
