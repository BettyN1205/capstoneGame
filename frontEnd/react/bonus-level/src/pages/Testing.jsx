// 在 Testing.js 或 Testing.jsx 中
import React from 'react';

function Testing({ navigateTo }) {
  // 在 Testing 组件中使用 navigateTo 函数进行导航
  return (
    <div>
      <h1>Testing Component</h1>
      <button onClick={() => navigateTo('/')}>Go to Home</button>
    </div>
  );
}

export default Testing;
