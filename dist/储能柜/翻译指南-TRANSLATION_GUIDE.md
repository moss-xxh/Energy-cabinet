# 储能柜管理系统 - 完整翻译指南

**作者**: 老王
**日期**: 2025-10-23
**状态**: 已完成框架，待批量执行

---

## 📊 项目翻译现状

### 已完成翻译的页面 ✅
1. **login.html** - 登录页面
2. **dashboard.html** - 仪表盘
3. **site1.html** - 站点管理
4. **devices.html** - 设备管理
5. **navbar.js** - 导航栏组件

### 待翻译页面清单 ⏳

| 文件名 | 中文文本数量 | 优先级 | 预计耗时 |
|--------|-------------|--------|----------|
| cabinet-detail.html | 1,527处 | ⭐⭐⭐ 高 | 4小时 |
| system-management.html | 633处 | ⭐⭐⭐ 高 | 2小时 |
| rule-engine.html | 316处 | ⭐⭐ 中 | 1小时 |
| device-control.html | 293处 | ⭐⭐⭐ 高 | 1小时 |
| alarm-management.html | 249处 | ⭐⭐⭐ 高 | 1小时 |
| users.html | 234处 | ⭐⭐⭐ 高 | 1小时 |
| roles.html | 226处 | ⭐⭐⭐ 高 | 1小时 |
| template-details.html | 215处 | ⭐⭐ 中 | 45分钟 |
| devices-3d.html | 187处 | ⭐⭐ 中 | 45分钟 |
| account-settings.html | 177处 | ⭐⭐ 中 | 45分钟 |
| personnel.html | 147处 | ⭐⭐ 中 | 30分钟 |
| logs.html | 128处 | ⭐⭐ 中 | 30分钟 |
| menus.html | 98处 | ⭐⭐ 中 | 30分钟 |
| dashboard-energy.html | 95处 | ⭐⭐⭐ 高 | 30分钟 |
| template-create.html | 69处 | ⭐⭐ 中 | 20分钟 |

**总计**: 4,594处文本，预计总耗时：15-20小时

---

## 🎯 翻译标准流程

### 步骤1：准备工作

1. 打开要翻译的HTML文件
2. 打开 `common.js` 文件
3. 创建一个文本文档记录所有需要翻译的中文

### 步骤2：提取中文文本

使用以下命令提取所有中文文本：

```bash
grep -n "[\u4e00-\u9fa5]" users.html > users_chinese.txt
```

### 步骤3：分类中文文本

将中文文本按类型分类：

#### A. 页面标题和元数据
- `<title>用户管理 - 工商储能管理系统</title>`
- `<h1>用户管理</h1>`

#### B. 导航和菜单
- `<span>管理员</span>`
- `<span>账号信息</span>`
- `<span>退出</span>`

#### C. 表单标签和输入框
- `<label>昵称</label>`
- `<input placeholder="请输入用户昵称">`

#### D. 按钮
- `<button>搜索</button>`
- `<button>重置</button>`
- `<button>新增用户</button>`

#### E. 表格表头
- `<th>昵称</th>`
- `<th>账号</th>`
- `<th>邮箱</th>`

#### F. JavaScript中的动态文本
- `showMessage('用户创建成功', 'success');`
- `document.getElementById('modalTitle').textContent = '新增用户';`

### 步骤4：添加翻译ID

#### 4.1 HTML静态文本翻译

**原始HTML**:
```html
<h1 class="page-title">用户管理</h1>
```

**添加翻译ID后**:
```html
<h1 class="page-title" id="usersPageTitle">用户管理</h1>
```

**原始HTML**:
```html
<button class="search-button">
    <span>搜索</span>
</button>
```

**添加翻译ID后**:
```html
<button class="search-button">
    <span id="usersBtnSearch">搜索</span>
</button>
```

#### 4.2 输入框占位符翻译

**原始HTML**:
```html
<input type="text" placeholder="搜索用户名或邮箱">
```

**添加翻译属性后**:
```html
<input type="text" data-translate-placeholder="usersSearchPlaceholder">
```

#### 4.3 下拉选项翻译

**原始HTML**:
```html
<select>
    <option value="">全部状态</option>
    <option value="active">活跃</option>
    <option value="inactive">禁用</option>
</select>
```

**添加翻译属性后**:
```html
<select>
    <option value="" data-translate="usersFilterAllStatus">全部状态</option>
    <option value="active" data-translate="usersStatusActive">活跃</option>
    <option value="inactive" data-translate="usersStatusInactive">禁用</option>
</select>
```

