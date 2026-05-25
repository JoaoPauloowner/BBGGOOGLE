import { ProblemCard, MethodStep, ProcessMovement, MetricData, TestimonialData } from "./types";

export const PROBLEMS_DATA: ProblemCard[] = [
  {
    id: "vazamento",
    title: "Vazamento Crítico de Leads",
    description: "Corretores sobrecarregados ignoram leads de média intenção e focam apenas no curtíssimo prazo, jogando metade do seu investimento em tráfego no lixo."
  },
  {
    id: "crm",
    title: "Falta de Automação de CRM",
    description: "Redigitar dados cadastrais e atualizar etapas manuais de vendas consome mais tempo do seu time do que ligar para clientes de alto potencial."
  },
  {
    id: "roi",
    title: "ROI sob Neblina Estrita",
    description: "Investimentos em portais e redes sem rastreabilidade de ponta a ponta. Você não sabe precisamente quais anúncios geraram escrituras assinadas."
  },
  {
    id: "sdrs",
    title: "SDRs Sobreatribulados",
    description: "Qualificação inicial lenta e sem critérios técnicos rigorosos. Quando o corretor liga para o lead, o interesse pelo imóvel já esfriou."
  },
  {
    id: "desalinhamento",
    title: "Desalinhamento Produtivo de Marketing e Vendas",
    description: "O Marketing comemora recordes de volume de contatos enquanto a equipe Comercial reclama da baixíssima qualidade dos prospectos. A verdade é um desperdício contínuo de recursos que mina o clima organizacional e estagna o crescimento corporativo."
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    stepNumber: "01",
    title: "MAPEAMOS",
    description: "Auditamos o funil, medimos o tempo de primeiro contato (speed-to-lead), identificamos descartes injustificados e revelamos onde o dinheiro está vazando."
  },
  {
    stepNumber: "02",
    title: "CONSTRUÍMOS",
    description: "Desenhamos as automações de triagem, reestruturamos as etapas de CRM, ativamos inteligência comercial e alinhamos o gatilho de passagem de bastão."
  },
  {
    stepNumber: "03",
    title: "TRANSFERIMOS",
    description: "Instalamos painéis de BI em tempo real, documentamos os playbooks de atendimento, capacitamos a liderança e entregamos a engrenagem operando."
  }
];

export const PROCESS_MOVEMENTS: ProcessMovement[] = [
  {
    number: "01",
    title: "Diagnóstico Estratégico",
    description: "Mapeamento a laser de toda a sua jornada comercial atual, revelando gargalos e ineficiências latentes em menos de 7 dias."
  },
  {
    number: "02",
    title: "Estruturação Comercial",
    description: "Definição de cargos, rotinas de vendas impecáveis, metas realistas semanais e mecanismos claros de incentivo do time."
  },
  {
    number: "03",
    title: "CRM e Automações",
    description: "Configuração dos funis, automações de distribuição imediata de leads e ferramentas modernas de produtividade sem atrito."
  },
  {
    number: "04",
    title: "Captação Qualificada",
    description: "Campanhas calibradas nas principais mídias, focando no perfil do comprador ideal (ICP) de médio e alto padrão."
  },
  {
    number: "05",
    title: "Treinamento do Time",
    description: "Workshops focados em abordagem de alta conversão, contorno de objeções imobiliárias clássicas e rotina dentro do CRM."
  },
  {
    number: "06",
    title: "Dashboard e Previsibilidade",
    description: "Integração completa de fontes de dados gerando inteligência preditiva para tomadas de decisão cirúrgicas por canais."
  }
];

export const METRICS_DATA: MetricData[] = [
  {
    id: "cac",
    label: "CAC (Custo de Aquisição)",
    value: "R$ 147,32",
    delta: "-28%",
    isPositive: true, // Delta decreasing CAC is positive!
    history: [210, 195, 180, 168, 155, 147]
  },
  {
    id: "conversion",
    label: "Taxa de Conversão Geral",
    value: "18,6%",
    delta: "+3,2%",
    isPositive: true,
    history: [15.1, 15.8, 16.5, 17.2, 18.0, 18.6]
  },
  {
    id: "revenue",
    label: "Receita Líquida Incremental",
    value: "R$ 2.450.000",
    delta: "+32%",
    isPositive: true,
    history: [1.8, 1.95, 2.1, 2.22, 2.35, 2.45]
  },
  {
    id: "pipeline",
    label: "Pipeline Comercial Ativo",
    value: "R$ 8.750.000",
    delta: "+24%",
    isPositive: true,
    history: [7.0, 7.3, 7.8, 8.1, 8.5, 8.75]
  },
  {
    id: "leads",
    label: "Leads Qualificados (MQLs)",
    value: "1.246",
    delta: "+18%",
    isPositive: true,
    history: [1020, 1070, 1110, 1150, 1200, 1246]
  }
];

export const TESTIMONIALS_DATA: TestimonialData[] = [
  {
    id: "renato",
    quote: "Nosso speed-to-lead despencou de 4 horas para apenas 3 minutos. Corretores passaram a falar com os clientes certos na hora certa. Resultado: batemos recorde de vendas no trimestre mais competitivo do ano.",
    author: "Renato Silveira",
    role: "Diretor Geral, Silveira Imóveis",
    initials: "RS"
  },
  {
    id: "patricia",
    quote: "Antes da metodologia da BBG, nosso comercial dependia da intuição individual. Hoje é um sistema milimetricamente calibrado. Tenho total clareza matemática do pipeline e estabilidade de fluxo de caixa para reinvestir.",
    author: "Patrícia Mendes",
    role: "VP de Operações, Lar Premium Imobiliária",
    initials: "PM"
  },
  {
    id: "thiago",
    quote: "Paramos de desperdiçar investimento. Identificamos com precisão quais canais de captação geram contratos assinados e focamos totalmente neles. A transparência de dados do dashboard é inovadora no mercado brasileiro.",
    author: "Thiago Vasconcellos",
    role: "Sócio-Diretor, Alpha Urban",
    initials: "TV"
  }
];
