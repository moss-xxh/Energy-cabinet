// 公用导航栏组件
// 艹！统一所有页面的导航栏，让老王省点心！

// 创建顶部导航栏
function createTopNavbar() {
    return `
    <header class="header">
        <div class="header-left">
            <button class="menu-trigger" onclick="toggleSidebar()">
                <i class="fas fa-bars"></i>
            </button>
            <div class="logo">
                <img src="logo.png" alt="AlwaysControl Technology" />
            </div>
        </div>

        <div class="header-right">
            <button class="theme-btn" onclick="toggleTheme()" title="切换主题" style="display: none; background: none; border: none; cursor: pointer; padding: 0; margin: 0 15px;">
                <i class="fas fa-moon" id="headerThemeIcon" style="font-size: 20px; color: #000000;"></i>
            </button>
            <div class="language-selector-wrapper" style="position: relative; margin: 0 15px;">
                <i class="fas fa-globe lang-icon" onclick="toggleLanguageDropdown(event)" title="切换语言" style="font-size: 20px; color: #000000; cursor: pointer;"></i>
                <div id="languageDropdownMenu" style="display: none; position: absolute; top: 100%; right: 0; margin-top: 8px; background: white; border: 1px solid #e5e5e5; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); min-width: 150px; z-index: 1000;">
                    <div class="language-option" onclick="selectLanguage('zh')" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: background 0.2s;">
                        <span>🇨🇳</span>
                        <span>中文</span>
                    </div>
                    <div class="language-option" onclick="selectLanguage('en')" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: background 0.2s;">
                        <span>🇺🇸</span>
                        <span>English</span>
                    </div>
                </div>
            </div>
            <a href="alarm-management.html" class="notification-badge" style="text-decoration: none; margin: 0 15px;">
                <i class="fas fa-bell" style="font-size: 20px; color: #000000;"></i>
            </a>
            <div class="user-menu" onclick="toggleUserDropdown(event)">
                <div class="avatar">A</div>
                <span class="user-name" id="userName" data-translate="userName" style="display: none;">管理员</span>
                <div class="user-dropdown" id="userDropdown">
                    <a href="account-settings.html" class="dropdown-item">
                        <i class="fas fa-user-cog"></i>
                        <span id="accountSettings" data-translate="accountSettings">账号设置</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item" onclick="confirmLogout(event)">
                        <i class="fas fa-sign-out-alt"></i>
                        <span id="logoutBtn" data-translate="logoutBtn">退出登录</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    `;
}