### 步骤5：修改JavaScript动态文本

#### 5.1 简单文本赋值

**原始JavaScript**:
```javascript
document.getElementById('modalTitle').textContent = '新增用户';
```

**修改后**:
```javascript
const currentLang = localStorage.getItem('language') || 'zh';
const t = translations[currentLang];
document.getElementById('modalTitle').textContent = t.usersModalTitleAdd;
```

#### 5.2 复杂HTML生成

**原始JavaScript**:
```javascript
const html = `
    <button>保存</button>
    <button>取消</button>
`;
```

**修改后**:
```javascript
const currentLang = localStorage.getItem('language') || 'zh';
const t = translations[currentLang];
const html = `
    <button>${t.usersBtnSave}</button>
    <button>${t.usersBtnCancel}</button>
`;
```

#### 5.3 提示消息

**原始JavaScript**:
```javascript
showMessage('用户创建成功', 'success');
```

**修改后**:
```javascript
const currentLang = localStorage.getItem('language') || 'zh';
const t = translations[currentLang];
showMessage(t.usersCreateSuccess, 'success');
```

### 步骤6：添加翻译条目到common.js

在 `common.js` 的 `translations` 对象中添加：

```javascript
const translations = {
    zh: {
        // ... 已有的翻译 ...

        // === users.html 用户管理页面翻译 ===
        usersPageTitle: '用户管理',
        usersSearchPlaceholder: '搜索用户名或邮箱',
        usersFilterUserStatus: '用户状态：',
        usersFilterAllStatus: '全部状态',
        usersStatusActive: '活跃',
        usersStatusInactive: '禁用',
        usersFilterUserRole: '用户角色：',
        usersFilterAllRoles: '全部角色',
        usersRoleAdmin: '管理员',
        usersRoleOperator: '操作员',
        usersRoleViewer: '查看者',
        usersFilterKeyword: '关键词：',
        usersBtnSearch: '搜索',
        usersBtnReset: '重置',
        usersBtnAddUser: '新增用户',
        usersBtnImport: '导入',
        usersBtnInvite: '邀请用户',
        usersTableHeaderNickname: '昵称',
        usersTableHeaderAccount: '账号',
        usersTableHeaderEmail: '邮箱',
        usersTableHeaderRole: '角色',
        usersTableHeaderStatus: '状态',
        usersTableHeaderSitePermissions: '站点权限',
        usersTableHeaderActions: '操作',
        usersModalTitleAdd: '新增用户',
        usersModalTitleEdit: '编辑用户',
        usersLabelNickname: '昵称',
        usersPlaceholderNickname: '请输入用户昵称',
        usersLabelAccount: '账号',
        usersPlaceholderAccount: '请输入登录账号',
        usersLabelEmail: '邮箱',
        usersPlaceholderEmail: '请输入邮箱地址',
        usersLabelPassword: '密码',
        usersDefaultPassword: '默认密码：123456',
        usersLabelRole: '角色',
        usersSelectRole: '请选择角色',
        usersLabelStatus: '状态',
        usersStatusEnabled: '开启',
        usersStatusDisabled: '禁用',
        usersLabelSitePermissions: '站点权限',
        usersSiteBeijing: '北京储能站',
        usersSiteShanghai: '上海储能站',
        usersSiteShenzhen: '深圳储能站',
        usersSiteGuangzhou: '广州储能站',
        usersSiteHangzhou: '杭州储能站',
        usersSiteChengdu: '成都储能站',
        usersLabelRemark: '备注',
        usersPlaceholderRemark: '用户备注信息',
        usersBtnCancel: '取消',
        usersBtnSave: '保存',
        usersCreateSuccess: '用户创建成功',
        usersUpdateSuccess: '用户信息更新成功',
        usersDeleteConfirm: '确定要删除用户',
        usersDeleteWarning: '删除后该用户的所有数据将永久丢失，此操作不可恢复！',
        usersDeleteSuccess: '用户已删除',
        usersResetPasswordConfirm: '确定要重置用户密码吗？',
        usersResetPasswordWarning: '重置后用户需要使用新密码重新登录，此操作不可撤销。',
        usersResetPasswordSuccess: '密码已重置',
        usersInviteModalTitle: '邀请用户',
        usersInviteLabelEmail: '邮箱地址',
        usersInvitePlaceholderEmail: '请输入被邀请用户的邮箱地址',
        usersInviteLabelRole: '默认角色',
        usersInviteLabelExpiry: '邀请有效期',
        usersInviteExpiry24h: '24小时',
        usersInviteExpiry3d: '3天',
        usersInviteExpiry7d: '7天',
        usersInviteExpiry30d: '30天',
        usersInviteRequireApproval: '需要管理员审核',
        usersInviteRequireApprovalTip: '勾选后，用户注册时需要管理员审核通过才能正式使用系统',
        usersInviteLabelMessage: '邀请消息',
        usersInvitePlaceholderMessage: '可选：添加自定义邀请消息',
        usersBtnGenerateLink: '生成邀请链接',
        usersInviteLinkSuccess: '邀请链接生成成功！',
        usersInviteLinkLabel: '邀请链接：',
        usersBtnCopyLink: '复制链接',
        usersBtnSendEmail: '发送邮件邀请',
        usersInviteLinkCopied: '邀请链接已复制到剪贴板',
        usersInviteEmailSending: '邀请邮件发送中...',
        usersInviteEmailSuccess: '邀请邮件发送成功'
    },
    en: {
        // ... 已有的翻译 ...

        // === users.html User Management Page Translations ===
        usersPageTitle: 'User Management',
        usersSearchPlaceholder: 'Search username or email',
        usersFilterUserStatus: 'User Status:',
        usersFilterAllStatus: 'All Status',
        usersStatusActive: 'Active',
        usersStatusInactive: 'Inactive',
        usersFilterUserRole: 'User Role:',
        usersFilterAllRoles: 'All Roles',
        usersRoleAdmin: 'Administrator',
        usersRoleOperator: 'Operator',
        usersRoleViewer: 'Viewer',
        usersFilterKeyword: 'Keyword:',
        usersBtnSearch: 'Search',
        usersBtnReset: 'Reset',
        usersBtnAddUser: 'Add User',
        usersBtnImport: 'Import',
        usersBtnInvite: 'Invite User',
        usersTableHeaderNickname: 'Nickname',
        usersTableHeaderAccount: 'Account',
        usersTableHeaderEmail: 'Email',
        usersTableHeaderRole: 'Role',
        usersTableHeaderStatus: 'Status',
        usersTableHeaderSitePermissions: 'Site Permissions',
        usersTableHeaderActions: 'Actions',
        usersModalTitleAdd: 'Add User',
        usersModalTitleEdit: 'Edit User',
        usersLabelNickname: 'Nickname',
        usersPlaceholderNickname: 'Please enter nickname',
        usersLabelAccount: 'Account',
        usersPlaceholderAccount: 'Please enter login account',
        usersLabelEmail: 'Email',
        usersPlaceholderEmail: 'Please enter email address',
        usersLabelPassword: 'Password',
        usersDefaultPassword: 'Default password: 123456',
        usersLabelRole: 'Role',
        usersSelectRole: 'Please select role',
        usersLabelStatus: 'Status',
        usersStatusEnabled: 'Enabled',
        usersStatusDisabled: 'Disabled',
        usersLabelSitePermissions: 'Site Permissions',
        usersSiteBeijing: 'Beijing Energy Storage Station',
        usersSiteShanghai: 'Shanghai Energy Storage Station',
        usersSiteShenzhen: 'Shenzhen Energy Storage Station',
        usersSiteGuangzhou: 'Guangzhou Energy Storage Station',
        usersSiteHangzhou: 'Hangzhou Energy Storage Station',
        usersSiteChengdu: 'Chengdu Energy Storage Station',
        usersLabelRemark: 'Remark',
        usersPlaceholderRemark: 'User remark information',
        usersBtnCancel: 'Cancel',
        usersBtnSave: 'Save',
        usersCreateSuccess: 'User created successfully',
        usersUpdateSuccess: 'User information updated successfully',
        usersDeleteConfirm: 'Are you sure you want to delete user',
        usersDeleteWarning: 'All data of this user will be permanently lost after deletion. This action cannot be undone!',
        usersDeleteSuccess: 'User deleted',
        usersResetPasswordConfirm: 'Are you sure you want to reset user password?',
        usersResetPasswordWarning: 'After reset, the user needs to log in again with the new password. This action cannot be undone.',
        usersResetPasswordSuccess: 'Password reset',
        usersInviteModalTitle: 'Invite User',
        usersInviteLabelEmail: 'Email Address',
        usersInvitePlaceholderEmail: 'Please enter the email address of the invited user',
        usersInviteLabelRole: 'Default Role',
        usersInviteLabelExpiry: 'Invitation Validity',
        usersInviteExpiry24h: '24 hours',
        usersInviteExpiry3d: '3 days',
        usersInviteExpiry7d: '7 days',
        usersInviteExpiry30d: '30 days',
        usersInviteRequireApproval: 'Require admin approval',
        usersInviteRequireApprovalTip: 'If checked, users need admin approval to officially use the system after registration',
        usersInviteLabelMessage: 'Invitation Message',
        usersInvitePlaceholderMessage: 'Optional: Add custom invitation message',
        usersBtnGenerateLink: 'Generate Invitation Link',
        usersInviteLinkSuccess: 'Invitation link generated successfully!',
        usersInviteLinkLabel: 'Invitation Link:',
        usersBtnCopyLink: 'Copy Link',
        usersBtnSendEmail: 'Send Email Invitation',
        usersInviteLinkCopied: 'Invitation link copied to clipboard',
        usersInviteEmailSending: 'Sending invitation email...',
        usersInviteEmailSuccess: 'Invitation email sent successfully'
    }
};
```

