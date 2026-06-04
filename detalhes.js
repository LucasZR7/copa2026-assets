/* detalhes.js — conteúdo completo por seleção (preenchido grupo a grupo)
   window.COPA_DET[nome] = { xi, duvidas, banco, craques, fortes, fracos, tatica, comoChega, expectativa, statsLinha, resumo }
   Quando existe detalhe, a página de detalhe renderiza o layout completo. */
(function () {
  "use strict";
  function p(nome, pos, linha, clube) { return { nome: nome, pos: pos, linha: linha, clube: clube }; }
  function b(nome, clube) { return { nome: nome, clube: clube }; }
  function k(nome, clube, papel) { return { nome: nome, clube: clube, papel: papel }; }

  var DET = {

    /* ===================== GRUPO A ===================== */
    "Coreia do Sul": {
      formacao: "4-2-3-1",
      xi: [
        p("Kim Seung-gyu", "GK", "GOL", "Suwon"),
        p("Lee Tae-seok", "LB", "DEF", ""),
        p("Kim Min-jae", "CB", "DEF", "Bayern Munique"),
        p("Lee Han-beom", "RCB", "DEF", ""),
        p("Kim Moon-hwan", "RB", "DEF", ""),
        p("Hwang In-beom", "DM", "MEI", "Feyenoord"),
        p("Paik Seung-ho", "CM", "MEI", ""),
        p("Lee Kang-in", "AM", "MEI", "Paris Saint-Germain"),
        p("Lee Jae-sung", "CM", "MEI", ""),
        p("Hwang Hee-chan", "RW", "ATA", "Wolverhampton"),
        p("Son Heung-min", "ST", "ATA", "Los Angeles FC")
      ],
      duvidas: "Lee Jae-sung e Hwang Hee-chan disputam a vaga de segundo atacante; Oh Hyeon-gyu também pode substituir Son ou competir pela titularidade.",
      banco: [b("Oh Hyeon-gyu", "Besiktas"), b("Cho Gue-sung", "FC Midtjylland"), b("Bae Jun-ho", "Stoke City"), b("Jens Castrop", "B. Mönchengladbach"), b("Kim Tae-hyeon", ""), b("Jo Hyeon-woo", "Ulsan HD")],
      craques: [
        k("Son Heung-min", "Los Angeles FC", "Capitão; artilheiro das eliminatórias (10 gols); referência técnica e emocional"),
        k("Lee Kang-in", "Paris Saint-Germain", "Tecnicamente refinado; criação, drible e definição; campeão da UCL 2026"),
        k("Kim Min-jae", "Bayern Munique", "Organizador defensivo; líder de linha; um dos 10 melhores zagueiros do mundo"),
        k("Hwang In-beom", "Feyenoord", "Metrônomo do meio-campo; distribui bola e protege a defesa"),
        k("Hwang Hee-chan", "Wolverhampton", "Profundidade ofensiva e explosão; cobra pênaltis como 2ª opção"),
        k("Oh Hyeon-gyu", "Besiktas", "Centroavante em grande forma; 8 gols em 16 jogos na temporada")
      ],
      fortes: [
        "Qualidade individual no terço final com trio Son–Lee Kang-in–Hwang Hee-chan experiente e em forma",
        "Organização defensiva sólida com compactação eficaz e Kim Min-jae entre os melhores zagueiros globais",
        "Profundidade de elenco com 26 jogadores em ligas europeias de topo (Bayern, PSG, Wolves, Feyenoord)",
        "Qualificação invicta (6V 4E), única seleção asiática; paridade com o México em amistoso (2-2)",
        "Bola parada ofensiva de qualidade (Son batedor, Lee Kang-in e Hwang In-beom)",
        "Transições rápidas após recuperação, com verticalidade e velocidade"
      ],
      fracos: [
        "Dependência excessiva de Son e Lee Kang-in; criatividade limitada quando ambos são contidos",
        "Hwang In-beom com risco físico real por lesões sequenciais; sem ritmo pleno antes da Copa",
        "Histórico adverso fora de casa em Copas; nunca passou das oitavas em torneios no exterior",
        "Instabilidade institucional: nomeação de Hong controversa e saída anunciada do presidente da KFA",
        "Opções de ataque limitadas no banco se Son se lesionar ou perder desempenho",
        "Vulnerabilidade em bolas cruzadas e aéreas; o 3-4-2-1 deixa espaço nas costas das alas"
      ],
      tatica: {
        ofensiva: "Sistema 4-2-3-1 com Son como referência e dois meias-atacantes (Lee Kang-in e Hwang Hee-chan) formando triângulos; criação pelo corredor central (Hwang In-beom) ou pelos lados; transições verticais após recuperação exploram velocidade.",
        defensiva: "Bloco médio-baixo comprimido com Hwang In-beom e Paik Seung-ho protegendo os zagueiros; Kim Min-jae como âncora com leitura antecipada; laterais compactam mais do que projetam; vulnerabilidade em bolas paradas e cruzamentos.",
        semBola: "Pressing moderado, sem PPDA agressivo — mais estrutura de bloco; não força a saída do GK adversário; bom retorno coletivo na transição defensiva; a perda no terço ofensivo é o momento mais vulnerável.",
        geral: "Seleção física, disciplinada e com indivíduos de qualidade europeia; não é time de posse elaborada, mas de organização, compactação e explosão em transição. Plano A é 4-2-3-1; Plano B é 3-4-2-1/5-4-1 defensivo."
      },
      comoChega: "Coreia chega invicta nas eliminatórias AFC (6V-4E) mas com formas mistas nos amistosos: vitórias sobre EUA (2-0) e Trinidad e Tobago (5-0), empate com México (2-2), e derrotas para Costa do Marfim (0-4) e Áustria (0-1). Preparou-se em Salt Lake City, com altitude similar à de Guadalajara. Jo Yu-min saiu por lesão (fáscia plantar), substituído por Jo Wi-je; Hwang In-beom ainda recupera ritmo após lesões no tornozelo.",
      expectativa: "Avançar da fase de grupos (objetivo declarado), com projeção realista de 2º lugar no Grupo A; a Opta dá 70,1% de probabilidade de classificação. O teto otimista são as quartas de final, se o chaveamento ajudar.",
      statsLinha: "Eliminatórias AFC (Fase Final): 6V-4E em 10 jogos; ~28–32 gols marcados e 8 sofridos (dados variam por fonte). Son: 10 gols na fase final AFC e 12 gols + 4 assistências em 13 jogos da MLS 2025.",
      resumo: "Coreia do Sul é uma seleção organizada, disciplinada e invicta nas eliminatórias, com qualidade individual de ponta (Son, Lee Kang-in, Kim Min-jae) num contexto coletivo defensivo; 2ª favorita do Grupo A com foco em avançar, mas com riscos reais em Hwang In-beom lesionado e no histórico fraco fora de casa em Copas."
    },

    "México": {
      formacao: "4-3-3",
      xi: [
        p("Guillermo Ochoa", "GK", "GOL", "AEL Limassol"),
        p("Jorge Sánchez", "RB", "DEF", "PAOK"),
        p("César Montes", "CB", "DEF", "Lokomotiv Moscou"),
        p("Johan Vásquez", "CB", "DEF", "Genoa"),
        p("Jesús Gallardo", "LB", "DEF", "Toluca"),
        p("Edson Álvarez", "DM", "MEI", "Fenerbahçe"),
        p("Álvaro Fidalgo", "CM", "MEI", "Real Betis"),
        p("Orbelín Pineda", "CM", "MEI", "AEK Athens"),
        p("Roberto Alvarado", "RW", "ATA", "Guadalajara"),
        p("Raúl Jiménez", "ST", "ATA", "Fulham"),
        p("Julián Quiñones", "LW", "ATA", "Al-Qadsiah")
      ],
      duvidas: "Edson Álvarez é o grande ponto de interrogação — acumula apenas ~80 minutos jogados em 2026 após cirurgia no tornozelo; se não estiver 100%, o México perde sua melhor âncora defensiva e criativa.",
      banco: [b("Santiago Giménez", "AC Milan"), b("Raúl Rangel", "Guadalajara"), b("Alexis Vega", "Toluca"), b("Gilberto Mora", "Tijuana"), b("Obed Vargas", "Atlético Madrid"), b("Israel Reyes", "América")],
      craques: [
        k("Julián Quiñones", "Al-Qadsiah", "Artilheiro — 33 gols em 31 jogos na Saudi Pro League; explosivo em transições"),
        k("Raúl Jiménez", "Fulham", "Centroavante experiente — 9 gols na Premier League 25-26; liderança e leitura tática"),
        k("Edson Álvarez", "Fenerbahçe", "Capitão e pivô defensivo — âncora de todo o esquema tático"),
        k("Santiago Giménez", "AC Milan", "Centroavante alternativo — promessa geracional em retorno de lesão"),
        k("Álvaro Fidalgo", "Real Betis", "Meia organizador — ritmo, passe e visão de jogo de padrão europeu"),
        k("Guillermo Ochoa", "AEL Limassol", "Goleiro histórico — 6ª Copa consecutiva; ícone cultural")
      ],
      fortes: [
        "Ataque letal em transições: dupla Quiñones–Jiménez em forma absurda (33 gols na Saudi Pro League; 9 na Premier League)",
        "Vantagem de jogar em casa: altitude (Azteca 2.240m; Akron 1.560m) e torcida como 12º jogador",
        "Bola parada ofensiva de qualidade: Montes e Vásquez no jogo aéreo; Fidalgo e Vega na cobrança",
        "Solidez defensiva recente: 6 clean sheets em 7 amistosos de 2026 (incl. vs Portugal e Austrália)",
        "Dois títulos CONCACAF 2025 (Nations League + Gold Cup) geraram capital emocional e confiança",
        "Grupo acessível: todos os adversários abaixo no ranking FIFA (RSA 60º, COR 25º, CZE 41º)"
      ],
      fracos: [
        "Edson Álvarez em dúvida de ritmo: ~80 minutos em 2026; sem ele, perde o melhor distribuidor e escudo",
        "Goleiro veterano: Ochoa com 40 anos no 6º Mundial; reflexos bons, mas mobilidade questionável",
        "Deficiência criativa sem Lozano (cortado): criação depende de Quiñones e Alvarado; Fidalgo em adaptação",
        "Pressão histórica: 7 eliminações seguidas nas oitavas (1994-2018)",
        "Falta de rodagem coletiva: Álvarez, Fidalgo e Giménez chegaram com lesão/adaptação",
        "Defesa lenta na velocidade: Montes e Vásquez expostos em contra-ataques pela diagonal"
      ],
      tatica: {
        ofensiva: "Transições verticais rápidas: recuperação no terço médio → circulação por Álvarez → aceleração pelas pontas (Quiñones à esquerda, Alvarado à direita) com Jiménez fixando a linha. Bola parada ofensiva como recurso estratégico (escanteios com Montes/Vásquez; faltas com Fidalgo/Vega).",
        defensiva: "Bloco médio-baixo que recua para 4-5-1 na fase defensiva; Álvarez como pivô fechador de espaços. Vásquez e Montes seguros no alto, mas não rápidos. Pressão no terço médio, não no campo adversário.",
        semBola: "Pressing no terço médio (não alto); após perda, transição rápida ao bloco defensivo (menos de 5 passes para retomar o ataque). Padrão de compacidade em linha 4+3 na recuperação.",
        geral: "Pragmatismo tático de Aguirre — time compacto, físico e letal em contra-ataques; resultados acima de estética. 4-3-3 como plano A; 4-1-4-1 como variação defensiva."
      },
      comoChega: "México abre a Copa em sequência positiva: 5V-1E em amistosos de 2026 com 10 gols pró e apenas 1 contra; 6 clean sheets em 7 jogos. A maior sombra é Edson Álvarez, com ~80 minutos pós-cirurgia (fev/2026); Giménez retorna de 5 meses parado e Chávez sai de LCA. Moral elevada com os dois títulos CONCACAF 2025.",
      expectativa: "Passar em 1º ou 2º do Grupo A (mínimo aceitável: oitavas). Teto histórico seriam as quartas (não alcançadas desde 1986); piso provável é a eliminação nas oitavas pela maldição de 28 anos. A questão não é passar da fase de grupos (87,2% Opta), mas quebrar a barreira psicológica nas oitavas.",
      statsLinha: "Amistosos 2026 (6 jogos): 10 gols = 1,67/jogo. xG não disponível publicamente para amistosos de seleções; posse média não documentada em fontes confiáveis. Base: ESPN/Wikipedia.",
      resumo: "México chega como favorito claro do Grupo A (15º FIFA) com artilheiro em forma absurda (Quiñones, 33 gols), vantagem de altitude/torcida e dois títulos CONCACAF 2025, mas carrega dúvida crítica em Edson Álvarez (~80 min pós-cirurgia), goleiro veterano (Ochoa, 40) e a pressão histórica de 28 anos sem oitavas."
    },

    "República Tcheca": {
      formacao: "4-2-3-1",
      xi: [
        p("Matěj Kovář", "GK", "GOL", "PSV Eindhoven"),
        p("Vladimír Coufal", "RB", "DEF", "Hoffenheim"),
        p("David Zima", "CB", "DEF", "Slavia Praga"),
        p("Ladislav Krejčí", "CB", "DEF", "Wolverhampton"),
        p("Jan Jurásek", "LB", "DEF", "Slavia Praga"),
        p("Tomáš Souček", "CM", "MEI", "West Ham United"),
        p("Michal Sadílek", "DM", "MEI", "Slavia Praga"),
        p("Pavel Šulc", "LM", "MEI", "Olympique Lyonnais"),
        p("Adam Hložek", "RW", "ATA", "Hoffenheim"),
        p("Patrik Schick", "ST", "ATA", "Bayer Leverkusen"),
        p("Tomáš Chorý", "CF", "ATA", "Slavia Praga")
      ],
      duvidas: "Hložek vs Šulc como segundo atacante — Hložek acaba de retornar de lesão longa (fratura no pé, cirurgia em ago/2025), enquanto Šulc chega com ritmo de Ligue 1 após temporada excepcional; a decisão de Koubek sobre essa dupla define a cara do ataque.",
      banco: [b("Tomáš Chorý", "Slavia Praga"), b("Jan Kuchta", "Sparta Praga"), b("Mojmír Chytil", "Slavia Praga"), b("Lukáš Provod", "Slavia Praga"), b("Vladimír Darida", "Hradec Králové"), b("Hugo Sochůrek", "Sparta Praga")],
      craques: [
        k("Patrik Schick", "Bayer Leverkusen", "Centroavante de classe mundial — 25 gols em 52 jogos, +7,2 acima do xG em duas temporadas"),
        k("Pavel Šulc", "Olympique Lyonnais", "Criador de desequilíbrio — 14G+7A na Ligue 1; Melhor Jogador Tcheco de 2025"),
        k("Tomáš Souček", "West Ham United", "Motor do meio-campo — 192cm; lidera duelos aéreos; elo entre defesa e ataque"),
        k("Matěj Kovář", "PSV Eindhoven", "Goleiro herói dos pênaltis — 3 defesas decisivas nos playoffs"),
        k("Ladislav Krejčí", "Wolverhampton", "Capitão e zagueiro goleador — gols decisivos nos dois playoffs"),
        k("Hugo Sochůrek", "Sparta Praga", "Meia técnico de apenas 17 anos — o jogador mais jovem da Copa 2026")
      ],
      fortes: [
        "Letalidade em bola parada: 10 gols de bola parada nas Eliminatórias e os 4 gols dos playoffs nasceram de bola parada",
        "Patrik Schick em forma de elite: 16 gols em 28 jogos de Bundesliga, +7,2 acima do xG em dois anos",
        "Pavel Šulc como revelação: 14G+7A na Ligue 1, 3º em gols/90min entre quem tem +1.500 min",
        "Profundidade ofensiva com cinco opções distintas: Schick, Šulc, Hložek, Kuchta e Chytil",
        "Kovář herói dos pênaltis: 2 defesas vs Irlanda e 1 vs Dinamarca, cruciais na classificação",
        "Solidez em casa: 20 jogos invicto (17V 3E) desde setembro/2022"
      ],
      fracos: [
        "Inconsistência fora de casa: 5-1 para a Croácia e 2-1 nas Ilhas Faroe nas Eliminatórias",
        "Produção ofensiva limitada em jogo aberto: fora de bola parada, criam pouco; dependem de transição",
        "Koubek com tempo mínimo: nomeado em dez/2025, geriu apenas 2 jogos competitivos antes da Copa",
        "Dependência excessiva de Schick: alternativas (Kuchta, Chytil) têm impacto internacional limitado",
        "Profundidade criativa reduzida: além de Šulc, falta criador de alto nível em contextos fechados",
        "PPDA alta: não pressiona alto e sofre contra adversários que dominam a posse e criam volume"
      ],
      tatica: {
        ofensiva: "Três pilares: (1) bola parada como principal vetor de gol, com Schick, Souček, Hložek e Chorý acima de 188cm; (2) transições verticais rápidas para Schick pelo chão ou pelo alto; (3) 284 cruzamentos nas Eliminatórias (o maior entre nações europeias) explorados por Coufal e Jurásek.",
        defensiva: "Bloco compacto em duas linhas (4 defensores + 2 atacantes altos), mantendo a linha a 30-35m do gol para não ser ultrapassada em profundidade; defesa aérea forte em escanteios, com vários jogadores acima de 188cm.",
        semBola: "Não pressiona alto; recua organizado ao bloco médio após a perda e bloqueia transições com compactação, dificultando o contra-ataque adversário; intensidade física alta apesar da menor intensidade técnica.",
        geral: "Bloco médio-baixo (4-4-2/4-2-3-1 sem bola) estruturado para esperar o erro adversário, cobrar bola parada com precisão cirúrgica e explorar transições verticais com Schick como referência central."
      },
      comoChega: "A Tchéquia chega com moral alta, vinda de classificação dramática via repescagem (4-3 nos pênaltis vs Irlanda e 3-1 vs Dinamarca) e resultados positivos na preparação (2-1 vs Kosovo, 2-0 vs Guatemala). Base de treinos em Mansfield, Texas; Koubek geriu só 2 jogos competitivos e 4 de preparação, deixando o sistema em jogo aberto ainda em construção.",
      expectativa: "Avançar da fase de grupos — algo nunca conseguido como nação independente. O objetivo realista é terminar em 2º no Grupo A (México favorito) e chegar às oitavas.",
      statsLinha: "Eliminatórias + Playoff: 26 gols em 10 jogos (2,6/jogo); 54% dos gols vieram de bola parada (14 de 26). Euro 2024 vs Geórgia: 55% de posse e 3,09 xG. Fontes: Opta Analyst, UEFA.com.",
      resumo: "Retorno histórico após 20 anos à Copa, com uma seleção de trabalhadores estruturada, física, com qualidade individual pontual (Schick, Šulc) e uma arma especialíssima em bola parada — não é bonito, mas pode ser eficaz num grupo equilibrado."
    },

    "África do Sul": {
      formacao: "4-2-3-1",
      xi: [
        p("Ronwen Williams", "GK", "GOL", "Mamelodi Sundowns"),
        p("Khuliso Mudau", "RB", "DEF", "Mamelodi Sundowns"),
        p("Ime Okon", "RCB", "DEF", "Hannover 96"),
        p("Mbekezeli Mbokazi", "LCB", "DEF", "Chicago Fire"),
        p("Aubrey Modiba", "LB", "DEF", "Mamelodi Sundowns"),
        p("Lonwabo Mbatha", "DM", "MEI", "Orlando Pirates"),
        p("Teboho Mokoena", "CM", "MEI", "Mamelodi Sundowns"),
        p("Oswin Appollis", "LM", "MEI", "Orlando Pirates"),
        p("Relebohile Mofokeng", "AM", "ATA", "Orlando Pirates"),
        p("Themba Moremi", "RW", "ATA", "Orlando Pirates"),
        p("Lyle Foster", "ST", "ATA", "Burnley")
      ],
      duvidas: "Zagueiro central ao lado de Mbokazi: Ime Okon é favorito pela forma recente, mas Nkosinathi Sibisi também é alternativa citada; na lateral esquerda, Samukele Kabini pode surgir como opção mais ofensiva.",
      banco: [b("Nkosinathi Sibisi", "Orlando Pirates"), b("Iqraam Rayners", "Mamelodi Sundowns"), b("Evidence Makgopa", "Orlando Pirates"), b("Themba Zwane", "Mamelodi Sundowns"), b("Thapelo Maseko", "AEL Limassol"), b("Samukele Kabini", "Molde FK")],
      craques: [
        k("Ronwen Williams", "Mamelodi Sundowns", "Goleiro-capitão, referência defensiva e especialista em pênaltis"),
        k("Teboho Mokoena", "Mamelodi Sundowns", "Motor do meio-campo, organizador tático e criador de jogo"),
        k("Relebohile Mofokeng", "Orlando Pirates", "Curinga criativo, driblador explosivo e imprevisível"),
        k("Lyle Foster", "Burnley", "Referência ofensiva, o único em liga europeia de topo"),
        k("Oswin Appollis", "Orlando Pirates", "Principal criador pelo flanco e cobrador de bola parada"),
        k("Mbekezeli Mbokazi", "Chicago Fire", "Zagueiro jovem, ancoragem aérea e saída de bola")
      ],
      fortes: [
        "Ronwen Williams — goleiro de classe mundial com recorde de defesas de pênaltis no AFCON",
        "Organização defensiva e compacidade — bloco médio-baixo disciplinado com linhas compactas",
        "Teboho Mokoena — distribuidor preciso e organizador posicional de qualidade continental",
        "Velocidade e criatividade nos flancos — Appollis e Mofokeng como ameaças de contra-ataque",
        "Bola parada ofensiva — Mokoena, Appollis e Foster formam arma real em situações estáticas",
        "Espírito de equipe e mentalidade — disciplina e cultura de trabalho instaladas por Broos"
      ],
      fracos: [
        "Experiência internacional limitada fora da África — apenas Foster em liga europeia de topo",
        "Ineficiência ofensiva — 0-0 com a Nicarágua (pênalti perdido); só 6 gols em 4 jogos do AFCON",
        "Dependência excessiva de Mokoena para a qualidade de circulação",
        "Fragilidade defensiva em transição — vulnerável a contra-ataques e laterais expostos",
        "Altitude e logística pré-Copa — chegada atrasada por crise de vistos, 9 dias antes da estreia",
        "Flexibilidade tática limitada — banco jovem e com pouco tempo de seleção"
      ],
      tatica: {
        ofensiva: "Bloco defensivo sólido → recuperação no terço médio → saída rápida em transição → exploração dos flancos com velocidade; pontas com liberdade para inverter posições; Foster como pivô de movimentação, não de área fixa.",
        defensiva: "Bloco médio-baixo sem pressão alta sistemática; linha moderadamente alta em posse e recuada quando o adversário progride; defesa zonal, com zagueiros sem instrução para sair individualmente.",
        semBola: "Transição defensiva rápida para um bloco 4-4-2 intermediário; pontas recuam depressa; vulnerabilidade ao perder a bola em transição alta com os laterais subidos; sem pressing alto por filosofia.",
        geral: "Equipe pragmática e disciplinada, com identidade defensiva forte e a transição como principal arma. Plano A = bloco compacto + bola parada; Plano B = três zagueiros; Plano C = duas referências ofensivas sacrificando equilíbrio."
      },
      comoChega: "Chegada ao México com 24h de atraso por crise de vistos americanos; sequência de 4 jogos sem vitória (empates com Nicarágua e Panamá, derrota para o Panamá), gerando dúvidas sobre a finalização apesar da solidez defensiva. Elenco entrosado há dois anos com Broos e vestiário coeso, mas preparação logística tensionada.",
      expectativa: "Avançar como um dos melhores terceiros colocados (o formato de 48 classifica os 8 melhores terceiros); objetivo realista de não ser eliminada diretamente, com obrigação de vencer a República Tcheca para manter esperanças vivas.",
      statsLinha: "AFCON 2025: 6 gols em 4 jogos (1,5/jogo), 63% de posse média, 16 finalizações por jogo. Eliminatórias: 15 gols em 10 jogos. xG não disponível para a seleção (Flashscore, jun/2026).",
      resumo: "Seleção pragmática e disciplinada que retorna à Copa após 16 anos, com identidade defensiva forte, transições rápidas e um goleiro de nível mundial em Ronwen Williams — mas enfrenta um grupo superior no ranking (México, Coreia do Sul) e fragilidades ofensivas, refletidas na sequência recente de 4 jogos sem vitória."
    },

    /* ===================== GRUPO C ===================== */
    "Brasil": {
      formacao: "4-2-3-1",
      xi: [
        p("Alisson", "GK", "GOL", "Liverpool"),
        p("Wesley", "RB", "DEF", "Roma"),
        p("Gabriel Magalhães", "CB", "DEF", "Arsenal"),
        p("Marquinhos", "CB", "DEF", "PSG"),
        p("Alex Sandro", "LB", "DEF", "Flamengo"),
        p("Casemiro", "DM", "MEI", "Manchester United"),
        p("Bruno Guimarães", "CM", "MEI", "Newcastle United"),
        p("Neymar", "AM", "MEI", "Santos"),
        p("Raphinha", "RW", "ATA", "Barcelona"),
        p("Matheus Cunha", "CF", "ATA", "Manchester United"),
        p("Vinícius Júnior", "LW", "ATA", "Real Madrid")
      ],
      duvidas: "Neymar entra como 10 flutuante se recuperado da lesão na panturrilha; sem ele ou fora de forma, Matheus Cunha sobe para centroavante puro e o 10 fica vago ou é preenchido por Lucas Paquetá.",
      banco: [b("Ederson", "Fenerbahçe"), b("Bremer", "Juventus"), b("Léo Pereira", "Flamengo"), b("Lucas Paquetá", "Flamengo"), b("Endrick", "Lyon (emp. Real Madrid)"), b("Gabriel Martinelli", "Arsenal")],
      craques: [
        k("Vinícius Júnior", "Real Madrid", "Extremo esquerdo de nível mundial; The Best FIFA 2024"),
        k("Raphinha", "Barcelona", "Extremo direito consistente; artilheiro das eliminatórias"),
        k("Bruno Guimarães", "Newcastle United", "Volante dinâmico; progressão vertical e criatividade"),
        k("Marquinhos", "PSG", "Zagueiro capitão e líder da defesa"),
        k("Casemiro", "Manchester United", "Pivô defensivo experiente; co-capitão"),
        k("Neymar", "Santos", "Meia-atacante criativo; 79 gols históricos pela seleção")
      ],
      fortes: [
        "Ataque de flancos (Vinícius Júnior e Raphinha) provavelmente o melhor do torneio",
        "Zaga experiente e de alto nível (Marquinhos, líder do treble do PSG; Gabriel, dos melhores da PL)",
        "Goleiro de referência mundial (Alisson entre os dois melhores do mundo)",
        "Bruno Guimarães como diferencial de meio-campo (visão, progressão, agressividade)",
        "Gestão Ancelotti com histórico em mata-mata (5 Champions League)",
        "Profundidade de elenco com peças de impacto no banco (Paquetá, Endrick, Martinelli)"
      ],
      fracos: [
        "Casemiro envelhecido (34) e dependência do pivô, com substituto limitado (Fabinho, 32)",
        "Vinícius Júnior rende menos pela seleção (8 gols em 47 jogos vs 16 na La Liga 25-26)",
        "Laterais em zona cinzenta (Alex Sandro com 35 por falta de opção; Wesley em desenvolvimento)",
        "Neymar é risco médico (lesão grau 2 na panturrilha) e imponderável após 2 anos parado",
        "Eliminatória historicamente fraca (5º lugar, 28 pontos, pior campanha em décadas)",
        "Defesa vulnerável em bola parada e contra-ataques (padrão das eliminatórias não resolvido)"
      ],
      tatica: {
        ofensiva: "Isolamento de Vinícius Júnior à esquerda com suporte de Alex Sandro; Raphinha polivalente à direita (corta para dentro ou cruza); bola parada com ameaças aéreas de Marquinhos e Gabriel.",
        defensiva: "Bloco médio-baixo em 4-4-2 na perda; linha moderada (não de impedimento); profundidade e recobrimento privilegiados; atenção em escanteios e faltas (ponto fraco histórico).",
        semBola: "Pressão moderada e reativa (não de alta intensidade); excelente transição ofensiva rápida; risco nos flancos quando os laterais estão avançados (espaços nas costas em perdas com timing ruim).",
        geral: "4-2-3-1 com saída de bola estruturada em 2+2; uso de diagonais em rede (escadinha) para explorar os flancos; identidade entre a expressividade individual e a estrutura defensiva europeia."
      },
      comoChega: "Brasil chega com o melhor momento de clube dos seus astros em anos (Vini, Raphinha, Bruno), mas com incertezas sistêmicas: eliminatória fraca, com derrota de 4-1 para a Argentina e falta de padrão. Neymar é dúvida (lesão grau 2 na panturrilha, 2-3 semanas); Ancelotti tem apenas 12 meses no cargo e poucos testes. O 6-2 sobre o Panamá foi positivo no placar, mas expôs desorganização defensiva no 1º tempo.",
      expectativa: "Classificação quase certa no grupo; o teto é o título (maior talento individual + técnico calejado em mata-mata), o piso é cair nas oitavas/quartas se a defesa não melhorar e Casemiro se lesionar; o prognóstico razoável é a semifinal.",
      statsLinha: "Dados parciais em fonte aberta: Eliminatórias CONMEBOL com 24 gols em 18 jogos (1,33/jogo); xG não publicado oficialmente; amistoso vs Panamá (6-2) com desorganização defensiva no 1º tempo, conforme Ancelotti.",
      resumo: "Canarinho com o maior talento individual do torneio e um técnico campeão europeu inédito no cargo — mas a equação entre potencial (flancos Vini/Raphinha, Bruno no meio) e consistência (defesa vulnerável, Neymar lesionado, eliminatória vexatória) define o limite entre o título e a decepção precoce."
    },

    "Marrocos": {
      formacao: "4-2-3-1",
      xi: [
        p("Yassine Bounou", "GK", "GOL", "Al-Hilal"),
        p("Achraf Hakimi", "RB", "DEF", "PSG"),
        p("Issa Diop", "CB", "DEF", "Fulham"),
        p("Nayef Aguerd", "CB", "DEF", "Olympique de Marseille"),
        p("Noussair Mazraoui", "LB", "DEF", "Manchester United"),
        p("Sofyan Amrabat", "DM", "MEI", "Real Betis"),
        p("Neil El Aynaoui", "CM", "MEI", "AS Roma"),
        p("Abdelhamid Sabiri", "RW", "ATA", "Real Betis"),
        p("Brahim Díaz", "AM", "ATA", "Real Madrid"),
        p("Ismael Saibari", "LW", "ATA", "PSV Eindhoven"),
        p("Ayoub El Kaabi", "ST", "ATA", "Olympiacos")
      ],
      duvidas: "Aguerd é titular se recuperado da pubalgia; caso contrário, Chadi Riad (Crystal Palace) o substitui. Amrabat chegou de artroscopia no tornozelo e sua forma é dúvida menor.",
      banco: [b("Azzedine Ounahi", "Girona"), b("Bilal El Khannouss", "VfB Stuttgart"), b("Soufiane Rahimi", "Al-Ain"), b("Chadi Riad", "Crystal Palace"), b("Ayyoub Bouaddi", "Lille"), b("Chemsdine Talbi", "Sunderland")],
      craques: [
        k("Achraf Hakimi", "PSG", "Capitão, melhor lateral-direito do mundo; condutor ofensivo pela direita"),
        k("Brahim Díaz", "Real Madrid", "Artilheiro da CAN 2025 (5 gols); meia-atacante criativo entre as linhas"),
        k("Ismael Saibari", "PSV Eindhoven", "Melhor jogador da Eredivisie 25-26 (15G, 8A); corredor ofensivo"),
        k("Sofyan Amrabat", "Real Betis", "Volante defensivo; coração competitivo desde 2022"),
        k("Yassine Bounou", "Al-Hilal", "Goleiro experiente; distribuição com os pés; 5 clean sheets na CAN 2025"),
        k("Neil El Aynaoui", "AS Roma", "Volante construtor; 90,1% de acerto de passe na CAN 2025")
      ],
      fortes: [
        "Nível técnico individual excepcional para a CAF: Hakimi, Díaz e Saibari em padrão europeu de elite",
        "Transição defesa-ataque: 52 recuperações em campo adversário na CAN 2025, 12 viraram gol direto",
        "Defesa sólida: 5 jogos sem sofrer na CAN 2025, só 1 gol no torneio, 5,6 chutes sofridos/jogo",
        "Profundidade ofensiva: 7 meio-campistas convocados com perfis complementares",
        "Experiência de torneio: 9 jogadores do plantel semifinalista de 2022",
        "Capacidade de pressing ofensivo: bloco elevado sob Ouahbi, com gatilhos na linha do meio"
      ],
      fracos: [
        "Instabilidade no comando: Ouahbi assumiu a <100 dias e nunca dirigiu seleção sênior em jogo oficial",
        "Centroavante sem dono fixo: a exclusão de En-Nesyri tira referencial de área; El Kaabi (32) é convencional",
        "Dúvidas físicas acumuladas: Aguerd (cirurgia), Amrabat (artroscopia), Munir El Kajoui (operado)",
        "Jogo ofensivo em construção: amistosos com alternâncias táticas (1-1 Equador, 2-1 Paraguai)",
        "Pressão psicológica da CAN: renúncia de Regragui e exclusão de ídolos (En-Nesyri, Ziyech)",
        "Lado esquerdo vulnerável: Mazraoui mais técnico que defensivo; risco a pontas rápidas pela direita adversária"
      ],
      tatica: {
        ofensiva: "Dupla linha de criação: Hakimi sobe pela direita em overlapping; Díaz habita o espaço entre linhas e combina rápido com Saibari no terço final. A transição é a grande arma — recuperar em campo adversário e atacar em 3-4 toques. Sequências iniciadas a 46m do próprio gol (vs 40,2m em 2022). Hakimi e Díaz na bola parada; El Kaabi e Issa Diop como alvos aéreos.",
        defensiva: "Organiza um 4-4-2 médio-baixo na posse adversária, com os extremos recuando para duas linhas de quatro. Amrabat ancora o meio como pivô puro marcando a Zona 14. Fecha os corredores centrais antes de pressionar os lados. Bounou domina a área; zaga com boa antecipação aérea (Diop 1,90m, Aguerd 1,88m).",
        semBola: "Pressing elevado sob Ouahbi, com gatilhos na linha do meio; atacantes pressionam o goleiro adversário em passes curtos. 52 recuperações em campo adversário na CAN (3ª maior do torneio). Retorno rápido e organizado; risco quando o lateral está avançado e a transição vem pelo corredor oposto.",
        geral: "Time de transição rápida com qualidade técnica acima da média africana. Saiu da identidade defensiva de Regragui para um sistema mais equilibrado — defende bem e ataca com mais volume. Plano A: 4-2-3-1 com Hakimi ofensivo e Díaz como pivô criativo; Plano B: 4-3-3 defensivo com El Khannouss ou Ounahi para adensar."
      },
      comoChega: "Novo técnico, Mohamed Ouahbi, assumiu em março/2026 com pouco tempo de preparação (~100 dias). Amistosos mostram time em ajuste: 1-1 Equador, 2-1 Paraguai, 5-0 Burundi, 4-0 Madagascar. Dúvidas físicas sérias: Aguerd (pubalgia, pós-cirurgia), Amrabat (artroscopia no tornozelo), Munir (operado). Clima interno tenso pela polêmica da final da CAN contra o Senegal e a saída de Regragui.",
      expectativa: "Objetivo realista é o 2º lugar do Grupo C e as oitavas, com 88,8% de chance segundo a Opta. Teto é igualar ou superar 2022 se o novo sistema funcionar e Aguerd/Amrabat estiverem fit. Piso são as oitavas; só cai na fase de grupos com derrota pesada para o Brasil + tropeço com a Escócia + lesões graves.",
      statsLinha: "CAN 2025: 9 gols em 6 jogos, 108 chutes, 5,6 chutes sofridos/jogo, 52 recuperações em campo adversário, 201 toques na área adversária. Eliminatórias CAF: 22 gols em 8 jogos, só 2 sofridos (adversários de ranking 90-160).",
      resumo: "Semifinalista em 2022 sob Regragui, o Marrocos chega em 2026 sob o novo técnico Mohamed Ouahbi com um elenco mais jovem, ofensivo e tecnicamente superior — mas com dúvidas físicas (Aguerd, Amrabat) e falta de tempo de preparação. Favorito ao 2º lugar do Grupo C, vulnerável diante do Brasil na estreia."
    },

    "Escócia": {
      formacao: "4-2-3-1",
      xi: [
        p("Angus Gunn", "GK", "GOL", "Nottingham Forest"),
        p("Hickey", "LB", "DEF", "Brentford"),
        p("McKenna", "CB", "DEF", "Dinamo Zagreb"),
        p("Souttar", "CB", "DEF", "Rangers"),
        p("Andy Robertson", "RB", "DEF", "Liverpool"),
        p("Lewis Ferguson", "DM", "MEI", "Bologna"),
        p("Ryan Christie", "CM", "MEI", "Bournemouth"),
        p("Scott McTominay", "CM", "MEI", "Napoli"),
        p("Ben Gannon-Doak", "RW", "ATA", "Bournemouth"),
        p("John McGinn", "LW", "ATA", "Aston Villa"),
        p("Che Adams", "ST", "ATA", "Torino")
      ],
      duvidas: "Goleiro incerto entre Gunn e Craig Gordon (43 anos); Che Adams ou Lawrence Shankland no ataque; a dupla pivô pode ser Ferguson + McLean ou Ferguson + Fletcher se Clarke quiser mais criatividade.",
      banco: [b("Craig Gordon", "Hearts"), b("Lawrence Shankland", "Hearts"), b("Kieran Tierney", "Celtic"), b("Tyler Fletcher", "Manchester United"), b("Kenny McLean", "Norwich"), b("Finlay Curtis", "Rangers")],
      craques: [
        k("Scott McTominay", "Napoli", "MVP da Serie A 24-25 — meia goleador, timing de entrada na área"),
        k("Andy Robertson", "Liverpool", "Capitão experiente (92 caps) — principal criador pela lateral esquerda"),
        k("John McGinn", "Aston Villa", "Meia-atacante, cobrador de bola parada, líder vocal"),
        k("Lawrence Shankland", "Hearts", "Centroavante em grande forma (16 gols em 29 jogos na Premiership)"),
        k("Lewis Ferguson", "Bologna", "Meia pivô físico, de volta de grave lesão — herda a função de Gilmour"),
        k("Kieran Tierney", "Celtic", "Lateral versátil em grande forma (5G, 11A); pode ativar um back-5")
      ],
      fortes: [
        "Coesão tática e organização defensiva — bloco compacto e linhas bem assimiladas no 4-2-3-1",
        "Qualidade no meio: McTominay renascido no Napoli, McGinn experiente e Christie organizador",
        "Largura ofensiva de Robertson — principal vetor de criação pela esquerda",
        "Bola parada eficiente — escanteios e faltas com McGinn e Lewis Ferguson como fontes de gol",
        "Lawrence Shankland em grande forma individual (0,58 gols/90 na Premiership escocesa)",
        "Classificação dominante — primeiro grupo liderado pela Escócia em 44 anos"
      ],
      fracos: [
        "Ausência de um 9 de elite — nenhum atacante com histórico consistente em alto nível europeu",
        "Goleiros sem ritmo regular — Gordon fez só 3 jogos em 25-26; Gunn sem consistência",
        "Dupla central incerta — Clarke mudou os zagueiros nas últimas 10 partidas; Hanley (34) com lesões",
        "Lacuna técnica contra elites — laterais expostos em transições contra Brasil ou Marrocos",
        "Billy Gilmour ausente — principal distribuidor de baixo, perdido por lesão",
        "Largura direita limitada — Gannon-Doak jovem (20) e com poucas aparições na Premier League"
      ],
      tatica: {
        ofensiva: "Três eixos: a largura de Robertson empurrando alto com cruzamentos consistentes; as corridas tardias de McTominay vindo do meio; e a bola parada como vetor vital de gol, via McGinn e Lewis Ferguson.",
        defensiva: "Dois blocos compactos (médio e baixo) com linhas bem organizadas; pressing coordenado, não agressivo; fraqueza na dupla central inconstante e nas transições quando Robertson sobe.",
        semBola: "Não é time de pressão alta agressiva; recua rápido à forma defensiva e prioriza fechar linhas de passe verticais; McTominay e Christie tapam espaços de transição antes da reorganização.",
        geral: "Organização defensiva e solidez coletiva em bloco médio/baixo; a identidade de Clarke prioriza ser difícil de bater e a disciplina tática acima do futebol ofensivo criativo."
      },
      comoChega: "Classificação histórica — primeira vez em 44 anos liderando um grupo eliminatório, com vitória empolgante sobre a Dinamarca (4-2). Mas os amistosos de março preocuparam (0-1 Japão, 0-1 Costa do Marfim). O 4-1 sobre o Curaçao restaurou o ânimo, embora a lesão de Billy Gilmour tenha sido um golpe duro na reta final.",
      expectativa: "Avançar da fase de grupos pela primeira vez na história (objetivo declarado de Clarke); o realista é o 3º lugar com 3-4 pontos, ou surpreendentemente o 2º se superar o Marrocos com atuação defensiva perfeita.",
      statsLinha: "Eliminatórias UEFA 25-26: 4V-1E-1D em 6 jogos (13 gols marcados, 7 sofridos). Amistoso vs Curaçao (30/05/2026): 66,5% de posse com 18 chutes (11 no alvo).",
      resumo: "A Escócia chega com o elenco mais competitivo em décadas, liderada pelo renascimento de McTominay no Napoli e pela solidez de Clarke, mas com fragilidades ofensivas (sem 9 de elite, Gilmour fora, goleiro incerto) e exposição em transições — a passagem é um desafio real, mas o formato e um Haiti acessível abrem uma janela viável."
    },

    "Haiti": {
      formacao: "4-2-3-1",
      xi: [
        p("Johny Placide", "GK", "GOL", "SC Bastia"),
        p("Carlens Arcus", "RB", "DEF", "Angers"),
        p("Ricardo Adé", "CB", "DEF", "LDU Quito"),
        p("Hannes Delcroix", "CB", "DEF", "FC Lugano"),
        p("Duke Lacroix", "LB", "DEF", "Colorado Springs"),
        p("Jean-Ricner Bellegarde", "CM", "MEI", "Wolverhampton"),
        p("Leverton Pierre", "DM", "MEI", "FC Vizela"),
        p("Josué Casimir", "RM", "MEI", "Auxerre"),
        p("Ruben Providence", "LM", "MEI", "Almere City"),
        p("Derrick Etienne Jr.", "RW", "ATA", "Toronto FC"),
        p("Wilson Isidor", "ST", "ATA", "Sunderland")
      ],
      duvidas: "Duckens Nazon (32, Esteghlal) disputa vaga com Isidor ou pode formar dupla num 4-4-2; o lado esquerdo defensivo é incerto entre Lacroix e Martin Expérience.",
      banco: [b("Duckens Nazon", "Esteghlal FC"), b("Jean-Kévin Duverne", "KAA Gent"), b("Lenny Joseph", "Ferencváros"), b("Frantzdy Pierrot", "Çaykur Rizespor"), b("Dominique Simon", "FC Tatran Prešov"), b("Woodensky Pierre", "Violette AC")],
      craques: [
        k("Wilson Isidor", "Sunderland", "Centroavante rápido (1,88m), referência e ameaça em transições"),
        k("Duckens Nazon", "Esteghlal FC", "Maior artilheiro histórico (44 gols), decisivo em grandes momentos"),
        k("Jean-Ricner Bellegarde", "Wolverhampton", "Motor técnico da criação; distribui, cobra faltas e escanteios"),
        k("Ricardo Adé", "LDU Quito", "Guerreiro veterano, líder posicional, 54 caps e muita experiência"),
        k("Hannes Delcroix", "FC Lugano", "Zagueiro versátil, formação europeia e ameaça aérea"),
        k("Derrick Etienne Jr.", "Toronto FC", "Lateral ofensivo veterano; amplitude e alívio defensivo")
      ],
      fortes: [
        "Velocidade e transição direta: Isidor e Nazon, dupla rápida e física, exploram o espaço nas costas",
        "Bellegarde como motor técnico: o jogador mais qualificado, responsável pela criação e cobranças",
        "Artilheiro com big moments: Nazon com 44 gols em 76 jogos, artilheiro da CONCACAF nas Eliminatórias (6 gols)",
        "Bloco defensivo organizado: linha de quatro europeia, com Delcroix e Adé e boa estatura aérea",
        "Resiliência e unidade: classificaram-se sem jogar em casa, com identidade coletiva forte",
        "Bola parada ofensiva: Bellegarde bate bem; Adé e Delcroix são ameaças no cruzamento"
      ],
      fracos: [
        "Abismo de qualidade contra Brasil e Marrocos: a defesa pode ser sobrecarregada",
        "Irregularidade ofensiva: Isidor passou 6 meses sem marcar em 2025; Nazon (32) em transição",
        "Lado esquerdo vulnerável: Martin Expérience e Duke Lacroix com debilidades identificadas",
        "Falta de volume de posse e construção: dependência extrema da transição imediata",
        "Pouca experiência de Copa: média de 24 anos, muitos na primeira grande competição",
        "Goleiro-capitão com 38 anos: Placide na 3ª divisão francesa levanta dúvidas de nível recente"
      ],
      tatica: {
        ofensiva: "Transição rápida e verticalidade: recuperação no bloco médio-baixo e passe imediato para Isidor ou Nazon no espaço; Bellegarde como estação de lançamento, sem buscar dominar a posse.",
        defensiva: "Organização em 4-2-3-1/4-4-2: dois blocos compactos (pressão relativa no terço médio, compactação no defensivo), largura estreita para fechar os corredores centrais e forçar o cruzamento.",
        semBola: "Pressão moderada, não alta: a resposta à perda é o sprint de volta ao bloco; PPDA não elevado, preservando velocidade para as transições ofensivas.",
        geral: "Identidade de underdog consciente: não ganha o jogo, ganha momentos; mantém o jogo vivo, busca 2-3 chances de qualidade e evita goleadas. Plano A 4-2-3-1, Plano B 4-4-2 de contenção, Plano C hipotético 5-4-1."
      },
      comoChega: "Haiti chega com estabilidade emocional rara após a goleada histórica de 4-0 sobre a Nova Zelândia em 2/jun. Campanha de qualificação heroica sem jogar em casa (todos os 'mandos' em Curaçao). Sem lesões graves até 3/jun; visto de Woodensky Pierre resolvido em 2/jun. Grupo concentrado na Flórida desde maio.",
      expectativa: "O objetivo realista é não ser varrido e surpreender contra a Escócia; a projeção aponta 4º lugar no Grupo C. O teto seria 1 ponto ou mais (melhor resultado da história, superando os 0 pontos de 1974); o piso realista é 0 pontos com placar digno.",
      statsLinha: "Gols/jogo é a média entre Eliminatórias (9 em 6 jogos) e amistosos 2026 (6 em 4 jogos). xG e posse indisponíveis: FBref/Statsbomb não cobrem a CONCACAF neste ciclo — qualquer número seria inventado, como o próprio guia admite.",
      resumo: "Haiti volta ao palco mundial 52 anos depois — equipe inteiramente de diáspora, sob crise humanitária, construída na velocidade em transição de Isidor e Nazon e liderada tecnicamente por Bellegarde; projetada para o 4º no Grupo C, com chance de surpreender a Escócia."
    },

    /* ===================== GRUPO B ===================== */
    "Suíça": {
      formacao: "4-2-3-1",
      duvidas: "Noah Okafor pode entrar se recuperado da lesão na panturrilha; Djibril Sow disputa a terceira posição do meio com Jashari; Zeki Amdouni volta de ruptura de LCA com pouca atividade na temporada.",
      banco: [b("Yvon Mvogo", "Lorient"), b("Eray Cömert", "Valencia"), b("Luca Jaquez", "VfB Stuttgart"), b("Djibril Sow", "Al-Shabab"), b("Noah Okafor", "Leeds United"), b("Zeki Amdouni", "Burnley")],
      craques: [
        k("Granit Xhaka", "Sunderland", "Metrônomo — distribuição, liderança e pênaltis"),
        k("Manuel Akanji", "Inter Milan", "Líbero moderno — saída de bola e leitura de jogo"),
        k("Gregor Kobel", "Borussia Dortmund", "Goleiro de elite — linha alta e reflexos rápidos"),
        k("Dan Ndoye", "Nottingham Forest", "Ala direito veloz — driblador e finalizador"),
        k("Breel Embolo", "Stade Rennes", "Centroavante físico — âncora ofensiva e pressão"),
        k("Ardon Jashari", "AC Milan", "Meia box-to-box técnico — condução vertical")
      ],
      fortes: [
        "Espinha dorsal de alto nível europeu: Akanji (Inter), Kobel (Dortmund), Xhaka (PL)",
        "Organização e compacidade tática — bloco médio-alto sem ceder espaços em transição",
        "Experiência coletiva: Xhaka (144 caps), Rodríguez (136), integrados há anos",
        "Velocidade nas alas com Ndoye e Vargas, ideais para o contra-ataque",
        "Classificatório dominante: 14 pts em 6 jogos, 14 gols, só 2 sofridos",
        "Xhaka como metrônomo: distribuição de passe e conversão de pênaltis"
      ],
      fracos: [
        "Barreira histórica das oitavas: eliminação nas últimas seis Copas",
        "Perda de Shaqiri (aposentado em 2024); criador individual ainda não consolidado",
        "Lesões relevantes: Okafor (panturrilha), Amdouni (volta de LCA), Rieder (tornozelo)",
        "Profundidade limitada no centroavante: dependência alta de Embolo",
        "Rebaixamento na Nations League A 2024-25 (caiu para a Liga B)",
        "Limitação ofensiva contra a elite: xG pró de só 1,38/jogo no qualifying"
      ],
      tatica: {
        ofensiva: "Xhaka como pivô entre linhas; exploração do corredor direito com Widmer-Ndoye; inversões para os meios-espaços; contra-ataque vertical rápido com os extremos.",
        defensiva: "Bloco médio-alto compacto (1-5-4-1 sem bola); linha alta com os zagueiros empurrando (pitch squeezing); laterais não avançam muito sem posse.",
        semBola: "Pressing man-to-man no terço adversário; Embolo inicia a pressão sobre os zagueiros; contra-pressing imediato após a perda, com vários fechadores centralizados.",
        geral: "Pragmatismo europeu com construção de baixo, posse controlada e pressão por setores; estrutura 3-2-5 na posse, com zagueiros abrindo e Xhaka entre as linhas."
      },
      comoChega: "Classificatório dominante (14 pts em 6 jogos, 14 gols, 2 sofridos); na Euro 2024 chegou às quartas (2-0 sobre a Itália, eliminada nos pênaltis pela Inglaterra). Lesões em Okafor, Amdouni e Rieder antes da Copa; o 4-1 sobre a Jordânia (31/mai/2026) confirmou bom aproveitamento.",
      expectativa: "1º ou 2º no Grupo B, com avanço obrigatório às oitavas; o objetivo realista são as quartas, quebrando a maldição da seleção que não passa das oitavas desde 2006.",
      statsLinha: "Classificatório UEFA 25-26 (6 jogos): 2,33 gols/jogo, xG 1,38. Posse de 71% no amistoso vs Jordânia (31/mai/2026).",
      resumo: "Seleção equilibrada e experiente, liderada por Xhaka e Akanji, com classificatório dominante e defesa sólida — favorita merecida no Grupo B, mas diante do desafio histórico de superar as oitavas."
    },

    "Canadá": {
      formacao: "4-4-2",
      duvidas: "Alphonso Davies está lesionado e fora do jogo 1 (possível retorno nos jogos 2-3); o gol ainda não está definido entre St. Clair e Crépeau; Ali Ahmed volta de lesão muscular, mas disponível; Bombito é monitorado após sair mancando vs Uzbequistão.",
      banco: [b("Alphonso Davies", "Bayern Munich"), b("Liam Millar", "Kilmarnock"), b("Jonathan Osorio", "Toronto FC"), b("Tani Oluwaseyi", "Villarreal"), b("Mathieu Choinière", "CF Montreal"), b("Maxime Crépeau", "Orlando City")],
      craques: [
        k("Alphonso Davies", "Bayern Munich", "Capitão e diferencial do sistema — cria superioridade pelos flancos"),
        k("Jonathan David", "Juventus", "Principal referência ofensiva e finalizador; chega com confiança abalada"),
        k("Stephen Eustáquio", "LAFC", "Metrônomo do meio — bola parada e organização do build-up"),
        k("Tajon Buchanan", "Villarreal CF", "Desequilibrador pela direita — criação e pressão alta"),
        k("Ismaël Koné", "Sassuolo", "Pulmão do time — dinamismo no meio (6 gols em 36 jogos)"),
        k("Cyle Larin", "Southampton", "Segundo atacante / 9 alternativo — prolífico (9 gols em 15 da Championship)")
      ],
      fortes: [
        "Pressing intenso e estruturado ('Maplepress') — recuperação alta e transições verticais imediatas",
        "Vantagem estrutural: joga os 3 jogos do grupo em casa (Toronto e Vancouver)",
        "Dupla pivô de elite (Eustáquio + Koné) — equilíbrio entre metrônomo e dinamismo",
        "Profundidade de elenco internacionalizado, com nomes em ligas de elite europeia",
        "Disciplina defensiva recente — menos de 1 gol sofrido por jogo nos últimos 15",
        "Flanco direito criativo com Buchanan gerando volume de cruzamentos"
      ],
      fracos: [
        "Dependência excessiva de Davies — lateral esquerda vulnerável sem ele",
        "Jonathan David em crise: 6 gols em 35 jogos de Serie A e 1 desde fevereiro",
        "Histórico sem vitórias em Copas — 6 jogos, 6 derrotas, pressão psicológica real",
        "Indefinição no gol entre St. Clair e Crépeau",
        "Disciplina preocupante — 4 cartões vermelhos em 8 jogos",
        "Seca ofensiva em jogos travados — empates 0-0 vs Colômbia, Equador e Tunísia"
      ],
      tatica: {
        ofensiva: "Ataque gerado pelos flancos — Buchanan (direita) e Davies (esquerda, quando disponível) como alavancas; Jonathan David mais eficaz em movimento entre linhas; Eustáquio lança verticalmente após a recuperação.",
        defensiva: "4-4-2 em bloco médio-alto; duas linhas de quatro com os atacantes como 1º obstáculo ao build-up; zaga grande e física para o jogo aéreo; vulnerabilidade na segunda bola após cruzamento.",
        semBola: "Pressing alto imediato no terço ofensivo (atacantes fecham o goleiro/zaga; alas fecham os laterais); quando o pressing falha, há espaço nas costas dos laterais e no canal central entre as linhas.",
        geral: "4-4-2 de alta intensidade baseado em pressing agudo ('Maplepress') e transições verticais; identidade coletiva construída em 2 anos com Marsch — recupera no campo adversário e busca 3-4 passes para o gol."
      },
      comoChega: "Forma positiva: 14V/1E/0D nos últimos 15 jogos desde março/2025, com 2-0 sobre o Uzbequistão (2/jun) como último teste. Lesionados: Marcelo Flores (LCA, fora), Davies (hamstring, fora do jogo 1), Bombito (monitorado), Ali Ahmed (disponível). Clima interno positivo; Marsch renovado até 2030.",
      expectativa: "Avançar às oitavas pela primeira vez na história do Canadá — objetivo realista, com 79,8% de probabilidade (Opta); o cenário mais provável é o 2º lugar atrás da Suíça.",
      statsLinha: "Posse de 49,3% na semi da Copa América 2024 vs Argentina (TOP 1). xG por jogo não disponível em fontes públicas auditáveis para 25-26 (o Canadá não disputou eliminatórias regionais).",
      resumo: "O Canadá é a melhor geração de sua história — pressing intenso com identidade tática clara, vantagem inédita de jogar em casa e metas históricas modestas (a 1ª vitória em Copa); as lesões de Davies e a baixa forma de David são as incógnitas que definem o avanço."
    },

    "Bósnia e Herzegovina": {
      formacao: "4-4-2",
      duvidas: "A titularidade de Gigović e Tahirović no meio pode variar conforme o adversário; se Džeko não estiver 100%, Demirović pode ocupar o centroavante com Tabaković como '10' num 4-2-3-1 alternativo.",
      banco: [b("Kerim Alajbegović", "Red Bull Salzburg"), b("Ivan Šunjić", "Pafos"), b("Amir Hadžiahmetović", "Hull City"), b("Dennis Hadžikadunić", "Sampdoria"), b("Nidal Čelik", "RC Lens"), b("Samed Bazdar", "Jagiellonia")],
      craques: [
        k("Edin Džeko", "Schalke 04", "Capitão, centroavante de área — 73 caps e 40 gols pela seleção"),
        k("Ermedin Demirović", "VfB Stuttgart", "Segundo atacante dinâmico — 12G+3A na Bundesliga 25-26"),
        k("Esmir Bajraktarević", "PSV Eindhoven", "Ponta direita veloz (21 anos) — novo símbolo geracional"),
        k("Nikola Vasilj", "FC St. Pauli", "Goleiro sólido — time da temporada da Bundesliga 24-25"),
        k("Amar Dedić", "Benfica", "Lateral direito técnico em ascensão — 4 assistências em 25-26"),
        k("Sead Kolašinac", "Atalanta", "Veterano de 2014 — liderança defensiva (32 anos)")
      ],
      fortes: [
        "Poder de fogo autêntico: Demirović (12G Bundesliga), Tabaković (11-12G), Džeko ainda em nível de área",
        "Garra em mata-mata: eliminou País de Gales e a tetracampeã Itália na repescagem sem errar pênalti",
        "Experiência europeia na defesa: Kolašinac (Atalanta), Vasilj (time da temporada da Bundesliga)",
        "Jovens explosivos: Bajraktarević (21, 4G+4A Eredivisie) e Alajbegović (18, 9G+3A na Áustria)",
        "Mais take-ons (97) e duelos ganhos (544) das eliminatórias UEFA — perfil físico e agressivo",
        "Unidade tática sob Barbarez — coesão e motivação após o milagre de Zenica"
      ],
      fracos: [
        "Dependência excessiva de Džeko aos 40 anos: sem ele, fica sem líder técnico e emocional",
        "Fragilidade defensiva: Kolašinac (32) com velocidade limitada; dupla central de experiência relativa",
        "Meio-campo abaixo dos rivais: Tahirović e Gigović em 2º escalão vs Xhaka e Freuler",
        "Inexperiência em Copa: só Džeko e Kolašinac jogaram 2014; elenco jovem em grandes torneios",
        "Derrota de 0-4 para o Panamá em amistoso (6/jun) indica ajuste físico questionável",
        "Profundidade limitada nas pontas: sem 2º winger de nível Bundesliga"
      ],
      tatica: {
        ofensiva: "Três pilares: Džeko como pivô de costas que segura e distribui; Bajraktarević acelerando em 1x1 pela direita; Demirović finalizando de dentro da área. Lançamentos longos para a profundidade contra blocos baixos.",
        defensiva: "Bloco médio-baixo em 4-4-2 compacto; recua até o meio na perda, sem pressão alta; disciplina e organização como pilares; Džeko não retorna na bola parada defensiva (vulnerabilidade conhecida).",
        semBola: "Pressão baixa sistemática (PPDA >12); compactação rápida das linhas; o momento mais perigoso é a transição após recuperar — lançamentos longos para Džeko ou cruzamentos imediatos.",
        geral: "Modelo balcânico moderno: 4-4-2 compacto com transições verticais rápidas, sem pressão alta sistemática, focado na bola parada (ofensiva e defensiva) e nos duelos individuais."
      },
      comoChega: "Em euforia pela eliminação épica da Itália em Zenica (março/2026), mas o 0-4 para o Panamá (6/jun) indica dificuldade de ajuste físico pré-Copa. Džeko recuperado da lesão no ombro, confirmado em maio.",
      expectativa: "Avançar como melhor terceiro colocado no novo formato; 62,6% de chance de classificação segundo a Opta, dependendo muito de vencer o Catar e pontuar contra Canadá ou Suíça.",
      statsLinha: "Eliminatórias (Grupo H): 17 gols em 8 jogos. Vs Itália na repescagem (com 1 a mais): 1,73 xG, 30 chutes, 65% de posse (dados inflados pela superioridade numérica). 0-0 com a Macedônia do Norte (69% de posse) e 0-4 com o Panamá.",
      resumo: "Classificada histórica ao eliminar a Itália na repescagem, a Bósnia chega com Džeko aos 40 anos como referência e busca avançar como melhor terceiro, apostando em transições rápidas e bloco defensivo organizado."
    },

    "Catar": {
      formacao: "4-2-3-1",
      duvidas: "A dobradinha defensiva (Ahmed Fathi vs Karim Boudiaf ao lado de Assim Madibo) pode variar conforme o adversário; Edmilson Junior pode ceder a Abdulaziz Hatem se o técnico quiser mais criatividade pelo meio.",
      banco: [b("Abdulaziz Hatem", "Al-Rayyan"), b("Mohammed Muntari", "Al-Sadd"), b("Karim Boudiaf", "Al-Duhail"), b("Jassem Gaber", "Al-Sadd"), b("Tahsin Mohammed", "Al-Duhail"), b("Homam Ahmed", "Cultural Leonesa")],
      craques: [
        k("Akram Afif", "Al-Sadd", "Motor ofensivo — criação e finalização de nível mundial no contexto asiático"),
        k("Almoez Ali", "Al-Duhail", "Artilheiro histórico (60+ gols), maior goleador das eliminatórias AFC"),
        k("Meshaal Barsham", "Al-Sadd", "Melhor goleiro da Copa da Ásia 2023 — consistência defensiva"),
        k("Hassan Al-Haydos", "Al-Sadd", "Capitão experiente (188 caps) — liderança e distribuição"),
        k("Boualem Khoukhi", "Al-Sadd", "Liderança defensiva — forte no ar e organizador da defesa"),
        k("Assim Madibo", "Al-Wakrah", "Motor do meio — recuperação e proteção defensiva")
      ],
      fortes: [
        "Coesão tática: elenco quase inteiro da Qatar Stars League, muito entrosado",
        "Akram Afif: diferencial individual de classe, criação e finalização raras na Ásia",
        "Artilharia nas eliminatórias AFC: média de 3,6 gols por partida",
        "Experiência de torneio: bicampeão da Copa da Ásia (2019 e 2023)",
        "Goleiro de nível continental em Barsham, consistente e decisivo",
        "Liberdade psicológica: chega sem a pressão de sede de 2022"
      ],
      fracos: [
        "Defesa vulnerável: 24 gols em 10 partidas recentes, só 10% de clean sheets",
        "Laterais como elo mais fraco: dificuldade contra atacantes velozes na largura",
        "Dependência excessiva de Afif: sem 2ª opção de criação comparável",
        "Adaptação ao técnico ainda em consolidação (Lopetegui desde maio/2025)",
        "Zero experiência europeia (25 de 26 jogadores só na Qatar Stars League)",
        "Fragilidade em bola parada: falta de altura, sofre em cabeçadas"
      ],
      tatica: {
        ofensiva: "Circulação pela lateral e pelo meio, passe de ruptura para Afif no meio-espaço, que dribla ou serve Ali no pivô; Al-Haydos como 10 clássico entre linhas; Edmilson Junior com mobilidade pela esquerda.",
        defensiva: "Bloco compacto de 4 defensores com cinturão de médios (Madibo) para conter; não pressiona alto, absorve e contra-ataca; vulnerável em segundas bolas e bola parada por falta de altura.",
        semBola: "Sem pressing alto; recompactação rápida após a perda; Madibo responsável pela recuperação imediata; velocidade de Edmilson e Ali para explorar as costas em transição.",
        geral: "4-2-3-1 com posse controlada (~58%), bloco médio defensivo e transição rápida; o plano é liberar Afif nos meios-espaços e explorar Almoez Ali nas costas da defesa."
      },
      comoChega: "Ciclo misto: dominante na Ásia (bicampeão da Copa da Ásia 2023), mas com sinais de fragilidade fora do continente. Perdeu o amistoso pré-Copa para a Irlanda (1-0, em Dublin), revelando limitação ofensiva. Sem lesões graves; clima estável com a volta de Al-Haydos da aposentadoria.",
      expectativa: "Sair da fase de grupos com ao menos 1 ponto já seria positivo; o piso mais provável é a eliminação no Grupo B, possivelmente em último; o teto seriam 4-5 pontos e tentar o avanço como melhor 3º (~8,9%).",
      statsLinha: "FootyStats (janela de ~10 jogos, misturando amistosos e qualificatórias AFC): 0,7 gol/jogo, xG 1,19, 58% de posse — contexto de adversários heterogêneos.",
      resumo: "Seleção com um talento genuinamente especial em Afif e um sistema funcional, porém frágil na defesa; técnico europeu de classe (Lopetegui), mas com pouco tempo de trabalho. As chances reais de avançar são mínimas num grupo forte — mas em noites inspiradas de Afif, como na Copa da Ásia 2023, tudo é possível."
    },

    /* ===================== GRUPO D ===================== */
    "Estados Unidos": {
      formacao: "3-4-2-1",
      duvidas: "Chris Richards é dúvida crítica para a estreia (lesão no tornozelo em 17/mai); se não recuperar, Mark McKenzie ou Tim Ream entra como zagueiro central.",
      banco: [b("Ricardo Pepi", "PSV Eindhoven"), b("Haji Wright", "Coventry City"), b("Gio Reyna", "B. Mönchengladbach"), b("Mark McKenzie", "Genoa"), b("Brenden Aaronson", "Union Berlin"), b("Tim Ream", "Charlotte FC")],
      craques: [
        k("Christian Pulisic", "AC Milan", "Maior artilheiro e assistente dos EUA em ligas top-5; líder em campo"),
        k("Folarin Balogun", "AS Monaco", "Centroavante móvel — 18 gols na Ligue 1 25-26; favorito à titularidade"),
        k("Tyler Adams", "Bournemouth", "Coração defensivo — contenção; único '6' nato do elenco"),
        k("Weston McKennie", "Juventus", "Versatilidade, criação e equilíbrio — a alma da seleção"),
        k("Malik Tillman", "Bayer Leverkusen", "Revelação da era Pochettino — criatividade entre linhas"),
        k("Antonee Robinson", "Fulham", "Wingback esquerdo completo, de volta de longa cirurgia")
      ],
      fortes: [
        "Profundidade ofensiva histórica: Balogun (18), Pepi (19) e Wright (18) somam 55 gols em 25-26",
        "Pulisic no pico (8G+3A com o Milan em 25-26)",
        "Identidade tática clara sob Pochettino, com duplo pivô Adams-McKennie consolidado",
        "Home advantage genuíno: 3 jogos de grupo nos EUA (SoFi e Lumen Field)",
        "Wingbacks dinâmicos (Robinson e Dest) como pilares do sistema ofensivo",
        "Malik Tillman como carta criativa entre linhas, revelação da Copa Ouro 2025"
      ],
      fracos: [
        "Dependência crítica de Chris Richards: sem ele a zaga fica frágil (Ream 38; McKenzie/Trusty cru)",
        "Sem profundidade no meio defensivo: Adams é o único '6' nato",
        "Gio Reyna convocado com só 137 minutos em 2026 (baixíssimo ritmo)",
        "Fragilidade contra a elite europeia (5-2 vs Bélgica e 0-2 vs Portugal em março)",
        "Linha alta exposta a bolas em profundidade (risco vs Güler e Yıldız da Turquia)",
        "Instabilidade de formação: Pochettino testou 28 jogadores em 4 formações nos amistosos"
      ],
      tatica: {
        ofensiva: "Saída escalonada dos pivôs forçando decisões; construção combinativa com o 9 em chegada/saída; exploração dos meios-espaços pelos meias com cruzamentos rasos; Pulisic como portador que atrai marcação.",
        defensiva: "Bloco médio em 4-4-2 com compressão entre linhas; linha alta proposital; vulnerável às bolas em profundidade quando os wingbacks não voltam; frágil no contra-ataque direto.",
        semBola: "Pressão man-oriented com o 9 bloqueando a linha central; o lado da bola pressiona imediatamente; o interior fecha o corredor central para criar superioridade no flanco.",
        geral: "Sistema dinâmico que alterna 3-4-2-1 defensivo e 4-2-3-1 com bola, baseado em transições verticais rápidas, wingbacks ofensivos e pressão alta-média."
      },
      comoChega: "Após oscilar (5-2 vs Bélgica e 0-2 vs Portugal em março), retomou confiança com o 3-2 sobre o Senegal (31/mai/2026), com Pulisic marcando pela 1ª vez em 5 meses. Chris Richards é dúvida crítica para a estreia (lesão em 17/mai); Gio Reyna chega com ritmo muito baixo.",
      expectativa: "Avançar como 1º colocado (home advantage e favoritismo claro), com teto realista nas quartas se Richards recuperar e Adams funcionar plenamente.",
      statsLinha: "Vs Senegal (3-2): 14 chutes a 7, 4 no alvo a 3. Série 25-26 (set-nov): 4V-1E-1D em 6 jogos vs Top 30-45 FIFA; 2,17 gols/jogo, 44,2% de posse. Em março: 0-2 vs Bélgica e Portugal.",
      resumo: "Seleção anfitriã com atacantes em forma histórica (55 gols combinados) e sistema tático claro sob Pochettino, favorita no grupo, mas dependente do zagueiro-chave Chris Richards e com inconsistência preocupante contra nações europeias de elite."
    },

    "Turquia": {
      formacao: "4-2-3-1",
      duvidas: "Kenan Yıldız se recuperou de contusão na panturrilha e foi confirmado apto, mas o nível físico para os 90 minutos da estreia é incerteza; Demiral vem de liga de menor intensidade e sua forma no alto nível europeu é interrogação.",
      banco: [b("Can Uzun", "Eintracht Frankfurt"), b("Deniz Gül", "FC Porto"), b("Orkun Kökçü", "Beşiktaş"), b("Barış Alper Yılmaz", "Galatasaray"), b("Çağlar Söyüncü", "Fenerbahçe"), b("Altay Bayındır", "Manchester United")],
      craques: [
        k("Arda Güler", "Real Madrid", "Meia ofensivo de talento puro — visão excepcional, 4A nas eliminatórias"),
        k("Kenan Yıldız", "Juventus", "Extremo biambidestro — melhor sub-23 da Serie A, 76 chances criadas em 24-25"),
        k("Hakan Çalhanoğlu", "Inter de Milão", "Capitão e metrônomo — 100+ caps, cobra escanteios e pênaltis"),
        k("Ferdi Kadıoğlu", "Brighton", "Lateral versátil e moderno — jogador do ano do Brighton"),
        k("Merih Demiral", "Al Ahli", "Herói da Euro 2024 — 4 gols, físico e agressivo no aéreo"),
        k("Kerem Aktürkoğlu", "Fenerbahçe", "Gol da classificação no Kosovo — velocidade e instinto decisivo")
      ],
      fortes: [
        "Dupla Güler-Yıldız com talento mundial — o par sub-25 mais excitante de qualquer seleção",
        "Çalhanoğlu como metrônomo organizador, distribuição de classe e 100+ caps",
        "Ferdi Kadıoğlu como lateral moderno, versátil e técnico",
        "Gols distribuídos por 12 marcadores nas eliminatórias, reduzindo a dependência individual",
        "Mentalidade resiliente: respondeu a um 0-6 com 6-1 e venceu dois 1-0 na repescagem",
        "Montella pragmático que flexibiliza a formação (4-2-3-1, 4-3-3, 3-5-2)"
      ],
      fracos: [
        "Ausência de centroavante clássico — Aktürkoğlu, Gül e Uzun são mais criadores que '9'",
        "Linha defensiva vulnerável ao pressing alto, especialmente Demiral (vindo da Saudi Pro League)",
        "Dupla pivô exposta com Çalhanoğlu alto; Özcan e Ayhan podem ser sobrecarregados",
        "Inconsistência sob pressão: alterna de nível (0-6 vs Espanha, 6-1 vs Bulgária)",
        "Transições negativas lentas ao perder a bola avançado — vulnerável ao contra-ataque",
        "Yıldız com recuperação incompleta de panturrilha; condicionamento abaixo do ideal"
      ],
      tatica: {
        ofensiva: "Ataca pelos flancos com Güler (esquerda) e Yıldız (direita) fluidos que trocam de lado; Çalhanoğlu como 10 entre linhas criando espaços e cobrando bola parada; transição letal com a velocidade de Aktürkoğlu.",
        defensiva: "Bloco médio (linha entre os círculos), não pressão alta generalizada; cede posse e espera recuperar em faixas específicas; vulnerável em bola parada e cruzamento; Çakır acima da média como último recurso.",
        semBola: "Não é equipe de alta pressão; bloco médio-baixo com Aktürkoğlu como único pressionador ativo consistente; recupera pela disciplina do duplo pivô e pela agressividade dos zagueiros (Demiral).",
        geral: "4-2-3-1 fluido: bloco médio, transição rápida e criatividade individual nos 30m finais; não controla pela posse, mas pela qualidade técnica em espaços reduzidos, com forte componente emocional."
      },
      comoChega: "Moral elevada após 24 anos fora da Copa: qualificou via repescagem (1-0 sobre Romênia e Kosovo). Amistosos recentes: 4-0 sobre a Macedônia do Norte (1/jun), com gols de Kökçü, Uzun, Gül e Barış Alper. Nervosismo natural pelo maior torneio em 24 anos, mas acampamento unido em Fort Lauderdale.",
      expectativa: "Avançar às oitavas como 2º do Grupo D, com 6-7 pontos, é o objetivo realista; há qualidade na dupla Güler-Yıldız e em Çalhanoğlu para surpreender no mata-mata, com chance real de quartas se evitar colapso defensivo.",
      statsLinha: "Eliminatórias UEFA (Grupo E, set-nov/2025): 2,83 gols/jogo e 2,00 sofridos, com adversários variados (Espanha no topo; Geórgia/Bulgária na base). Posse de 45% vs Geórgia (out/2025); xG confiável indisponível para o ciclo.",
      resumo: "A Turquia volta à Copa após 24 anos com a geração mais talentosa da história recente — Güler e Yıldız (ambos 21) formam a espinha dorsal de um ataque fluido capaz de surpreender qualquer um — mas a volatilidade defensiva e a falta de um '9' clássico colocam em xeque até onde esse ciclo pode ir."
    },

    "Austrália": {
      formacao: "3-4-2-1",
      duvidas: "Jacob Italiano na ala direita é a maior incerteza (só 4 caps, pouco testado em alto nível); Cristian Volpato pode substituir Connor Metcalfe na meia ofensiva conforme o nível defensivo exigido.",
      banco: [b("Ajdin Hrustic", "Heracles Almelo"), b("Cristian Volpato", "Sassuolo"), b("Mathew Leckie", "Melbourne City"), b("Milos Degenek", "Apoel FC"), b("Aziz Behich", "Melbourne City"), b("Paul Izzo", "Randers FC")],
      craques: [
        k("Mathew Ryan", "Levante UD", "Capitão — liderança e defesas decisivas"),
        k("Jordan Bos", "Feyenoord", "Principal criador ofensivo — ala de impacto"),
        k("Mohamed Toure", "Norwich City", "Centroavante de referência — 9 gols em 11 jogos na Championship"),
        k("Nestory Irankunda", "Watford", "Velocidade e desequilíbrio em transições"),
        k("Jackson Irvine", "FC St. Pauli", "Liderança, trabalho defensivo, motor do time"),
        k("Harry Souttar", "Leicester City", "Liderança aérea, passe incisivo e gols de bola parada")
      ],
      fortes: [
        "Organização defensiva sólida sob Popovic: só 0,7 gol sofrido por jogo nas Eliminatórias",
        "Jordan Bos como arma ofensiva real: 4G+7A na Eredivisie 25-26",
        "Mohamed Toure em forma explosiva: 9 gols em 11 jogos na Championship",
        "Mathew Ryan, capitão indiscutível e goleiro de classe europeia",
        "Identidade coletiva clara e modelo tático testado por Popovic",
        "Primeira classificação direta desde 2014, mostrando consistência"
      ],
      fracos: [
        "Ausência de Riley McGree: perda de criatividade no meio",
        "Lewis Miller lesionado: ala direita vulnerável com Italiano pouco testado",
        "Dependência da solidez defensiva: só ~40% de posse média nas Eliminatórias",
        "Profundidade limitada no meio criativo além de McGree",
        "17 dos 26 jogadores na primeira Copa — inexperiência generalizada",
        "Questões físicas: Irvine e Souttar chegam com poucos jogos de ritmo"
      ],
      tatica: {
        ofensiva: "Criação sobretudo pela ala esquerda (Bos em overlap) e bola longa para Toure; a bola parada é a segunda fonte importante de gols.",
        defensiva: "Bloco médio-baixo que vira 5-4-1 defensivo; trio de zaga sólido fisicamente, sem pressing agressivo em linha de impedimento.",
        semBola: "Pressão calculada e orientada (blocking angles) em vez de pressing intenso; transições rápidas após a recuperação; vulnerável quando os alas sobem demais e a bola se perde no campo adversário.",
        geral: "3-4-2-1 compacto e disciplinado, construído para ceder posse e contra-atacar verticalmente em transições rápidas."
      },
      comoChega: "Chega em transição bem gerenciada sob Popovic, com classificação direta pela primeira vez desde 2014. Clima interno positivo apesar dos desfalques de McGree e Miller, que complicam o plano ofensivo.",
      expectativa: "Terminar em 2º ou 3º do Grupo D e avançar à fase de 32; a Opta dá 58,8% de chance de avanço, com objetivo declarado de chegar às quartas.",
      statsLinha: "Eliminatórias AFC (10 jogos, set/2024-jun/2025): 16 gols marcados, 7 sofridos; 1,6 gol/jogo e ~40,5% de posse. Adversários heterogêneos limitam a extrapolação para o nível de Copa.",
      resumo: "A Austrália chega ao 7º Mundial com o primeiro técnico genuinamente 'Socceroo' desde Hiddink, um sistema defensivo reconstruído sob pressão e dois desfalques cirúrgicos que complicam o plano de segurar um grupo aberto nas primeiras rodadas."
    },

    "Paraguai": {
      formacao: "4-2-3-1",
      duvidas: "Enciso vs Sosa na direita (qualidade técnica vs trabalho defensivo); Cubas pode ser preferido contra ameaça ofensiva maior no segundo volante.",
      banco: [b("Julio Enciso", "Strasbourg"), b("Kaku", "Al Ain"), b("Gustavo Caballero", "Portsmouth"), b("Isidro Pitta", "RB Bragantino"), b("Gabriel Ávalos", "Independiente"), b("Fabián Balbuena", "Grêmio")],
      craques: [
        k("Gustavo Gómez", "Palmeiras", "Capitão e líder defensivo — referência aérea"),
        k("Miguel Almirón", "Atlanta United", "Catalisador do ataque — criador de transições"),
        k("Diego Gómez", "Brighton & Hove Albion", "Motor do jogo — transições defensivas"),
        k("Julio Enciso", "Strasbourg", "Desequilíbrio individual e cobranças de falta"),
        k("Antonio Sanabria", "Cremonese", "Pivô de área — artilheiro das Eliminatórias"),
        k("Omar Alderete", "Sunderland", "Parceiro sólido de Gómez — saída de bola")
      ],
      fortes: [
        "Organização defensiva de nível continental: só 10 gols sofridos em 18 jogos nas Eliminatórias",
        "Capacidade de bater os grandes: vitórias sobre Brasil (1-0), Argentina (2-1) e Uruguai (2-0) em casa",
        "Transições e contra-ataques organizados com liberação rápida dos extremos",
        "Bola parada como arma (ataque e defesa), com Gómez e Alonso como ameaças aéreas",
        "Coesão de grupo e capital emocional elevado sob Alfaro",
        "Mentalidade competitiva e pragmática em jogos decisivos"
      ],
      fracos: [
        "Carência ofensiva crônica: só 14 gols em 18 jogos (o menor entre os classificados diretos)",
        "Sanabria em má fase de clube: 1 gol em 20 jogos pelo Cremonese em 25-26",
        "Dependência de um único criador (Almirón); neutralizado, o ataque perde eficiência",
        "Rendimento precário fora: só 8 pontos em 9 jogos visitantes nas Eliminatórias",
        "Sombra da Copa América 2024: eliminação na fase de grupos com 3 derrotas",
        "Pouco apego à posse; dificuldade para impor domínio"
      ],
      tatica: {
        ofensiva: "Verticalidade imediata após a recuperação em 2-3 passes; Almirón como carregador que arrasta marcadores; bola parada como via alternativa (escanteios e faltas).",
        defensiva: "Linha compacta a 35-40m do gol, com a dupla pivô fechando os corredores centrais; extremos recuam para a ala; Gómez e Alderete focam no bloqueio de linha.",
        semBola: "Pressing seletivo no terço médio com recuo rápido; dupla pivô instruída a cortar contra-ataques; reorganização do bloco em vez de pressão alta sustentada.",
        geral: "Bloco médio-baixo bem sincronizado com transições rápidas; joga para não perder e aproveita o contra-ataque, sem buscar dominar tecnicamente."
      },
      comoChega: "Classificado após 16 anos de ausência, em ótima forma: invicto por 9 jogos nas Eliminatórias até setembro/2025. Venceu o amistoso de despedida contra a Nicarágua (2-1, em 5/jun/2026); plantel completo, sem lesões e com clima interno positivo.",
      expectativa: "Classificação às oitavas como 2º do Grupo D; o mercado estima ~58% de probabilidade de avançar.",
      statsLinha: "Eliminatórias CONMEBOL (18 jogos, 2023-2025): 14 gols marcados, 10 sofridos (0,78 gol/jogo); sem cobertura consistente de xG em bases públicas para a seleção.",
      resumo: "Seleção defensivamente sólida e mentalmente forte, de volta à Copa após 16 anos sob Gustavo Alfaro, que canaliza garra e organização; tem criadores de qualidade (Almirón, Enciso, Diego Gómez), mas a carência ofensiva estrutural é o maior risco para as oitavas."
    },

    /* ===================== GRUPO E ===================== */
    "Alemanha": {
      formacao: "4-2-3-1",
      duvidas: "Sané pode ceder a Lennart Karl (18) em busca de mais velocidade; Havertz é falso-9 e pode dar lugar a Deniz Undav (19 gols na Bundesliga) conforme a necessidade.",
      banco: [b("Deniz Undav", "Stuttgart"), b("Lennart Karl", "Bayern Munich"), b("Antonio Rüdiger", "Real Madrid"), b("Nick Woltemade", "Newcastle"), b("Waldemar Anton", "Borussia Dortmund"), b("Angelo Stiller", "Stuttgart")],
      craques: [
        k("Jamal Musiala", "Bayern Munich", "Meia/extremo — drible acelerado, passe vertical e 87% de acerto"),
        k("Florian Wirtz", "Liverpool", "Meia/extremo — rompe blocos; bate escanteios, faltas e pênaltis"),
        k("Joshua Kimmich", "Bayern Munich", "Lateral/capitão (~110 caps) — líder vocal e exímio na bola parada"),
        k("Kai Havertz", "Arsenal", "Falso-9 — cria espaço para Musiala e Wirtz; peça do Arsenal campeão"),
        k("Antonio Rüdiger", "Real Madrid", "Zagueiro líder — agressivo, avança 30+ metros para cobrir"),
        k("Deniz Undav", "Stuttgart", "9 verdadeiro — 19 gols na Bundesliga, 0,77 gol por 90 min")
      ],
      fortes: [
        "Brilho técnico no meio ofensivo: Wirtz-Musiala geram +40% de Expected Threat quando juntos",
        "Profundidade: 26 jogadores de nível europeu com concorrência real em todas as posições",
        "Liderança e estabilidade: Kimmich e Rüdiger veteranos; dupla Tah-Schlotterbeck jovem e técnica",
        "Bola parada eficiente: 28% dos gols desde a Euro 2024",
        "Pressing intenso: PPDA de 8,1 — defende pelo ataque",
        "Identidade clara: gegenpressing vertical, finalização em 5-8s após a recuperação"
      ],
      fracos: [
        "A posição de 9 verdadeiro é interrogação: Havertz, falso-9, tem só 2G+3A em 11 jogos na PL",
        "Musiala com histórico recente de lesão (fratura de fíbula + dor tendinosa)",
        "Wirtz em transição irregular ao Liverpool; forma recente positiva, mas com dúvidas",
        "Vulnerabilidade ao contra se o press falhar: Kimmich e Raum deixam espaço nas costas",
        "Peso psicológico: eliminação na fase de grupos em 2018 e 2022",
        "Dependência de Musiala para a espinha dorsal criativa"
      ],
      tatica: {
        ofensiva: "4-2-3-1 que vira 4-2-2-2 'box' ou 3-4-3 na posse; Musiala e Wirtz ocupam os meios-espaços com troca contínua; Havertz como 'Gravity Nine' cria espaço; saída por Tah-Schlotterbeck + Kimmich como ligação.",
        defensiva: "Bloco médio-alto com a linha de 4 subindo junto da pressão dos atacantes para jogar no impedimento; Rüdiger se adianta 30+m para cobrir; marcação individual e barreira aérea nos escanteios.",
        semBola: "Pressing organizado (PPDA 8,1) com gatilhos (passe de recuo, erro de recepção, lateral); gegenpressing imediato (5-6s) de Wirtz, Musiala e Havertz; vulnerável ao contra quando o press é batido pelos lados.",
        geral: "Gegenpressing vertical: pressão intensa para recuperar, verticalidade imediata e dois criadores de classe mundial. Plano A: 4-2-3-1 com Musiala-Wirtz + press alto; Plano B: 3-4-3 na posse; Plano C: Undav + Karl para mais 9 e velocidade."
      },
      comoChega: "Em forma crescente: venceu as Eliminatórias UEFA com 5V-0E-1D (16 gols, 3 sofridos), foi à semi da Nations League (eliminada por Portugal 2-1) e goleou a Finlândia por 4-0 (31/05/2026, com Undav 2, Wirtz e Musiala). Musiala recuperado da fratura de fíbula, com carga gerenciada.",
      expectativa: "Sair do Grupo E em 1º e avançar às oitavas; candidata genuína a quartas ou semifinal, conforme a qualidade do elenco e a saúde de Musiala.",
      statsLinha: "Eliminatórias UEFA: 2,67 gols/jogo em 6 jogos contra adversários moderados; Nations League contra a elite: 3,0 gols/jogo; amistoso vs Finlândia: 4-0. ~57% de posse.",
      resumo: "Alemanha ressurgida sob Nagelsmann, com a dupla Wirtz-Musiala excepcional, liderança experiente (Kimmich, Rüdiger, Neuer aos 40) e identidade tática clara de gegenpressing vertical; grupo confortável, mas Musiala é o fator crítico em caso de limitação física."
    },

    "Equador": {
      formacao: "4-4-2",
      duvidas: "Pervis Estupiñán tem histórico de lesões musculares graves e foi poupado no último jogo das Eliminatórias; sua presença na estreia (14/06) é dúvida, com Yaimar Medina como opção de emergência.",
      banco: [b("Moisés Ramírez", "Independiente del Valle"), b("Jackson Porozo", "Brighton"), b("Félix Torres", "Internacional"), b("Ángelo Preciado", "Atlético-MG"), b("Alan Minda", "Atlético-MG"), b("Kevin Rodríguez", "Union SG")],
      craques: [
        k("Moisés Caicedo", "Chelsea", "Volante âncora — 3A nas Eliminatórias, o melhor volante do Equador"),
        k("Willian Pacho", "PSG", "Zagueiro líder — campeão da Champions League 25-26"),
        k("Piero Hincapié", "Arsenal", "Zagueiro técnico — finalista da Champions, leitura elevada"),
        k("Enner Valencia", "Pachuca", "Capitão — centroavante de referência, 49 gols pela seleção"),
        k("Kendry Páez", "River Plate", "Joia criativa aos 19 — drible e passe em profundidade"),
        k("Gonzalo Plata", "Flamengo", "Extremo veloz — transições na faixa")
      ],
      fortes: [
        "Solidez defensiva excepcional: só 5 gols sofridos em 18 jogos nas Eliminatórias (melhor da CONMEBOL)",
        "Dupla de zaga nível Champions: Pacho (campeão) e Hincapié (finalista)",
        "Moisés Caicedo no meio: um dos melhores volantes do mundo",
        "Consistência: invicto há 17 jogos, incluindo vitória sobre a Argentina",
        "Flexibilidade tática: transita entre 4-4-2, 4-4-1-1 e 4-2-3-1 sem perder organização",
        "Potencial em transições rápidas, explorando bem a faixa lateral"
      ],
      fracos: [
        "Baixo volume ofensivo: 0,78 gol/jogo, um dos mais fracos entre os classificados",
        "Dependência crítica de Enner Valencia (36), sem substituto de igual impacto",
        "Tendência ao empate: 8 dos 18 jogos empatados, muitos 0-0",
        "Dificuldade contra blocos fechados: cria poucas chances de alta qualidade",
        "Dúvidas físicas: Estupiñán (lesões) e Plata (recuperação)",
        "Sem experiência de mata-mata mundial: nunca venceu um jogo eliminatório em Copas"
      ],
      tatica: {
        ofensiva: "Construção pela saída com o GK e a linha de 4, volantes descendo para iniciar; o padrão é a transição rápida com lançamentos na profundidade para os extremos; Enner Valencia como ponto de referência e Anthony Valencia como motor de pressão.",
        defensiva: "Bloco compacto e organizado, sem ceder espaço entre linhas; linha de 4 alta na posse, recuando ao baixo-médio na perda; dupla Hincapié-Pacho complementar; organização exemplar na bola parada (13 jogos sem sofrer).",
        semBola: "Alterna pressão no terço médio nos primeiros minutos e bloco baixo-médio contra superiores; pressing situacional inteligente; mais perigoso na transição, explorando Plata e a condução de Caicedo.",
        geral: "Identidade defensiva e funcional: não se expõe, ganha de 1-0 ou empata 0-0; coesão excepcional. Plano A: bloco + transição rápida; Plano B: 4-2-3-1 com Páez mais avançado se precisar de gol."
      },
      comoChega: "No melhor momento de sua história, invicto há 17 jogos contra adversários de peso (Argentina, Uruguai, Brasil), com clima interno positivo. A preocupação é a condição de Estupiñán e a fadiga acumulada dos titulares de finais de temporada (Caicedo com 50 jogos; Pacho e Hincapié na Champions até 30/05).",
      expectativa: "Avançar às oitavas como 2º do Grupo E (Alemanha favorita ao 1º); o teto histórico são as quartas, nunca alcançadas; o piso é cair nos grupos se as lesões atacarem.",
      statsLinha: "Defesa: 0,28 gol sofrido/jogo (melhor da CONMEBOL); ataque: 0,78 gol/jogo; sequência invicta de 17 jogos; Eliminatórias: 8V-8E-2D, 29 pts, 2º lugar.",
      resumo: "A geração de ouro do Equador (Pacho, Hincapié, Caicedo) chega à sua maior Copa com a melhor defesa da América do Sul (5 gols sofridos nas Eliminatórias), mas precisa resolver o enigma ofensivo e a dependência de Enner Valencia para ir além das oitavas."
    },

    "Costa do Marfim": {
      formacao: "4-3-3",
      duvidas: "Franck Kessié sofreu lesão muscular em maio e sua presença plena é incerta; se não estiver 100%, Jean-Michaël Seri (Maribor) ou Parfait Guiagon (Charleroi) entram no meio.",
      banco: [b("Simon Adingra", "Monaco"), b("Elye Wahi", "OGC Nice"), b("Nicolas Pépé", "Villarreal"), b("Ange-Yoan Bonny", "Inter Milan"), b("Ousmane Diomande", "Sporting CP"), b("Jean-Michaël Seri", "Maribor")],
      craques: [
        k("Yan Diomande", "RB Leipzig", "Sensação da Bundesliga (12G/8A) — drible e velocidade excepcionais"),
        k("Amad Diallo", "Manchester United", "Ala bidirecional — principal batedor de escanteios e criativo"),
        k("Franck Kessié", "Al-Ahli", "Capitão e metrônomo — recuperação e distribuição"),
        k("Odilon Kossounou", "Atalanta", "Zagueiro de elite — 7,8 bolas recuperadas/90 e 93% de acerto"),
        k("Ousmane Diomande", "Sporting CP", "Zagueiro promissor (22) — 93% de acerto e 0,89 interceptação/90"),
        k("Evan N'Dicka", "AS Roma", "Zagueiro versátil — 15 clean sheets quando atua na Serie A")
      ],
      fortes: [
        "Defesa de elite europeia: Kossounou, N'Dicka e Ousmane Diomande em ligas top",
        "Alas de altíssima qualidade: Yan Diomande (12G Bundesliga) e Amad Diallo",
        "Campanha histórica: 8V-2E-0D, 25 gols marcados e zero sofridos em 10 jogos das Eliminatórias",
        "Treinador calejado: Emerse Faé venceu a AFCON 2023 de forma interina",
        "Transições rápidas como vetor principal — vai de 0 a 90 km/h em poucos passes",
        "Ameaças variadas: 15 marcadores diferentes nas Eliminatórias"
      ],
      fracos: [
        "Falta de centroavante de referência (Haller excluído; Guessand irregular)",
        "Defesa exposta no AFCON 2025 (3 gols sofridos em 5 jogos)",
        "Capitão Kessié em dúvida por lesão; pode chegar sem ritmo",
        "Salto de qualidade da CAF (Gabão ~90, Quênia ~115) para o Mundial",
        "Dependência de transições e espaços; dificuldade contra blocos baixos",
        "Mais eficaz em reação do que em proatividade; sofre com pressing intenso"
      ],
      tatica: {
        ofensiva: "Transições diretas como vetor principal, com os alas (Amad Diallo e Yan Diomande) como protagonistas; o 9 não é a referência principal; Kessié participa da distribuição e dos cruzamentos de falta.",
        defensiva: "Linha alta com zaga de elite; bloco médio compacto que convida o adversário a subir antes de lançar a transição; recuperação disciplinada, com os alas fechando por dentro.",
        semBola: "Pressão moderada / bloco organizado, mais reativo que proativo; transição negativa disciplinada, com os meias formando linha de contenção; o contra-ataque é o maior trunfo.",
        geral: "Identidade africana moderna: atletismo, velocidade em transição e disciplina tática crescente; pragmática, defende bem e ataca com poder. Plano B: 4-2-3-1 defensivo com Seko Fofana mais livre."
      },
      comoChega: "Volta ao Mundial após 12 anos com ótima preparação: 4-0 sobre a Coreia do Sul (28/mar) e 1-0 sobre a Escócia (31/mar). A principal preocupação é Kessié, lesionado no tendão da coxa em maio; os testes iniciais foram tranquilizadores, mas a presença plena segue incerta.",
      expectativa: "Avançar às oitavas como 2º do Grupo E, com o duelo decisivo contra o Equador na estreia (14/jun) sendo crucial para a classificação.",
      statsLinha: "Eliminatórias CAF: 2,5 gols/jogo contra adversários fracos (~110 FIFA); amistosos 2026: 2,5 gols/jogo vs Coreia e Escócia; AFCON 2025: 2,0 gols/jogo e 1,4 sofridos. Conversão de 30,8% vs Coreia (8 de 13 chutes).",
      resumo: "Campeã africana de 2023 em transição geracional, com defesa de elite europeia e alas explosivos como Yan Diomande e Amad Diallo — mas sem centroavante de referência e com o capitão Kessié em dúvida por lesão."
    },

    "Curaçao": {
      formacao: "4-3-3",
      duvidas: "Kastaneer é artilheiro das eliminatórias (5 gols), mas Chong tem mais qualidade técnica; ambos disputam a ponta esquerda, com Gorré como alternativa — a titularidade entre os três atacantes é a principal disputa.",
      banco: [b("Rangelo Janga", "Sem clube"), b("Sontje Hansen", "Middlesbrough"), b("Ar'jany Martha", "Rotherham United"), b("Riechedly Bazoer", "Konyaspor"), b("Jeremy Antonisse", "Kifisia"), b("Trevor Doornbusch", "VVV-Venlo")],
      craques: [
        k("Armando Obispo", "PSV Eindhoven", "Pilar defensivo de qualidade europeia — âncora"),
        k("Leandro Bacuna", "Igdir FK", "Capitão inconteste — liderança e bola parada"),
        k("Tahith Chong", "Sheffield United", "Maior nome internacional — inspiração individual"),
        k("Gervane Kastaneer", "Terengganu FC", "Artilheiro das eliminatórias (5 gols) — faro de gol"),
        k("Juninho Bacuna", "FC Volendam", "Motor criativo do meio — intensidade e chegada"),
        k("Kenji Gorré", "Maccabi Haifa", "Velocidade pura em transições")
      ],
      fortes: [
        "Mentalidade resiliente e coletividade — nunca desiste, mesmo em adversidade",
        "Ataque eficiente nas eliminatórias (28 gols em 10 jogos, maior volume da CONCACAF)",
        "Defesa compacta e organizada (só 5 gols sofridos nas eliminatórias)",
        "Variância tática entre 4-3-3 e 4-2-3-1",
        "Especialização em bola parada com Leandro Bacuna como executor",
        "Motivação histórica e unidade de vestiário com propósito compartilhado"
      ],
      fracos: [
        "Forma recente preocupante: 0-2 China, 1-5 Austrália, 1-4 Escócia nos amistosos",
        "Adversários das eliminatórias muito inferiores ao Grupo E",
        "Sem liga profissional doméstica e com estrutura técnica local quase inexistente",
        "Instabilidade na comissão (Advocaat saiu em fev, Rutten falhou, Advocaat voltou em mai)",
        "Profundidade limitada: reservas em 2ª divisão holandesa; sem margem para lesões",
        "Vulnerável em transições pelos flancos e a cruzamentos nas costas da zaga"
      ],
      tatica: {
        ofensiva: "Transições verticais rápidas a partir da recuperação no meio; as pontas (Gorré, Chong) dão amplitude enquanto Kastaneer é referência móvel; jogo pelas alas com cruzamentos e combinações curtas seguidas de passe de ruptura.",
        defensiva: "Bloco médio-baixo contra superiores, compacidade sobre marcação individual; a linha de 4 mantém a organização e leva o adversário para os lados; Obispo como pilar e Sambo experiente no sistema de Advocaat.",
        semBola: "Sem gegenpressing; foco em compactação rápida e transição defensiva; a organização protege os espaços centrais; vulnerável nos flancos em viradas rápidas.",
        geral: "Pragmática e coletiva, construída na resiliência. Plano A: 4-3-3 ofensivo contra inferiores; Plano B: 4-4-2 em bloco baixo contra favoritos. Sem craque de elite, compensa com disciplina e experiência europeia da diáspora."
      },
      comoChega: "Chega com orgulho histórico, mas sinais mistos. As eliminatórias invictas (7V 3E) ficaram para trás; os amistosos recentes (0-2, 1-5, 1-4) expuseram vulnerabilidades reais contra adversários de elite. A instabilidade técnica (saída e retorno de Advocaat) criou descontinuidade, mas o vestiário mantém a motivação histórica.",
      expectativa: "Qualquer ponto no Grupo E será histórico; sair do grupo seria uma das maiores surpresas das Copas. A Opta projeta 18,5% de chance de avanço (a 2ª menor do torneio).",
      statsLinha: "Eliminatórias: 28 gols em 10 jogos, mas contra adversários muito inferiores (Bermuda, Santa Lúcia, Jamaica). Amistosos vs China/Austrália/Escócia: 8 gols sofridos em 3 jogos, só 2 marcados. Gold Cup 2025: xG 0,86/jogo, 53,6% de posse.",
      resumo: "Menor nação da história a se classificar (155 mil habitantes), Curaçao é debutante absoluto; seleção pragmática construída em 23 anos de projeto de diáspora holandesa, resiliente mas vulnerável contra a elite — a qualidade do Grupo E é praticamente inalcançável para um país sem liga profissional e com forma recente negativa."
    },

    /* ===================== GRUPO F ===================== */
    "Países Baixos": {
      formacao: "4-3-3",
      duvidas: "Jurriën Timber pode entrar no lugar de Van Hecke ou Dumfries se recuperado da lesão na virilha; Frenkie de Jong chegou com ritmo incerto após lesão muscular; Depay tem condicionamento em dúvida após múltiplas lesões em 2025.",
      banco: [b("Jurriën Timber", "Arsenal"), b("Teun Koopmeiners", "Juventus"), b("Wout Weghorst", "Ajax"), b("Crysencio Summerville", "West Ham"), b("Noa Lang", "Galatasaray"), b("Brian Brobbey", "Sunderland")],
      craques: [
        k("Virgil van Dijk", "Liverpool", "Zagueiro/capitão — liderança defensiva e perigo na bola parada"),
        k("Tijjani Reijnders", "Manchester City", "Meia — o '8' moderno, o mais em forma e completo da seleção"),
        k("Cody Gakpo", "Liverpool", "Ponta — consistente, versátil entre as linhas"),
        k("Donyell Malen", "Roma", "Ponta — melhor momento da carreira, 14 gols em 18 jogos na Serie A"),
        k("Frenkie de Jong", "Barcelona", "Meia — metrônomo que conecta as linhas quando em forma"),
        k("Memphis Depay", "Corinthians", "Artilheiro — 55 gols históricos, 8 nas eliminatórias")
      ],
      fortes: [
        "Defesa de nível mundial: Van Dijk + Van de Ven + Timber em velocidade, leitura e jogo aéreo",
        "Miolo de campo premium: De Jong + Gravenberch + Reijnders (controle, recuperação e progressão)",
        "Donyell Malen em forma espetacular (14 gols em 18 jogos na Serie A 25/26)",
        "Ameaça de bola parada: Van Dijk (6 gols, 5 de cabeça na PL) e Dumfries",
        "Profundidade no ataque: 8 atacantes convocados com múltiplas opções",
        "Campanha impecável: 6V 2E 0D, 27 gols, 4 sofridos — 4º melhor xGC da Europa"
      ],
      fracos: [
        "Xavi Simons fora (LCA) — perda do jogador mais criativo e melhor driblador entre linhas",
        "Depay com 6 lesões em 2025, sem ritmo europeu e condicionamento incerto",
        "Timber com dúvida real após lesão na virilha; Koeman vai gerenciar sua carga",
        "De Jong voltou com ritmo de recuperação após lesão muscular",
        "xG ofensivo modesto nas eliminatórias (18,6 em 8 jogos) — superaram em 8,4 gols",
        "Trauma de pênaltis — eliminados assim em 2022 (Argentina) e na Nations League 2025 (Espanha)"
      ],
      tatica: {
        ofensiva: "4-3-3 com alas abertas e pivôs à frente: construção de baixo, superioridade pelo meio com De Jong-Gravenberch-Reijnders; Reijnders como armador interno; laterais (Dumfries/Hato) criando 2v1; Gakpo livre para cortar e Malen explorando a velocidade.",
        defensiva: "Bloco alto-médio com pressing quando tem a bola, recompondo rápido em 4-3-3 médio na perda; Van Hecke e Van Dijk compactos; Van de Ven como caçador veloz; vulnerabilidade no espaço atrás do ofensivo Dumfries.",
        semBola: "Pressing contextual (não viável 90 min no calor americano) — intenso nos 1ºs 15 min e em blocos de 5-10 sobre cansados; transição defensiva rápida em 4-4-2 compacto; transição ofensiva letal com Van de Ven, Malen e Summerville.",
        geral: "Equilíbrio entre a herança holandesa (posse, posicionamento, técnica) e o pragmatismo moderno (bloco, pressing contextual); não é o 'Total Football' dos anos 70, mas um time funcional, bem organizado e com qualidade individual acima da média."
      },
      comoChega: "Em excelente forma coletiva: 10 jogos sem derrota desde junho/2025 e classificação invicta. A preocupação é física: três titulares (Timber, De Jong, Depay) chegam com históricos recentes de lesão; amistosos pré-Copa razoáveis (2-1 vs Noruega, 1-1 vs Equador).",
      expectativa: "Das quartas à semifinal de forma realista; com defesa sólida, meio premium e grupo favorável, o 1º lugar do Grupo F é altamente provável e a semifinal é objetivo alcançável.",
      statsLinha: "Eliminatórias UEFA (8 jogos, Grupo G): 27 gols marcados, 4 sofridos; xG de 18,6 contra 4,5, mas adversários de nível médio-baixo (Malta, Lituânia, Finlândia, Polônia). 3,38 gols/jogo, xG 2,33.",
      resumo: "Um carro de corrida com motor premium e três pneus calibrados — precisa do quarto (a saúde) para chegar à linha de chegada; elenco equilibrado, defesa de elite e criatividade de qualidade, mas com dúvidas físicas nos lesionados e o trauma histórico dos pênaltis."
    },

    "Japão": {
      formacao: "3-4-3",
      duvidas: "Ao Tanaka vs Daichi Kamada para a 2ª vaga do meio (Tanaka mais físico para a Holanda, Kamada mais criativo para a Tunísia); Keito Nakamura vs Ritsu Doan nas faixas, com Doan favorito pela forma mas Nakamura ganhando confiança.",
      banco: [b("Daichi Kamada", "Crystal Palace"), b("Junya Ito", "KRC Genk"), b("Keisuke Goto", "Sint-Truiden"), b("Koki Ogawa", "NEC Nijmegen"), b("Yuto Nagatomo", "FC Tokyo"), b("Kento Shiogai", "Wolfsburg")],
      craques: [
        k("Takefusa Kubo", "Real Sociedad", "Criador e finalizador no meio-espaço direito; 'homem do jogo' com Mitoma fora"),
        k("Ayase Ueda", "Feyenoord", "Artilheiro (25 gols na Eredivisie 25-26) — 9 de referência com bom movimento"),
        k("Wataru Endo", "Liverpool", "Capitão — screening de nível Premier League e liderança vocal"),
        k("Daichi Kamada", "Crystal Palace", "Catalisador criativo em espaços reduzidos; campeão da Conference League"),
        k("Daizen Maeda", "Celtic", "9 falso/extremo — 14 gols na Premiership escocesa, mobilidade intensa"),
        k("Ko Itakura", "Ajax", "Zagueiro intelectualizado — organiza a saída e tem presença aérea")
      ],
      fortes: [
        "Transição ofensiva de elite: recuperação em finalização em <10s (venceu a Espanha com 17,7% de posse em 2022)",
        "Profundidade e versatilidade no meio: Endo (pivô), Kamada (criação), Ao Tanaka (energia)",
        "Bloco defensivo organizado: só 3 gols sofridos em 10 jogos das Eliminatórias AFC",
        "Multiplicidade de criadores: Kubo, Doan (5G+5A), Nakamura, Junya Ito (10A nas elim.)",
        "Pressing com gatilhos: força o adversário para as bandas e arma na linha lateral",
        "Forma pré-Copa irrepreensível: 6 vitórias seguidas, incluindo Brasil e Inglaterra (1ª asiática a vencer em Wembley)"
      ],
      fracos: [
        "Sem centroavante de classe mundial: Ueda é prolífico no clube, mas a conversão em nível de Copa é dúvida",
        "Fragilidade aérea e física: Holanda e Suécia exploram cruzamentos com 9 físicos",
        "Trauma das oitavas: 4 eliminações em pênaltis ou viradas; nunca chegou às quartas",
        "Baixas estratégicas: Mitoma, Minamino e Morita forçam redistribuição",
        "Dependência de Kubo como 'homem do jogo' — pressão desproporcional num time coletivo",
        "xG indisponível: os 30 gols das eliminatórias foram contra ranking 50-160"
      ],
      tatica: {
        ofensiva: "Combinações rápidas em espaços curtos + exploração das faixas com os wing-backs subindo; Kubo no meio-espaço direito gera sequências de 3-4 passes; Ueda como 9 de referência libera Maeda na diagonal; bola parada ofensiva fraca.",
        defensiva: "Bloco médio-baixo compactado entre área e meio contra superiores; 3 zagueiros com wing-backs recuados formam um 5-2-3 que bloqueia as faixas; Itakura organiza a saída; vulnerabilidade aérea contra targetmen europeus.",
        semBola: "Pressing organizado em linhas (não reckless): força para as bandas, arma na lateral, pressão coletiva; transição de elite (3-5 passes até finalizar); gegenpressing local de 3-4s ao perder no campo adversário.",
        geral: "3-4-3 / 3-4-2-1 flutuante conforme o adversário. Plano A: pressão alta + transição; Plano B: bloco baixo + contra letal (como vs Alemanha 2022); Plano C: 4-2-3-1 com Kamada no '10'. Coletivo acima das estrelas; Moriyasu 'camaleão' muda no intervalo."
      },
      comoChega: "Seis vitórias seguidas em A-matches (Brasil 3-2, Gana 2-0, Bolívia 3-0, Escócia 1-0, Inglaterra 1-0, Islândia 1-0), sendo a 1ª seleção asiática a bater a Inglaterra em Wembley. Ambiente positivo apesar das baixas de Mitoma, Minamino e Morita.",
      expectativa: "Avançar em 2º do Grupo F (atrás da Holanda) e chegar às oitavas, no mínimo, com teto de quartas se o sistema defensivo funcionar no mata-mata.",
      statsLinha: "6 amistosos pós-qualificação (out/2025-mai/2026): 11 gols (1,83/jogo) e 2 sofridos; vs top-5 FIFA (Brasil e Inglaterra), 2 vitórias. Eliminatórias AFC (10 jogos): 30G/3GC, mas contra ranking 50-160.",
      resumo: "A melhor geração japonesa da história chega em forma irrepreensível, com sistema defensivo maduro e transição ofensiva de elite, mas carrega o peso de nunca ter passado das oitavas."
    },

    "Suécia": {
      formacao: "3-4-2-1",
      duvidas: "Alexander Isak está em dúvida de ritmo após fraturar a fíbula em dez/2025 e jogar só 23 minutos desde o retorno; se 100% apto, entra como 2º atacante (3-4-1-2) no lugar de Bergvall ou Elanga.",
      banco: [b("Alexander Isak", "Liverpool"), b("Gustaf Nilsson", "Club Brugge"), b("Benjamin Nygren", "Celtic"), b("Gustaf Lagerbielke", "SC Braga"), b("Ken Sema", "Pafos FC"), b("Eric Smith", "FC St. Pauli")],
      craques: [
        k("Viktor Gyökeres", "Arsenal", "Centroavante dominante — 4 gols em 2 jogos de playoff, 19 em 32 internacionais"),
        k("Alexander Isak", "Liverpool", "Atacante refinado de nível top-5; se fit, forma dupla perigosa com Gyökeres"),
        k("Lucas Bergvall", "Tottenham", "Meia criativo de 20 anos — presença de área e visão de jogo"),
        k("Yasin Ayari", "Brighton", "Motor silencioso do meio — equilíbrio e ligação entre setores"),
        k("Victor Nilsson Lindelöf", "Aston Villa", "Capitão e zagueiro experiente — liderança em Champions e PL"),
        k("Isak Hien", "Atalanta", "Zagueiro atlético — saída de bola e aptidão aérea")
      ],
      fortes: [
        "Dupla de ataque de nível europeu com Gyökeres e Isak quando ambos em forma",
        "Solidez no bloco baixo e capacidade de absorver pressão contra-atacando",
        "Sistema 3-4-2-1 equilibrado, com wing-backs dando largura",
        "Bola parada ofensiva com envergadura (Hien, Lagerbielke, Lindelöf)",
        "Mentalidade resiliente após a qualificação dramática nos playoffs",
        "Sucesso em transições verticais: posse baixa, mas chances de qualidade"
      ],
      fracos: [
        "Isak é grande interrogação — só 23 minutos desde a lesão na fíbula",
        "Defesa exposta em transições — 12 gols sofridos em 6 jogos das Eliminatórias",
        "Falta de profundidade após Kulusevski (lesão) e Holm (cortado de última hora)",
        "Inconsistência: 0 vitórias em 6 jogos do grupo das Eliminatórias",
        "Dependência do contra-ataque, que sofre contra defesas organizadas",
        "Projeto Potter com só 5 meses, apesar do sucesso nos playoffs"
      ],
      tatica: {
        ofensiva: "Contra-ataques diretos e transições verticais com Gyökeres como referência fixa; os wing-backs Gudmundsson e Svensson dão largura; os meias chegam por fora ou na diagonal; a bola parada aérea é ameaça real.",
        defensiva: "Bloco com 3 zagueiros compacta o meio; Lindelöf coordena; pressão seletiva com linhas definidas; marcação majoritariamente zonal; a bola parada contra é a maior fraqueza (zagueiros altos, mas pouco rápidos).",
        semBola: "Pressing seletivo, não constante; quando o adversário chega ao terço defensivo, a linha de 3 recua para proteger o centro; os wing-backs voltam rápido na perda; risco quando o ala sobe e não retorna a tempo.",
        geral: "Pragmatismo direto que cede posse para ser perigoso na transição; a disciplina coletiva sueca somada a um nível técnico individual incomum (Gyökeres, Isak e jogadores de Premier League)."
      },
      comoChega: "Chegou após qualificação dramática via Nations League — perdeu os 6 jogos das Eliminatórias regulares, mas venceu os playoffs com Graham Potter (só 7 meses no cargo). Isak é incógnita (23 minutos desde a lesão na fíbula); Emil Holm foi cortado de última hora por lesão muscular.",
      expectativa: "Oitavas como objetivo realista (2º lugar ou melhor 3º do Grupo F), com teto nas quartas se Gyökeres manter a forma dos playoffs e Isak se recuperar plenamente.",
      statsLinha: "xG e posse dos 2 jogos de playoff (Ucrânia 1-3, Polônia 3-2): xG 1,71, 32,5% de posse — amostra pequena e heterogênea com Potter.",
      resumo: "Seleção que se classificou milagrosamente, com Gyökeres em forma explosiva (4 gols em 2 playoffs); carrega alicerces defensivos frágeis e a incerteza sobre Isak, mas tem teto ofensivo alto se sua dupla de ataque funcionar plenamente."
    },

    "Tunísia": {
      formacao: "4-2-3-1",
      duvidas: "Dylan Bronn tem lesão no joelho sendo monitorada; se não estiver em condições, Omar Rekik (Maribor) ou Adem Arous (Kasımpaşa) assumem a zaga.",
      banco: [b("Omar Rekik", "Maribor"), b("Anis Ben Slimane", "Norwich City"), b("Khalil Ayari", "PSG (sub-21)"), b("Sebastian Tounekti", "Celtic"), b("Hazem Mastouri", "Dinamo Makhachkala"), b("Rayan Elloumi", "Vancouver Whitecaps")],
      craques: [
        k("Ellyes Skhiri", "Eintracht Frankfurt", "Pivô defensivo de elite — capitão e organizador"),
        k("Hannibal Mejbri", "Burnley", "Criatividade ofensiva — o 10 e principal fonte de jogo vertical"),
        k("Elias Achouri", "FC Copenhagen", "Velocidade em transições — extremo criador de perigo"),
        k("Ali Abdi", "OGC Nice", "Lateral-atacante — efetivo na bola parada"),
        k("Montassar Talbi", "FC Lorient", "Líder defensivo — domínio aéreo e comunicação"),
        k("Rani Khedira", "Union Berlin", "Cobertura física — experiência europeia recém-agregada")
      ],
      fortes: [
        "Qualificação histórica sem sofrer gols (10 jogos, 0 sofridos) — compacidade real",
        "Ellyes Skhiri é pivô de elite com experiência na Champions — organizador indispensável",
        "Bola parada ofensiva coreografada; Ali Abdi com 5 gols em 15 jogos recentes",
        "Velocidade nas transições via Achouri e fluidez de Hannibal",
        "Experiência europeia sólida (Bundesliga, Ligue 1, Premier League, liga dinamarquesa)",
        "Sistema 4-2-3-1 compacto, difícil de furar"
      ],
      fracos: [
        "Ausência de centroavante de referência; Elias Saad não cria espaço",
        "Dependência excessiva de Hannibal Mejbri; sem ele, a criatividade desaba",
        "Criação limitada em jogo aberto; gol vem do contra e da bola parada",
        "Novo técnico (Lamouchi desde jan/2026) com só 5 meses de trabalho",
        "Forma recente fraca: eliminado nas oitavas do AFCON 2025 e 0-1 para a Áustria",
        "Goleiro Dahmen com dificuldade de distribuição sob pressing alto"
      ],
      tatica: {
        ofensiva: "Saída pela esquerda (Abdi) com inversão longa; Hannibal recuado como pivô ofensivo; cruzamentos de meia-altura; bola parada coreografada como rota primária de gol.",
        defensiva: "4-2-3-1 que vira 4-4-2 defensivo; bloco entre 30-35m; duplo pivô (Skhiri + Khedira) garante cobertura central; Talbi lidera pela comunicação aérea.",
        semBola: "Pressing seletivo e reativo (não sistemático); saída rápida após a recuperação; recuo imediato ao bloco médio-baixo sem caçar a bola; risco de contra adversário em menos de 6s.",
        geral: "Bloco compacto médio-baixo com transições rápidas; pragmatismo defensivo sobre domínio; identidade fundada na organização coletiva e no contra-ataque."
      },
      comoChega: "Qualificação histórica (9V-1E nas Eliminatórias), mas performances medíocres contra qualidade: eliminada nas oitavas do AFCON 2025 (Mali, 3-2 nos pênaltis) e derrotada pela Áustria (0-1, 01/06). Lamouchi, técnico desde janeiro, fez renovação geracional cortando veteranos, mas teve só 5 meses para a coesão.",
      expectativa: "Quebrar a maldição de 6 eliminações seguidas na fase de grupos; o objetivo realista é o 3º lugar com 4-5 pontos e classificação como melhor terceiro.",
      statsLinha: "Ranking FIFA 44º (abr/2026); 1,4 gol/jogo, xG 1,24, 51% de posse; probabilidade implícita de classificação de 15-20% (Rotowire/William Hill).",
      resumo: "Os Falcões de Cartago chegam com a defesa mais resiliente da CAF, mas o ataque mais estéril do Grupo F; provável 3º/4º lugar com saída na fase de grupos — exceto se Hannibal fizer a Copa da vida e a Suécia derrotar o Japão."
    },

    /* ===================== GRUPO G ===================== */
    "Bélgica": {
      formacao: "4-2-3-1",
      duvidas: "Romelu Lukaku chega sem forma competitiva (só 7 entradas como reserva na temporada) e pode não ser titular; se indisponível, De Ketelaere assume como falso 9 ou Trossard avança ao centro com Lukebakio na direita.",
      banco: [b("Dodi Lukebakio", "Benfica"), b("Alexis Saelemaekers", "AC Milan"), b("Zeno Debast", "Sporting CP"), b("Nicolas Raskin", "Rangers"), b("Matias Fernandez-Pardo", "Lille"), b("Hans Vanaken", "Club Brugge")],
      craques: [
        k("Thibaut Courtois", "Real Madrid", "Goleiro de nível mundial — 17 clean sheets na temporada"),
        k("Kevin De Bruyne", "Napoli", "Motor criativo — 6 gols nas qualificatórias"),
        k("Jérémy Doku", "Manchester City", "Arma ofensiva principal — 4,2 dribles/90 na Premier League"),
        k("Youri Tielemans", "Aston Villa", "Capitão — equilibrador no duplo pivô"),
        k("Amadou Onana", "Aston Villa", "Motor físico — campeão da Europa League 25-26"),
        k("Charles De Ketelaere", "Atalanta", "Falso 9 alternativo — 3G+5A na Serie A")
      ],
      fortes: [
        "Goleiro de nível mundial em Courtois (17 clean sheets na temporada)",
        "Criatividade de elite com De Bruyne (6 gols nas qualificatórias)",
        "Velocidade e desequilíbrio pelas pontas, com Doku líder em dribles",
        "Capacidade goleadora: 29 gols em 8 jogos das qualificatórias (3,6/jogo)",
        "Bola parada ofensiva perigosa com De Bruyne nas cobranças",
        "Invicta sob Rudi Garcia: 7V e 4E em 11 partidas"
      ],
      fracos: [
        "Lukaku sem forma competitiva (só 7 entradas como reserva na temporada)",
        "Defesa central inexperiente em Copa (23-26 anos, sem grandes torneios)",
        "Dificuldade contra blocos baixos (empates com a Macedônia do Norte)",
        "Dependência crítica de De Bruyne, cuja lesão no isquiotibial pode recair",
        "Transição geracional inacabada (Garcia há só 17 meses)",
        "Irregularidade nas qualificatórias (empates com Macedônia do Norte e Cazaquistão)"
      ],
      tatica: {
        ofensiva: "4-2-3-1 com bola, em que os dois pivôs permitem saída limpa; De Bruyne como distribuidor central com liberdade para flutuar; Doku dá profundidade e desequilíbrio; 2ª maior velocidade média de progressão pós-recuperação entre as europeias.",
        defensiva: "Bloco 4-4-2 médio-baixo sem a bola; linha média sem armadilhas de impedimento; fragilidade exposta em jogos de goleada, recuando após liderar e cedendo gols seguidos.",
        semBola: "Pressão alta coordenada, sobretudo nos 1ºs 15 min; pragmática, não extrema; risco quando os laterais sobem e deixam a dupla de zaga exposta em 2v2.",
        geral: "Equipe de transição entre épocas, de identidade pragmática: posse controlada (62%), verticalidade rápida, exploração individual das pontas e bola parada como vetor de perigo."
      },
      comoChega: "Invicta sob Garcia (7V e 4E em 11 jogos); Lukaku se recupera de lesão no isquiotibial, com só 7 entradas como reserva (fora de forma); De Bruyne voltou bem após lesão no isquiotibial; Courtois terminou bem a temporada após problema no reto femoral em março.",
      expectativa: "Oitavas garantidas num grupo muito favorável (Egito, Irã, Nova Zelândia); o objetivo realista é vencer o Grupo G e chegar às quartas; semifinal possível, mas improvável.",
      statsLinha: "Últimas 10 partidas (qualificatórias + amistosos 25-26): 3,6 gols/jogo, xG 2,29, 62% de posse. xG pró de 20,94 em 8 qualificatórias (placar real 29 = eficiência), inflado por adversários fracos.",
      resumo: "A Bélgica é favorita do grupo, com qualidade excepcional em Courtois e De Bruyne, mas marcada pela transição geracional, pela chegada fora de forma de Lukaku e por uma zaga jovem e inexperiente — a última dança da geração dourada, com horizonte realista nas quartas."
    },

    "Egito": {
      formacao: "4-2-3-1",
      duvidas: "Dúvida sobre Salah: uma lesão muscular encerrou sua temporada no Liverpool em abril, mas ele foi confirmado apto para a estreia (15/jun), com cautela moderada de ritmo.",
      banco: [b("Mohamed El-Shenawy", "Al Ahly"), b("Mohamed Abdelmonem", "OGC Nice"), b("Mostafa Ziko", "Al Ahly"), b("Hamza Abdelkarim", "Barcelona Atlètic"), b("Karim Hafez", "Al Ahly"), b("Nabil Emad Dunga", "Al Ahly")],
      craques: [
        k("Mohamed Salah", "Liverpool", "Capitão e artilheiro — protagonista absoluto do ataque"),
        k("Omar Marmoush", "Manchester City", "Segundo eixo criativo — centroavante dinâmico"),
        k("Mahmoud Trezeguet", "Al Ahly", "Ponta direita rápida — especialista em cabeceios"),
        k("Mostafa Shobeir", "Al Ahly", "Goleiro emergente — heroico contra a Espanha"),
        k("Emam Ashour", "Al Ahly", "Motor criativo do meio — ligação tática"),
        k("Mohamed Abdelmonem", "OGC Nice", "Defesa europeu de qualidade — de volta de lesão")
      ],
      fortes: [
        "Defesa histórica: só 2 gols em 10 jogos das Eliminatórias, com 7 clean sheets",
        "Salah no pico de maturidade: 67 gols internacionais, artilheiro das Eliminatórias (9)",
        "Dupla de nível Premier League: Salah (Liverpool) + Marmoush (Man City)",
        "Coesão forte: grande núcleo do Al-Ahly garante entrosamento e resiliência",
        "Bola parada ofensiva perigosa: Salah nas faltas e Trezeguet no cabeceio",
        "Grupo mais acessível da história egípcia em Copas"
      ],
      fracos: [
        "Dependência extrema de Salah: sem ele, o ataque colapsa (provado vs Espanha)",
        "Produção coletiva limitada: contra a Espanha criou só uma chance real",
        "Dúvidas de gestão em alto nível (AFCON 2025 expôs ajustes lentos)",
        "Defesa testada só em nível CAF: a Bélgica (8ª) é um salto enorme",
        "Mobilidade defensiva abaixo da média europeia; laterais expostos em transição",
        "Ritmo/forma de Salah incerto após a lesão que encerrou sua temporada"
      ],
      tatica: {
        ofensiva: "Construído sobre Salah como protagonista em posição invertida (pé direito pela esquerda); Marmoush como falso 9 rasgando espaços; o padrão é transição → aceleração pela esquerda → Salah no 1v1; criação coletiva lenta fora da transição.",
        defensiva: "Bloco médio a baixo com linha de 4 na meia-quadra; dupla pivô (Attia + Fathy) cobrindo o corredor central; sem defesa alta; fecha o meio e força a largura; sólido na bola parada defensiva.",
        semBola: "Não pratica pressing alto como filosofia; recua ao bloco médio e aceita a construção adversária; pressing só em ações de Salah/Marmoush; o momento mais perigoso é a transição positiva; PPDA baixo a médio.",
        geral: "Pragmatismo africano com dois jogadores world-class; não domina a bola nem pressiona forte; a identidade é organização defensiva compacta + transições rápidas dependentes das individualidades de Salah/Marmoush."
      },
      comoChega: "Em bom momento: invicto em 2026 até 3 de junho, com defesa sólida e identidade coletiva sob Hossam Hassan — destaque para o 0-0 histórico contra a Espanha (campeã 2024) em março. A grande preocupação é a condição de Salah: lesionado em abril, treina normalmente em Spokane e foi confirmado apto, mas com dúvida moderada de ritmo.",
      expectativa: "Passar ao mata-mata como 2º ou melhor 3º do Grupo G — o teto realista é avançar à fase de 32, algo inédito; o piso é cair nos grupos se Salah não estiver 100% e o Irã surpreender.",
      statsLinha: "FootyStats — 10 jogos de 2026 (Eliminatórias CAF + amistosos): 1,4 gol/jogo, xG 1,22, 47% de posse. Contexto: adversários de ranking 100-180.",
      resumo: "O Egito é uma equipe construída em torno de Salah no seu pico, com a defesa mais sólida da África nas Eliminatórias e o grupo historicamente mais acessível — a primeira chance real de passar da fase de grupos em sua quarta Copa."
    },

    "Irã": {
      formacao: "4-2-3-1",
      duvidas: "Rouzbeh Cheshmi ainda é dúvida de recuperação muscular para os primeiros jogos; Mohammad Ghorbani pode substituir Mohebi como meia-atacante em jogos mais defensivos.",
      banco: [b("Ehsan Hajsafi", "Sepahan"), b("Rouzbeh Cheshmi", "Esteghlal"), b("Ali Alipour", "Persepolis"), b("Dennis Eckert Dargahi", "Standard Liège"), b("Ramin Rezaeian", "Foolad"), b("Amir Razzaghinia", "Esteghlal")],
      craques: [
        k("Mehdi Taremi", "Olympiacos", "Centroavante — 59 gols em 103 jogos, referência técnica e ofensiva"),
        k("Alireza Jahanbakhsh", "FCV Dender", "Capitão — ponta-esquerda experiente, inteligência tática"),
        k("Alireza Beiranvand", "Tractor", "Goleiro de nível mundial — dois recordes Guinness de lançamento"),
        k("Saeid Ezatolahi", "Shabab Al-Ahli", "Volante destruidor — âncora defensiva do sistema"),
        k("Saman Ghoddos", "Kalba", "Meia de formação europeia — o mais criativo do meio"),
        k("Ehsan Hajsafi", "Sepahan", "Lenda viva — 4 Copas, 142+ caps, símbolo de resistência")
      ],
      fortes: [
        "Solidez defensiva: só 12 gols sofridos em 16 jogos das Eliminatórias (0,75/jogo)",
        "Mehdi Taremi: centroavante de nível mundial, 1,31 gol/90 no Olympiacos 25-26",
        "Contra-ataques eficientes: recuperação rápida e lançamento vertical direto",
        "Experiência em Copas: Jahanbakhsh e Hajsafi na 4ª Copa",
        "Beiranvand: um dos melhores goleiros da Ásia, talismã psicológico",
        "Bola parada ofensiva: especialização em escanteios; Taremi no 2º poste"
      ],
      fracos: [
        "Criatividade limitada no meio: dependência de Ghoddos e Jahanbakhsh em espaços fechados",
        "Elenco envelhecido: média de 29,8 anos, risco físico no calor dos EUA",
        "Pouca profundidade ofensiva: a ausência de Azmoun pesa no banco",
        "Vulnerável quando precisa atacar: calibrado para defender, sem plano B claro",
        "Adversários fracos nas Eliminatórias (Uzbequistão, EAU, Catar, Coreia do Norte)",
        "Pressão geopolítica inédita: conflito EUA-Irã, vistos, caso Azmoun"
      ],
      tatica: {
        ofensiva: "Recuperação → transição rápida → serviço direto para Taremi ou pontas na profundidade; bola parada como trunfo (cruzamentos de Mohammadi, faltas); limitação contra blocos organizados por falta de criadores.",
        defensiva: "Bloco médio-baixo com linhas de 4 compactas e curtas, distância entre linhas deliberadamente estreita; força aérea com Khalilzadeh e Kanaani; vulnerável quando os laterais sobem e perde a transição.",
        semBola: "Pressing situacional após a perda (3-5s de counterpressing), depois recuo imediato ao bloco médio; transição defensiva bem trabalhada; PPDA alto (pressão baixa); a transição ofensiva é o ponto mais forte.",
        geral: "Pragmatismo defensivo europeu aplicado ao futebol asiático: bloco médio-baixo compacto com dois pivôs, foco em recuperação rápida e contra-ataque vertical via Taremi e pontas em profundidade."
      },
      comoChega: "Em preparação desde o fim de maio em Antalya (Turquia) antes de mudar a base para Tijuana (México). Amistosos recentes: 3-1 sobre a Gâmbia (29/mai) e 6-0 sobre o Mali (04/jun), mas adversários fracos limitam a extrapolação tática.",
      expectativa: "O objetivo realista é sair da fase de grupos pela 1ª vez em sete tentativas; o 2º lugar do Grupo G seria o teto, garantindo as oitavas no formato de 48.",
      statsLinha: "Qualificatório AFC (16 jogos, 2023-25): 35 gols marcados, 12 sofridos; 2,19 gols/jogo, 0,75 contra. xG indisponível; adversários de ranking 50-150, não comparáveis a Bélgica (9ª) ou Egito (34º).",
      resumo: "O Irã é pragmatismo defensivo com experiência acumulada (média de 29,8 anos), liderado por Taremi e uma geração veterana em sua melhor chance histórica de avançar — mas exposto à rigidez tática contra blocos europeus de qualidade e a uma pressão geopolítica inédita."
    },

    "Nova Zelândia": {
      formacao: "4-4-2 / 4-2-3-1",
      duvidas: "Cacace pode ceder a Ben Old se não tiver ritmo; Bell e Thomas em dúvida para a estreia, podendo voltar na sequência; Waine pode dar lugar a Eli Just como segundo atacante.",
      banco: [b("Joe Bell", "Viking FK"), b("Ryan Thomas", "PEC Zwolle"), b("Kosta Barbarouses", "WS Wanderers"), b("Ben Old", "Saint-Étienne"), b("Alex Paulsen", "Lechia Gdańsk"), b("Michael Woud", "Auckland FC")],
      craques: [
        k("Chris Wood", "Nottingham Forest", "Capitão e centroavante — artilheiro (45 gols em 88 caps)"),
        k("Marko Stamenić", "Swansea City", "Meio-campista de ligação — cobrador de bola parada"),
        k("Liberato Cacace", "Wrexham", "Lateral-esquerdo ofensivo — qualidade na saída"),
        k("Tyler Bindon", "Sheffield United", "Zagueiro em ascensão — físico e confiante"),
        k("Michael Boxall", "Minnesota United", "Zagueiro veterano — liderança defensiva (61 caps)"),
        k("Eli Just", "Motherwell", "Atacante versátil — 2º goleador das eliminatórias")
      ],
      fortes: [
        "Chris Wood: ameaça aérea singular de classe Premier League, domina duelos e finalizações",
        "Solidez no bloco médio-baixo: só 1 gol sofrido nas 5 eliminatórias da OFC",
        "Bola parada ofensiva como arma real, com Stamenić como cobrador consistente",
        "Coesão e identidade sob Bazeley desde 2023, com liderança compartilhada",
        "Elenco na melhor janela etária (média de 27,4 anos)",
        "Mostrou capacidade contra nível médio: 4-1 vs Chile e 1-0 vs Costa do Marfim"
      ],
      fracos: [
        "Dependência excessiva de Chris Wood: sem ele em forma, some a ameaça ofensiva",
        "Lacuna individual enorme contra Bélgica, Egito e Irã",
        "Vulnerabilidade na bola parada defensiva (2 gols sofridos assim vs Finlândia)",
        "Cacace em baixa: só 11 jogos em 25-26 no Wrexham e quatro lesões",
        "Lesões no miolo: Joe Bell (panturrilha) e Ryan Thomas (isquio) em dúvida",
        "Nível das eliminatórias não testa o time (rivais OFC de ranking 150-180)"
      ],
      tatica: {
        ofensiva: "Padrão A: lançamento rápido para Wood como apoio aéreo; Padrão B: bola parada desenhada para Wood e Boxall; Padrão C: contra-ataques pelas alas (Just à esquerda, Singh/Garbett à direita).",
        defensiva: "Bloco compacto médio-baixo com linha recuada contra superiores; dois médios (Stamenić + Bell/Garbett) formam escudo duplo; Boxall é o cérebro — mas a bola parada defensiva é fraqueza.",
        semBola: "Recomposição organizada sem pressão alta sistemática; recuperação em bloco; linha de pressão no meio, sem pressa de recuperar no campo adversário.",
        geral: "Sistema pragmático e flexível (4-4-2 ou 4-2-3-1) de Bazeley desde 2023, combinando bloco médio-baixo, transições rápidas para Wood e bola parada como diferencial ofensivo."
      },
      comoChega: "Preparação mista: dominante nas eliminatórias OFC (oposição fraca), mas oscilante contra rivais fortes. Sofreu um 0-4 do Haiti em 03/jun (sem Bell e Thomas, condições adversas). Wood recuperado de cirurgia no joelho, com carga gerenciada.",
      expectativa: "Passar como melhor terceiro é o cenário otimista-realista, dependendo sobretudo do jogo contra o Irã (16/jun) — o jogo-chave; avançar ao mata-mata seria histórico, no retorno à Copa após 16 anos.",
      statsLinha: "1,5 gol/jogo em 4 amistosos contra ranks <60 (Costa do Marfim, Ucrânia, Finlândia, Chile); ~68% de posse nas eliminatórias OFC. xG indisponível para a OFC em fontes confiáveis.",
      resumo: "Seleção resiliente e organizada do Pacífico, com ícone ofensivo em Chris Wood (Premier League), de volta à Copa após 16 anos com a meta histórica de avançar; desequilibrada contra rivais de topo, mais competitiva contra o Irã — tudo depende de Wood fit e do jogo-chave em Los Angeles."
    },

    /* ===================== GRUPO H ===================== */
    "Espanha": {
      formacao: "4-3-3",
      duvidas: "Yamal e Nico Williams estão em recuperação de lesão muscular; Dani Olmo e Ferran Torres são alternativas nos flancos se algum dos dois não atingir 100%.",
      banco: [b("Dani Olmo", "Barcelona"), b("Gavi", "Barcelona"), b("Mikel Merino", "Arsenal"), b("Ferran Torres", "Barcelona"), b("David Raya", "Arsenal"), b("Martín Zubimendi", "Arsenal")],
      craques: [
        k("Lamine Yamal", "Barcelona", "Extremo direito — 6 dribles/90, 16G+11A em 25-26; maior desequilibrador"),
        k("Rodri", "Manchester City", "Pivô Ballon d'Or 2024 — inteligência tática, 90%+ de acerto, maestro das transições"),
        k("Pedri", "Barcelona", "Meia criativo — 40 grandes chances criadas na La Liga; o cérebro da equipe"),
        k("Nico Williams", "Athletic Bilbao", "Extremo esquerdo — velocidade e penetração; decisivo na Euro 2024"),
        k("Mikel Oyarzabal", "Real Sociedad", "Centroavante — 15G+4A em 25-26; o melhor finalizador da Espanha"),
        k("Pau Cubarsí", "Barcelona", "Zagueiro de 19 anos — 94,6% de acerto; a maior revelação de 2025")
      ],
      fortes: [
        "Amplitude com Yamal (6 dribles/90) e Nico Williams (3,4) — a dupla mais temida no 1v1",
        "Supremacia no meio com Rodri-Pedri-Fabián Ruiz; ainda tem Zubimendi e Gavi",
        "Eficiência documentada: 2,1 gols/jogo na Euro 2024, xG de 2,97/90 nas Eliminatórias",
        "Defesa jovem e técnica com Cubarsí (94,6%) e Laporte experiente",
        "Versatilidade: 70,4% de posse, adapta-se entre 4-3-3 com bola e 4-2-3-1 sem",
        "Sequência invicta: 31 jogos sem derrota em competições oficiais"
      ],
      fracos: [
        "Sem centroavante de classe mundial: Oyarzabal é bom, mas não resolve sozinho",
        "Fragilidade histórica nos pênaltis: 4 eliminações por penalidades em Copas",
        "Incerteza com Rodri: de volta de LCA com lesões musculares, sem o ritmo de 23-24",
        "Lesões recentes de Yamal (isquio, 22/4) e Nico Williams (muscular, 10/5)",
        "Ausência de Carvajal; laterais direitos reservas reduzem o desequilíbrio",
        "Risco de desgaste físico (50+ jogos na temporada) no calor dos EUA"
      ],
      tatica: {
        ofensiva: "Extremos (Yamal/Williams) largos no 1v1; laterais (Cucurella/Porro) avançam criando 2-3-5; triangulações com Pedri como metrônomo (40 grandes chances); Zubimendi como 3º zagueiro libera a progressão; bola parada de Pedri/Yamal para Laporte/Cubarsí.",
        defensiva: "Bloco médio-alto alternando 4-3-3 e 4-4-2 compacto; Rodri como âncora limpando espaços; linha média-alta (cuidado nas transições); Cubarsí lidera no alto; defesa aérea sólida (4 gols sofridos na Euro, nenhum de bola parada).",
        semBola: "Pressing médio-alto com gatilhos em erros de saída; Yamal/Williams canalizam ao meio; recuperava a 44,6m do próprio gol; transição defensiva frágil quando os extremos estão abertos e perde a bola — espaço atrás dos laterais.",
        geral: "Equipe tecnicamente superior, com o maior repertório coletivo; De la Fuente transformou o controle posicional em verticalidade — quer posse E gol, não só domínio; 4-3-3 ofensivo com laterais nos meios-espaços."
      },
      comoChega: "Campeã invicta da Euro 2024, com 31 jogos sem derrota em competições oficiais e qualificação perfeita (5V+1E, 21 gols, 2 sofridos). Amistosos pré-Copa: 3-0 sobre o Iraque (4/6) e 3-2 sobre o Peru (8/6). Clima positivo, mas com tensão na recuperação de Yamal/Williams e na gestão de carga de Rodri.",
      expectativa: "Co-favorita ao título ao lado da França; o teto é ser campeã pelo talento coletivo; o piso são as oitavas; a preocupação real é a fragilidade histórica nos pênaltis, que reapareceu na final da Nations League 2025.",
      statsLinha: "Euro 2024: 2,1 gols/jogo, 1,86 xG. Eliminatórias UEFA 2026: 2,97 xG/90 (2º maior da Europa), 0,41 xG contra (2º mais baixo), 70,4% de posse. Amistosos jun/2026: 3,0 gols/jogo vs Iraque e Peru.",
      resumo: "A Espanha é a equipe tecnicamente mais completa do torneio, com maior profundidade, extremos aterradores e trio de meio de elite — mas a dependência de Rodri (pós-LCA), a incerteza de Yamal/Williams no início e a fragilidade histórica nos pênaltis são vulnerabilidades reais que podem limitar o teto à semifinal."
    },

    "Uruguai": {
      formacao: "4-3-3",
      duvidas: "Com De Arrascaeta fora (desgarro na panturrilha), a função de 10 criativo fica entre Valverde adiantado e Nicolás De La Cruz (Flamengo); Nicolás pode ser meia mais recuado se Bentancur descansar. Darwin Núñez em má fase criativa.",
      banco: [b("Sergio Rochet", "Internacional"), b("Joaquín Piquerez", "Palmeiras"), b("Nicolás De La Cruz", "Flamengo"), b("Maximiliano Araújo", "Sporting CP"), b("Rodrigo Aguirre", "Club América"), b("Federico Viñas", "Real Oviedo")],
      craques: [
        k("Federico Valverde", "Real Madrid", "Motor do jogo — box-to-box (11G+13A no Real Madrid 25-26)"),
        k("Ronald Araujo", "Barcelona", "Líder defensivo — zagueiro de 1x1 explosivo (1,88m)"),
        k("José María Giménez", "Atlético de Madrid", "Capitão e organizador — quase 100 caps"),
        k("Darwin Núñez", "Al-Hilal", "Principal ameaça — artilheiro das Eliminatórias (5 gols)"),
        k("Manuel Ugarte", "Manchester United", "Volante protetor — motor da pressão, cobre Valverde"),
        k("Mathías Olivera", "Napoli", "Lateral atacante — alimentador da ala esquerda")
      ],
      fortes: [
        "Bloco defensivo de elite (Araujo + Giménez; 10 jogos a zero nas Eliminatórias)",
        "Pressão intensa (PPDA 7,8 na Copa América 2024 — o melhor do torneio)",
        "Bola parada ofensiva dominante (5 gols assim na Copa América 2024; maior xG)",
        "Federico Valverde na melhor forma da carreira (11G+13A no Real Madrid)",
        "Tradição e caráter competitivo (2 títulos mundiais; venceu o Brasil em 2024)",
        "Miolo físico forte (Ugarte-Bentancur-Valverde, calejados em grandes clubes)"
      ],
      fracos: [
        "Crise criativa aguda com De Arrascaeta fora (praticamente fora do torneio)",
        "Darwin Núñez em seca prolongada (13 jogos sem participação desde 28/jun/2024)",
        "Forma ofensiva alarmante (2 gols em 360 min nos últimos 4 amistosos)",
        "Rigidez tática de Bielsa (o 5-1 vs EUA expôs falta de adaptação)",
        "Dificuldade contra blocos organizados; depende de transições",
        "Clima interno instável (críticas públicas de Suárez, tensão pós-Copa América)"
      ],
      tatica: {
        ofensiva: "Prioriza transições verticais diretas (3-1-3-1 na posse, com laterais bombeando); dependência excessiva de Valverde para criar entre linhas após a saída de De Arrascaeta; ameaça constante na bola parada (Araujo/Giménez + Valverde/Ugarte de 2ª linha).",
        defensiva: "Bloco médio-alto com pressing man-to-man; linha alta com zagueiros agressivos no 1x1; risco em profundidade quando os laterais sobem demais (vulnerável a contras, como no 5-1 vs EUA).",
        semBola: "PPDA 7,8 (o mais agressivo da Copa América 2024); recuperações em zonas altas (10/jogo); compactação rápida rumo ao gol após a perda; problema: reorganização lenta na transição defensiva.",
        geral: "Pressing vertical agressivo com transições rápidas; Bielsa transformou o Uruguai de pragmático-defensivo para um time de recuperação alta, progressão vertical e bola parada detalhada."
      },
      comoChega: "Chega com incertezas: De Arrascaeta (o 10) fora por desgarro na panturrilha (02/jun); forma ofensiva ruim (2 gols em 4 amistosos). Clima interno tenso após as críticas de Suárez ao método Bielsa. Defesa e miolo intactos; Bentancur recuperado de cirurgia no isquiotibial.",
      expectativa: "O objetivo realista é o 2º lugar do Grupo H e a classificação às oitavas, mas a ausência de De Arrascaeta enfraquece muito a criação e coloca em risco a progressão se Darwin Núñez não acordar.",
      statsLinha: "Eliminatórias CONMEBOL 2024-2026 (18 jogos): 1,22 gol/jogo, xG 1,14, 57% de posse — amostra pequena e heterogênea.",
      resumo: "Uruguai em transição geracional sob Bielsa, defensivamente competente e mortífero na bola parada, mas com crise criativa aguda (De Arrascaeta fora) e Darwin em jejum; 2º colocado esperado no Grupo H, com as oitavas como objetivo mínimo, mas frágil para além disso."
    },

    "Arábia Saudita": {
      formacao: "4-2-3-1",
      duvidas: "A lateral esquerda pode variar entre Nawaf Boushal e Moteb Al-Harbi; o meia-ofensivo pode ser Musab Al-Juwayr ou Nasser Al-Dawsari conforme a necessidade tática de Donis.",
      banco: [b("Nawaf Al-Aqidi", "Al Nassr"), b("Saleh Al-Shehri", "Al Ittihad"), b("Abdullah Al Hamdan", "Al Nassr"), b("Khalid Al-Ghannam", "Al Ettifaq"), b("Sultan Mandash", "Al Hilal"), b("Alaa Al-Hajji", "Neom SC")],
      craques: [
        k("Salem Al-Dawsari", "Al Hilal", "Capitão, LW — criador e finalizador de altos quilates"),
        k("Firas Al-Buraikan", "Al Ahli", "Centroavante — artilheiro das eliminatórias (5 gols)"),
        k("Saud Abdulhamid", "RC Lens", "Lateral-direito — único com experiência europeia regular"),
        k("Mohamed Kanno", "Al Hilal", "Volante/âncora — motor defensivo fundamental"),
        k("Musab Al-Juwayr", "Al Qadsiah", "Meia-atacante — revelação jovem (22), motor de progressão"),
        k("Mohammed Al-Owais", "Al Ula", "Goleiro experiente — herói do 2-1 vs Argentina em 2022")
      ],
      fortes: [
        "Legado de 'mata-gigantes' com mentalidade coletiva (template do 2-1 vs Argentina 2022)",
        "Organização defensiva sólida: dupla Tambakti-Lajami com solidez aérea",
        "Saud Abdulhamid como diferencial europeu (Ligue 1)",
        "Donis conhece o circuito saudita (Al Hilal, Al Wehda, Al Fateh) — adaptação curta",
        "Experiência em competições continentais intensas (Salem conhece a pressão)",
        "Transições rápidas: pressing alto coordenado + lançamentos verticais"
      ],
      fracos: [
        "Transição técnica de emergência: troca de técnico a 7 semanas da Copa",
        "Quase exclusividade doméstica: 25 de 26 na Roshn Saudi League",
        "Artilharia sem crack mundial; taxa de conversão modesta (~9%)",
        "Linha alta vulnerável a equipes velozes (0-4 vs Egito marca o padrão)",
        "Fadiga de fim de jogo e dependência do plano A; controle de jogo fraco",
        "Falta de profundidade ofensiva no banco (rico em defensores, escasso em criação)"
      ],
      tatica: {
        ofensiva: "Transição vertical rápida após a recuperação; pressing alto para provocar erros; largura via Saud Abdulhamid (direita) e Salem Al-Dawsari criando pela esquerda; Musab Al-Juwayr como motor de progressão.",
        defensiva: "Bloco médio-alto pragmático; linha elevada; Mohamed Kanno como âncora; dupla Tambakti-Lajami física no alto; risco: velocidade pelas costas.",
        semBola: "Pressing zonal coordenado de intensidade moderada (superior à média asiática); reação razoável à perda no terço médio; transição defensiva rápida; tendência à falta tática.",
        geral: "Identidade de organização coletiva, transição rápida e aproveitamento de momentos. Plano A: pressing → erro → transição vertical; Plano B: recuo para 4-5-1 com bolas longas e set-pieces."
      },
      comoChega: "Chegada instável: demissão de Hervé Renard em 17/04 após 0-4 vs Egito e 1-2 vs Sérvia. Donis nomeado em 23/04, com só 7 semanas até a Copa. Preparação nos EUA desde 25/05; derrota no único amistoso de Donis vs Equador (2-1). O aquecimento final vs Senegal (09/06) ainda pode calibrar o ritmo.",
      expectativa: "Avançar como 2º ou melhor 3º; o realismo aponta disputa pelo 3º do Grupo H com Cabo Verde, com chance real de classificação se vencer Cabo Verde e roubar pontos de Espanha/Uruguai (~15-25%).",
      statsLinha: "Últimos ~10 jogos (AFC + amistosos 25-26): 0,9 gol/jogo, xG 1,08 (estimado), 60% de posse — amostra heterogênea; a posse cairá muito contra Espanha/Uruguai.",
      resumo: "Underdog claro no Grupo H, com histórico de surpresas pontuais (2022 vs Argentina); elenco doméstico organizado, mas tecnicamente inferior a Espanha/Uruguai. A troca de técnico a 7 semanas desestabiliza, mas Donis conhece o circuito — projeção realista: 3º do grupo, com margem para classificar como melhor 3º se vencer Cabo Verde."
    },

    "Cabo Verde": {
      formacao: "4-2-3-1",
      duvidas: "Logan Costa é dúvida crítica de fitness (ruptura de LCA em jul/2025, só 13 minutos em LaLiga em maio); se fora, Stopira ou Wagner Pina assume a zaga. Ryan Mendes (capitão, 36) pode começar como 9 falso ou entrar no 2º tempo.",
      banco: [b("Ryan Mendes", "Iğdır FK"), b("Stopira", "Torreense"), b("Wagner Pina", "Trabzonspor"), b("Jovane Cabral", "Estrela da Amadora"), b("Telmo Arcanjo", "Vitória SC"), b("Laros Duarte", "Puskás Akadémia")],
      craques: [
        k("Ryan Mendes", "Iğdır FK", "Capitão histórico — recordista de caps (94+) e gols (22)"),
        k("Logan Costa", "Villarreal", "Melhor jogador em nível de clube — zagueiro de LaLiga"),
        k("Jamiro Monteiro", "PEC Zwolle", "Motor do meio — distribuidor e metrônomo tático"),
        k("Willy Semedo", "Omonia Nicosia", "Em melhor forma de clube (17 gols em 25-26) — velocidade pela esquerda"),
        k("Kevin Pina", "Krasnodar", "Meia defensivo dinâmico — chegada à área"),
        k("Dailon Livramento", "Casa Pia", "Artilheiro das eliminatórias (4 gols) — geração futura")
      ],
      fortes: [
        "Solidez defensiva notável: só 8 gols sofridos em 10 jogos (melhor média africana); 5 clean sheets em casa",
        "Bloco 4-2-3-1 bem organizado sob Bubista, com distância reduzida entre linhas",
        "Transição rápida pelas alas com Willy Semedo e Garry Rodrigues",
        "Bola parada ofensiva: Ryan Mendes cobra faltas e escanteios com qualidade",
        "Coesão e mentalidade de underdog; equipe estável desde 2020 sob Bubista",
        "Classificação dominante na CAF (23 pts, 4 à frente de Camarões) — narrativa motivadora"
      ],
      fracos: [
        "Abismo técnico contra Espanha (2ª) e Uruguai (17º); métricas feitas contra a CAF",
        "Dependência crítica de Logan Costa, com dúvida severa de fitness",
        "Elenco em ligas secundárias (Chipre, Turquia 2ª, Irlanda, Finlândia)",
        "Potencial ofensivo limitado; Ryan Mendes (36) cria mais do que finaliza",
        "Pressão da estreia histórica contra a Espanha (15/jun, Atlanta), sem ninguém com Copa",
        "Goleiro Vozinha (39) de liga menor será testado severamente"
      ],
      tatica: {
        ofensiva: "Dois vetores: (1) transição rápida pelas alas ao recuperar em bloco médio; (2) combinações curtas pela 2ª linha com Jamiro Monteiro conectando defesa e ataque. Limitação: sem finalizador clínico.",
        defensiva: "Bloco na meia-própria com linha de 4 entre a área e o círculo; distância pequena (~25m) entre linhas. Vulnerabilidade: espaço atrás dos laterais (ala esquerda jovem). Sofreu 3 gols de bola parada nas eliminatórias.",
        semBola: "Não faz gegenpressing; prefere o bloco médio-baixo e esperar o erro; pressing imediato nos 1ºs 3-4s após a perda, recuando se não recuperar; perigo nas transições quando sobe demais para buscar o gol.",
        geral: "Equipe de caráter coletivo baseada em organização e transição rápida; bloco 4-2-3-1 compacto na meia-própria como identidade; não busca o espetáculo, mas a eficiência dentro do proposto."
      },
      comoChega: "Chega com vitória importante de 3-0 sobre a Sérvia em Lisboa (31/mai), que elevou a moral. Último amistoso vs Bermudas (06/jun). Logan Costa segue como dúvida crítica de fitness; Vozinha (39) titular; Ryan Mendes motivado para a estreia histórica. Clima interno altíssimo com celebrações nacionais e narrativa de superação.",
      expectativa: "Vencer a Arábia Saudita (3º jogo) e sair com ao menos 3 pontos e orgulho; avançar como melhor terceiro seria feito histórico, mas a projeção mais provável é a eliminação na fase de grupos (4º lugar).",
      statsLinha: "Ciclo 25-26 (eliminatórias CAF + amistosos): 1,7 gol/jogo, xG 1,22, 54% de posse — posse alta para bloco compacto, explicada por ser tecnicamente melhor na CAF.",
      resumo: "Cabo Verde faz a estreia histórica na Copa como equipe de bloco compacto, transição rápida e coesão sob Bubista; depende criticamente de Logan Costa (Villarreal, dúvida de fitness) para elevar o patamar defensivo; favorita contra a Arábia Saudita, mas amplamente inferior a Espanha e Uruguai num Grupo H dificílimo."
    },

    /* ===================== GRUPO I ===================== */
    "França": {
      formacao: "4-2-3-1",
      duvidas: "William Saliba é dúvida grave pela lesão nas costas na final da Champions; se não recuperar, Maxence Lacroix ou Ibrahima Konaté ocupam o eixo, e Malo Gusto entra na lateral direita.",
      banco: [b("Maxence Lacroix", "Southampton"), b("Ibrahima Konaté", "Liverpool"), b("N'Golo Kanté", "Al-Ittihad"), b("Warren Zaïre-Emery", "PSG"), b("Marcus Thuram", "Inter Milan"), b("Bradley Barcola", "PSG")],
      craques: [
        k("Kylian Mbappé", "Real Madrid", "Capitão — outlet de contra-ataque e definidor; 56 gols pela seleção"),
        k("Ousmane Dembélé", "PSG", "Bola de Ouro 2025 — ponta direita com drible e chute potente"),
        k("William Saliba", "Arsenal", "Zagueiro impermeável quando em campo — leitura e timing"),
        k("Aurélien Tchouaméni", "Real Madrid", "Âncora do meio — pivô que libera a criatividade"),
        k("Mike Maignan", "AC Milan", "Goleiro de elite — dominante no ar e com saídas precisas"),
        k("Désiré Doué", "PSG", "Golden Boy 2025 — versatilidade (10, ponta ou interior)")
      ],
      fortes: [
        "Poder ofensivo sem paralelo: Mbappé, Dembélé, Olise e Doué (ataque de ~US$ 1 bilhão)",
        "Defesa hermética nas classificatórias: só 23 chutes sofridos em 6 jogos e 4 gols",
        "Goleiro de elite: Maignan com 13 clean sheets na Serie A 25-26",
        "Profundidade e versatilidade: Kanté, Rabiot, Zaïre-Emery e Koné dão equilíbrio",
        "Experiência de grandes torneios: 3 finais em 8 anos; Deschamps nunca caiu antes das quartas",
        "Transições rápidas de alta qualidade, com Mbappé como outlet permanente"
      ],
      fracos: [
        "A sombra de Saliba: sua lesão deixa déficit defensivo grave; Upamecano é inconsistente sem cobertura",
        "Dependência excessiva de Mbappé (hamstring propenso a recidivas)",
        "Meio-campo sem criador puro: a dupla pivô é de destruição, não de progressão criativa",
        "Inconsistência de Dembélé: opera em rajadas; cai quando fecham a direita",
        "Vulnerabilidade em bola parada defensiva (dois gols na final de 2022 vs Argentina)",
        "Histórico emocional: saída na semi da Euro 2024 e final perdida em 2022"
      ],
      tatica: {
        ofensiva: "4-3-3 assimétrico com Tchouaméni como pivô único; Mbappé flutua pela esquerda como outlet de contra-ataque; criação via transição rápida e 1v1; Dembélé pela direita como 2ª opção.",
        defensiva: "4-4-2 com bloco médio; Dembélé fecha por dentro formando quarteto; Mbappé como ponta de lança; linha média-alta com Saliba ditando o timing; Maignan dominante no ar; vulnerável à bola parada.",
        semBola: "Pressão seletiva, não universal; ativada em saídas curtas, desativada na progressão lateral; sprint de retorno de Mbappé; fechamento imediato de Dembélé; aceita construção no setor de baixo.",
        geral: "Equipe de transição com qualidade individual excepcional e disciplina tática. Plano A: controle em bloco médio-baixo → recuperação → saída rápida → finalização; Plano B (posse horizontal) menos convincente; mentalidade de nunca desistir."
      },
      comoChega: "Maior favorita (1ª FIFA, 13% de título pela Opta), com dois resultados de prestígio recentes: vitórias sobre Brasil (2-1 com 10) e Colômbia (3-1) em março, em solo norte-americano. Mbappé se recupera de lesão no semitendíneo (abril) e deve estar apto para 16/06; Saliba é dúvida grave pela lesão nas costas.",
      expectativa: "Título — o terceiro troféu mundial. Mesmo com dúvidas sobre Saliba, o elenco é rico demais para cair antes das oitavas e deve liderar o Grupo I (60,3% pela Opta).",
      statsLinha: "Classificatórias UEFA: 16 gols em 6 jogos (2,67/jogo); Nations League 24-25: xG ~1,94/jogo (fonte secundária); amistosos de março sem dados abertos.",
      resumo: "A França é a maior favorita da Copa 2026, com ataque avaliado em ~US$ 1 bilhão (Mbappé, Dembélé, Olise, Doué), defesa hermética e goleiro de elite — mas vulnerável pela possível ausência de Saliba e pela dependência de Mbappé."
    },

    "Noruega": {
      formacao: "4-3-3",
      duvidas: "Ødegaard é dúvida crítica por lesão no joelho (137 dias fora em 25-26); se não jogar 90 minutos, Thorstvedt ou Aasgaard substituem no apoio a Haaland.",
      banco: [b("Alexander Sørloth", "Atlético de Madrid"), b("Jørgen Strand Larsen", "Crystal Palace"), b("Kristian Thorstvedt", "Sassuolo"), b("Thelo Aasgaard", "Rangers"), b("Fredrik Aursnes", "Benfica"), b("David Møller Wolfe", "Wolverhampton")],
      craques: [
        k("Erling Haaland", "Manchester City", "Centroavante de elite — 55 gols em 49 caps, 16 nas eliminatórias"),
        k("Martin Ødegaard", "Arsenal", "Capitão e armador — o cérebro criativo, 7A nas eliminatórias"),
        k("Alexander Sørloth", "Atlético de Madrid", "Top scorer do Atlético na LaLiga 25-26 — 26 gols internacionais"),
        k("Antonio Nusa", "RB Leipzig", "Maior talento jovem — ponta esquerda com velocidade e regate"),
        k("Sander Berge", "Fulham", "Meia de destruição — 64 caps, 35 jogos na PL 25-26"),
        k("Julian Ryerson", "Borussia Dortmund", "Lateral direito ofensivo — líder defensivo com cobertura alta")
      ],
      fortes: [
        "Poder ofensivo excepcional: 37 gols em 8 jogos (4,6/partida) e só 5 sofridos (melhor da UEFA)",
        "Haaland no auge: 55 gols em 49 caps, 27 na PL 25-26",
        "Alternativas ao gol: Sørloth, Strand Larsen e Nusa com velocidade devastadora",
        "Pressing estruturado e defesa zonal compacta que privilegia a interceptação",
        "Elenco europeu de alta qualidade com profundidade real em todas as posições",
        "Velocidade de transição: Haaland, Nusa e Bobb oferecem contra-ataque letal"
      ],
      fracos: [
        "Ødegaard lesionado: sem ele, a criação recai inteiramente sobre Haaland",
        "Goleiro experiente, mas questionável: Nyland (35) com temporada inconsistente",
        "Vulnerabilidade central contra a elite (o 1-4 da Itália expôs fragilidades)",
        "Dependência dupla de Haaland e Ødegaard (43% dos gols nas eliminatórias por Haaland)",
        "Inexperiência em Copas: nenhum jogador com Mundial — gestão emocional é incógnita",
        "Estatísticas infladas pela Moldávia; a Itália foi o único teste de elite"
      ],
      tatica: {
        ofensiva: "Arquitetura em torno de achar Haaland em condição de finalizar: Ødegaard como pivô baixo-médio atrai marcação e libera espaço; Nusa e Bobb dão largura; transição rápida antes do bloco se organizar.",
        defensiva: "Bloco médio-alto compacto com marcação zonal que privilegia interceptação sobre duelo físico; linha de 4 com distâncias curtas; Berge e Berg como dupla de recuperação no miolo.",
        semBola: "Pressing por gatilho (passe longo do GK, erro de construção), não indiscriminado; recua organizado ao bloco médio com 2-3 jogadores atrapalhando a saída; Haaland pressiona o zagueiro com a bola.",
        geral: "Equipe de posse organizada com velocidade de transição devastadora; Plano A busca Ødegaard livre entre linhas; Plano B muda para 4-4-2 com dois 9 se Haaland for marcado em dobra."
      },
      comoChega: "Confiança elevada após campanha perfeita (8V 0E 0D); a geração mais talentosa da história. Amistosos: 3-1 vs Suécia (01/06, Strand Larsen 2) e vitória sobre o Marrocos (07/06, Strand Larsen 2). Preocupação crítica: Ødegaard em dúvida após lesão no joelho e ausência nos amistosos.",
      expectativa: "Avançar com alta probabilidade (84% segundo Kalshi); o teto são as quartas com Haaland e Ødegaard plenos; o piso seria um decepcionante 3º lugar se Ødegaard não jogar e Haaland for marcado em dobra.",
      statsLinha: "Eliminatórias UEFA: 4,6 gols/jogo contra adversários mistos (Moldávia ~165 até Itália ~7), xG 1,76, 54,9% de posse; excluindo a Moldávia, a média cai para 3,5.",
      resumo: "Dark horse temida, com poder ofensivo sem paralelo para o ranking (31º): Haaland e Ødegaard na elite mundial e campanha impecável — mas a inexperiência em Copas e a dependência de dois jogadores criam risco; favorita ao 2º lugar do Grupo I, atrás da França."
    },

    "Senegal": {
      formacao: "4-3-3",
      duvidas: "Koulibaly (34, Al-Hilal) em dúvida crítica por lesão muscular na coxa — se recuperar, entra como titular no lugar de Seck e assume a capitania defensiva.",
      banco: [b("Kalidou Koulibaly", "Al-Hilal"), b("Pape Gueye", "Villarreal"), b("Habib Diarra", "Sunderland"), b("Iliman Ndiaye", "Everton"), b("El Hadji Malick Diouf", "West Ham"), b("Cheikhou Kouyaté", "Damac")],
      craques: [
        k("Sadio Mané", "Al Nassr", "Capitão e maestro — liderança e conexão; 18 chances criadas na AFCON 2025"),
        k("Ismaïla Sarr", "Crystal Palace", "Velocidade, drible e finalização — 9 gols na PL 25/26; ameaça no 1x1"),
        k("Édouard Mendy", "Al-Ahly", "Goleiro experiente — 4 clean sheets na AFCON; pegou pênalti na final"),
        k("Kalidou Koulibaly", "Al-Hilal", "Zagueiro líder — leitura e presença aérea; 103 caps"),
        k("Pape Matar Sarr", "Tottenham", "Ponte entre Gueye e Camara — combate e progressão"),
        k("Lamine Camara", "Monaco", "Revelação 25-26 — fisicamente forte; transição e 3 gols na Ligue 1")
      ],
      fortes: [
        "Qualidade ofensiva pura: Mané, Jackson e Sarr (12 gols em 6 jogos na AFCON)",
        "Solidez estrutural: só 3 gols sofridos em 10 eliminatórias e 2 em 6 jogos da AFCON",
        "Goleiro de elite: Mendy entre os 5 melhores do torneio em decisões",
        "Profundidade europeia: 18/26 em ligas de topo — o elenco mais qualificado da história",
        "Momentum continental: campeão da AFCON 2025, invicto há 17 jogos",
        "Transição rápida como arma letal (recuperação-aceleração-finalização em 2-3 passes)"
      ],
      fracos: [
        "Koulibaly em dúvida crítica: sem ele, a defesa cai dois níveis",
        "Dependência excessiva de Mané (34, na Saudi Pro League de menor intensidade)",
        "Nicolas Jackson sem ritmo: poucos minutos no Bayern (concorrência de Kane)",
        "Deficiência em criação posicional: depende de talento individual e transição",
        "Técnico com pouca experiência de Copa (Pape Thiaw desde dez/2024)",
        "Grupo I adverso: França, Noruega e Iraque — derrota inicial pesada complicaria"
      ],
      tatica: {
        ofensiva: "Transição rápida (Mané como pivô entre defesa e ataque); jogo pelos corredores (laterais se projetam); bola parada (Mané cobrador; Koulibaly/Niakhaté como alvos); 1x1 individual quando a criação posicional falha (Sarr, Ndiaye).",
        defensiva: "Linha de 4 perto do meio-campo próprio; bloco sem pressão alta sistemática; Koulibaly-Niakhaté no combate aéreo (quando Koulibaly disponível); Mendy referência nas bolas altas; Gueye como cão de guarda fechando linhas.",
        semBola: "Pressing médio-alto com triggers (passe errado, bola ao goleiro); os três meias (Gueye + Camara + Sarr) fecham linhas logo após a perda; alta frequência de recuperação no terço médio-alto contra rivais africanos.",
        geral: "Bloco médio que se reorganiza em bloco baixo sob desvantagem; a defesa como base; intensidade física como diferencial; exploração de espaços na transição e a bola parada como fontes de gol; identidade de ser difícil de bater."
      },
      comoChega: "Campeão da AFCON 2025, invicto por 24 jogos (até 31/mai), e invicto em 10 eliminatórias (7V 3E). Recente: 3-1 sobre a Inglaterra (jun/2025) e 2-3 para os EUA (31/mai) — esta última mostrou vulnerabilidade sem Koulibaly. A dúvida sobre Koulibaly persiste; o clima foi afetado pelo episódio de abandono de campo na final da AFCON, mas o título mantém a base sólida.",
      expectativa: "Superar as quartas de 2002, com a semifinal como meta máxima; a projeção realista é o 2º lugar e as oitavas — o risco é não ser goleado pela França e bater ao menos um entre Noruega e Iraque.",
      statsLinha: "AFCON 2025 (6 jogos): 12 gols, 2 sofridos (0,33/jogo), 4 clean sheets. Eliminatórias CAF (10 jogos): 1º lugar com 24 pts (7V 3E), só 3 gols sofridos. xG indisponível para seleções africanas.",
      resumo: "Campeões africanos com profundidade europeia e Mané na despedida — fortes favoritos ao 2º lugar do grupo, com potencial real de chegar às quartas se a defesa estiver completa (Koulibaly recuperado)."
    },

    "Iraque": {
      formacao: "4-4-2",
      duvidas: "Jalal Hassan é o capitão titular, mas teve lesão antes da repescagem; Ahmed Basil pode disputar a vaga. Na lateral esquerda, Merchas Doski é favorito sobre Mustafa Saadoon.",
      banco: [b("Ahmed Basil", "Al-Quwa Al-Jawiya"), b("Mohanad Ali", "Dibba Al Fujairah"), b("Marko Farji", "Al-Zawraa"), b("Ahmed Qasim", "Nashville SC"), b("Frans Putros", "Sloga Doboj"), b("Ali Jassim", "Al-Shorta")],
      craques: [
        k("Aymen Hussein", "Al-Karma", "Centroavante artilheiro — 8 gols nas Eliminatórias AFC"),
        k("Ali Al-Hamadi", "Luton Town", "Primeiro iraquiano na Premier League — rápido e técnico"),
        k("Zidane Iqbal", "Utrecht", "Meia central — melhor passador e motor criativo"),
        k("Amir Al-Ammari", "Cracovia", "Armador — especialista em bola parada e pênaltis"),
        k("Jalal Hassan", "Al-Zawraa", "Goleiro-capitão com 100 caps — ícone da seleção"),
        k("Mohanad Ali", "Dibba Al Fujairah", "Segundo centroavante — substituto decisivo")
      ],
      fortes: [
        "Organização defensiva coletiva: dois blocos de quatro compactos e difíceis de penetrar",
        "Eficácia dos finalizadores: Aymen Hussein (0,35 gol/cap) e Mohanad Ali com boa conversão",
        "Bola parada ofensiva: Al-Ammari especialista em cobranças e ameaças aéreas",
        "Mentalidade de raça: capacidade de virar situações adversas nas Eliminatórias",
        "Mistura de experiência (Hassan, 100 caps) e juventude europeia (Iqbal, Al-Hamadi)",
        "Transição rápida e direta, com bolas longas para os centroavantes"
      ],
      fracos: [
        "Qualidade técnica muito abaixo dos rivais: ninguém titular em França, Noruega ou Senegal",
        "Incerteza na meta: Hassan teve lesão e Basil criou disputa real",
        "Ataque dependente de cruzamentos e bola parada; pouca criatividade no chão",
        "Vulnerável contra alta posse: o bloco compacto se desorganiza com passes rápidos",
        "Limitação na criação em jogo aberto",
        "Contexto logístico difícil: preparação com recursos limitados"
      ],
      tatica: {
        ofensiva: "Transição direta com cruzamentos para Hussein, especialista no aéreo; a bola parada é o vetor mais confiável de criação, com Al-Ammari como cobrador.",
        defensiva: "Bloco médio-baixo compacto em dois andares de quatro; linha de zaga próxima à área para eliminar o espaço entre linhas; marcação individual na bola parada.",
        semBola: "Pressão baixa (PPDA alto); não pratica pressing alto; espera o adversário chegar ao bloco antes de roubar; transição ofensiva imediata após a recuperação.",
        geral: "Pragmatismo defensivo com contra-ataque direto; Arnold adapta o time ao adversário, mas mantém o DNA de 'difícil de bater'. Plano A: 4-4-2 compacto; Plano B: 4-2-3-1 com mais controle."
      },
      comoChega: "Euforia nacional após a qualificação histórica via repescagem contra a Bolívia (2-1, 31/03), encerrando jejum de 40 anos. A recente derrota de 3-0 para a Espanha (04/06) foi contexto de trabalho tático e não invalida a euforia coletiva.",
      expectativa: "Terminar em 3º ou 4º no grupo; qualquer coisa além seria histórica. O objetivo imediato é evitar goleadas e sair com dignidade. Melhor cenário plausível: empatar com a Noruega + derrotas para França e Senegal = 1 ponto e possível 3º lugar.",
      statsLinha: "1,5 gol/jogo em 21 jogos da campanha (32 gols, saldo +18), inflado por adversários fracos (Indonésia); contra o Top 50 (Coreia do Sul) perdeu 0-2. xG e posse indisponíveis em fonte confiável.",
      resumo: "O Iraque volta ao Mundial após 40 anos com pragmatismo defensivo e contra-ataque direto sob Graham Arnold; o grupo durníssimo (França, Noruega, Senegal) praticamente garante a eliminação na fase de grupos, mas a classificação em si já é uma vitória histórica para a nação."
    },

    /* ===================== GRUPO J ===================== */
    "Argentina": {
      formacao: "4-3-3",
      duvidas: "Messi chega com sobrecarga no isquiotibial esquerdo e treina à parte; se não recuperar a tempo, Nico Paz pode entrar como meia-atacante. Romero se recupera de entorse no joelho, com Balerdi como alternativa.",
      banco: [b("Nico Paz", "Como"), b("Leonardo Balerdi", "Marseille"), b("Leandro Paredes", "Juventus"), b("Giuliano Simeone", "Napoli"), b("Gerónimo Rulli", "Olympiacos"), b("Nicolás González", "Juventus")],
      craques: [
        k("Lionel Messi", "Inter Miami", "Capitão — criador de espaços e liderança incontestável"),
        k("Lautaro Martínez", "Inter Milão", "Centroavante puro — Capocannoniere da Serie A 25-26"),
        k("Julián Álvarez", "Atlético Madrid", "Motor de pressão — cobertura enorme, 21 gols na temporada"),
        k("Enzo Fernández", "Chelsea", "Criador de jogo — 10G+4A na Premier League"),
        k("Alexis Mac Allister", "Liverpool", "Energia box-to-box — o motor silencioso"),
        k("Emiliano Martínez", "Aston Villa", "Especialista em pênaltis — o melhor do mundo no quesito")
      ],
      fortes: [
        "Qualidade individual de elite: seis jogadores de nível Champions em seus melhores anos",
        "Espinha dorsal campeã mantida desde 2022, com familiaridade tática rara",
        "Meio-campo de altíssimo nível: Enzo ~91% de acerto; Mac Allister e De Paul com intensidade",
        "Identidade consolidada sob Scaloni desde 2018 (8 anos de trabalho contínuo)",
        "Mentalidade vencedora forjada no título de 2022, incluindo especialidade em pênaltis",
        "Vantagem histórica de seleções sul-americanas em Copas fora da Europa"
      ],
      fracos: [
        "Messi (38) chega com sobrecarga no isquiotibial — quantos minutos em 7 jogos em 30 dias?",
        "Elenco envelhecido (média de 28,9 anos, 5ª mais velha), vulnerável a times jovens e velozes",
        "Surto atípico de lesões: sete jogadores abaixo do ideal (Messi, Dibu, Romero, Paredes...)",
        "Dependência de Messi nos momentos decisivos (faltas, pênaltis, criação em espaço curto)",
        "Laterais limitados na fase defensiva, especialmente Molina na saída",
        "Vulnerável a times de alta pressão, como a Áustria de Rangnick, que pode explorar a saída"
      ],
      tatica: {
        ofensiva: "Construção pela posse, dos zagueiros a Enzo/Mac Allister; assimetria lateral explorando as costas dos laterais adversários; Messi como meia-atacante ou falso 9; combinações de três (De Paul-Enzo-Mac Allister) como unidade.",
        defensiva: "Organização em 4-4-2 compacto, com linhas juntas e o espaço entre elas fechado; linha alta na construção; transição defensiva rápida com De Paul e Mac Allister; Romero e Otamendi como dominadores aéreos.",
        semBola: "Pressão contextual — aumenta no próprio campo e diminui no terço final; recuperação posicional imediata (não deixar o adversário organizar); Álvarez lidera a pressão; transições são a maior arma, com a velocidade de Álvarez e a habilidade de Messi/Lautaro.",
        geral: "Controle de posse por saída combinada, pressing em bloco médio-baixo, transições devastadoras e flexibilidade tática (4-3-3, 4-4-2, 3-5-2) sem fixar um time."
      },
      comoChega: "Chega como campeã do mundo 2022 e da América 2024, líder absoluta das Eliminatórias com 38 pontos. Porém, sete jogadores chegam em recuperação física (Messi, Dibu, Romero, Montiel, Molina, Paredes, Nico Paz), criando incerteza na saúde do elenco.",
      expectativa: "Defender o título e buscar o bicampeonato inédito desde 1958-62, com 15-22% de probabilidade de título (entre as 2-3 favoritas) caso Messi chegue saudável.",
      statsLinha: "Últimas 10 partidas (Eliminatórias + Copa América): Eliminatórias com 2,5 gols/jogo e 0,4 contra; Copa América 2024 com xG 1,59 e 0,87 contra; 66% de posse.",
      resumo: "A Argentina é a seleção mais qualificada do Grupo J, campeã defensora com espinha dorsal intacta, qualidade de elite e mentalidade vencedora — mas chega com surto atípico de lesões e um elenco envelhecido que pode sofrer contra potências europeias nas fases avançadas."
    },

    "Áustria": {
      formacao: "4-2-3-1",
      duvidas: "Alaba (lesão leve, carga gerenciada) pode entrar por Lienhart ou Danso; Laimer está suspenso no jogo 1 vs Jordânia; Wanner pode substituir Schmid ou Chukwuemeka conforme o adversário.",
      banco: [b("David Alaba", "Real Madrid"), b("Konrad Laimer", "Bayern Munich"), b("Paul Wanner", "PSV Eindhoven"), b("Michael Gregoritsch", "Augsburg"), b("Sasa Kalajdzic", "LASK"), b("Florian Grillitsch", "Braga")],
      craques: [
        k("Marcel Sabitzer", "Borussia Dortmund", "Motor ofensivo — 24 gols em 95 caps, líder em assistências"),
        k("David Alaba", "Real Madrid", "Capitão e símbolo emocional — 113+ caps, multicampeão europeu"),
        k("Nicolas Seiwald", "RB Leipzig", "Volante motor do pressing — o futuro do meio austríaco"),
        k("Konrad Laimer", "Bayern Munich", "Motor energético — versatilidade (lateral/volante)"),
        k("Paul Wanner", "PSV Eindhoven", "Meia técnico de 20 anos — dinâmico, ex-Alemanha sub-21"),
        k("Marko Arnautovic", "Red Star Belgrade", "Recordista histórico (47 gols) — único 9 de referência")
      ],
      fortes: [
        "Gegenpressing de alta intensidade (PPDA 7,14 — o mais baixo das eliminatórias UEFA)",
        "Solidez defensiva: só 4 gols sofridos em 8 jogos (0,50/jogo)",
        "Meio-campo de alto nível europeu (Sabitzer + Seiwald + Xaver Schlager)",
        "Variedade ofensiva com criação distribuída (Sabitzer, Schmid, Wanner, Chukwuemeka)",
        "Bola parada genuinamente perigosa (Sabitzer cobrador; Danso/Svoboda como alvos)",
        "Coesão tática estabelecida (4 anos de projeto Rangnick, DNA Red Bull em 14 dos 26)"
      ],
      fracos: [
        "Dependência de Arnautovic aos 37 como único 9 puro (números caem contra nível médio/alto)",
        "Baixa de Baumgartner por lesão muscular (o meia que conectava as linhas)",
        "Alaba em gestão de carga pós-lesão (LCA 2023, meniscite 2025)",
        "Laimer suspenso no jogo 1; a troca por Grillitsch reduz a intensidade",
        "Risco de colapso do pressing no calor extremo (jogo vs Argentina em Dallas)",
        "Convocações de última hora não testadas (Wanner e Chukwuemeka com 1-2 jogos sênior)"
      ],
      tatica: {
        ofensiva: "Recuperação alta pelo pressing + transição rápida; Sabitzer como box-to-box com liberdade para a área; o canal esquerdo (Schmid/Chukwuemeka/Wanner) corta para dentro; bola parada com Sabitzer cobrando e Arnautovic/Kalajdzic/Danso como alvos.",
        defensiva: "Linha alta (35-40m do gol) para encurralar; zaga compacta (Danso + Lienhart fortes no alto); bloqueio do espaço vertical quando o pressing falha; vulnerabilidade à velocidade nas bordas (bolas longas exploram a linha alta).",
        semBola: "Gegenpressing de máxima intensidade (PPDA 7,14); três meias ofensivos colapsam sobre o portador, dois volantes fecham o centro; objetivo de recuperar em 5s; no desgaste, recua para bloco médio com vulnerabilidade na transição.",
        geral: "4-2-3-1 com gegenpressing dogmático de Rangnick; gatilho de pressing imediato após a perda; três meias agressivos como 'falsos 10s'; transições rápidas para finalizar."
      },
      comoChega: "Sequência positiva: 1 derrota nos últimos 11 jogos. Amistosos: 5-1 sobre Gana (estreia de Wanner e Chukwuemeka), 1-0 sobre a Tunísia (com 10, Sabitzer decisivo) e 6-0 sobre a Guatemala. Baumgartner descartado (lesão muscular), Alaba em carga gerenciada e Laimer suspenso no jogo 1.",
      expectativa: "Avançar como 2º do Grupo J; favorito matemático atrás da Argentina, com o caminho esperado: vencer Jordânia e Argélia e limitar os danos contra a Argentina.",
      statsLinha: "PPDA 7,14 (o menor das eliminatórias UEFA); 22 gols em 8 jogos das eliminatórias (2,75/jogo); Euro 2024: 7 gols em 4 jogos, com xG variável (0,87-2,85) conforme o adversário.",
      resumo: "A Áustria volta à Copa após 28 anos com gegenpressing de alta intensidade documentado (PPDA 7,14), meio-campo Bundesliga sólido e 4 anos de projeto coeso de Rangnick — mas enfrenta baixas reais (Baumgartner, Alaba limitado, Laimer suspenso) e vulnerabilidade no calor extremo; favorita ao 2º lugar, com teto nas oitavas/quartas."
    },

    "Argélia": {
      formacao: "4-3-3",
      duvidas: "Zerrouki vs Bentaleb no pivô; Chaïbi vs Maza na meia-esquerda; Hadj Moussa é o titular natural na ponta, mas Gouiri pode ser deslocado ali conforme a tática.",
      banco: [b("Ibrahim Maza", "Bayer Leverkusen"), b("Amine Gouiri", "Olympique Marseille"), b("Houssem Aouar", "Al-Ittihad"), b("Nabil Bentaleb", "Lille"), b("Aïssa Mandi", "Lille"), b("Jaouen Hadjam", "Young Boys")],
      craques: [
        k("Riyad Mahrez", "Al-Ahli", "Capitão — drible, bola parada e criatividade"),
        k("Mohamed Amoura", "VfL Wolfsburg", "Centroavante — velocidade e profundidade"),
        k("Ibrahim Maza", "Bayer Leverkusen", "Meia-atacante — drible e criação entre linhas"),
        k("Rayan Aït-Nouri", "Manchester City", "Lateral-esquerdo ofensivo — progressão e cruzamento"),
        k("Amine Gouiri", "Olympique Marseille", "Técnico refinado — bom entre linhas"),
        k("Anis Hadj Moussa", "Feyenoord", "Ponta rápida e imprevisível — criação e conclusão")
      ],
      fortes: [
        "Diversidade ofensiva genuína com múltiplos goleadores (Amoura, Hadj Moussa, Gouiri, Maza)",
        "Qualidade europeia na espinha dorsal (PL, Bundesliga, Ligue 1, Eredivisie)",
        "Rayan Aït-Nouri como arma tática diferenciada pela esquerda",
        "Especialização em bola parada ofensiva (Mahrez, Aouar, Gouiri)",
        "Adaptabilidade tática de Petković (4-3-3, 4-2-3-1, 3-5-2)",
        "Solidez na fase de grupos do AFCON 2025 (7 gols, 1 sofrido)"
      ],
      fracos: [
        "Ausência de Bennacer cria buraco no meio e reduz a proteção defensiva",
        "Goleiro Luca Zidane sem experiência de elite (Granada, 2ª divisão espanhola)",
        "Vulnerabilidade ao contra-ataque de elite (0-2 para a Nigéria no AFCON 2025)",
        "Dependência excessiva de Mahrez (35) e em nível físico questionável",
        "Profundidade limitada no banco em postos-chave",
        "Produção ofensiva cai contra adversários bem organizados"
      ],
      tatica: {
        ofensiva: "Combinações rápidas nas alas com inversões; Mahrez pela direita com liberdade para cortar; Aït-Nouri em sobreposição pela esquerda; Amoura como referência de profundidade; bola parada de qualidade elevada.",
        defensiva: "Bloco médio-baixo compacto sem a bola; linha de 4 disciplinada com Mandi (líder) e Bensebaini (atlético); recuperação rápida via meia central; exposição real ao contra de elite.",
        semBola: "Pressão organizada por zonas com gatilhos (passe longo, GK no pé); recuo rápido ao bloco médio se a pressão não converter; cobertura do meia central em 6s; vulnerável em transições desorganizadas.",
        geral: "Posse equilibrada (~55%) com progressão pelas alas; Plano A: explorar flancos e criar via qualidade individual; Plano B: bloco baixo e transição direta; dependência de Mahrez e vulnerabilidade a times de elite."
      },
      comoChega: "Retorno histórico após 12 anos, com qualificação dominante (8V-1E-1D, +16). Forma recente mista: 7-0 sobre a Guatemala (27/03), 0-0 com o Uruguai (31/03) e a dolorosa eliminação no AFCON 2025 (0-2 para a Nigéria). Elenco europeu experiente sob o pragmático Petković, que impôs coesão de grupo.",
      expectativa: "O 2º lugar do Grupo J é realista, mas não garantido; a Jordânia deve ser vencida, a Áustria será disputada pela 2ª vaga e a Argentina é favorita clara; o cenário pessimista é cair na fase de grupos.",
      statsLinha: "FootyStats (Eliminatórias CAF 2023-2026): 2,4 gols/jogo, xG 1,4 (estimado), 55% de posse — adversários de ranking ~80-140; dados inflados por rivais fracos.",
      resumo: "A Argélia oferece diversidade ofensiva europeia (Amoura, Hadj Moussa, Gouiri, Maza) e a liderança tática de Petković, mas carece de Bennacer no meio, tem goleiro de 2ª divisão e é vulnerável em transições contra a elite; projeção realista é o 2º lugar, com margem de erro estreita."
    },

    "Jordânia": {
      formacao: "3-4-3",
      duvidas: "Yazan Al-Naimat está fora (ruptura de LCA em dez/2025); Ali Al-Azaizeh é o substituto mais provável pela esquerda, com Odeh Al-Fakhouri e Ibrahim Sabra concorrendo.",
      banco: [b("Odeh Al-Fakhouri", "Pyramids FC"), b("Ibrahim Sabra", "Lokomotiva Zagreb"), b("Mohammad Abu Zraiq", "Raja Casablanca"), b("Nizar Al-Rashdan", "Qatar SC"), b("Rajaei Ayed", "Al-Hussein SC"), b("Husam Abudahab", "Al-Faisaly")],
      craques: [
        k("Mousa Al-Tamari", "Stade Rennais", "Eixo da criação e principal finalizador — 1º jordaniano em liga top-5"),
        k("Ali Olwan", "Al-Sailiya", "Artilheiro das Eliminatórias (9 gols); Chuteira de Ouro da Copa Árabe 2025"),
        k("Ihsan Haddad", "Al-Hussein SC", "Capitão — líder defensivo e emocional, 91+ caps"),
        k("Yazan Al-Arab", "FC Seoul", "K-leaguer consistente — elo com o nível asiático"),
        k("Noor Al-Rawabdeh", "Selangor FC", "Organizador central — distribuidor, 56+ caps"),
        k("Yazeed Abu Laila", "Al-Hussein SC", "Goleiro titular — nunca jogou fora da Jordânia")
      ],
      fortes: [
        "Organização defensiva coletiva: só 8 gols em 10 jogos das Eliminatórias (0,8/jogo)",
        "Velocidade em transição, com Al-Tamari como protagonista",
        "Especialista em bola parada: perigo real em escanteios, faltas e pênaltis",
        "Solidez emocional e unidade: elenco com 200+ partidas coletivas",
        "Referência histórica: Sellami motiva a equipe a emular o Marrocos de 2022",
        "Bloco de cinco defensores compacto: o 5-4-1 sem bola funcionou nas Eliminatórias"
      ],
      fracos: [
        "A ausência de Al-Naimat é sangria real: era o nexo criativo (6A nas Eliminatórias)",
        "Elenco doméstico-pesado: salvo Al-Tamari e Sabra, todos em ligas de nível inferior",
        "Ofensividade limitada (16 gols contra rivais fracos); Olwan sem gols no clube em 25/26",
        "Sem experiência no maior palco: nenhum jogador disputou uma Copa",
        "Nível modesto dos adversários nas Eliminatórias (só a Coreia do Sul como potência)",
        "Goleiro sem exposição europeia (tomou 4 gols da Suíça)"
      ],
      tatica: {
        ofensiva: "Criação via transições verticais rápidas após recuperações; três atacantes altos; Al-Tamari pela direita com liberdade; bola parada com Al-Tamari batendo e zagueiros como alvos; sem Al-Naimat, recorre ao jogo direto.",
        defensiva: "Bloco baixo compacto que vira 5-4-1 ou 5-2-3 sem a bola; ala-volantes recuam para a linha de cinco; dois meias tapam o centro; linha de 3 (Al-Arab, Nasib, Abu Al-Nadi) com 200+ caps; fragilidade na bola parada defensiva (4-1 da Suíça).",
        semBola: "Pressão seletiva, não estrutural: PPDA agressivo só situacional; 1ª opção é o passe vertical imediato aos atacantes altos; transição ofensiva de 3s; reorganização limitada após a perda.",
        geral: "Disciplina coletiva, organização defensiva, transição veloz para Al-Tamari e a bola parada como recurso; Plano A: 5-4-1 absorvendo e liberando em velocidade; Plano B: 4-2-3-1 com Al-Tamari centralizado; inspiração no Marrocos 2022."
      },
      comoChega: "Em grande entusiasmo histórico após a qualificação épica (3-0 sobre Omã em 5/jun/2025), mas com resultado preocupante no amistoso mais recente (1-4 para a Suíça em 31/mai). As ausências de Al-Naimat (LCA) e Al-Qurashi impactam a criatividade central. Em camp de preparação em San Diego desde 1º de junho.",
      expectativa: "O objetivo realista é evitar a eliminação na 1ª rodada e buscar ao menos um resultado inesperado; a melhor chance é contra a Argélia (22/jun); projeção de 4º lugar, com menos de 5% de chance de avançar.",
      statsLinha: "16 gols em 10 jogos das Eliminatórias AFC (adversários do Grupo B). xG indisponível para a 3ª fase da AFC. Semi da Asian Cup 2023 vs Coreia: 7 chutes no alvo com menos de 35% de posse (vitória 2-0).",
      resumo: "Estreante histórica no maior palco, com geração de ouro liderada por Mousa Al-Tamari (Ligue 1) e disciplina defensiva comprovada — mas o elenco doméstico-pesado e a ausência do criador Al-Naimat tornam realista a eliminação na primeira fase."
    },

    /* ===================== GRUPO K ===================== */
    "Portugal": {
      formacao: "4-2-3-1",
      duvidas: "Rúben Dias voltou de lesão no isquiotibial com ritmo comprometido; Cristiano Ronaldo, aos 41 e com histórico de hamstring, precisa de gestão de carga — Gonçalo Ramos é o substituto mais moderno e dinâmico.",
      banco: [b("Gonçalo Ramos", "Paris Saint-Germain"), b("João Félix", "Al Nassr"), b("Pedro Neto", "Chelsea"), b("Francisco Conceição", "Juventus"), b("Diogo Dalot", "Manchester United"), b("Rúben Neves", "Al-Hilal")],
      craques: [
        k("Bruno Fernandes", "Manchester United", "Motor ofensivo e criador — 21 assistências na PL 25-26"),
        k("Cristiano Ronaldo", "Al Nassr", "Lenda — 6ª Copa, 143 gols pela seleção"),
        k("Vitinha", "Paris Saint-Germain", "Metrônomo do meio — domínio de posse"),
        k("João Neves", "Paris Saint-Germain", "Revelação do ciclo — incansável e técnico (21 anos)"),
        k("Nuno Mendes", "Paris Saint-Germain", "Um dos melhores laterais-esquerdos do mundo"),
        k("Rafael Leão", "AC Milan", "Extremo de velocidade de elite pela esquerda")
      ],
      fortes: [
        "Meio-campo de elite mundial: duplo pivô Vitinha-João Neves (PSG) domina posse e criação",
        "Ataque com múltiplas soluções: Leão, Neto, Félix, Conceição e Gonçalo Ramos",
        "Laterais de nível europeu: Nuno Mendes (PSG) e João Cancelo (Barcelona)",
        "Mentalidade vencedora: campeões da Nations League 24-25 (vs Espanha nos pênaltis)",
        "Bruno Fernandes em melhor forma: Jogador da Temporada da PL com 21 assistências",
        "Calendário de grupo favorável: RD Congo e Uzbequistão em nível muito inferior"
      ],
      fracos: [
        "Ronaldo (41) com gestão de carga e hamstring; raramente joga 90 min — risco tático",
        "Vulnerabilidade em transições: laterais avançados + linha alta deixam espaço atrás",
        "Dupla de zaga com dúvidas: Dias com ritmo comprometido; Inácio irregular",
        "Dificuldade contra blocos baixos: só 13% de conversão nas eliminatórias",
        "Bola parada defensiva: vulnerabilidade real em escanteios",
        "Eficiência abaixo do volume criado (Euro 2024: xG 7,73 e só 5 gols)"
      ],
      tatica: {
        ofensiva: "Overload central com o duplo pivô PSG (Vitinha distribui, Neves rompe linhas); Bruno Fernandes na sombra do 10; Bernardo Silva como combinador; velocidade pelas alas (Leão à esquerda, Neto/Conceição à direita); Ronaldo como pivô de fixação.",
        defensiva: "Linha alta na posse com pressing no terço final; dupla Dias-Inácio com boa saída, mas fragilidade aérea; Diogo Costa forte com os pés; espaço atrás dos laterais é a vulnerabilidade explorada no contra.",
        semBola: "Pressing de alta intensidade na posse alta (70%+), com PPDA elevado; counter-pressing com Bruno e Bernardo recompondo; fragilidade quando a bola supera o pressing em velocidade.",
        geral: "Posse posicional com transições de pressão: constrói desde o goleiro, usa os zagueiros na saída e sobe pelo meio que se move entre linhas; identidade exigente que depende do domínio prolongado da bola."
      },
      comoChega: "Em estado de graça emocional após a Nations League 24-25 (vs Espanha nos pênaltis, em Munique). A morte de Diogo Jota (jul/2025) foi abraçada como motivação (convocação simbólica '27+1'). Amistosos: 0-0 vs México (66% de posse) e 2-0 vs EUA.",
      expectativa: "Avançar em 1º; oitavas e quartas como piso mínimo; semifinal como teto realista (5º/6º favorito ao título, ~8-9%) — qualidade para bater qualquer um, mas a inconsistência ao longo de 7 jogos em 30 dias é a preocupação histórica.",
      statsLinha: "Eliminatórias UEFA 25-26 (10 jogos) + Nations League 24-25: 2,6 gols/jogo, xG 2,23, 67,5% de posse.",
      resumo: "Portugal é cabeça de chave do Grupo K, com plantel completo, técnico experiente (Roberto Martínez) e mentalidade vencedora; o meio PSG + Bruno Fernandes garante o domínio de posse, mas as vulnerabilidades em transição e contra blocos baixos podem custar caro frente às elites no mata-mata."
    },

    "Colômbia": {
      formacao: "4-2-3-1",
      duvidas: "James Rodríguez é dúvida por forma física (194 minutos no MLS em 2026 e hospitalização em março); Quintero é a alternativa se James não estiver pronto.",
      banco: [b("Juan Fernando Quintero", "River Plate"), b("Yerry Mina", "Cagliari"), b("Jhon Córdoba", "Krasnodar"), b("David Ospina", "Atlético Nacional"), b("Jorge Carrascal", "Flamengo"), b("Jaminton Campaz", "Karpaty Lviv")],
      craques: [
        k("Luis Díaz", "Bayern Munich", "Motor ofensivo e extremo letal — 15G+14A na Bundesliga 25-26"),
        k("James Rodríguez", "Minnesota United", "Maestro criativo e capitão — 6,77 xA nas Eliminatórias"),
        k("Richard Ríos", "Benfica", "Motor intermediário e controle — 86,7% de acerto"),
        k("Davinson Sánchez", "Galatasaray", "Líder defensivo — velocidade e jogo aéreo"),
        k("Jefferson Lerma", "Crystal Palace", "Âncora defensiva e voz de liderança"),
        k("Luis Suárez", "Sporting CP", "Centroavante de referência — 38G+15A no Sporting 25-26")
      ],
      fortes: [
        "Ataque de classe europeia com Díaz na melhor temporada da carreira",
        "James Rodríguez como maestro quando saudável — o melhor em xA na CONMEBOL",
        "Pivô duplo equilibrado com Ríos e Lerma (volume, recuperação e saída)",
        "Bola parada ofensiva eficaz com James cobrando",
        "Identidade sólida sob Lorenzo: pressão alta e transições verticais",
        "Elenco experiente e coeso, com histórico copeiro (7 participações)"
      ],
      fracos: [
        "Defesa em bola parada: vulnerabilidade crítica exposta vs Croácia e França",
        "Pior saldo defensivo entre os sul-americanos (18 gols em 18 jogos)",
        "Elenco envelhecido (média ~29,98 anos — o mais velho da Copa 2026)",
        "James em dúvida crítica de forma (hospitalização e baixo ritmo)",
        "Profundidade ofensiva limitada após a exclusão de Durán e Borré",
        "Dependência de Díaz (55 chutes nas Eliminatórias, metade do xG ofensivo)"
      ],
      tatica: {
        ofensiva: "4-2-3-1 com intenção clara: o duplo pivô distribui para os meias que acham os wingers no 1v1; rotações de James, Díaz e Arias confundem marcações; transições verticais rápidas após recuperação alta.",
        defensiva: "4-2-3-1 médio-alto com zaga alta para compactar; pivôs protegem o espaço entre linhas; fragilidade documentada na bola parada e vulnerabilidade em bloco baixo.",
        semBola: "Pressing organizado com a saída de Lerma e o avanço dos meias; risco: se o adversário ultrapassa o pressing, há espaço nas costas da linha subida (explorado por Brasil e Argentina).",
        geral: "Identidade clara de pressão alta, transições verticais e amplitude pelos wingers; prefere atacar a defender. Plano A: recuperação alta e transição rápida; Plano B: bloco médio com contra-ataque ou 4-3-3 com Quintero dobrando a criação."
      },
      comoChega: "Preparação razoável, com amistosos mistos (derrotas para Croácia e França, vitória sobre a Costa Rica); James é a maior incógnita por forma física pós-hospitalização. Elenco experiente e coeso, mas envelhecido e com vulnerabilidades defensivas documentadas.",
      expectativa: "Avançar como 2º do Grupo K e chegar às oitavas; com sorteio favorável e James em boas condições, pode chegar às quartas (teto realista do ciclo Lorenzo).",
      statsLinha: "Eliminatórias CONMEBOL 2023-2025 (18 jogos): 1,61 gol/jogo; xG pró de fonte alternativa (FBref indisponível); posse não cruzada em fonte confiável.",
      resumo: "A Colômbia é a 2ª favorita do Grupo K, com ataque de classe europeia liderado por Díaz, mas defesa frágil na bola parada, elenco envelhecido e James em dúvida crítica de forma; ~85% de chance de avançar, com teto histórico nas quartas (como em 2014)."
    },

    "Uzbequistão": {
      formacao: "3-4-2-1",
      duvidas: "Masharipov chega em monitoramento por lesão muscular; se não recuperado, Aziz Ganiev entra. Lateral esquerda em aberto entre Shukurov e Sayfiev pela ausência de Alikulov (LCA).",
      banco: [b("Igor Sergeev", "Lokomotiv Tashkent"), b("Abduvohid Nematov", "Nasaf"), b("Jakhongir Urozov", "Nasaf"), b("Aziz Ganiev", "Dynamo Samarkand"), b("Azizbek Omonov", "Lokomotiv Tashkent"), b("Farrukh Sayfiev", "Lokomotiv Tashkent")],
      craques: [
        k("Abdukodir Khusanov", "Manchester City", "Zagueiro dominante — 1º uzbeque na Premier League"),
        k("Eldor Shomurodov", "İstanbul Başakşehir", "Capitão e maior artilheiro da história (44 gols em 81 caps)"),
        k("Abbosbek Fayzullaev", "İstanbul Başakşehir", "Meia-atacante criativo — 8 gols em 31 caps"),
        k("Jaloliddin Masharipov", "Esteghlal", "Veterano de 74 caps — 4A nas qualificatórias"),
        k("Oston Urunov", "Persepolis", "Revelação ofensiva — 4 gols nas qualificatórias"),
        k("Utkir Yusupov", "Navbakhor Namangan", "Goleiro titular — 5 clean sheets na classificação")
      ],
      fortes: [
        "Solidez defensiva excepcional: só 7 gols sofridos em 10 jogos das qualificatórias",
        "Khusanov é salto qualitativo histórico: 1º uzbeque na Premier League, com Guardiola",
        "Shomurodov: capitão experiente e maior artilheiro, com 22 gols na Süper Lig 25-26",
        "Bola parada ofensiva: Khusanov (1,88m) e Shomurodov (1,88m) ameaçam no alto",
        "Experiência europeia em posições-chave (Premier League, Türkiye, Irã)",
        "Transições rápidas com Fayzullaev e Masharipov"
      ],
      fracos: [
        "Dependência de dois pilares: se Shomurodov ou Khusanov saem, a equipe degrada",
        "Falta de match sharpness: Khusanov com poucos jogos de prestígio no City",
        "Criação reduzida: xG pró (1,23) menor que xG contra (1,35) na janela recente",
        "Qualidade técnica sofre sob pressão alta (0-2 para o Canadá expôs a previsibilidade)",
        "Primeira Copa: ninguém com experiência de Mundial — fator psicológico",
        "Lateral esquerda instável após a ausência de Alikulov (LCA)"
      ],
      tatica: {
        ofensiva: "Transições diretas para Shomurodov nas costas do último defensor ou Fayzullaev entre linhas; wing-backs sobem para criar superioridade; bola parada com Khusanov e Shomurodov como ameaças aéreas.",
        defensiva: "Linha de três (Khusanov, Ashurmatov, Alijonov) entre o círculo e a área; dupla de contenção (Hamrobekov + Urunov) fecha o meio; wing-backs voltam formando um 5-2-3 compacto e difícil de furar pelo centro.",
        semBola: "PPDA alto: não pressiona com intensidade; após a perda, recua rápido ao bloco médio-baixo sem gegenpressing; meias-atacantes pressionam o portador para dar tempo aos cinco de trás; vulnerável à pressão alta sustentada.",
        geral: "3-4-2-1 pragmático: defesa italiana, velocidade asiática. Bloco médio-baixo que convida a oposição a ter a bola e explora transições rápidas; busca o resultado antes do futebol bonito."
      },
      comoChega: "Sob Cannavaro (desde out/2025), ciclo equilibrado: 5V, 2E, 2D em 9 jogos (incl. derrotas para Canadá 0-2 e Uruguai 1-2). O último amistoso foi um 0-2 para o Canadá (1/jun, em Edmonton). Grupo coeso; a ausência de pressão cria um ambiente leve. Treinos em Atlanta e Houston.",
      expectativa: "3º ou 4º lugar no Grupo K, com 3 pontos conquistados contra a RD Congo; o teto realista seria vencer o Congo + empatar com a Colômbia na abertura = 4 pontos para melhor 3º.",
      statsLinha: "Qualificatórias AFC R3 (10 jogos) + amistosos de Cannavaro: 1,5 gol/jogo, xG 1,23, 47% de posse — janela heterogênea; dados FootyStats sem auditoria, usar com cautela.",
      resumo: "Estreia histórica do futebol uzbeque, com projeto sólido (3-4-2-1 defensivo), técnico de renome (Cannavaro, campeão 2006) e dois talentos genuínos (Khusanov no City, Shomurodov capitão); mas o grupo dificílimo (Portugal, Colômbia) torna a saída na fase de grupos o cenário mais provável, com esperança real apenas contra a RD Congo."
    },

    "RD Congo": {
      formacao: "4-2-3-1",
      duvidas: "Disputa no ataque entre Bakambu (35, experiente) e Wissa (mais atlético, mas em forma fraca no Newcastle); o amistoso vs Dinamarca (3/jun) pode esclarecer a preferência.",
      banco: [b("Cédric Bakambu", "Real Betis"), b("Simon Banza", "Al Jazira"), b("Rocky Bushiri", "Hibernian"), b("Théo Bongonda", "Spartak Moscou"), b("Edo Kayembe", "Watford"), b("Timothy Fayulu", "Sion")],
      craques: [
        k("Chancel Mbemba", "Lille", "Capitão — liderança defensiva e organização, 107 caps"),
        k("Yoane Wissa", "Newcastle United", "Principal ameaça atlética — velocidade em transição e faro de gol"),
        k("Cédric Bakambu", "Real Betis", "Pivô experiente — 21 gols em 66 caps"),
        k("Aaron Wan-Bissaka", "West Ham United", "Estabilidade defensiva pela direita — 66 interceptações em 24/25"),
        k("Gaël Kakuta", "AE Larissa", "Criatividade e desequilíbrio — estrela da AFCON 2025"),
        k("Noah Sadiki", "Sunderland", "Motor do meio — recuperação, 2.894 min na Premier League 25/26")
      ],
      fortes: [
        "Solidez defensiva como alicerce: só 6 gols sofridos em 10 eliminatórias, com Mbemba de líder",
        "Velocidade e transição: Wissa e Elia dão explosão no contra-ataque",
        "Experiência de playoffs: 3 mata-matas seguidos (Camarões, Nigéria, Jamaica)",
        "Versatilidade tática: alterna 4-2-3-1 e 4-4-2 sem perder coesão",
        "Artilharia distribuída (Bakambu, Bongonda, Wissa, Mayele) evita dependência",
        "Força na bola parada: zagueiros altos (Mbemba, Tuanzebe)"
      ],
      fracos: [
        "Susceptibilidade à posse organizada: pode ser envolvido por Portugal ou Colômbia",
        "Forma de clube de Wissa e Elia: ambos com pouquíssimos gols e minutos",
        "Dependência de Mbemba (31), com só 950 min na Ligue 1 25/26",
        "Impacto do Ebola: isolamento na Bélgica e cancelamento de campo em Kinshasa",
        "Nível superior dos rivais (Portugal 5º, Colômbia 13º)",
        "Kakuta como incógnita: brilhou na AFCON, mas joga a 2ª divisão grega"
      ],
      tatica: {
        ofensiva: "Transições verticais rápidas após recuperação pelos volantes; saída em velocidade com Wissa/Elia nas costas da zaga ou pelos flancos com Wan-Bissaka/Masuaku; bola parada com cabeçadas dos zagueiros.",
        defensiva: "Médio-bloco compacto com a dupla de volantes como 1º filtro; zaga firme sem avançar; laterais conservadores; força nos escanteios pela altura; vulnerável quando precisa expandir o bloco em desvantagem.",
        semBola: "Pressing seletivo com gatilhos (recuperação nos 6s pós-perda), sem pressing alto permanente; transições negativas caem rápido ao bloco médio com cobertura central dos médios.",
        geral: "Pragmatismo organizado em médio-bloco: não impõe o jogo, se adapta. Contra times fortes, bloco baixo-médio com transições verticais; contra o Uzbequistão, pode pressionar mais alto."
      },
      comoChega: "Preparação na Bélgica desde maio por protocolo de Ebola de 21 dias; cancelamento de campo em Kinshasa (obstáculo extraesportivo). Amistosos vs Dinamarca (3/jun) e Chile (9/jun). Sequência recente: eliminação no AFCON pela Argélia (0-1), mas vitória de 1-0 sobre a Jamaica no playoff (gol de Tuanzebe aos 100'). Clima interno positivo apesar dos desafios logísticos.",
      expectativa: "Terminar em 3º no Grupo K com chance real de avançar como um dos 8 melhores terceiros; o objetivo realista é vencer o Uzbequistão e roubar pontos da Colômbia para chegar a 3-4 pontos.",
      statsLinha: "Eliminatórias CAF (10 jogos): 15 gols (1,5/jogo); xG e posse indisponíveis para a CAF. Adversários de ranking 60-180, exceto o Senegal (15º).",
      resumo: "Os Leopardos retornam após 52 anos com elenco 100% europeizado, defesa sólida sob Desabre e mentalidade de playoffs, mas qualidade individual inferior a Portugal e Colômbia; a chance está em vencer o Uzbequistão e avançar como melhor terceiro, a depender dos outros grupos."
    },

    /* ===================== GRUPO L ===================== */
    "Inglaterra": {
      formacao: "4-2-3-1",
      duvidas: "Reece James pode dar lugar a Ezri Konsa na lateral direita se não estiver em ritmo; Nico O'Reilly é titular improvisado (21) na esquerda, podendo ceder a Tino Livramento; Bellingham pode flutuar pelos flancos com Eze ou Rogers como 10 alternativo.",
      banco: [b("Ollie Watkins", "Aston Villa"), b("Eberechi Eze", "Arsenal"), b("Morgan Rogers", "Aston Villa"), b("Kobbie Mainoo", "Manchester United"), b("Ezri Konsa", "Aston Villa"), b("Ivan Toney", "Al-Ahli")],
      craques: [
        k("Harry Kane", "Bayern München", "Capitão — finalizador e criador de espaços; 58 gols em 25-26"),
        k("Jude Bellingham", "Real Madrid", "Criatividade e chegada na área; ligação vital com Kane"),
        k("Bukayo Saka", "Arsenal", "Titular absoluto pela direita — criação e finalização consistentes"),
        k("Declan Rice", "Arsenal", "Motor do meio — proteção e progressão com a bola"),
        k("Marcus Rashford", "Barcelona", "Velocidade e progressão pela esquerda; em forma após ressurgir"),
        k("Nico O'Reilly", "Manchester City", "Lateral invertido técnico — 7 gols na Premier League")
      ],
      fortes: [
        "Ataque de elite com Kane no auge (58 gols em 25-26, 30,1% de conversão), apoiado por Saka e Rashford",
        "Meio versátil: Rice como motor do Arsenal campeão, Bellingham excepcional, Anderson disciplinado",
        "Defesa dominante: só 6 chutes no alvo sofridos em 8 jogos e 2,1 xG contra (melhor da Europa)",
        "Identidade clara sob Tuchel: 4-2-3-1 que vira 3-2-5, posse >70% e pressão alta organizada",
        "Profundidade real: 9 jogadores de impacto no banco (Watkins, Eze, Rogers, Mainoo)",
        "Bola parada de primeira: Kane prolífico nos pênaltis; Saka/Bellingham nas faltas; altura (Burn, Stones)"
      ],
      fracos: [
        "Dependência extrema de Kane: o sistema é construído todo em torno dele",
        "Laterais com histórico recente de lesão: Reece James (ritmo em dúvida) e Livramento",
        "Falta de criatividade clara no 10: exclusão de Palmer e Foden deixou a posição sem dono",
        "Desempenho irregular em amistosos: 0-1 para o Japão, 1-1 com o Uruguai, 1-3 para o Senegal",
        "Dados das Eliminatórias contra nível médio-baixo (melhor rival foi a Sérvia)",
        "Bloqueio psicológico: 60 anos sem título e eliminações recorrentes nos pênaltis"
      ],
      tatica: {
        ofensiva: "Kane como ponto de referência duplo (apoio e corridas) cria espaço para Bellingham, Saka e Rashford penetrarem; combinações triangulares pela direita; transições rápidas com Rashford pela esquerda; Rice chegando de profundidade.",
        defensiva: "Bloco 4-4-2 compacto sem a bola, com Rice e Anderson protegendo a zaga; linha tendencialmente alta (coerente com a pressão, mas cria espaço atrás); presença aérea razoável; vulnerabilidade nos laterais avançados.",
        semBola: "Pressing alto estruturado com os atacantes iniciando, os médios cobrindo e o pivô duplo dando profundidade; laterais voltam rápido na perda; risco de transições negativas se a recuperação falha.",
        geral: "4-2-3-1 base que vira 3-2-5 na posse, com identidade centrada em domínio >70%, pressão alta bem estruturada e exploração das costas das defesas por laterais invertidos e extremos rápidos."
      },
      comoChega: "Classificou de forma impressionante: 8V-0E-0D com 22 gols e 0 sofridos (única europeia sem derrota ou gol sofrido). Clima interno turbulento pelo vazamento das exclusões, mas com Kane no auge (58 gols) e identidade clara sob Tuchel. Amistosos recentes irregulares (derrotas para Japão e Senegal) levantam dúvidas contra quem pressiona alto.",
      expectativa: "Ganhar a Copa é o objetivo declarado de Tuchel, com projeção conservadora de quartas e teto realista de semifinal/título — dependendo da saúde de Kane e de não repetir o histórico de decepções nos momentos decisivos.",
      statsLinha: "Eliminatórias UEFA 2026 (Grupo K, 8 jogos): 2,75 gols/jogo, xG contra de 2,1 (melhor da Europa), posse >70% consistente. Ressalva: adversários de nível médio-baixo.",
      resumo: "Seleção de elite com ataque de classe mundial liderado por Kane no auge, identidade definida sob Tuchel e defesa dominante nas Eliminatórias — mas com vulnerabilidades na profundidade de criatividade, histórico de lesões nas laterais e dependência extrema do capitão que a torna frágil em cenários adversos."
    },

    "Croácia": {
      formacao: "3-4-2-1",
      duvidas: "Gvardiol e Kovačić voltaram de lesões (fratura e cirurgias no Aquiles) e podem não ter 100% de fitness; contra a Inglaterra, Nikola Vlašić ou Luka Sučić podem entrar como 2ª opção de meia-atacante.",
      banco: [b("Ante Budimir", "Osasuna"), b("Nikola Vlašić", "Torino"), b("Luka Sučić", "Real Sociedad"), b("Mario Pašalić", "Atalanta"), b("Duje Ćaleta-Car", "Real Sociedad"), b("Ivor Pandur", "Hull City")],
      craques: [
        k("Luka Modrić", "AC Milan", "Capitão e organizador — maestro do meio aos 40 anos"),
        k("Joško Gvardiol", "Manchester City", "Um dos 3 melhores defensores do mundo — essencial quando fit"),
        k("Mateo Kovačić", "Manchester City", "Motor energético — recupera e distribui para liberar Modrić"),
        k("Andrej Kramarić", "Hoffenheim", "Goleador mais confiável — artilheiro das eliminatórias (6 gols)"),
        k("Ivan Perišić", "PSV", "Veterano fenômeno aos 37 — 7G+12A na Eredivisie"),
        k("Luka Vušković", "HSV", "Revelação aos 19 — melhor taxa de duelos da Bundesliga")
      ],
      fortes: [
        "Experiência de torneio ímpar para um país pequeno (final 2018, bronze 2022)",
        "Criação pelo meio com Modrić e Kovačić — uma das duplas mais técnicas do torneio",
        "Gvardiol, quando fit, é defensor-construtor de alto nível",
        "Solidez documentada: só 0,5 gol sofrido por jogo nas eliminatórias, 46% de clean sheets",
        "Perišić aos 37 ainda produtivo (7G+12A na Eredivisie)",
        "Jovens como diferencial: Vušković (69,1% nos duelos), Baturina e Petar Sučić"
      ],
      fracos: [
        "Fitness de Kovačić e Gvardiol é risco real após lesões graves",
        "Envelhecimento do núcleo (Modrić 40, Perišić 37, Kramarić 34) — desgaste no calor dos EUA",
        "Opções ofensivas limitadas no banco além de Kramarić e Budimir",
        "Dependência extrema de Modrić para a organização ofensiva",
        "Fragilidade contra pressing alto e contra-ataque (a França dominou: 3,18 xG vs 0,23)",
        "Efetividade não calibrada: 0-2 para a Bélgica no amistoso expôs incerteza do novo 3-4-2-1"
      ],
      tatica: {
        ofensiva: "Domínio técnico pelo meio: Modrić controla o ritmo, Kovačić recupera e abre espaço, os meias-atacantes combinam entre linhas com Kramarić; Gvardiol com liberdade para subir pela esquerda.",
        defensiva: "Bloco médio-baixo que vira 5-4-1 na perda; wing-backs recolhidos cobrem o centro; marca mista na bola parada; fragilidade na transição pós-perda em zonas avançadas.",
        semBola: "Pressing ativo, mas não extremo (PPDA ~7,1); não apostam no gegenpressing total; a transição defensiva é a maior vulnerabilidade, com risco nas costas dos wing-backs (Perišić, 37).",
        geral: "3-4-2-1 testado vs Bélgica para equilibrar defesa compacta contra o pressing alto (especialmente da Inglaterra) com a criação técnica do meio; o clássico 4-2-3-1 segue como Plano B."
      },
      comoChega: "Dominante nas eliminatórias (7V-1E, 26 gols, 4 sofridos), mas com preparação preocupante: 0-2 para a Bélgica (2/jun) ao testar o novo 3-4-2-1, e com Gvardiol/Kovačić voltando de lesões graves com menos de um mês de ritmo; Modrić segue em alta na Serie A (rating 7,58) aos 40 anos.",
      expectativa: "Avançar em 2º, vencendo Gana e Panamá e perdendo/empatando com a Inglaterra; rumo às quartas como teto razoável, dado o histórico de Dalić em mata-mata.",
      statsLinha: "3,25 gols/jogo nas eliminatórias contra adversários fracos (Gibraltar, Faroe); a amostra real é a Nations League vs França (0,23 xG vs 3,18). 64,4% de posse nas eliminatórias; 38% vs França.",
      resumo: "A Croácia é uma seleção pequena (4 milhões de hab.) com o melhor histórico de torneios (final 2018, bronze 2022), liderada por Modrić (40) em seu crepúsculo brilhante e reforçada por jovens (Vušković, Baturina), mas fragilizada pelas lesões de Gvardiol e Kovačić; projeção de 2º lugar, com avanço às oitavas e teto nas quartas."
    },

    "Gana": {
      formacao: "4-3-3",
      duvidas: "Fatawu Issahaku disputa a ala direita com Iñaki Williams; Thomas Partey é dúvida jurídica quanto à entrada nos EUA.",
      banco: [b("Iñaki Williams", "Athletic Club"), b("Ernest Nuamah", "Lyon"), b("Brandon Thomas-Asante", "Coventry City"), b("Baba Abdul Rahman", "PAOK"), b("Augustine Boakye", "Saint-Étienne"), b("Jerome Opoku", "Başakşehir")],
      craques: [
        k("Antoine Semenyo", "Manchester City", "Principal ameaça ofensiva — 17 gols na PL 25-26"),
        k("Thomas Partey", "Villarreal", "Filtro defensivo e organizador do meio"),
        k("Iñaki Williams", "Athletic Club", "Ala veloz — 6 assistências na La Liga 25-26"),
        k("Jordan Ayew", "Leicester City", "Capitão experiente — 7G+7A nas eliminatórias"),
        k("Kamaldeen Sulemana", "Atalanta", "Coringa ofensivo — velocidade e dribles"),
        k("Fatawu Issahaku", "Leicester City", "Jovem promissor — 8G+7A na Championship 25-26")
      ],
      fortes: [
        "Potência e velocidade no ataque com Semenyo, Williams e Sulemana",
        "Qualidade ofensiva nas eliminatórias CAF (2,3 gols/jogo, 6 clean sheets em 10)",
        "Experiência europeia do elenco (Premier League, La Liga, Ligue 1, Serie A)",
        "Liderança tática de Queiroz com expertise em compactação defensiva",
        "Profundidade no ataque com Nuamah e opções de impacto",
        "Domínio das eliminatórias com 25 pontos em 30 possíveis"
      ],
      fracos: [
        "Fragilidade defensiva recente: 9 gols sofridos em 3 amistosos antes de Queiroz",
        "Ausência crítica de Kudus (cirurgia), único criador em espaços reduzidos",
        "Curtíssimo tempo de trabalho com Queiroz (menos de 2 meses, 1 jogo)",
        "Thomas Partey com incerteza jurídica e logística sobre o visto para os EUA",
        "Goleiro Lawrence Ati-Zigi sem experiência em torneios de elite",
        "Ernest Nuamah voltando pós-LCA com apenas 6 minutos de jogo"
      ],
      tatica: {
        ofensiva: "Transições rápidas como mecanismo principal; Semenyo como referência de costas para o gol; Williams e Sulemana nos corredores prontos para a profundidade; Jordan Ayew conectando meio e ataque; exploração da bola parada aérea.",
        defensiva: "Bloco baixo com duas linhas de quatro; pressão na saída adversária; laterais recuam para cobrir corredores; vulnerabilidade histórica na bola parada defensiva; a defesa passa pelo filtro de Partey.",
        semBola: "Sistema conservador de recuo rápido ao bloco após a perda; não pressiona alto; as transições defensivas são o maior risco contra extremos velozes; padrão recente em melhora com Queiroz (0-0 vs País de Gales).",
        geral: "Sistema pragmático de Queiroz: organização compacta (4-3-3 ou 4-5-1), exploração de transições rápidas e bola parada ofensiva, focando na sobrevivência tática contra adversários superiores."
      },
      comoChega: "Em turbulência: novo técnico nomeado a 2 meses da Copa, demissão de Otto Addo em março e amistosos alarmantes (5-1, 2-1, 2-0, 0-0). Mas Queiroz traz credibilidade e histórico de organização rápida. Baixas críticas: Kudus (cirurgia) e Djiku (lesão); Partey em dúvida jurídica.",
      expectativa: "Avançar às oitavas como 2º ou melhor 3º do Grupo L, com projeção realista de 3º lugar e chance de 2º se Partey jogar e Semenyo manter a forma.",
      statsLinha: "Eliminatórias CAF (10 jogos): 2,3 gols/jogo e 0,6 sofridos, contra ranking 120-180; contra o top-30 mundial: 2 gols em 5 jogos e 12 sofridos (amistosos pré-Copa).",
      resumo: "Gana chega ao 5º Mundial com novo técnico em transição defensiva, talentos ofensivos de elite (Semenyo), mas baixas críticas de criatividade (Kudus) e projeção realista de 3º lugar no Grupo L, com chance de avançar como melhor terceiro."
    },

    "Panamá": {
      formacao: "3-4-3",
      duvidas: "Wing-back esquerdo entre Fariña (ofensivo) e Harvey (defensivo) conforme o adversário; o 3º atacante alterna entre Waterman, Bárcenas ou Tomás Rodríguez.",
      banco: [b("Yoel Bárcenas", "Mazatlán FC"), b("Carlos Harvey", "Minnesota United"), b("José Luis Rodríguez", "FC Juárez"), b("Alberto Quintero", "Plaza Amador"), b("Tomás Rodríguez", "Saprissa"), b("César Blackman", "Slovan Bratislava")],
      craques: [
        k("Adalberto Carrasquilla", "Pumas UNAM", "Motor criativo — Bola de Ouro da Gold Cup 2023"),
        k("Amir Murillo", "Beşiktaş", "Válvula ofensiva da direita — 3 assistências nas Eliminatórias"),
        k("Ismael Díaz", "Club León", "Maior artilheiro ativo da seleção — 17 gols"),
        k("Aníbal Godoy", "San Diego FC", "Capitão histórico — pilar defensivo e líder"),
        k("Cecilio Waterman", "Universidad de Concepción", "Herói improvável — gol contra os EUA (90'+4)"),
        k("José Fajardo", "Universidad Católica", "Veterano decisivo — gols em momentos importantes")
      ],
      fortes: [
        "Organização coletiva e solidez defensiva: só 0,5 gol sofrido por jogo nas Eliminatórias",
        "Invicto nas Eliminatórias CONCACAF 2026 (7V 3E 0D) — saltou do 81º ao 33º do ranking",
        "Amir Murillo como ligação ofensiva, com experiência europeia consolidada",
        "Adalberto Carrasquilla como motor criativo que dita o ritmo",
        "Capacidade de surpreender grandes (vitória sobre os EUA na Nations League 2025)",
        "Mentalidade competitiva estabelecida por Christiansen, com identidade clara"
      ],
      fracos: [
        "Abismo de qualidade individual contra a elite europeia (2-6 para o Brasil)",
        "Profundidade ofensiva limitada, dependendo de Díaz e Fajardo",
        "Vulnerabilidade a times com alta posse e pressing alto",
        "Envelhecimento de peças-chave (Godoy ~36, Fajardo 32, Waterman 33)",
        "Bola parada defensiva como maior vulnerabilidade contra potências",
        "Irregularidade fora de casa e falta de dados avançados (xG) confiáveis"
      ],
      tatica: {
        ofensiva: "Ataque pelas extremidades com sobrecargas laterais; wing-backs como segundos extremos; Carrasquilla transita entre os terços; Díaz/Fajardo como finalizadores sem um 9 clássico de área.",
        defensiva: "Bloco baixo-médio com três zagueiros formando a linha de cinco quando os wing-backs recuam; marcação por zona com ajustes ao homem nas coberturas.",
        semBola: "Pressing moderado a médio-baixo, sem agressividade de PPDA; aguarda o erro e recupera no meio; transições defensivas rápidas com Godoy e Carrasquilla fechando o centro.",
        geral: "Jogo posicional com influência espanhola/de Cruyff; bloco médio-baixo com saída curta, paciência posicional na posse e compacidade imediata na perda."
      },
      comoChega: "Chega com a confiança da classificação invicta e do vice da Nations League 2025, mas o 2-6 contra o Brasil expôs vulnerabilidades em transições rápidas. Sem lesões graves até 03/06, embora a preservação de Godoy, Escobar e Fajardo seja esperada.",
      expectativa: "Competir de igual para igual e avançar como melhor terceiro no formato de 48, tendo como pivô uma possível vitória sobre Gana (17/06).",
      statsLinha: "Eliminatórias CONCACAF 2026: 19 gols em 10 jogos (1,9/jogo); xG detalhado indisponível para seleções da CONCACAF em fontes confiáveis.",
      resumo: "O Panamá é uma seleção bem organizada e defensivamente sólida, que surpreendeu no ciclo recente, mas enfrenta o abismo de qualidade individual contra as potências europeias e depende da organização coletiva e do contra-ataque para competir na Copa."
    }

  };

  window.COPA_DET = DET;
})();
