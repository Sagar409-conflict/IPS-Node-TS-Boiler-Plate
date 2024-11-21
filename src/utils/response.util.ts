export enum ResponseStatus {
  SUCCESS = "success",
  ERROR = "error",
  FAIL = "fail",
}

export enum ResponseMessageType {
  CREATED = "created",
  UPDATED = "updated",
  DELETED = "deleted",
  FETCHED = "fetched",
  ERROR = "error",
}

export interface IResponse {
  status: ResponseStatus;
  message: string;
  data?: any;
  code?: number;
}

export const successResponse = (
  message: string,
  data: any = null,
  code: number = 200
): IResponse => {
  return {
    status: ResponseStatus.SUCCESS,
    message,
    data,
    code,
  };
};

export const errorResponse = (
  message: string,
  code: number = 500,
  data: any = null
): IResponse => {
  return {
    status: ResponseStatus.ERROR,
    message,
    data,
    code,
  };
};

export const failureResponse = (
  message: string,
  code: number = 400,
  data: any = null
): IResponse => {
  return {
    status: ResponseStatus.FAIL,
    message,
    data,
    code,
  };
};

export const generateResponseMessage = (
  actionType: ResponseMessageType,
  entity: string
): string => {
  switch (actionType) {
    case ResponseMessageType.CREATED:
      return `${entity} created successfully.`;
    case ResponseMessageType.UPDATED:
      return `${entity} updated successfully.`;
    case ResponseMessageType.DELETED:
      return `${entity} deleted successfully.`;
    case ResponseMessageType.FETCHED:
      return `${entity} fetched successfully.`;
    case ResponseMessageType.ERROR:
    default:
      return `Something went wrong with ${entity}.`;
  }
};
