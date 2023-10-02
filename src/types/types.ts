// esta era un tipo para redux, pero se esta usando AnyAction de @reduxjs/toolkit
// export type Action = {
//   payload: object;
//   type: string;
// };

export interface ProductFormProps {
  open: boolean;
  setIsOpen: (arg: boolean) => void;
}
