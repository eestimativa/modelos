import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, AlertTriangle, Settings, Clock, DollarSign, Users, Target, Puzzle } from 'lucide-react'
import './App.css'

// Importando as imagens dos infográficos
import horasGerenciadasImg from './assets/horas_gerenciadas.png'
import catalogoServicosImg from './assets/catalogo_servicos.png'
import precoFechadoImg from './assets/preco_fechado.png'
import outsourcingMetasImg from './assets/outsourcing_metas.png'
import decisionFlowImg from './assets/decision_flow.png'

function App() {
  const [activeModel, setActiveModel] = useState(null)

  const models = [
    {
      id: 1,
      title: "Horas Gerenciadas",
      subtitle: "Time & Material com governança colaborativa",
      image: horasGerenciadasImg,
      pros: ["Flexível, adaptável às mudanças"],
      cons: ["Exige gestão ativa do cliente"],
      ideal: "escopo variável, desenvolvimento ágil, fases iniciais",
      color: "from-green-400 to-cyan-400"
    },
    {
      id: 2,
      title: "Catálogo de Serviços com Métricas",
      subtitle: "Pacotes padronizados com SLA e Pontos de Função Simples (PFS)",
      image: catalogoServicosImg,
      pros: ["Contratação por entregas funcionais", "Previsibilidade de custos"],
      cons: [],
      ideal: "sustentação evolutiva, demandas recorrentes e controláveis",
      metrics: "PFS, tempo por item, custo por entrega",
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      title: "Preço Fechado com Escopo Definido",
      subtitle: "Projetos com início, meio e fim claramente delineados",
      image: precoFechadoImg,
      pros: ["Custos e prazos fixos"],
      cons: ["Pouca flexibilidade"],
      ideal: "escopo maduro, regras bem documentadas",
      metrics: "Pode usar Pontos de Função como base de estimativa",
      color: "from-blue-400 to-purple-400"
    },
    {
      id: 4,
      title: "Outsourcing com Metas de Desempenho",
      subtitle: "Squads dedicados com indicadores de produtividade",
      image: outsourcingMetasImg,
      pros: ["Alinhado a resultados de negócio", "Integração com times internos"],
      cons: [],
      ideal: "evolução contínua, grandes sistemas, times ágeis maduros",
      metrics: "PFs/mês, bugs por entrega, velocidade, aderência a roadmap",
      color: "from-green-400 to-blue-400"
    }
  ]

  const comparisonData = [
    { model: "Horas Gerenciadas", flexibility: "Alta", costControl: "Média", indicatedFor: "Escopo variável, squads ágeis" },
    { model: "Catálogo com PFS", flexibility: "Média", costControl: "Alta", indicatedFor: "Sustentação, entregas rápidas" },
    { model: "Preço Fechado", flexibility: "Baixa", costControl: "Alta", indicatedFor: "Escopo fechado e previsível" },
    { model: "Outsourcing com Metas", flexibility: "Alta", costControl: "Variável", indicatedFor: "Produto evolutivo, integração" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="absolute inset-0 bg-slate-900/10 opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Modelos de Contratação
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              para Desenvolvimento de Software
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Escolhendo o modelo certo conforme escopo, risco técnico e objetivos de negócio
            </p>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Introdução
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>Diferentes modelos oferecem níveis variados de controle, flexibilidade e risco.</p>
              <p className="font-semibold text-white">A escolha deve considerar:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Clareza do escopo funcional</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>Risco técnico</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Frequência das demandas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Capacidade de gestão interna</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Foco em resultado ou esforço</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Principais Modelos de Contratação
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {models.map((model) => (
              <Card 
                key={model.id} 
                className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  activeModel === model.id ? 'ring-2 ring-green-400' : ''
                }`}
                onClick={() => setActiveModel(activeModel === model.id ? null : model.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className={`text-2xl bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                        {model.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 mt-2">
                        {model.subtitle}
                      </CardDescription>
                    </div>
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-700">
                      <img 
                        src={model.image} 
                        alt={model.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {model.pros.map((pro, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-900/30 text-green-300 border-green-700">
                        ✅ {pro}
                      </Badge>
                    ))}
                    {model.cons.map((con, index) => (
                      <Badge key={index} variant="secondary" className="bg-yellow-900/30 text-yellow-300 border-yellow-700">
                        ⚠️ {con}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="text-cyan-400 font-semibold">🔧 Ideal para:</span> {model.ideal}
                    </p>
                    {model.metrics && (
                      <p className="text-sm text-slate-400">
                        <span className="text-purple-400 font-semibold">📏 Métricas:</span> {model.metrics}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Cases */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-400 flex items-center gap-2">
                <Puzzle className="w-6 h-6" />
                Casos de Migração Tecnológica
              </CardTitle>
              <CardDescription className="text-slate-400">
                Escopo conhecido + alto risco técnico
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                  🚧 Desafios:
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Arquitetura legada</li>
                  <li>• Decisões técnicas críticas</li>
                </ul>
              </div>
              
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                  🔄 Recomendações:
                </h4>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Fase 1:</strong> Diagnóstico por horas gerenciadas</p>
                  <p><strong>Fase 2:</strong> Execução por entregas (PF ou metas)</p>
                  <p className="text-sm text-purple-400">📏 Usar PF com fator de complexidade técnica</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Decision Flow */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Fluxo de Decisão
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex justify-center">
                  <iframe
                    src="/decision_tree.html"
                    title="Fluxograma de Decisão Interativo"
                    className="w-full h-[950px] rounded-lg border-none"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Comparativo dos Modelos
          </h2>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-900/50">
                      <tr>
                        <th className="text-left p-4 text-green-400 font-semibold">Modelo</th>
                        <th className="text-left p-4 text-cyan-400 font-semibold">Flexibilidade</th>
                        <th className="text-left p-4 text-purple-400 font-semibold">Controle de Custo</th>
                        <th className="text-left p-4 text-yellow-400 font-semibold">Indicado Para</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-t border-slate-700 hover:bg-slate-800/30 transition-colors">
                          <td className="p-4 font-medium text-white">{row.model}</td>
                          <td className="p-4 text-slate-300">{row.flexibility}</td>
                          <td className="p-4 text-slate-300">{row.costControl}</td>
                          <td className="p-4 text-slate-300">{row.indicatedFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Conclusões
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Não há modelo único ideal: escolha deve considerar escopo, risco técnico e metas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Métricas como Ponto de Função Simples agregam transparência e controle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Migração tecnológica exige modelos híbridos com adaptação progressiva.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Governança é crítica em qualquer modelo escolhido.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Próximos Passos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 font-bold">1</div>
                    <span>Avaliar maturidade dos requisitos e arquitetura legada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                    <span>Definir critérios de medição (PF, SLAs, KPIs)</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 font-bold">3</div>
                    <span>Escolher modelo adequado ou combinar modelos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 font-bold">4</div>
                    <span>Estruturar governança para acompanhar entregas e riscos</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            Baseado na identidade visual de{' '}
            <a href="https://tech.fattocs.com" className="text-green-400 hover:text-green-300 transition-colors">
              tech.fattocs.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

