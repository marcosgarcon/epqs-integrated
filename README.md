# EPQS - Eng Process Quality and Statistics

Sistema integrado de ferramentas para engenharia de processos, qualidade e estatística com integração avançada para Jamovi, FreeCAD e JaamSim.

## 🚀 Características Principais

- **32 Ferramentas Integradas**: Conjunto completo de ferramentas para qualidade, processos e estatística
- **Integração Externa**: Conectividade com Jamovi, FreeCAD e JaamSim para fluxos de Digital Twin
- **Interface Moderna**: Design responsivo e intuitivo com tema escuro
- **PWA Ready**: Funciona como aplicação web progressiva
- **Open Source**: Código aberto e gratuito para uso comercial e pessoal

## 🛠️ Ferramentas Incluídas

### Análise de Problemas
- **5 Porquês**: Análise de causa raiz através de 5 perguntas
- **Relatório 8D**: Metodologia estruturada de resolução de problemas
- **Diagrama Ishikawa**: Diagrama de causa e efeito
- **FMEA**: Análise de modo e efeito de falha
- **MASP**: Método de análise e solução de problemas
- **Gap Analysis**: Análise de lacunas
- **Análise de Causa Raiz**: Investigação profunda de problemas

### Qualidade e Controle
- **Auditoria 5S**: Sistema de organização e limpeza
- **CEP e Capabilidade**: Controle estatístico de processo
- **MSA**: Análise do sistema de medição
- **APQP**: Planejamento avançado da qualidade do produto
- **PPAP**: Processo de aprovação de peça de produção

### Análise Estatística
- **Diagrama de Pareto**: Análise 80/20
- **Histograma**: Distribuição de frequências
- **Diagrama de Dispersão**: Análise de correlação entre variáveis
- **Folha de Verificação**: Coleta estruturada de dados

### Processos e Melhoria
- **Kaizen**: Melhoria contínua
- **DMAIC**: Metodologia Six Sigma
- **VSM**: Mapeamento do fluxo de valor
- **Mapeamento de Processos**: Visualização de fluxos de processo
- **Cronoanálise MTM**: Análise de tempos e métodos
- **SMED**: Redução de tempo de setup

### Gestão e Planejamento
- **Planejamento**: Gestão de projetos e planejamento
- **Treinamento**: Gestão de treinamentos
- **Manutenção**: Gestão de manutenção

### Análise Estratégica
- **Análise SWOT**: Análise estratégica
- **Matriz GUT**: Priorização por gravidade, urgência e tendência
- **Matriz Esforço x Impacto**: Priorização de ações

### Controle de Produção
- **Controle de Injeção**: Controle de processo de injeção plástica
- **Estamparia**: Controle de processo de estamparia
- **Controle de Sucata**: Gestão de perdas e refugos

### Relatórios e Dashboards
- **Relatório A3**: Relatório estruturado de melhoria
- **Dashboard de Indicadores**: Visualização de KPIs
- **Gerenciador de Dashboards**: Gestão de painéis

## 🔗 Integrações Externas

### Jamovi
- **Descrição**: Software estatístico gratuito baseado no R
- **Versão**: 2.3+
- **Capacidades**: 
  - Análises estatísticas descritivas
  - Testes de hipóteses
  - Regressão linear e logística
  - ANOVA e ANCOVA
  - Análise de confiabilidade
  - Gráficos estatísticos avançados
- **Formatos**: CSV, XLSX, SAV, ODS
- **Website**: [jamovi.org](https://jamovi.org)

### FreeCAD
- **Descrição**: Software CAD 3D open source para modelagem paramétrica
- **Versão**: 0.20+
- **Capacidades**:
  - Modelagem paramétrica 3D
  - Simulação de movimento
  - Análise de elementos finitos
  - Desenho técnico 2D
  - Renderização fotorrealística
  - Scripting em Python
- **Formatos**: STEP, IGES, STL, OBJ, DXF, SVG
- **Website**: [freecad.org](https://freecad.org)

### JaamSim
- **Descrição**: Software open source de simulação discreta
- **Versão**: 2023-06+
- **Capacidades**:
  - Simulação de eventos discretos
  - Modelagem de processos produtivos
  - Análise de filas e gargalos
  - Otimização de recursos
  - Visualização 3D de simulações
  - Relatórios estatísticos
- **Formatos**: CFG, CSV, XLSX, TXT
- **Website**: [jaamsim.com](https://jaamsim.com)

## 🔄 Fluxos de Trabalho Integrados

### Digital Twin Workflow
1. **FreeCAD**: Criar modelo 3D do equipamento/layout
2. **JaamSim**: Simular processo produtivo
3. **Jamovi**: Analisar resultados estatisticamente

### Quality Analysis Workflow
1. **EPQS**: Análise CEP dos dados de processo
2. **JaamSim**: Simular melhorias no processo
3. **Jamovi**: Comparar cenários estatisticamente

### Process Design Workflow
1. **EPQS**: Mapear estado atual e futuro (VSM)
2. **FreeCAD**: Projetar novo layout
3. **JaamSim**: Validar novo processo
4. **Jamovi**: Analisar retorno do investimento

## 🚀 Como Usar

### Instalação Local
1. Clone o repositório:
   ```bash
   git clone https://github.com/marcos-garcon/epqs-integrated.git
   ```

2. Abra o arquivo `index.html` em um navegador web moderno

3. Faça login com as credenciais padrão:
   - **Usuário**: admin
   - **Senha**: admin123

### Hospedagem Web
O sistema pode ser hospedado em qualquer servidor web estático:
- GitHub Pages
- Netlify
- Vercel
- Apache/Nginx

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Conexão com internet (para CDNs externos)

## 📊 Templates de Exportação

### Para Jamovi
- **Dados CEP**: Template para análise de controle estatístico
- **Dados de Qualidade**: Template para análise de indicadores de qualidade

### Para FreeCAD
- **Layout de Fábrica**: Script Python para modelagem de layout industrial

### Para JaamSim
- **Processo Produtivo**: Arquivo de configuração para simulação de processo

## 🛡️ Segurança e Privacidade

- **Dados Locais**: Todos os dados são armazenados localmente no navegador
- **Sem Servidor**: Não há transmissão de dados para servidores externos
- **Open Source**: Código auditável e transparente

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Marcos Garçon**
- GitHub: [@marcos-garcon](https://github.com/marcos-garcon)
- LinkedIn: [Marcos Garçon](https://linkedin.com/in/marcos-garcon)

## 🙏 Agradecimentos

- Comunidade open source do Jamovi
- Equipe de desenvolvimento do FreeCAD
- Desenvolvedores do JaamSim
- Comunidade de engenharia de qualidade

## 📈 Roadmap

- [ ] Integração com R/RStudio
- [ ] Conectividade com bancos de dados
- [ ] API REST para integrações
- [ ] Módulo de machine learning
- [ ] Aplicativo mobile
- [ ] Integração com ERP/MES

## 🐛 Reportar Bugs

Encontrou um bug? [Abra uma issue](https://github.com/marcos-garcon/epqs-integrated/issues) com:
- Descrição detalhada do problema
- Passos para reproduzir
- Screenshots (se aplicável)
- Informações do navegador/sistema

## 💡 Sugestões

Tem uma ideia para melhorar o sistema? [Abra uma issue](https://github.com/marcos-garcon/epqs-integrated/issues) com a tag "enhancement".

---

**EPQS** - Transformando dados em insights, processos em excelência.
