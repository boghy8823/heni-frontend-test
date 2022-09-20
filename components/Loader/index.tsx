import { Backdrop, CircularProgress } from "@mui/material";

export interface LoaderProps {
  open: boolean;
}

export const Loader = ({
    open
  }: LoaderProps) => {
    return (
        <Backdrop data-testid="backdrop-test"
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  };
  