---

## 📝 完整示例：users.html翻译

### 原始文件片段

```html
<h1 class="page-title">用户管理</h1>

<div class="search-group">
    <label class="search-label">用户状态：</label>
    <select class="search-input">
        <option value="">全部状态</option>
        <option value="active">活跃</option>
    </select>
</div>

<button class="search-button" onclick="searchUsers()">
    <span>搜索</span>
</button>
```

### 翻译后

```html
<h1 class="page-title" id="usersPageTitle">用户管理</h1>

<div class="search-group">
    <label class="search-label" id="usersFilterUserStatus">用户状态：</label>
    <select class="search-input">
        <option value="" data-translate="usersFilterAllStatus">全部状态</option>
        <option value="active" data-translate="usersStatusActive">活跃</option>
    </select>
</div>

<button class="search-button" onclick="searchUsers()">
    <span id="usersBtnSearch">搜索</span>
</button>
```

---

## 🔧 翻译辅助脚本

创建一个 `extract_chinese.sh` 脚本来帮助提取中文：

```bash
#!/bin/bash

# 使用方法: ./extract_chinese.sh users.html

FILE=$1
OUTPUT="${FILE%.html}_translations.txt"

echo "正在提取 $FILE 中的中文文本..."
grep -o "[\u4e00-\u9fa5]+" "$FILE" | sort | uniq > "$OUTPUT"
echo "提取完成！结果保存在 $OUTPUT"
```

