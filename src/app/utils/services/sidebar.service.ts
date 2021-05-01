import { Submenu } from './../models/submenu';
import { Menu, TypeMenu } from './../models/menu';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'general',
      type: 'header',
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning',
      },
      submenus: [
        {
          title: 'Dashboard 1',
          badge: {
            text: 'Pro ',
            class: 'badge-success',
          },
        },
        {
          title: 'Dashboard 2',
        },
        {
          title: 'Dashboard 3',
        },
      ],
    },
    {
      title: 'E-commerce',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      badge: {
        text: '3',
        class: 'badge-danger',
      },
      submenus: [
        {
          title: 'Products',
        },
        {
          title: 'Orders',
        },
        {
          title: 'Credit cart',
        },
      ],
    },
    {
      title: 'Components',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'General',
        },
        {
          title: 'Panels',
        },
        {
          title: 'Tables',
        },
        {
          title: 'Icons',
        },
        {
          title: 'Forms',
        },
      ],
    },
    {
      title: 'Charts',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Pie chart',
        },
        {
          title: 'Line chart',
        },
        {
          title: 'Bar chart',
        },
        {
          title: 'Histogram',
        },
      ],
    },
    {
      title: 'Maps',
      icon: 'fa fa-globe',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Google maps',
        },
        {
          title: 'Open street map',
        },
      ],
    },
    {
      title: 'Extra',
      type: 'header',
    },
    {
      title: 'Documentation',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary',
      },
    },
    {
      title: 'Calendar',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple',
    },
    {
      title: 'Examples',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple',
    },
  ];
  constructor() {}

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  get listMenus(): Array<Menu> {
    const listMenu = new Array<Menu>();

    listMenu.push(this.menuSercal());
    listMenu.push(this.menuDescontos());
    listMenu.push(this.menuCustosPorUf());
    listMenu.push(this.menuPrecificacao());
    listMenu.push(this.menuPecas());
    listMenu.push(this.menuPerfis());
    listMenu.push(this.menuPermissao());

    return listMenu;
  }

  private menuSercal(): Menu {
    return {
      title: 'Sercal',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: TypeMenu.dropdown,
      submenus: [
        {
          title: 'Lista de Planilhas',
          link: '',
        },
        {
          title: 'Atualizar Planilhas',
          link: '',
        },
        {
          title: 'Histórico de Atualizações',
          link: '',
        },
        {
          title: 'Restaurar Planilhas',
          link: '',
        }
      ],
    };
  }

  private menuDescontos(): Menu {
    return {
      title: 'Descontos',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: TypeMenu.dropdown,
      submenus: [
        {
          title: 'Lista de Planilha de Desconto',
          link: '',
        },
        {
          title: 'Atualizar Planilha de Desconto',
          link: '',
        },
        {
          title: 'Detalhes da Atualização - Desconto',
          link: '',
        },
        {
          title: 'Restaurar Planilha de Desconto',
          link: '',
        }
      ],
    };
  }

  private menuCustosPorUf(): Menu {
    return {
      title: 'Custo por UF',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: TypeMenu.dropdown,
      submenus: [
        {
          title: 'Lista de Custo por UF',
          link: '',
        },
        {
          title: 'Novo Calculo',
          link: '',
        },
        {
          title: 'Detalhes da UF',
          link: '',
        },
      ],
    };
  }

  private menuPrecificacao(): Menu {
    return {
      title: 'Precificação',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: TypeMenu.dropdown,
      submenus: [
        {
          title: 'Lista de Precificações',
          link: '',
        },
        {
          title: 'Nova Precificação',
          link: '',
        },
        {
          title: 'Nova Precificação Operação',
          link: '',
        },
        {
          title: 'Editar Precificação',
          link: '',
        },
        {
          title: 'Editar Precificação Operação',
          link: '',
        },
        {
          title: 'Atualizar Precificação',
          link: '',
        },
        {
          title: 'Atualizar Precificação Operação',
          link: '',
        },
        {
          title: 'Precificação - Resultados',
          link: '',
        },
        {
          title: 'Detalhes do Modelo',
          link: '',
        },
        {
          title: 'Dados da Proposta',
          link: '',
        }
      ],
    };
  }

  private menuPecas(): Menu {
    return {
      title: 'Lista Geral de Peças',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: TypeMenu.simples,
    };
  }

  private menuPerfis(): Menu {
    return {
      title: 'Perfis',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: TypeMenu.dropdown,
      submenus: [
        {
          title: 'Lista de Perfis',
          link: '',
        },
        {
          title: 'Novo Perfil',
          link: '',
        }
      ],
    };
  }

  private menuPermissao(): Menu {
    return {
      title: 'Permissão',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: TypeMenu.simples,
    };
  }

}
