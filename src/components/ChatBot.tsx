try {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer AIzaSyDkJOOHPI7SKBw3GDnj0LYe7ntXV9e5Obc` // Chave atualizada
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `Você é Julio Campos Machado, um especialista em imposto de renda no Brasil. 
                 Responda a seguinte pergunta de forma natural e profissional, sem usar caracteres especiais: ${userMessage}`
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Erro da API: ${response.statusText}`);
  }

  const data = await response.json();

  const botResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (botResponse) {
    setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    speakMessage(botResponse);
  } else {
    throw new Error('Resposta malformada da API');
  }

} catch (error) {
  console.error('Erro ao obter resposta do bot:', error);
  setMessages(prev => [...prev, {
    text: 'Desculpe, ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.',
    isBot: true
  }]);
}
