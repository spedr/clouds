var words = [
{text: "😅", size: 161},
{text: "😀", size: 152},
{text: "voto", size: 150},
{text: "presidente", size: 137},
{text: "candidato", size: 132},
{text: "governo", size: 129},
{text: "Senador", size: 105},
{text: "Eduardo", size: 101},
{text: "votar", size: 98},
{text: "PSDB", size: 97},
{text: "mais", size: 95},
{text: "gold", size: 88},
{text: "👺", size: 79},
{text: "vice", size: 75},
{text: "governador", size: 73},
{text: "Campos", size: 72},
{text: "debate", size: 65},
{text: "Silva", size: 56},
{text: "Brasil", size: 54},
{text: "Bids", size: 51},
{text: "Date", size: 50},
{text: "política", size: 49},
{text: "Ibope", size: 48},
{text: "petista", size: 47},
{text: "pesquisa", size: 47},
{text: "cara", size: 46},
{text: "Genro", size: 45},
{text: "urnas", size: 45},
{text: "eleitor", size: 44},
{text: "fala", size: 44},
{text: "está", size: 44},
{text: "2014", size: 43},
{text: "eleição", size: 42},
{text: "Veja", size: 42},
{text: "Luciana", size: 41},
{text: "PSOL", size: 41},
{text: "Presidente", size: 41},
{text: "campanha", size: 40},
{text: "contra", size: 40},
{text: "povo", size: 39},
{text: "quer", size: 38},
{text: "hora", size: 38},
{text: "Estado", size: 38},
{text: "eleições", size: 38},
{text: "Neves", size: 37},
{text: "Time", size: 36},
{text: "read", size: 35},
{text: "vamos", size: 34},
{text: "YouTube", size: 34},
{text: "Pastor", size: 33},
{text: "hoje", size: 33},
{text: "turno", size: 33},
{text: "você", size: 33},
{text: "Paulo", size: 33},
{text: "Lula", size: 33},
{text: "pstu", size: 32},
{text: "vídeo", size: 32},
{text: "será", size: 32},
{text: "sabe", size: 32},
{text: "pede", size: 32},
{text: "gente", size: 32},
{text: "Jorge", size: 31},
{text: "morte", size: 31},
{text: "Everaldo", size: 31},
{text: "Price", size: 31},
{text: "apoio", size: 31},
{text: "Datafolha", size: 30},
{text: "Full", size: 30},
{text: "partido", size: 29},
{text: "carreata", size: 29},
{text: "Beto", size: 29},
{text: "entrevista", size: 29},
{text: "segundo", size: 29},
{text: "programa", size: 28},
{text: "confirma", size: 28},
{text: "aqui", size: 28},
{text: "estão", size: 28},
{text: "eBay", size: 28},
{text: "anos", size: 27},
{text: "Globo", size: 27},
{text: "silva_marina", size: 27},
{text: "eleitoral", size: 27},
{text: "Braga", size: 27},
{text: "deputado", size: 27},
{text: "reeleição", size: 26},
{text: "pero", size: 26},
{text: "coins", size: 26},
{text: "seria", size: 25},
{text: "like", size: 25},
{text: "agenda", size: 25},
{text: "dias", size: 25},
{text: "nova", size: 25},
{text: "”caso", size: 24},
{text: "pessoas", size: 24},
{text: "nada", size: 24},
{text: "gameinsight", size: 24},
{text: "collected", size: 24},
{text: "acho", size: 23},
{text: "ganhar", size: 23},
{text: "Federal", size: 23},
{text: "Presidência", size: 23},
{text: "menos", size: 23},
{text: "denúncia", size: 23},
{text: "melhor", size: 23},
{text: "defende", size: 23},
{text: "vida", size: 23},
{text: "país", size: 22},
{text: "Levy", size: 22},
{text: "Melo", size: 22},
{text: "Nacional", size: 21},
{text: "neste", size: 21},
{text: "Folha", size: 21},
{text: "Jornalista", size: 21},
{text: "tanto", size: 21},
{text: "ficar", size: 21},
{text: "parte", size: 21},
{text: "Rousseff", size: 20},
{text: "list", size: 20},
{text: "Costa", size: 20},
{text: "nome", size: 20},
{text: "também", size: 20},
{text: "Jornal", size: 20},
{text: "brasileiro", size: 20},
{text: "watch", size: 20},
{text: "site", size: 19},
{text: "mundo", size: 19},
{text: "amigo", size: 19},
{text: "Petrobras", size: 19},
{text: "tenho", size: 19},
{text: "Notícias", size: 19},
{text: "nega", size: 19},
{text: "mostra", size: 19},
{text: "propostas", size: 19},
{text: "pena", size: 19},
{text: "sair", size: 19},
{text: "tempo", size: 19},
{text: "precisa", size: 19},
{text: "android", size: 18},
{text: "José", size: 18},
{text: "após", size: 18},
{text: "renata”", size: 18},
{text: "onde", size: 18},
{text: "Black", size: 18},
{text: "avião", size: 18},
{text: "Band", size: 18},
{text: "passa", size: 18},
{text: "Albuquerque", size: 18},
{text: "Twitter", size: 18},
{text: "plano", size: 17},
{text: "envolve", size: 17},
{text: "dilmabr", size: 17},
{text: "dont", size: 17},
{text: "Fidelix", size: 17},
{text: "favor", size: 17},
{text: "Eymael", size: 17},
{text: "pergunta", size: 17},
{text: "gane", size: 17},
{text: "deixa", size: 17},
{text: "propaganda", size: 17},
{text: "candidatura", size: 17},
{text: "mudar", size: 17},
{text: "juntos", size: 17},
{text: "participa", size: 17},
{text: "disputa", size: 17},
{text: "manda", size: 17},
{text: "assim", size: 17},
{text: "família", size: 17},
{text: "pública", size: 17},
{text: "vazaDUDU", size: 17},
{text: "Minas", size: 17},
{text: "pagar", size: 17},
{text: "solo", size: 17},
{text: "Eleições2014", size: 17},
{text: "direito", size: 17},
{text: "Gostei", size: 17},
{text: "Banco", size: 17},
{text: "recebe", size: 17},
{text: "maior", size: 16},
{text: "androidgames", size: 16},
{text: "estar", size: 16},
{text: "pontos", size: 16},
{text: "Deus", size: 16},
{text: "parece", size: 16},
{text: "Alckmin", size: 16},
{text: "lado", size: 16},
{text: "temos", size: 16},
{text: "João", size: 16},
{text: "Mauro", size: 16},
{text: "tiene", size: 16},
{text: "forma", size: 16},
{text: "verdade", size: 16},
{text: "cidade", size: 16},
{text: "chega", size: 16},
{text: "aponta", size: 16},
{text: "tirar", size: 16},
{text: "visita", size: 16},
{text: "afirma", size: 16},
{text: "Tarso", size: 16},
{text: "algo", size: 16},
{text: "hace", size: 16},
{text: "iPhone", size: 15},
{text: "versa", size: 15},
{text: "jato", size: 15},
{text: "reforma", size: 15},
{text: "Filho", size: 15},
{text: "futuro", size: 15},
{text: "três", size: 15},
{text: "Amazonas", size: 15},
{text: "pior", size: 15},
{text: "tenta", size: 15},
{text: "dois", size: 15},
{text: "amanhã", size: 15},
{text: "série", size: 15},
{text: "AecioNeves", size: 15},
{text: "critica", size: 15},
{text: "vale", size: 15},
{text: "corrupção", size: 15},
{text: "perder", size: 15},
{text: "base", size: 15},
{text: "frente", size: 15},
{text: "semana", size: 15},
{text: "Richa", size: 15},
{text: "volta", size: 15},
{text: "chapa", size: 15},
{text: "ministro", size: 15},
{text: "abre", size: 15},
{text: "continua", size: 15},
{text: "estadual", size: 15},
{text: "milhões", size: 15},
{text: "Carlos", size: 15},
{text: "love", size: 15},
{text: "haha", size: 15},
{text: "próximo", size: 15},
{text: "ajuda", size: 15},
{text: "domingo", size: 15},
{text: "ipad", size: 15},
{text: "teve", size: 15},
{text: "mudança", size: 15},
{text: "começa", size: 14},
{text: "República", size: 14},
{text: "acabar", size: 14},
{text: "lugar", size: 14},
{text: "News", size: 14},
{text: "momento", size: 14},
{text: "tipo", size: 14},
{text: "certo", size: 14},
{text: "cargo", size: 14},
{text: "vencer", size: 14},
{text: "earning", size: 14},
{text: "falando", size: 14},
{text: "Thursday", size: 14},
{text: "mídia", size: 14},
{text: "eletrônicas", size: 14},
{text: "dizer", size: 14},
{text: "OperacaoBetaLab", size: 14},
{text: "promete", size: 14},
{text: "vitória", size: 14},
{text: "favorita", size: 14},
{text: "Bolsa", size: 14},
{text: "rejeitado", size: 14},
{text: "Friday", size: 14},
{text: "projeto", size: 14},
{text: "prefeito", size: 14},
{text: "políticos", size: 14},
{text: "Blog", size: 14},
{text: "90neles", size: 14},
{text: "fotos", size: 14},
{text: "sábado", size: 14},
{text: "lidera", size: 14},
{text: "logo", size: 14},
{text: "único", size: 14},
{text: "final", size: 14},
{text: "queria", size: 14},
{text: "ontem", size: 14},
{text: "segue", size: 14},
{text: "Wednesday", size: 14},
{text: "Câmara", size: 14},
{text: "Melo90", size: 14},
{text: "desde", size: 14},
{text: "Justiça", size: 14},
{text: "história", size: 14},
{text: "problema", size: 13},
{text: "Eleicoes2014", size: 13},
{text: "vivo", size: 13},
{text: "Silver", size: 13},
{text: "tech", size: 13},
{text: "noite", size: 13},
{text: "primeira", size: 13},
{text: "trabalho", size: 13},
{text: "Paraná", size: 13},
{text: "queda", size: 13},
{text: "ninguém", size: 13},
{text: "tucano", size: 13},
{text: "Tuesday", size: 13},
{text: "educação", size: 13},
{text: "querem", size: 13},
{text: "eleitores", size: 13},
{text: "Santa", size: 13},
{text: "artistas", size: 13},
{text: "KCAColombia", size: 13},
{text: "merda", size: 13},
{text: "show", size: 13},
{text: "compra", size: 13},
{text: "Roberto", size: 13},
{text: "oposição", size: 13},
{text: "dinheiro", size: 13},
{text: "pedir", size: 13},
{text: "mulher", size: 13},
{text: "exgovernador", size: 13},
{text: "tema", size: 13},
{text: "discurso", size: 13},
{text: "nuevo", size: 13},
{text: "grupo", size: 13},
{text: "Amélia", size: 13},
{text: "apenas", size: 13},
{text: "saúde", size: 13},
{text: "link", size: 13},
{text: "gracias", size: 13},
{text: "votedemilovato", size: 13},
{text: "anuncia", size: 13},
{text: "tava", size: 13},
{text: "erro", size: 13},
{text: "causa", size: 13},
{text: "August", size: 13},
{text: "atual", size: 13},
{text: "Porto", size: 13},
{text: "bien", size: 13},
{text: "economia", size: 13},
{text: "Prêmio", size: 13},
{text: "WVHT", size: 13},
{text: "hardware", size: 13},
{text: "ipadgames", size: 13},
{text: "KCAMexico", size: 13},
{text: "acidente", size: 13},
{text: "alguém", size: 13},
{text: "acordo", size: 13},
{text: "Polícia", size: 13},
{text: "serão", size: 13},
{text: "hahaha", size: 13},
{text: "segurança", size: 13},
{text: "Saturday", size: 13},
{text: "TIMBETA", size: 13},
{text: "presidencial", size: 12},
{text: "horário", size: 12},
{text: "entrevistado", size: 12},
{text: "Facebook", size: 12},
{text: "Pernambuco", size: 12},
{text: "falou", size: 12},
{text: "Santos", size: 12},
{text: "culpa", size: 12},
{text: "mPOINTS", size: 12},
{text: "Gobierno", size: 12},
{text: "Rewards", size: 12},
{text: "ataques", size: 12},
{text: "apoiar", size: 12},
{text: "Skaf", size: 12},
{text: "engineer", size: 12},
{text: "durante", size: 12},
{text: "amor", size: 12},
{text: "quase", size: 12},
{text: "Goiás", size: 12},
{text: "White", size: 12},
{text: "Monday", size: 12},
{text: "Padilha", size: 12},
{text: "declara", size: 12},
{text: "título", size: 12},
{text: "resultado", size: 12},
{text: "apresenta", size: 12},
{text: "Acabei", size: 12},
{text: "social", size: 12},
{text: "tarde", size: 12},
{text: "Ricardo", size: 12},
{text: "Brasília", size: 12},
{text: "colocar", size: 12},
{text: "ruas", size: 12},
{text: "Conheça", size: 12},
{text: "Bahia", size: 12},
{text: "fazem", size: 12},
{text: "eleger", size: 12},
{text: "claro", size: 12},
{text: "democracia", size: 12},
{text: "Argentina", size: 12},
{text: "WTMP", size: 12},
{text: "existe", size: 12},
{text: "Iasi", size: 12},
{text: "cuando", size: 12},
{text: "líder", size: 12},
{text: "realiza", size: 12},
{text: "Temer", size: 12},
{text: "vezes", size: 12},
{text: "Pezão", size: 12},
{text: "início", size: 12},
{text: "liderança", size: 11},
{text: "Xbox", size: 11},
{text: "qualquer", size: 11},
{text: "podem", size: 11},
{text: "Sunday", size: 11},
{text: "Portal", size: 11},
{text: "merece", size: 11},
{text: "FannyLu", size: 11},
{text: "Henrique", size: 11},
{text: "respeito", size: 11},
{text: "Obama", size: 11},
{text: "Apple", size: 11},
{text: "morreu", size: 11},
{text: "igual", size: 11},
{text: "Fernando", size: 11},
{text: "importante", size: 11},
{text: "Garotinho", size: 11},
{text: "PRTB", size: 11},
{text: "usar", size: 11},
{text: "vergonha", size: 11},
{text: "Arruda", size: 11},
{text: "esquerda", size: 11},
{text: "opinião", size: 11},
{text: "Collor", size: 11},
{text: "acusa", size: 11},
{text: "Paraíba", size: 11},
{text: "mejor", size: 11},
{text: "internet", size: 11},
{text: "sabia", size: 11},
{text: "época", size: 11},
{text: "mandato", size: 11},
{text: "intenções", size: 11},
{text: "resposta", size: 11},
{text: "Acompanhe", size: 11},
{text: "dando", size: 11},
{text: "Martins", size: 11},
{text: "IDOLO", size: 11},
{text: "demais", size: 11},
{text: "sabatina", size: 11},
{text: "reunião", size: 11},
{text: "coligação", size: 11},
{text: "difícil", size: 11},
{text: "sociais", size: 11},
{text: "jeito", size: 11},
{text: "ameaça", size: 11},
{text: "TopPop", size: 11},
{text: "sistema", size: 11},
{text: "certeza", size: 11},
{text: "perfil", size: 11},
{text: "Ceará", size: 11},
{text: "redes", size: 11},
{text: "população", size: 11},
{text: "Recife", size: 11},
{text: "tvtelehit", size: 11},
{text: "sexta", size: 11},
{text: "barbaraig", size: 11},
{text: "ruim", size: 11},
{text: "favoritos", size: 11},
{text: "Janeiro", size: 11},
{text: "Geraldo", size: 11},
{text: "Lasier", size: 11},
{text: "governar", size: 11},
{text: "Marcelo", size: 11},
{text: "Renzi", size: 11},
{text: "Camilo", size: 11},
{text: "Venezuela", size: 10},
{text: "Cássio", size: 10},
{text: "Cristina", size: 10},
{text: "cabeça", size: 10},
{text: "brasil247", size: 10},
{text: "mantém", size: 10},
{text: "presidenciáveis", size: 10},
{text: "Marconi", size: 10},
{text: "nele", size: 10},
{text: "sextafeira", size: 10},
{text: "Sumá", size: 10},
{text: "MTVEMA", size: 10},
{text: "comício", size: 10},
{text: "Cunha", size: 10},
{text: "futebol", size: 10},
{text: "matou", size: 10},
{text: "Bachelet", size: 10},
{text: "MTVHottest", size: 10},
{text: "MudançaDeFato", size: 10},
{text: "Malafaia", size: 10},
{text: "Maranhão", size: 10},
{text: "lucianagenro", size: 10},
{text: "Multishow", size: 10},
{text: "Sarney", size: 10},
{text: "ReinaldoCruz", size: 10},
{text: "Requião", size: 10},
{text: "atrás", size: 10},
{text: "vantagem", size: 10},
{text: "premiomultishow", size: 10},
{text: "possível", size: 10},
{text: "PastorMalafaia", size: 10},
{text: "críticas", size: 10},
{text: "propõe", size: 10},
{text: "terçafeira", size: 10},
{text: "Ogier44", size: 10},
{text: "TvBandamax", size: 10},
{text: "OgierBuchi", size: 10},
{text: "quintafeira", size: 10},
{text: "dizendo", size: 10},
{text: "quartafeira", size: 10},
{text: "feedly", size: 10},
{text: "¡Sumé", size: 10}
]
