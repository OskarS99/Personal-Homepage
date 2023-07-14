import { LoadingDescription, StyledIconSpinner } from "./styled";

export const Loading = () => {
  return (
    <div>
      <LoadingDescription>
        Please wait, projects are being loaded...
      </LoadingDescription>
      <StyledIconSpinner />
    </div>
  );
};
