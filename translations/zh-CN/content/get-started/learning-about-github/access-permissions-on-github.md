---
title: GitHub 上的访问权限
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do/
  - /articles/what-are-the-different-types-of-team-permissions/
  - /articles/what-are-the-different-access-permissions/
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 您可以授权协作者对个人仓库的读取/写入权限，但组织成员对组织的仓库可有更细致的访问权限。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Permissions
  - Accounts
shortTitle: 访问权限
---

## 个人用户帐户

用户帐户拥有的仓库有两种权限级别：*仓库所有者*和*协作者*。 更多信息请参阅“[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)”。

## 组织帐户

组织成员可以是*所有者*{% ifversion fpt %}、*帐单管理员*{% endif %}或*成员*角色。 所有者对组织具有完全管理权限{% ifversion fpt %}，而帐单管理员负责管理帐单设置{% endif %}。 成员是其他每个人的默认角色。 您可以通过团队一次管理多个成员的访问权限。 更多信息请参阅：
- "[组织的权限级别](/articles/permission-levels-for-an-organization)"
- "[组织的项目板权限](/articles/project-board-permissions-for-an-organization)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
- "[关于团队](/articles/about-teams)"

{% ifversion fpt %}

## 企业帐户

*企业所有者*对企业帐户拥有最终权力，可在企业帐户中执行任何操作。 *帐单管理员*可以管理企业帐户的帐单设置。 企业帐户拥有的组织的成员和外部协作者自动成为企业帐户的成员，但他们对企业帐户本身或其设置没有访问权限。 更多信息请参阅“[企业中的角色](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)”。

{% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## 延伸阅读

- "[{% data variables.product.prodname_dotcom %} 帐户的类型](/articles/types-of-github-accounts)"
