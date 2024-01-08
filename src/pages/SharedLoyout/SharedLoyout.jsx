import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, NavigationLink } from "./SharedLoyout.styled";

const SharedLoyout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span>React</span> App
        </Logo>
        <nav>
          <NavigationLink to="/" end>
            Phone book
          </NavigationLink>
          <NavigationLink to="/todo-list" end>
            Todo List
          </NavigationLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLoyout;