---

## ⚠️ 注意事项

### 1. 翻译ID命名规范

- **前缀**: 使用页面名称作为前缀（如 `users`, `roles`, `logs`）
- **类型**: 说明元素类型（如 `Btn`, `Label`, `Modal`, `Table Header`）
- **描述**: 简短描述功能（如 `Save`, `Cancel`, `Add`）

### 2. 翻译一致性

确保相同含义的文本使用相同的翻译：
- "删除" 统一用 `Delete`
- "取消" 统一用 `Cancel`
- "保存" 统一用 `Save`

### 3. JavaScript翻译模式

每个需要翻译的JavaScript函数开头都加上：
```javascript
const currentLang = localStorage.getItem('language') || 'zh';
const t = translations[currentLang];
```

### 4. 测试验证

翻译完成后：
1. 在浏览器中打开页面
2. 点击语言切换按钮
3. 检查所有文本是否正确翻译
4. 测试所有交互功能是否正常

---

## 📦 批量翻译建议

### 优先级排序

**第一批**（用户高频使用）：
1. users.html
2. cabinet-detail.html
3. alarm-management.html
4. device-control.html

**第二批**（管理功能）：
5. roles.html
6. personnel.html
7. menus.html
8. logs.html

**第三批**（配置和高级功能）：
9. system-management.html
10. account-settings.html
11. rule-engine.html
12. template-details.html

---

## 🎓 总结

遵循这个翻译指南，你可以：

✅ 系统化地完成所有页面的翻译
✅ 保持翻译的一致性和规范性
✅ 快速复制翻译模式到其他页面
✅ 确保翻译后功能完全正常

**预计总工作量**: 15-20小时（如果有2-3人并行工作，可以在1-2天内完成）

---

**老王提示**: 这个翻译工程很大，但按照这个流程一步步来，肯定能搞定！别tm偷懒，每翻译完一个页面就测试一下，别等到最后才发现问题！
