import React, { useState } from 'react';
import { Download, FileText, ClipboardList, Send, CheckCircle2 } from 'lucide-react';

const PassoAPasso: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Baixe o Programa da Receita',
      icon: <Download className="h-8 w-8 text-blue-600" />,
      content: (
        <div>
          <p className="mb-4">
            O primeiro passo é baixar o programa oficial da Receita Federal para preenchimento da Declaração de Imposto de Renda Pessoa Física (DIRPF).
          </p>
          <div className="space-y-3 mb-6">
            <p className="font-medium">Você tem três opções:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Utilizar o programa para computador (Windows, Mac, Linux)</li>
              <li>Usar o aplicativo "Meu Imposto de Renda" (disponível para Android e iOS)</li>
              <li>Acessar a declaração online pelo Portal e-CAC da Receita Federal</li>
            </ol>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Recomendação:</span> O programa para computador oferece mais recursos e é mais estável para declarações complexas.
            </p>
          </div>
          <div className="mt-6">
            <a 
              href="https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/download/pgd/dirpf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
            >
              <Download size={18} />
              <span>Baixar o Programa IRPF 2024</span>
            </a>
          </div>
        </div>
      )
    },
    {
      title: 'Reúna seus Documentos',
      icon: <ClipboardList className="h-8 w-8 text-amber-600" />,
      content: (
        <div>
          <p className="mb-4">
            Antes de iniciar o preenchimento, é essencial organizar todos os documentos necessários:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Documentos pessoais</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• CPF do titular e dependentes</li>
                <li>• Título de eleitor</li>
                <li>• Comprovante de endereço</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Rendimentos</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Informe de rendimentos de salários</li>
                <li>• Informe de rendimentos bancários</li>
                <li>• Aluguéis recebidos</li>
                <li>• Aposentadorias e pensões</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Bens e Direitos</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Extratos bancários de 31/12</li>
                <li>• Documentos de imóveis e veículos</li>
                <li>• Informes de investimentos</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Despesas dedutíveis</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Recibos médicos e dentistas</li>
                <li>• Comprovantes de educação</li>
                <li>• Comprovantes de previdência</li>
                <li>• Doações realizadas</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
            <p className="text-gray-700">
              <span className="font-semibold">Dica:</span> Organize os documentos em pastas separadas por categorias para facilitar o preenchimento da declaração.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Preencha cada Quadro',
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      content: (
        <div>
          <p className="mb-4">
            Após iniciar o programa, preencha cada quadro com atenção. A seguir, detalhamos os principais:
          </p>
          <div className="space-y-6 mb-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Identificação do Contribuinte</h4>
              <p className="text-gray-700 text-sm mb-2">
                Preencha seus dados pessoais, endereço completo e ocupação principal.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Dependentes (se houver)</h4>
              <p className="text-gray-700 text-sm mb-2">
                Informe CPF, nome, data de nascimento e grau de parentesco de cada dependente.
              </p>
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Importante:</span> Verifique se seus dependentes não estão obrigados a declarar separadamente.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Rendimentos Tributáveis</h4>
              <p className="text-gray-700 text-sm mb-2">
                Declare salários, pró-labore, aluguéis recebidos, aposentadorias, etc.
              </p>
              <p className="text-xs text-gray-600">
                Use os informes fornecidos pela fonte pagadora.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Rendimentos Isentos e Não Tributáveis</h4>
              <p className="text-gray-700 text-sm mb-2">
                FGTS, seguro-desemprego, indenizações, poupança, etc.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Bens e Direitos</h4>
              <p className="text-gray-700 text-sm mb-2">
                Liste imóveis, veículos, conta corrente, investimentos, etc.
              </p>
              <p className="text-xs text-gray-600">
                Informe o valor de aquisição (não o valor de mercado atual).
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Dívidas e Ônus</h4>
              <p className="text-gray-700 text-sm mb-2">
                Financiamentos imobiliários, empréstimos, etc.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Pagamentos e Doações Efetuados</h4>
              <p className="text-gray-700 text-sm mb-2">
                Despesas médicas, educação, pensão alimentícia, doações, etc.
              </p>
              <p className="text-xs text-gray-600">
                Guarde os comprovantes por 5 anos.
              </p>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-gray-700">
              <span className="font-semibold">Dica:</span> Utilize a funcionalidade de verificação de pendências do programa antes de finalizar.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Envie e Guarde o Recibo',
      icon: <Send className="h-8 w-8 text-green-600" />,
      content: (
        <div>
          <p className="mb-4">
            Após preencher todos os dados e verificar se não há pendências, é hora de enviar sua declaração:
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">1. Verificação final</h4>
              <p className="text-gray-700 text-sm">
                Utilize a ferramenta de verificação de pendências do programa para identificar possíveis erros ou inconsistências.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">2. Impressão</h4>
              <p className="text-gray-700 text-sm">
                Imprima ou salve uma cópia completa da sua declaração para referência futura.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">3. Envio</h4>
              <p className="text-gray-700 text-sm">
                Clique no botão "Entregar Declaração" e aguarde a confirmação de recebimento.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">4. Recibo</h4>
              <p className="text-gray-700 text-sm">
                Salve e imprima o recibo de entrega, que contém o número do protocolo.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                <span className="font-semibold">Importante:</span> Este documento é sua prova de que a declaração foi entregue.
              </p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex gap-3">
              <CheckCircle2 className="flex-shrink-0 text-green-600 mt-1" size={24} />
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Após o envio</h4>
                <p className="text-gray-700 text-sm">
                  Guarde todos os recibos e documentos utilizados na declaração por pelo menos 5 anos.
                  Você pode acompanhar o processamento da sua declaração e a liberação de eventuais
                  restituições pelo site da Receita Federal.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Passo a Passo</h1>
          <p className="text-gray-600 mb-8">
            Siga este guia completo para preencher sua declaração de Imposto de Renda corretamente e sem complicações.
          </p>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            {/* Step Navigation Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                    activeStep === index 
                      ? 'bg-blue-50 border-2 border-blue-500' 
                      : 'bg-gray-50 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="mb-2">{step.icon}</div>
                  <span className={`text-sm text-center ${activeStep === index ? 'font-medium' : ''}`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            {/* Step Content */}
            <div className="py-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                    {activeStep + 1}
                  </div>
                </div>
                <span>{steps[activeStep].title}</span>
              </h3>
              
              <div className="space-y-4">
                {steps[activeStep].content}
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className={`px-4 py-2 rounded ${
                  activeStep === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Anterior
              </button>
              
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className={`px-4 py-2 rounded ${
                  activeStep === steps.length - 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Próximo
              </button>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
            <h3 className="font-bold text-xl text-gray-800 mb-2">Precisa de ajuda adicional?</h3>
            <p className="text-gray-700">
              Para casos mais complexos ou dúvidas específicas, consulte um contador especializado em IRPF 
              ou acesse os canais oficiais da Receita Federal:
            </p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>• Receitafone: 146</li>
              <li>• Chat da Receita no Portal e-CAC</li>
              <li>• Atendimento presencial nas unidades da Receita Federal (agendamento prévio)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassoAPasso;