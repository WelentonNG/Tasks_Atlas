# Site de Tarefas — Produtividade Simplificada

Bem-vindo ao Site de Tarefas: uma aplicação leve, acessível e elegante para organizar seu dia, gerenciar projetos e colaborar com a equipe.

---

## ✨ Visão Geral

O Site de Tarefas oferece uma interface limpa para gerenciar tarefas individuais e listas de tarefas (to‑do lists). Ele foi pensado para ser rápido, responsivo e fácil de usar — tanto em desktop quanto em dispositivos móveis.

Público‑alvo:
- Profissionais que precisam gerenciar atividades diárias.
- Equipes pequenas que buscam uma ferramenta de acompanhamento simples.
- Pessoas que querem aumentar produtividade pessoal com foco em simplicidade.

---

## Principais Recursos

- Criação rápida de tarefas com título, descrição e data de vencimento.
- Listas e projetos para organizar tarefas por contexto.
- Prioridade, etiquetas (tags) e comentários em cada tarefa.
- Filtragem e busca dinâmica (por etiquetas, prioridade e data).
- Lembretes por e‑mail (opcional) e notificações na interface.
- Modo escuro e acessibilidade (WCAG friendly).
- Exportar/importar listas em CSV/JSON.

---

## Demonstração (exemplo)

> Adicione uma nova tarefa: "Enviar relatório semanal"
>
> - Prioridade: Alta
> - Tags: `relatório`, `financeiro`
> - Vencimento: amanhã 17:00

A tarefa aparecerá na sua lista com destaque de prioridade e poderá ser marcada como concluída com um clique.

---

## Como Começar (para desenvolvedores)

Requisitos mínimos:
- PHP 7.4+
- MySQL / MariaDB
- Composer (para dependências)
- Servidor web (Apache / Nginx)

Instalação (exemplo rápido):

```bash
# clone
git clone <repo-url>
cd site-de-tarefas

# instalar dependências PHP
composer install

# configurar .env / conexões
cp .env.example .env
# ajustar credenciais do banco

# criar banco de dados e executar migrations (se aplicável)
php bin/console doctrine:migrations:migrate

# rodar servidor local (opcional)
php -S localhost:8000 -t public
```

Endpoints úteis (exemplo REST):

- GET /api/tasks — listar tarefas
- POST /api/tasks — criar tarefa (body: title, description, due_date, tags)
- PUT /api/tasks/:id — atualizar tarefa
- DELETE /api/tasks/:id — remover tarefa

Exemplo curl para criar uma tarefa:

```bash
curl -X POST "http://localhost:8000/api/tasks" \
  -H "Content-Type: application/json" \
  -d '{"title":"Enviar relatório","due_date":"2026-01-16T17:00:00"}'
```

---

## Guia de Uso (UX)

- Barra lateral com filtros rápidos (Hoje, Próxima Semana, Atrasadas, Concluídas).
- Arrastar e soltar para reordenar tarefas dentro da lista.
- Teclas rápidas: `n` (nova tarefa), `f` (buscar), `t` (adicionar tag rápida).
- Clique na tarefa para abrir painel lateral com detalhes, comentários e histórico.

---

## Acessibilidade e Internacionalização

- Suporte a contraste alto e navegação por teclado.
- Textos e datas localizáveis (PT‑BR por padrão).
- Estruturas ARIA aplicadas em modais e controles dinâmicos.

---

## Segurança

- Autenticação por sessão ou JWT (configurável).
- Proteção CSRF em formulários e endpoints que alteram estado.
- Uploads de anexos verificados por tipo e tamanho.

---

## Performance & Escalabilidade

- Lista virtualizada para grandes quantidades de tarefas.
- Cache em camada (Redis/Filesystem) para filtros frequentes.
- API stateless preparada para deploy em múltiplas instâncias.

---

## Roadmap (ideias futuras)

- Integração com calendários (Google Calendar, Outlook).
- Workflows automáticos (regras: ao concluir X, criar Y).
- Suporte offline (PWA) e sincronização incremental.
- Permissões avançadas por equipe e papéis (owner, editor, viewer).

---

## Contribuindo

Contribuições são bem‑vindas! Siga estas etapas:
1. Fork do repositório
2. Crie uma branch com a feature/fix: `feature/nome-da-feature`
3. Abra um Pull Request descrevendo as mudanças

Por favor inclua testes quando possível.

---

## Licença

Este projeto está licenciado sob a licença MIT — veja o arquivo `LICENSE` para mais detalhes.

---

## Contato

Se tiver idéias, problemas ou quiser colaborar: envie um e‑mail para `contato@seudominio.com` ou abra uma issue no repositório.


---

Obrigado por usar o Site de Tarefas — mantenha o foco, organize o trabalho e entregue com confiança! 🚀
