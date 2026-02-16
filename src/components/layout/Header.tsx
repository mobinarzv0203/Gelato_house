import { Button } from "../base/button";

export const Header: React.FC = () => {
  return (
    <header>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          console.log("Hi There!");
        }}
      >
        ورود
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          console.log("Hi There!");
        }}
      >
        ورود
      </Button>
      <Button
        variant="text"
        onClick={() => {
          console.log("Hi There!");
        }}
      >
        ورود
      </Button>
    </header>
  );
};
