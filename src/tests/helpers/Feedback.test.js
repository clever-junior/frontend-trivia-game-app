
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import Feedback from '../../pages/Feedback';
import App from "../../App";


describe('Testando a página de Feedback', () => {
    it('Verificando se os elmentos estão na page de Feedback', () => {
      const { history } = renderWithRouterAndRedux(<App />, {}, '/feedBack');
        // renderWithRouter(<feedBack />)
        const gravatarImg = screen.getByRole('img', {
            name: /gravatar/i
          })
        const playAgainBtn = screen.getByRole('button', {
            name: /play again/i
          })
        const rankingBtn = screen.getByRole('button', {
            name: /ranking/i
          })
        const name = screen.getByTestId('header-player-name');
        const feedbackText = screen.getByTestId('feedback-text');
        const feedbackScore = screen.getByTestId('feedback-total-score');
        const feedbackTotal = screen.getByTestId('feedback-total-question');


        expect(gravatarImg).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(feedbackText).toBeInTheDocument();
        expect(feedbackTotal).toBeInTheDocument();
        expect(feedbackScore).toBeInTheDocument();
        expect(playAgainBtn).toBeInTheDocument();
        expect(rankingBtn).toBeInTheDocument();
    })
    it('Testando botao para o ranking', () => {
      const { history } = renderWithRouterAndRedux(<App />, {}, '/feedBack');
        const rankingBtn = screen.getByRole('button', {
            name: /ranking/i
          })

          userEvent.click(rankingBtn);
          expect(history.location.pathname).toBe('/ranking');
    })
    it('Testando o botao de jogar novamente', () => {
      const { history } = renderWithRouterAndRedux(<App />, {}, '/feedBack');
        const playAgainBtn = screen.getByRole('button', {
            name: /play again/i
          })
          userEvent.click(playAgainBtn);
          expect(history.location.pathname).toBe('/');
    })
})