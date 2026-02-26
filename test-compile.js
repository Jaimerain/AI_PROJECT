const fs = require('fs');
const path = require('path');

// 检查所有必需的文件是否存在
const requiredFiles = [
  'src/App.tsx',
  'src/App.css',
  'src/index.tsx',
  'src/components/Sidebar.tsx',
  'src/components/Sidebar.css',
  'src/components/PrintCard.tsx',
  'src/components/PrintCard.css',
  'src/components/FeatureGrid.tsx',
  'src/components/FeatureGrid.css',
  'src/components/BottomActionBar.tsx',
  'src/components/BottomActionBar.css',
  'public/index.html',
  'package.json'
];

console.log('🔍 检查项目文件完整性...\n');

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? '✅' : '❌'} ${file}`);
  if (!exists) {
    allFilesExist = false;
  }
});

console.log('\n📊 检查结果:');
if (allFilesExist) {
  console.log('✅ 所有必需文件都存在');
} else {
  console.log('❌ 缺少必需文件');
}

// 检查package.json的基本配置
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  console.log('\n📦 package.json 配置检查:');
  console.log(`✅ 项目名称: ${packageJson.name}`);
  console.log(`✅ React版本: ${packageJson.dependencies?.react || '未找到'}`);
  console.log(`✅ TypeScript版本: ${packageJson.dependencies?.typescript || '未找到'}`);
  console.log(`✅ 启动脚本: ${packageJson.scripts?.start || '未找到'}`);
} catch (error) {
  console.log('❌ package.json 解析错误:', error.message);
}

console.log('\n🎯 代码检查完成!');
console.log('\n📝 下一步操作建议:');
console.log('1. 运行 npm install 安装依赖');
console.log('2. 运行 npm start 启动开发服务器');
console.log('3. 运行 npm run build 构建生产版本');
