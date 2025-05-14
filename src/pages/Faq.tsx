import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const Faq: React.FC = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([0]);
  
  const toggleQuestion = (index: number) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter(i => i !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };
  
  const faqItems = [
    {
      question: 'Posso declarar meu Imposto de Renda pelo celular?',
      answer: 'Sim, você pode declarar pelo aplicativo "Meu Imposto de Renda", disponível gratuitamente para Android e iOS. O app oferece praticamente todas as funcionalidades da versão para computador, mas pode ser menos prático para declarações mais complexas.'
    },
    {
      question: 'Atrasei minha declaração. O que devo fazer?',
      answer: 'Mesmo após o prazo, você deve enviar sua declaração o quanto antes para minimizar a multa por atraso, que é de 1% ao mês sobre o imposto devido (mínimo de R$ 165,74). A declaração atrasada deve ser preenchida normalmente, mas é preciso gerar e pagar a DARF da multa, que será calculada automaticamente pelo programa.'
    },
    {
      question: 'O que é "malha fina" e como evitá-la?',
      answer: 'A "malha fina" é o sistema de verificação da Receita Federal que identifica inconsistências nas declarações. Para evitá-la: confira todos os valores declarados; não omita rendimentos; verifique se seus informes batem com o que foi declarado por empregadores e bancos; e mantenha todos os documentos que comprovem suas deduções.'
    },
    {
      question: 'Quais despesas médicas são dedutíveis?',
      answer: 'São dedutíveis os pagamentos a médicos, dentistas, psicólogos, fisioterapeutas, terapeutas ocupacionais, fonoaudiólogos, hospitais, exames laboratoriais e planos de saúde. Medicamentos só são dedutíveis quando incluídos na conta hospitalar. Todos os pagamentos devem ser comprovados com recibos ou notas fiscais contendo CPF/CNPJ do beneficiário.'
    },
    {
      question: 'Preciso declarar pequenos investimentos como poupança?',
      answer: 'Sim, todos os investimentos (incluindo poupança) devem ser declarados, independentemente do valor. Eles entram na seção "Bens e Direitos", utilizando códigos específicos para cada tipo de aplicação. O valor a ser informado é o saldo em 31/12 do ano-calendário.'
    },
    {
      question: 'Como funciona a restituição do Imposto de Renda?',
      answer: 'A restituição ocorre quando o valor retido na fonte durante o ano anterior foi maior que o imposto devido calculado na declaração. O pagamento é feito em lotes, seguindo uma ordem de prioridade (idosos, pessoas com deficiência, professores, quem usou a declaração pré-preenchida e, por fim, os demais contribuintes). Dentro de cada grupo, a prioridade é para quem entregou a declaração primeiro.'
    },
    {
      question: 'Posso incluir despesas com academia ou nutricionista como dedução médica?',
      answer: 'Não. Despesas com academias, nutricionistas (exceto em casos específicos de tratamento de doenças), pilates, massoterapeutas, bem como medicamentos comprados em farmácias não são dedutíveis para fins de Imposto de Renda.'
    },
    {
      question: 'Como declarar criptomoedas no Imposto de Renda?',
      answer: 'Criptomoedas devem ser declaradas na seção "Bens e Direitos" usando o código 81 (outros bens e direitos). Informe a quantidade, descrição da moeda, empresa onde está custodiada (se for o caso) e o valor de aquisição em reais. Ganhos na venda acima de R$ 35.000,00 no mês estão sujeitos a tributação e devem ser declarados.'
    },
    {
      question: 'Se eu não tiver despesas para deduzir, posso optar pelo desconto simplificado?',
      answer: 'Sim. O desconto simplificado substitui todas as deduções legais por um desconto padrão de 20% dos rendimentos tributáveis, limitado a R$ 16.754,34 (valor para 2024). Esta opção é vantajosa para quem tem poucas despesas dedutíveis ou prefere não comprovar as despesas.'
    },
    {
      question: 'Preciso declarar auxílios do governo, como Bolsa Família ou Auxílio Emergencial?',
      answer: 'Em geral, benefícios sociais como Bolsa Família não precisam ser declarados. Quanto ao Auxílio Emergencial, as regras podem variar a cada ano. Na declaração de 2024 (ano-base 2023), se você recebeu auxílios do governo, consulte as instruções específicas da Receita Federal para aquele benefício.'
    }
  ];
  
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Perguntas Frequentes</h1>
          <p className="text-gray-600 mb-8">
            Respostas para as dúvidas mais comuns sobre a declaração do Imposto de Renda.
          </p>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className={`w-full text-left p-4 flex justify-between items-center transition-colors ${
                      openQuestions.includes(index) ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium text-gray-800 flex items-center gap-2">
                      <HelpCircle size={20} className={`${openQuestions.includes(index) ? 'text-blue-600' : 'text-gray-400'}`} />
                      {item.question}
                    </span>
                    {openQuestions.includes(index) ? (
                      <ChevronUp size={20} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500" />
                    )}
                  </button>
                  
                  {openQuestions.includes(index) && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
            <h3 className="font-bold text-xl text-gray-800 mb-2">Não encontrou sua dúvida?</h3>
            <p className="text-gray-700">
              Se você tem uma pergunta específica que não está respondida aqui, consulte:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <a 
                  href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf-imposto-de-renda-pessoa-fisica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Site oficial da Receita Federal
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">
                  Receitafone: 146
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">
                  Atendimento presencial em uma unidade da Receita Federal (com agendamento prévio)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;