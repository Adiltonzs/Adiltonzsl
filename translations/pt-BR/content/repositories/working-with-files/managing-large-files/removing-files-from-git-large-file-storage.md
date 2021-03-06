---
title: Remover arquivos do Git Large File Storage
intro: 'Se o {% data variables.large_files.product_name_short %} estiver configurado no repositório, você poderá remover todos os arquivos ou um subconjunto de arquivos do {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Remover arquivos
---

## Remover um único arquivo

1.  Remova o arquivo do histórico do repositório do Git usando o comando `filter-branch` ou o BFG Repo Cleaner. Para obter mais informações, consulte "[Remover dados confidenciais do repositório](/articles/removing-sensitive-data-from-a-repository)".
2. Acesse o arquivo *.gitattributes* .

  {% note %}

  **Observação:** o arquivo *.gitattributes* geralmente é salvo no repositório local. Em alguns casos, você pode ter criado um arquivo *.gitattributes* glocal que contém todas as associações do {% data variables.large_files.product_name_short %}.

  {% endnote %}
3. Encontre e remova a regra de acompanhamento associada do {% data variables.large_files.product_name_short %} no arquivo *.gitattributes*.
4. Salve e feche o arquivo *.gitattributes*.

## Remover todos os arquivos de um repositório do {% data variables.large_files.product_name_short %}

1. Remova os arquivos do histórico do Git no repositório usando o comando `filter-branch` ou o BFG Repo-Cleaner. Para obter mais informações, consulte "[Remover dados confidenciais do repositório](/articles/removing-sensitive-data-from-a-repository)".
2. Como opção, para desinstalar o {% data variables.large_files.product_name_short %} do repositório, execute:
  ```shell
  $ git lfs uninstall
  ```
  Para versões do {% data variables.large_files.product_name_short %} inferiores à 1.1.0, execute:
  ```shell
  $ git lfs uninit
  ```

## Objetos do {% data variables.large_files.product_name_short %} no repositório

Quando você remove os arquivos do {% data variables.large_files.product_name_short %}, os objetos do {% data variables.large_files.product_name_short %} permanecem no armazenamento remoto{% ifversion fpt %} e são considerados na cota de armazenamento do {% data variables.large_files.product_name_short %}{% endif %}.

Para remover os objetos do {% data variables.large_files.product_name_short %} de um repositório, {% ifversion fpt %}exclua e recrie o repositório. Ao excluir um repositório, todos os problemas associados, estrelas e bifurcações também serão excluídos. Para obter mais informações, consulte "[Excluir um repositório](/github/administering-a-repository/deleting-a-repository). " Se você precisar limpar um objeto removido e não puder excluir o repositório, [entre em contato com o suporte](/github/working-with-github-support) para obter ajuda.{% else %}entre em contato com o seu {% data variables.product.prodname_enterprise %} administrador para arquivar os objetos. Os objetos arquivados são excluídos após três meses.{% endif %}

{% note %}

**Observação:** se você removeu um único arquivo e tem outros objetos do {% data variables.large_files.product_name_short %} que deseja manter no repositório, reconfigure os arquivos associados do {% data variables.large_files.product_name_short %} depois de excluir e recriar o repositório. Para obter mais informações, consulte "[Remover um único arquivo](#removing-a-single-file)" e "[Configurar {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)".

{% endnote %}

## Leia mais

- "[Sobre o {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Colaboração com o {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"
- "[Instalar o {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
