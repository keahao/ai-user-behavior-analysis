import Layout from '../components/Layout';
import AIForm from '../components/AIForm';

export default function Home() {
  return (
    <Layout 
      title="user-behavior-analysis"
      description="洞察用户，优化体验"
    >
      {/* Hero区域 */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl shadow-xl p-10 mb-12">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">👤</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">洞察用户，优化体验</h2>
          <p className="text-xl text-gray-600 mb-6">漏斗分析、流失预警、行为路径</p>
          <div className="inline-block px-6 py-2 bg-white rounded-full shadow-md">
            <span className="text-violet-600 font-semibold">7天免费试用 · 无需信用卡</span>
          </div>
        </div>
        
        <AIForm 
          placeholder="输入您的需求，AI将为您生成专业内容..."
          buttonText="开始生成"
          btnColor="violet-600"
        />
      </div>

      {/* 功能展示 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">专业精准</h3>
          <p className="text-gray-600">基于AI大模型，由用户研究专家提供支持，生成高质量专业内容</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">快速高效</h3>
          <p className="text-gray-600">几秒钟内完成生成，大幅提升工作效率，节省宝贵时间</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
          <div class="text-4xl mb-4">💡</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">智能优化</h3>
          <p className="text-gray-600">持续学习优化，越用越智能，生成结果越来越好</p>
        </div>
      </div>

      {/* 用户评价 */}
      <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
        <h3 className="text-3xl font-bold text-center mb-8">💬 用户评价</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-violet-600 pl-4">
            <p className="text-gray-600 italic mb-2">"这个工具帮我节省了大量时间，生成的内容质量很高！"</p>
            <p className="font-semibold text-gray-800">- 张先生，自媒体创作者</p>
          </div>
          <div className="border-l-4 border-violet-600 pl-4">
            <p className="text-gray-600 italic mb-2">"AI生成的内容非常专业，完全超出了我的预期。"</p>
            <p className="font-semibold text-gray-800">- 李女士，企业培训师</p>
          </div>
          <div className="border-l-4 border-violet-600 pl-4">
            <p className="text-gray-600 italic mb-2">"简单易用，效果惊人，强烈推荐给所有创作者！"</p>
            <p className="font-semibold text-gray-800">- 王先生，内容创业者</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 rounded-2xl p-10">
        <h3 className="text-3xl font-bold text-center mb-8">❓ 常见问题</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">如何开始使用？</h4>
            <p className="text-gray-600">只需输入您的需求，点击"开始生成"按钮，AI将立即为您生成专业内容。</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">生成的内容质量如何？</h4>
            <p className="text-gray-600">我们的AI模型经过专业训练，生成的内容质量高、专业性强，可以直接使用。</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">有什么限制吗？</h4>
            <p className="text-gray-600">免费试用期间可以生成10次内容。付费后无限制使用。</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
