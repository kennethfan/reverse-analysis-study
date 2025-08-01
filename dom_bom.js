const {JSDOM} = require('jsdom');

// 方法1: 使用默认HTML创建完整环境
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const {window} = dom;
const {document} = window;

// 现在可以使用window和document对象了
console.log(document.querySelector('p').textContent); // 输出: "Hello world"

// 方法2: 自定义HTML内容
const customHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>测试页面</title>
    </head>
    <body>
      <div id="container">测试内容</div>
    </body>
  </html>
`;

const customDom = new JSDOM(customHtml, {
  // 可以配置其他选项，如URL、cookie等
  url: 'https://example.com/',
  referrer: 'https://example.org/',
  contentType: 'text/html',
  userAgent: 'jsdom',
  // 启用浏览器特性，如Fetch API
  resources: 'usable',
  runScripts: 'dangerously' // 允许执行页面中的脚本
});

const {window: customWindow} = customDom;
const {document: customDocument} = customWindow;

// 操作DOM
const container = customDocument.getElementById('container');
console.log(container.textContent); // 输出: "测试内容"

// 创建新元素
const newDiv = customDocument.createElement('div');
newDiv.textContent = '新内容';
customDocument.body.appendChild(newDiv);

console.log(customDocument.body.innerHTML);