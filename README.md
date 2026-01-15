# Site de Tarefas — README

Uma aplicação simples para organizar tarefas, listas e colaborar em equipe. Este repositório contém a versão PHP/JS hospedada localmente (ex.: XAMPP) com suporte a uploads, histórico e notificações por e‑mail via fila.

## Sumário

- Visão geral
- Recursos principais
- Tecnologias
- Requisitos
- Instalação rápida
- Estrutura importante do projeto
- Execução (local)
- E‑mail em fila (worker)
- Testes e verificação rápida
- Contribuindo
- Roadmap / Em desenvolvimento
- Licença e contato

---

## Visão geral

Este projeto é um gerenciador de tarefas leve, pensado para uso interno em equipes pequenas. Ele inclui UI para criar/editar tarefas, upload de anexos, histórico, lixeira e um sistema simples de notificações por e‑mail que usa uma fila de JSON processada por um worker PHP.

## Recursos principais

- CRUD de tarefas e listas
- Uploads de anexos e versionamento básico
- Lixeira com remoção agendada
- Notificações por e‑mail via fila (arquivos JSON em `email/queue`)
- Painel de administração simples e controle de permissões (base)
- Interface responsiva com suporte básico a acessibilidade

## Tecnologias

- PHP 7.4+ (desenvolvimento com XAMPP/Apache)
- MySQL / MariaDB
- Composer (dependências PHP: PHPMailer, dompdf etc.)
- Vanilla JavaScript, HTML, CSS

## Requisitos

- PHP 7.4 ou superior
- MySQL / MariaDB
- Composer
- Servidor web (XAMPP, WAMP, Apache, Nginx)
- Permissões de escrita para pastas: `uploads/`, `temp/`, `trash/`, `email/queue/`

## Instalação rápida (local — XAMPP)

1. Clone o repositório

```powershell
git clone https://github.com/WelentonNG/Site_de_Tarefas.git
cd Site_de_Tarefas
```

2. Instale dependências PHP

```powershell
composer install
```

3. Configure o banco de dados

- Crie um banco no seu MySQL (ex.: `site_de_tarefas`).
- Importe um dump se houver (procure por `sgd.sql` ou outro arquivo SQL no repositório).
- Atualize as credenciais em `conexao.php` (ou no arquivo de configuração que o projeto usar).

4. Ajuste permissões (Windows: garanta que o Apache/PHP possa gravar nas pastas):

- `uploads/`, `temp/`, `trash/`, `email/queue/`

5. Abra no navegador

- Aponte seu XAMPP/Apache para a pasta do projeto ou use `http://localhost/<pasta>` conforme sua configuração.

## Estrutura importante

- `api.php` — rota/API principal e funções backend.
- `conexao.php` — conexão com o banco e constantes de diretório (UPLOAD_DIR, TEMP_DIR, TRASH_DIR).
- `main.js`, `lixeira.js` — lógica frontend.
- `send_email_worker.php` — worker que processa arquivos JSON em `email/queue/` e envia e‑mails via PHPMailer.
- `uploads/`, `temp/`, `trash/` — armazenamento de arquivos.
- `email/queue/` — fila de e‑mails (JSONs). Certifique‑se de que existe e é gravável.

## Execução do worker de e‑mail

O projeto enfileira notificações como arquivos JSON em `email/queue/`. Para enviar efetivamente os e‑mails, execute o worker em background (ou via agendador):

```powershell
php send_email_worker.php "c:\full\path\to\email\queue\<arquivo>.json"
```

Em ambientes Unix você pode usar um cron job; no Windows, use o Agendador de Tarefas ou um serviço que monitore a pasta.

Observação: o worker normalmente é invocado pelo próprio `api.php` quando um e‑mail é criado, mas em servidores restritos pode ser preferível executar o worker via scheduler.

## Testes e verificação rápida

1. Verifique se a aplicação carrega no navegador.
2. Crie uma tarefa com anexo e confirme que o arquivo aparece em `temp/` ou `uploads/` conforme o fluxo.
3. Simule uma notificação e confirme que um JSON é gravado em `email/queue/`.
4. Execute o `send_email_worker.php` passando o JSON para confirmar o envio (logs e arquivo de status serão atualizados).

## Boas práticas e observações

- Mantenha arquivos de configuração (credenciais) fora do repositório; prefira um `.env` ou um arquivo local não versionado.
- Verifique permissões de escrita nas pastas de upload/queue.
- O projeto inclui um handler para erros fatais (`shutdown`) que tenta retornar JSON útil para o frontend — útil para depuração durante desenvolvimento.

## Contribuindo

1. Fork
2. Crie uma branch: `feature/nome-da-feature` ou `fix/descricao`
3. Abra um PR descrevendo as mudanças

- Inclua testes simples quando possível.
- Mantenha PRs pequenos e focados.

## Roadmap / 🔧 Em desenvolvimento

- Recursos em andamento
  - Integração com calendários (Google/Outlook) — sincronização e mapeamento de eventos.
  - Modo offline (PWA) com sincronização incremental.
  - Painel de relatórios e exportação em PDF.

- Próximo passo imediato
  - Converter notificações para envio em lote para reduzir disparos redundantes de e‑mail.

- Timeline (estimativa)
  - Sprint 1 (2 semanas): API de calendários
  - Sprint 2 (3 semanas): PWA + sincronização
  - Sprint 3 (2 semanas): Painel de relatórios

## Licença

Este projeto usa a licença MIT — verifique o arquivo `LICENSE`.

## Contato

Abra uma issue ou envie um e‑mail para `dev@seudominio.com` para colaborar.

---

Se quiser, eu também posso:

- Gerar um `README.md` com conteúdo semelhante e badges prontos para o GitHub.
- Criar instruções de configuração mais detalhadas (ex.: exemplo de `conexao.php`, comandos SQL para tabelas principais).

Diga o que prefere que eu faça a seguir.
