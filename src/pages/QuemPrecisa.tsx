import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, Calculator } from 'lucide-react';

const QuemPrecisa: React.FC = () => {
  const criterios = [
    {
      text: 'Recebeu rendimentos tributáveis acima de R$ 30.639,90 em 2023',
      detalhes: 'Inclui salários, aluguéis, pensões, entre outros rendimentos.'
    },
    {
      text: 'Recebeu rendimentos isentos, não tributáveis ou tributados exclusivamente na fonte acima de R$ 200.000,00',
      detalhes: 'Inclui FGTS, indenizações trabalhistas, poupança, etc.'
    },
    {
      text: 'Obteve ganho de capital na alienação de bens ou direitos sujeitos à incidência do imposto',
      detalhes: 'Por exemplo, lucro na venda de imóveis, ações, criptomoedas, etc.'
    },
    {
      text: 'Realizou operações em bolsas de valores, de mercadorias, de futuros e assemelhadas',
      detalhes: 'Operações que, somadas, foram superiores a R$ 40.000,00 ou com apuração de ganhos sujeitos ao IR.'
    },
    {
      text: 'Teve a posse ou propriedade de bens ou direitos, inclusive terra nua, acima de R$ 800.000,00',
      detalhes: 'Considera-se o valor total de seus bens em 31 de dezembro de 2023.'
    },
    {
      text: 'Passou à condição de residente no Brasil em qualquer mês de 2023',
      detalhes: 'Estrangeiros que se tornaram residentes fiscais no Brasil devem declarar.'
    },
    {
      text: 'Vendeu imóvel residencial e comprou outro num prazo de 180 dias, optando pela isenção do IR sobre o ganho de capital',
      detalhes: 'Mesmo com isenção, a operação precisa ser declarada.'
    },
    {
      text: 'Exerceu atividade rural com receita bruta superior a R$ 153.199,50',
      detalhes: 'Ou pretenda compensar prejuízos de anos-calendário anteriores ou do próprio ano-calendário de 2023.'
    }
  ];

  const dispensados = [
    'Quem não se enquadra em nenhuma das condições acima',
    'Consta como dependente na declaração de outra pessoa',
    'Teve seus bens e direitos declarados pelo cônjuge ou companheiro, quando este se enquadra nas condições de obrigatoriedade'
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Quem Precisa Declarar?</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <p className="text-gray-700 mb-6">
              Está em dúvida se você precisa declarar o Imposto de Renda em 2024? 
              Confira abaixo os critérios estabelecidos pela Receita Federal para o ano-calendário 2023.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-600" size={24} />
              <span>Critérios para Declaração Obrigatória</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              {criterios.map((criterio, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 text-green-600 mt-0.5">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{criterio.text}</p>
                      <p className="text-sm text-gray-600 mt-1">{criterio.detalhes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="text-amber-500" size={24} />
              <span>Quem está dispensado da declaração?</span>
            </h2>
            
            <ul className="space-y-2 mb-6">
              {dispensados.map((item, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <ArrowRight className="flex-shrink-0 text-amber-500 mt-1" size={16} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500 mb-8">
            <div className="flex items-start gap-3">
              <Calculator className="flex-shrink-0 text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Em caso de dúvida</h3>
                <p className="text-gray-700">
                  É recomendável consultar um contador ou profissional especializado em casos específicos. 
                  Em geral, é melhor declarar quando houver dúvida, evitando problemas futuros com a 
                  Receita Federal.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">O que acontece se eu não declarar?</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">Multa:</span> Caso você seja obrigado a declarar e não o faça 
                no prazo, a multa é de 1% ao mês sobre o imposto devido, com valor mínimo de R$ 165,74.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Pendências:</span> Seu CPF pode ficar irregular, impedindo a 
                emissão de certidões negativas, abertura de contas, obtenção de empréstimos, etc.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Fiscalização:</span> Você pode entrar na "malha fina" e ser 
                fiscalizado pela Receita Federal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemPrecisa;