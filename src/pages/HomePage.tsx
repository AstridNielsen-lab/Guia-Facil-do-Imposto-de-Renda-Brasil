import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, CheckSquare, FileQuestion } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Guia Fácil do Imposto de Renda 2024
              </h1>
              <p className="text-xl opacity-90 mb-6">
                Aprenda a declarar seu IRPF sem complicação – Passo a Passo Atualizado!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/passo-a-passo"
                  className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg 
                             font-medium transition-colors flex items-center gap-2"
                >
                  <FileText size={20} />
                  <span>Comece Aqui</span>
                </Link>
                <Link
                  to="/quem-precisa"
                  className="bg-transparent border-2 border-white hover:bg-white/10 
                             px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <CheckSquare size={20} />
                  <span>Quem Precisa Declarar?</span>
                </Link>
              </div>
            </div>
            <div className="md:w-5/12 flex justify-center">
              <Calendar className="w-48 h-48 md:w-64 md:h-64 text-white opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Por que declarar o Imposto de Renda é importante?
            </h2>
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm mb-6">
              <p className="text-gray-700 mb-4">
                Declarar o Imposto de Renda não é apenas uma obrigação legal — é também uma 
                oportunidade de receber restituições, regularizar sua situação fiscal e evitar 
                problemas futuros com a Receita Federal.
              </p>
              <p className="text-gray-700">
                Anualmente, milhões de brasileiros enfrentam dúvidas e dificuldades neste processo. 
                Nosso objetivo é tornar essa jornada mais simples e confiável para você.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
                O que você vai encontrar neste guia
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Quem deve declarar',
                    description: 'Descubra se você está obrigado a declarar o IR em 2024',
                    icon: <CheckSquare className="h-10 w-10 text-green-600" />,
                    link: '/quem-precisa'
                  },
                  {
                    title: 'Passo a Passo',
                    description: 'Guia completo para preencher sua declaração sem erros',
                    icon: <FileText className="h-10 w-10 text-blue-600" />,
                    link: '/passo-a-passo'
                  },
                  {
                    title: 'Dúvidas Frequentes',
                    description: 'Respostas para as perguntas mais comuns sobre o IRPF',
                    icon: <FileQuestion className="h-10 w-10 text-purple-600" />,
                    link: '/faq'
                  }
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-6 
                               shadow-sm hover:shadow transition-all flex flex-col items-center text-center"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prazo Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="text-amber-500" size={28} />
                <span>Prazo para Declaração 2024</span>
              </h2>
              <p className="text-gray-700 mb-2">
                O prazo para entrega da Declaração do Imposto de Renda 2024 é de:
              </p>
              <p className="text-xl font-semibold text-amber-700 mb-4">
                15 de março a 31 de maio de 2024
              </p>
              <p className="text-sm text-gray-600">
                Não deixe para última hora! Declarações enviadas mais cedo têm prioridade na restituição.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;