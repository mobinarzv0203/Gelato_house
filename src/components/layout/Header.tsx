import { Button } from "../base/button";
import Logo from "../base/logo";
import Container from "../base/contaier";

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-2">
          <div>
            <Logo/>
          </div>
          <div className="[&>Button]:mr-2 flex items-center">
            <div className="hidden md:flex">
              <Button
              variant="text"
              color="secondary"
              onClick={() => {
                console.log("Hi There!");
              }}
            >
              سفارش اینترنتی    
            </Button>
            <Button
              variant="text"
              onClick={() => {
                console.log("Hi There!");
              }}
            >
              قوانین سایت
            </Button>
            </div>
            <Button
              variant="contained"
              onClick={() => {
                console.log("Hi There!");
              }}
            >
              ورود
            </Button>
          </div>
        </div>
      </Container>
      
    </header>
  );
};
