// 共享的头部脚本 - 语言切换和退出功能

// 当前语言设置
let currentLang = localStorage.getItem('language') || 'zh';

// 翻译文本
const translations = {
    zh: {
        confirmLogout: '退出登录',
        confirmLogoutMessage: '您确定要退出当前账户吗？',
        cancel: '取消',
        confirm: '确定'
    },
    en: {
        confirmLogout: 'Confirm Logout',
        confirmLogoutMessage: 'Are you sure you want to logout?',
        cancel: 'Cancel',
        confirm: 'Confirm'
    }
};

// 切换语言下拉菜单
function toggleLanguageDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('langDropdown');
    dropdown.classList.toggle('show');
}

// 更改语言
function changeLanguage(lang, event) {
    event.stopPropagation();
    
    // 更新选中状态
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
    });
    event.target.closest('.lang-option').classList.add('active');
    
    // 保存语言设置
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // 关闭下拉菜单
    document.getElementById('langDropdown').classList.remove('show');
    
    // 如果页面有语言切换功能，调用它
    if (typeof applyLanguage === 'function') {
        applyLanguage(lang);
    }
}

// 退出登录
function logout() {
    const t = translations[currentLang];
    
    // 创建自定义确认对话框
    const confirmDialog = document.createElement('div');
    confirmDialog.className = 'confirm-dialog-overlay';
    confirmDialog.innerHTML = `
        <div class="confirm-dialog">
            <div class="dialog-header">
                <div class="dialog-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5m-1 1V3m0 0h-4m4 0l-5 5" transform="rotate(-45 10 10)"/>
                    </svg>
                </div>
                <div class="dialog-content">
                    <h3 class="dialog-title">${t.confirmLogout}</h3>
                    <p class="dialog-message">${t.confirmLogoutMessage}</p>
                </div>
            </div>
            <div class="dialog-buttons">
                <button class="dialog-btn dialog-btn-cancel" onclick="closeConfirmDialog()">${t.cancel}</button>
                <button class="dialog-btn dialog-btn-confirm" onclick="confirmLogout()">${t.confirm}</button>
            </div>
        </div>
    `;
    document.body.appendChild(confirmDialog);
    
    // 添加显示动画
    setTimeout(() => {
        confirmDialog.classList.add('show');
    }, 10);
}

// 关闭确认对话框
function closeConfirmDialog() {
    const dialog = document.querySelector('.confirm-dialog-overlay');
    if (dialog) {
        dialog.classList.remove('show');
        setTimeout(() => {
            dialog.remove();
        }, 300);
    }
}

// 确认退出
function confirmLogout() {
    localStorage.removeItem('touchscreen_user');
    sessionStorage.removeItem('touchscreen_user');
    window.location.href = 'login.html';
}

// 初始化头部功能
function initializeHeader() {
    // 设置语言选项的激活状态
    document.querySelectorAll('.lang-option').forEach(option => {
        const isCurrentLang = option.getAttribute('onclick').includes(`'${currentLang}'`);
        if (isCurrentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', function(e) {
        const langSwitcher = document.querySelector('.lang-switcher');
        if (langSwitcher && !langSwitcher.contains(e.target)) {
            document.getElementById('langDropdown').classList.remove('show');
        }
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', initializeHeader);