// 创建侧边栏
function createSidebar(currentPage = 'dashboard') {
    return `
    <nav class="sidebar" id="sidebar">
        <div class="menu">
            <a href="dashboard.html" class="menu-item ${currentPage === 'dashboard' ? 'active' : ''}" data-menu="dashboard">
                <span style="font-size: 18px; margin-right: 12px;">📊</span>
                <span id="menuDashboard" data-translate="menuDashboard">仪表盘</span>
            </a>
            <a href="site1.html" class="menu-item ${currentPage === 'site1' ? 'active' : ''}" data-menu="site1">
                <span style="font-size: 18px; margin-right: 12px;">🏢</span>
                <span id="menuSites" data-translate="menuSites">站点管理</span>
            </a>
            <a href="devices.html" class="menu-item ${currentPage === 'devices' ? 'active' : ''}" data-menu="devices">
                <span style="font-size: 18px; margin-right: 12px;">⚙️</span>
                <span id="menuDevices" data-translate="menuDevices">设备管理</span>
            </a>
            <a href="alarm-management.html" class="menu-item ${currentPage === 'alarm-management' ? 'active' : ''}" data-menu="alarm-management">
                <span style="font-size: 18px; margin-right: 12px;">🔔</span>
                <span id="menuAlarms" data-translate="menuAlarms">告警管理</span>
            </a>
            <div class="menu-item-group">
                <a href="javascript:void(0)" class="menu-item" data-menu="settings" onclick="toggleSubmenu(this)">
                    <span style="font-size: 18px; margin-right: 12px;">⚙️</span>
                    <span id="menuSettings" data-translate="menuSettings">系统管理</span>
                    <i class="fas fa-chevron-down" style="margin-left: auto; font-size: 12px;"></i>
                </a>
                <div class="submenu" style="display: none;">
                    <a href="menus.html" class="menu-item submenu-item ${currentPage === 'menus' ? 'active' : ''}">
                        <span style="font-size: 16px; margin-right: 10px;">📋</span>
                        <span id="menuMenus" data-translate="menuMenus">菜单管理</span>
                    </a>
                    <a href="roles.html" class="menu-item submenu-item ${currentPage === 'roles' ? 'active' : ''}">
                        <span style="font-size: 16px; margin-right: 10px;">👥</span>
                        <span id="menuRoles" data-translate="menuRoles">角色管理</span>
                    </a>
                    <a href="personnel.html" class="menu-item submenu-item ${currentPage === 'personnel' ? 'active' : ''}">
                        <span style="font-size: 16px; margin-right: 10px;">👤</span>
                        <span id="menuPersonnel" data-translate="menuPersonnel">人员管理</span>
                    </a>
                    <a href="logs.html" class="menu-item submenu-item ${currentPage === 'logs' ? 'active' : ''}">
                        <span style="font-size: 16px; margin-right: 10px;">📄</span>
                        <span id="menuLogs" data-translate="menuLogs">日志管理</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- 移动端遮罩层 -->
    <div class="mobile-overlay hidden" id="mobileOverlay" onclick="closeMobileSidebar()"></div>

    <!-- 退出登录确认弹窗 -->
    <div id="logoutModal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); z-index: 10000; align-items: center; justify-content: center;">
        <div style="background: white; border-radius: 12px; padding: 24px; max-width: 400px; text-align: center;">
            <div style="width: 60px; height: 60px; background: #fee2e2; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                <i class="fas fa-sign-out-alt" style="font-size: 24px; color: #ef4444;"></i>
            </div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #1e293b;" id="logoutModalTitle" data-translate="logoutModalTitle">确认退出</h3>
            <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748b;" id="logoutModalText" data-translate="logoutModalText">您确定要退出登录吗？</p>
            <div style="display: flex; gap: 12px;">
                <button class="btn" onclick="closeLogoutModal()" style="flex: 1; height: 40px;"><span id="logoutModalBtnCancel" data-translate="logoutModalBtnCancel">取消</span></button>
                <button class="btn" onclick="logout()" style="flex: 1; height: 40px; background: #ef4444; color: white;"><span id="logoutModalBtnConfirm" data-translate="logoutModalBtnConfirm">确认退出</span></button>
            </div>
        </div>
    </div>
    `;
}

// 切换子菜单
function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    const icon = element.querySelector('.fa-chevron-down');

    if (submenu.style.display === 'none') {
        submenu.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        submenu.style.display = 'none';
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}

// 初始化导航栏
function initNavbar(currentPage = 'dashboard') {
    // 检查是否已经有导航栏容器
    let navContainer = document.getElementById('navbar-container');
    if (!navContainer) {
        navContainer = document.createElement('div');
        navContainer.id = 'navbar-container';
        document.body.insertBefore(navContainer, document.body.firstChild);
    }

    // 插入导航栏HTML
    navContainer.innerHTML = createTopNavbar() + createSidebar(currentPage);

    // 如果当前页面在子菜单中，自动展开子菜单
    const submenuPages = ['menus', 'roles', 'personnel', 'logs'];
    if (submenuPages.includes(currentPage)) {
        const settingsMenuItem = document.querySelector('[data-menu="settings"]');
        if (settingsMenuItem) {
            const submenu = settingsMenuItem.nextElementSibling;
            const icon = settingsMenuItem.querySelector('.fa-chevron-down');
            if (submenu) submenu.style.display = 'block';
            if (icon) icon.style.transform = 'rotate(180deg)';
        }
    }
}

// 自动初始化（如果页面设置了data-page属性）
document.addEventListener('DOMContentLoaded', function() {
    const pageAttr = document.body.getAttribute('data-page');
    if (pageAttr) {
        initNavbar(pageAttr);
    }
});

// 添加语言下拉菜单的hover样式
const style = document.createElement('style');
style.textContent = `
    .language-option:hover {
        background: #f5f5f5 !important;
    }
    .language-option.active {
        background: #e3f2fd !important;
        color: #1976d2 !important;
    }
`;
document.head.appendChild(style);
