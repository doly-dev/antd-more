export interface EnumData {
  name: string;
  value: any;
  badge?: {
    status?: string;
    color?: string;
    [key: string]: any;
  };
  tag?: {
    color?: string;
    [key: string]: any;
  };
  text?: {
    style?: {
      color?: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  [key: string]: any;
}
