import TodoForm from "../components/TodoForm";
import TodoTitle from "../components/TodoTitle";
import TodoList from "../components/TodoList";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { FC } from "react";
import { Todo } from "../types/todo.types";

type TodoProps = {
  state: Todo;
};

const Todo: FC<TodoProps> = (): JSX.Element => {
  const state = useSelector((state) => state.todo);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div>
          <TodoTitle state={state} />
          <TodoForm />
          {state.map((state) => (
            <TodoList key={state.id} state={state} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Todo;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #FDF9F3;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
