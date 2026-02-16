import { Button } from "../base/button";

export const Header: React.FC = () => {
  return (
    <header>
      <Button
        variant="contained"
        onClick={() => {
          console.log("Hi There!");
        }}
      >
        ورود
      </Button>
    </header>
  );
};
