import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Github, 
  Download, 
  ExternalLink, 
  Star, 
  Users, 
  Code, 
  Zap,
  BarChart3,
  Settings,
  Database,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [stats, setStats] = useState({ stars: 0, forks: 0, downloads: 0 })

  useEffect(() => {
    // Simulate loading GitHub stats
    setTimeout(() => {
      setStats({ stars: 127, forks: 34, downloads: 2840 })
    }, 1000)
  }, [])

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "32 Ferramentas Integradas",
      description: "Conjunto completo de ferramentas para qualidade, processos e estatística",
      details: ["5 Porquês", "FMEA", "CEP", "Pareto", "VSM", "DMAIC", "Kaizen", "e mais..."]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Integração Externa",
      description: "Conectividade com Jamovi, FreeCAD e JaamSim para fluxos de Digital Twin",
      details: ["Jamovi - Análise Estatística", "FreeCAD - Modelagem 3D", "JaamSim - Simulação", "Templates de Exportação"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacidade Total",
      description: "Todos os dados são armazenados localmente no seu navegador",
      details: ["Sem servidores externos", "Dados 100% locais", "Código auditável", "Sem tracking"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "PWA Moderno",
      description: "Aplicação web progressiva que funciona offline",
      details: ["Funciona offline", "Instalável", "Responsivo", "Performance otimizada"]
    }
  ]

  const tools = [
    { name: "5 Porquês", category: "Análise de Problemas", color: "bg-blue-500" },
    { name: "FMEA", category: "Análise de Problemas", color: "bg-red-500" },
    { name: "CEP", category: "Qualidade", color: "bg-green-500" },
    { name: "Pareto", category: "Estatística", color: "bg-purple-500" },
    { name: "VSM", category: "Processos", color: "bg-orange-500" },
    { name: "DMAIC", category: "Processos", color: "bg-cyan-500" },
    { name: "Kaizen", category: "Melhoria", color: "bg-pink-500" },
    { name: "SWOT", category: "Estratégia", color: "bg-indigo-500" }
  ]

  const integrations = [
    {
      name: "Jamovi",
      description: "Software estatístico gratuito baseado no R",
      logo: "📊",
      capabilities: ["Análises descritivas", "Testes de hipóteses", "Regressão", "ANOVA"],
      website: "https://jamovi.org"
    },
    {
      name: "FreeCAD",
      description: "Software CAD 3D open source para modelagem paramétrica",
      logo: "🔧",
      capabilities: ["Modelagem 3D", "Simulação", "Desenho técnico", "Python API"],
      website: "https://freecad.org"
    },
    {
      name: "JaamSim",
      description: "Software open source de simulação discreta",
      logo: "⚙️",
      capabilities: ["Simulação de processos", "Análise de filas", "Otimização", "Visualização 3D"],
      website: "https://jaamsim.com"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">
              Open Source • Gratuito • Sem Limitações
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              EPQS
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Eng Process Quality and Statistics
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Sistema integrado de ferramentas para engenharia de processos, qualidade e estatística 
              com integração avançada para Jamovi, FreeCAD e JaamSim
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://github.com/marcos-garcon/epqs-integrated', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                Ver no GitHub
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
                onClick={() => window.open('#demo', '_self')}
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-bold text-blue-400">{stats.stars}</span>
                <span className="text-sm text-gray-400">GitHub Stars</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-bold text-green-400">{stats.forks}</span>
                <span className="text-sm text-gray-400">Forks</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-bold text-purple-400">{stats.downloads}</span>
                <span className="text-sm text-gray-400">Downloads</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-bold text-orange-400">32</span>
                <span className="text-sm text-gray-400">Ferramentas</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Características Principais</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tudo que você precisa para excelência em processos, qualidade e estatística
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => setActiveFeature(index)}
              >
                <Card className={`bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 ${
                  activeFeature === index ? 'border-blue-500 bg-blue-500/10' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {feature.details.slice(0, 3).map((detail, i) => (
                        <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Ferramentas Incluídas</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              32 ferramentas profissionais organizadas por categoria
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-8 h-8 ${tool.color} rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-sm text-white mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              + 24 ferramentas adicionais disponíveis
            </Badge>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Integrações Externas</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conecte-se com as melhores ferramentas open source para um fluxo completo de Digital Twin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{integration.logo}</span>
                      <div>
                        <CardTitle className="text-white">{integration.name}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {integration.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {integration.capabilities.map((capability, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                      onClick={() => window.open(integration.website, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visitar Site
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Comece Agora</h2>
            <p className="text-xl text-gray-400 mb-8">
              Baixe o projeto completo, faça fork no GitHub ou contribua para o desenvolvimento
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://github.com/marcos-garcon/epqs-integrated/archive/refs/heads/main.zip', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download ZIP
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
                onClick={() => window.open('https://github.com/marcos-garcon/epqs-integrated', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                Fork no GitHub
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
                onClick={() => window.open('https://github.com/marcos-garcon/epqs-integrated/blob/main/README.md', '_blank')}
              >
                <Code className="w-5 h-5 mr-2" />
                Documentação
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">EPQS</h3>
            <p className="text-gray-400 mb-4">
              Desenvolvido por <strong>Marcos Garçon</strong>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Licenciado sob MIT License • Open Source • Gratuito para uso comercial
            </p>
            
            <div className="flex justify-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://github.com/marcos-garcon', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://linkedin.com/in/marcos-garcon', '_blank')}
              >
                <Users className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
