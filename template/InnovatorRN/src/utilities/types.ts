export type ILayout = {
  size: {width: number; height: number};
  isiOS: boolean;
};

export type I_LAYOUT_CONSTRAINTS = {
  SCREEN_WIDTH: number;
  SCREEN_HEIGHT: number;
  WINDOW_WIDTH: number;
  WINDOW_HEIGHT: number;
};

export type IResponse = {
  response: {
    data: {
      error: {
        message: string;
      };
    };
  };
};

export type IData = {
  data: {
    message: string;
    error: {
      message: string;
    };
  };
};

export type IErrorMessage = {
  message: string;
};

export type IServerError = IResponse & IData & IErrorMessage;

export type ICredentials = {
  password: string | undefined;
};
