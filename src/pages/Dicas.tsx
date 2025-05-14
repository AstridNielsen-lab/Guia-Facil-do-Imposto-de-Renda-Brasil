import React from 'react';
import { Lightbulb, PiggyBank, Receipt, BadgeDollarSign, HeartPulse, GraduationCap, Baby } from 'lucide-react';

const Dicas: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dicas para Economizar</h1>
          <p className="text-gray-600 mb-8">
            Saiba como maximizar sua restituição e reduzir o imposto devido com deduções legais permitidas.
          </p>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-8 w-8 text-amber-500 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-800">Conheça as Deduções Permitidas</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Deduções são valores que podem ser subtraídos da base de cálculo do imposto, 
              reduzindo o valor final a pagar ou aumentando sua restituição. Confira as principais:
            </p>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-start gap-3">
                  <HeartPulse className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Despesas Médicas</h3>
                    <p className="text-gray-700 mb-2">
                      Gastos com médicos, dentistas, psicólogos, fisioterapeutas, hospitais, 
                      exames laboratoriais, planos de saúde e medicamentos (quando incluídos na conta hospitalar).
                    </p>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-semibold">Valor:</span> 100% dedutível (sem limite)
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-semibold">Documentos:</span> Notas fiscais ou recibos com CPF do 
                        paciente e do profissional/instituição.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Despesas com Educação</h3>
                    <p className="text-gray-700 mb-2">
                      Mensalidades de escolas, faculdades, cursos de graduação, pós-graduação, 
                      técnicos e profissionalizantes (próprias e de dependentes).
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-semibold">Valor:</span> Até R$ 3.561,50 por pessoa (em 2024)
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-semibold">Não entram:</span> Material escolar, cursos de idiomas, 
                        esportes, artes, transporte e alimentação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-start gap-3">
                  <Baby className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Dependentes</h3>
                    <p className="text-gray-700 mb-2">
                      Cônjuge, filhos até 21 anos (ou até 24 se estiverem estudando), pais, avós 
                      e outros parentes que dependam financeiramente de você.
                    </p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-semibold">Valor:</span> R$ 2.275,08 por dependente (em 2024)
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-semibold">Importante:</span> Informe o CPF de todos os dependentes, 
                        independentemente da idade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-start gap-3">
                  <Receipt className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Pensão Alimentícia</h3>
                    <p className="text-gray-700 mb-2">
                      Valores pagos como pensão alimentícia estabelecida por decisão judicial ou 
                      acordo homologado judicialmente.
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-semibold">Valor:</span> 100% dedutível (sem limite)
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-semibold">Documentos:</span> Comprovantes de pagamento e 
                        decisão judicial que determinou a pensão.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3">
                  <PiggyBank className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Previdência Privada (PGBL)</h3>
                    <p className="text-gray-700 mb-2">
                      Contribuições para planos de previdência privada na modalidade PGBL.
                    </p>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-semibold">Valor:</span> Até 12% da renda tributável anual
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-semibold">Atenção:</span> Planos VGBL não são dedutíveis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <BadgeDollarSign className="h-8 w-8 text-green-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-800">Exemplo de Cálculo</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              Veja como as deduções impactam o cálculo do Imposto de Renda:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border border-gray-200">Item</th>
                    <th className="p-3 border border-gray-200 text-right">Sem Deduções</th>
                    <th className="p-3 border border-gray-200 text-right">Com Deduções</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">Rendimentos tributáveis</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 90.000,00</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 90.000,00</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Deduções:</td>
                    <td className="p-3 border border-gray-200 text-right">-</td>
                    <td className="p-3 border border-gray-200 text-right">-</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 pl-6">Despesas médicas</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 0,00</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 8.500,00</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 pl-6">Educação (2 dependentes)</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 0,00</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 7.123,00</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 pl-6">Dependentes (2)</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 0,00</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 4.550,16</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 pl-6">Previdência privada</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 0,00</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 5.400,00</td>
                  </tr>
                  <tr className="bg-gray-50 font-medium">
                    <td className="p-3 border border-gray-200">Base de cálculo</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 90.000,00</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 64.426,84</td>
                  </tr>
                  <tr className="bg-green-50 font-semibold">
                    <td className="p-3 border border-gray-200">Imposto devido</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 16.605,33</td>
                    <td className="p-3 border border-gray-200 text-right">R$ 9.747,70</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="p-3 border border-gray-200">Economia de imposto</td>
                    <td className="p-3 border border-gray-200 text-right">-</td>
                    <td className="p-3 border border-gray-200 text-right text-green-700">R$ 6.857,63</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              * Este é um exemplo ilustrativo. O cálculo real depende da situação específica de cada contribuinte.
            </p>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
            <h3 className="font-bold text-xl text-gray-800 mb-2">Dicas adicionais</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-700">
                  Sempre guarde recibos e comprovantes de despesas dedutíveis por, no mínimo, 5 anos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-700">
                  Faça simulações com diferentes combinações de dependentes para identificar a mais vantajosa.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-700">
                  Contribuições para previdência (PGBL) até o final do ano-calendário podem ser deduzidas.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-700">
                  Avalie a possibilidade de fazer doações incentivadas para fundos da criança e do idoso, 
                  que podem ser abatidas diretamente do imposto devido (até 6%).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dicas;