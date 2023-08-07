import { SharedProps, VariantType, useSnackbar } from "notistack";

export interface SnackbarProps extends SharedProps {
  message: string;
  variant: VariantType;
}

const useDialogAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  const snackbar = (props: SnackbarProps) => {
    const { message, variant, ...rest } = props;
    enqueueSnackbar(message, {
      variant,
      ...rest,
    });
  };

  return { snackbar };
};

export default useDialogAlert;
