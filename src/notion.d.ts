declare namespace Notion {
  type Color =
    | 'default'
    | 'gray'
    | 'brown'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'red';

  interface Option {
    name: string;
    id?: string | undefined;
    color?: Color;
  }
}
