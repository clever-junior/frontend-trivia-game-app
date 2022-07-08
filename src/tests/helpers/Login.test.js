
import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouterAndRedux from "./renderWithRouterAndRedux";
import App from "../../App";
describe("Testando a tela de login", () => {
  it("Verifica se os inputs e botões estão no documento", () => {
    renderWithRouterAndRedux(<App />);

    const inputName = screen.getByTestId("input-player-name");
    expect(inputName).toBeInTheDocument();

    const inputEmail = screen.getByTestId("input-gravatar-email");
    expect(inputEmail).toBeInTheDocument();

    const btnPlay = screen.getByRole("button", { name: /play/i });
    expect(btnPlay).toBeInTheDocument();

    const btnConfig = screen.getByRole("button", { name: /configurações/i });
    expect(btnConfig).toBeInTheDocument();

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  
  
  it('Verificando a validação dos inputs, com o botão play', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    console.log(history);
    const btnPlay = screen.getByRole("button", { name: /play/i });
    expect(btnPlay).toBeDisabled();
    
    const inputName = await screen.findByTestId("input-player-name");
    userEvent.type(inputName, 'testando o inputName');
    expect(inputName).toHaveValue('testando o inputName');
    
    const inputEmail = screen.getByTestId("input-gravatar-email");
    userEvent.type(inputEmail, 'testando o inputEmail');
    expect(inputEmail).toHaveValue('testando o inputEmail');
    
    expect(btnPlay).not.toBeDisabled()
  })
  
  it('Verificando o redirecionamento do botão settings', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const btnConfig = screen.getByRole("button", { name: /configurações/i });
    userEvent.click(btnConfig);
    waitFor(() => expect(history.location.pathname).toBe('/settings'));
  })
  
  it('Verificando o redirecionamento do botão play', async () => {
    renderWithRouterAndRedux(<App />);
    const btnPlay = screen.getByRole("button", { name: /play/i });

    expect(btnPlay).toBeDisabled()

    const inputName = screen.getByTestId("input-player-name");
    userEvent.type(inputName, 'inputName');
    expect(inputName).toHaveValue('inputName');

    const inputEmail = screen.getByTestId("input-gravatar-email");
    userEvent.type(inputEmail, 'inputEmail');
    expect(inputEmail).toHaveValue('inputEmail');

    expect(btnPlay).not.toBeDisabled()
    userEvent.click(btnPlay);
    
     await waitFor(() => expect(screen.getByTestId('header-player-name')).toBeInTheDocument());
  })
});
