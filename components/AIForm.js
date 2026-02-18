import React, { useState } from 'react';

export default function AIForm({ placeholder, buttonText, btnColor }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      setResult('生成失败，请重试');
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setCharCount(e.target.value.length);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring- focus:border-transparent transition"
            disabled={loading}
          />
          <div className="absolute bottom-3 right-3 text-sm text-gray-400">
            {charCount} / 2000
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className={`w-full py-4 bg- text-white text-lg font-bold rounded-xl hover:opacity-90 disabled:bg-gray-400 transition transform hover:scale-105 disabled:transform-none ${loading ? 'animate-pulse' : ''}`}
        >
          {loading ? '🤖 AI生成中...' : buttonText}
        </button>
      </form>
      
      {result && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-xl text-gray-800">✨ 生成结果</h3>
            <div className="flex gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
              >
                📋 复制
              </button>
              <button
                onClick={() => {
                  const blob = new Blob([result], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'ai-generated-content.txt';
                  a.click();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
              >
                💾 保存
              </button>
            </div>
          </div>
          <div className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-gray-700 leading-relaxed">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}
