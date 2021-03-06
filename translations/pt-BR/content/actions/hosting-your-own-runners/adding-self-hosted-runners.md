---
title: Adicionar executores auto-hospedados
intro: 'Você pode adicionar um executor auto-hospedado a {{ site.data.variables.product.prodname_actions }}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Você pode adicionar um executor auto-hospedado a {{ site.data.variables.product.prodname_actions }}.

Se você é um administrador de empresa ou organização, talvez você queira adicionar seus executores auto-hospedados a nível da organização ou empresa. Esta abordagem torna o executor disponível para vários repositórios na sua organização ou empresa, e também permite gerenciar seus executores em um só lugar.

Para obter informações sobre sistemas operacionais compatíveis com executores auto-hospedados ou sobre como usar executores auto-hospedados com um servidor proxy, consulte "[Sobre executores auto-hospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

{% warning %}

**Aviso:** {% data reusables.github-actions.self-hosted-runner-security %}

Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

{% endwarning %}

### Adicionar um executor auto-hospedado a um repositório

Você pode adicionar executores auto-hospedados a um único repositório. Para adicionar um executor auto-hospedado a um repositório de usuário, você deve ser o proprietário do repositório. Para um repositório da organização, você deve ser um proprietário da organização ou ter acesso de administrador ao repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. Abaixo
{% if currentVersion == "free-pro-team@latest" %}"Executores"{% else %}"Executores auto-hospedados"{% endif %}, clique **Adicionar executor**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

### Adicionar um executor auto-hospedado a uma organização

Você pode adicionar executores auto-hospedados no nível da organização, onde podem ser usados para processar trabalhos para múltiplos repositórios em uma organização. Para adicionar um executor auto-hospedado a uma organização, você deve ser proprietário da organização.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. Abaixo
{% if currentVersion == "free-pro-team@latest" %}"Executores"{% else %}"Executores auto-hospedados"{% endif %}, clique **Adicionar executor**.
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

{% data reusables.github-actions.self-hosted-runner-public-repo-access %}

### Adicionar um executor auto-hospedado a uma empresa

Você pode adicionar executores auto-hospedados a uma empresa, onde podem ser atribuídos a várias organizações. Os administradores da organização poderão então controlar quais repositórios podem usá-los.

{% if currentVersion == "free-pro-team@latest" %}
Para adicionar um executor auto-hospedado a uma conta corporativa, você deve ser proprietário da organização.
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
Para adicionar um executor auto-hospedado no nível de empresa de
{% data variables.product.product_location %}, você deve ser um administrador do site.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Clique em **Adicionar novo** e depois clique em **Novo executor**. Novos runners são atribuídos ao grupo padrão. Você pode modificar o grupo do executor depois de registrar o runner (executor). Para obter mais informações, consulte "[Gerenciando acesso a runners auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

{% data reusables.github-actions.self-hosted-runner-public-repo-access %}

#### Disponibilizar executores corporativos para repositórios

Por padrão, os executores do grupo de executores "Padrão" de uma empresa estão disponíveis para todas as organizações da empresa, mas não estão disponíveis para todos os repositórios em cada organização.

Para tornar um grupo de executores auto-hospedado de nível empresarial disponível para um repositório da organização, você pode precisar alterar as configurações herdadas da organização para o grupo de executores a fim de tornar o executor disponível para repositórios na organização.

Para mais informações sobre como alterar as configurações de acesso de grupo de executor, consulte "[Gerenciar acesso a executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
