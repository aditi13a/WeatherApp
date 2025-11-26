// Attach to global window so Blazor can find it
window.showToast = function (msg) {
  const div = document.createElement('div');
  div.textContent = msg;
  div.style.cssText =
    'position:fixed;bottom:20px;right:20px;padding:12px 18px;' +
    'background:#28a745;color:#fff;border-radius:8px;z-index:9999;' +
    'font-family:Segoe UI, sans-serif;box-shadow:0 4px 12px rgba(0,0,0,.4)';
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2500);
};
