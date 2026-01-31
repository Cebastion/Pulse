export interface ISetting {
  checked: {
    graphs: {
      mem: boolean;
      cpu: boolean;
      disk: boolean;
    };
  };
  colorscheme: {
    primary: string;
  };
  avalible: number;
  limit: number;
}
