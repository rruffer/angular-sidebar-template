import { Submenu } from './submenu';

export enum TypeMenu {
  simples = 'simples',
  header = 'header',
  dropdown = 'dropdown'
}

export class Menu {
  title?: string;
  icon?: string;
  active?: boolean;
  type?: TypeMenu;
  link?: string;
  submenus?: Array<Submenu>;
}
