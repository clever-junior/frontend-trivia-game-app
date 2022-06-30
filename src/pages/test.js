import React from 'react';

// ['🫁 Inspire...', '😑 Segure...', '😮‍💨 Expire...'],
class Timer extends React.Component {
  state = {
    counter: 0,
    phases: ['🫁 Inspire...', '😑 Segure...', '😮‍💨 Expire...'],
    currentPhase: 0,
  };

  // MONTANDO O COMPONENTE
  componentDidMount() {
    // this.setState( (estadoAntigo) => {} )
    const ONE_SECOND = 1000;
    setInterval(
      () => this.setState((prevState) => ({ counter: prevState.counter + 1 })),
      ONE_SECOND,
    );
  }

  // ATUALIZANDO O COMPONENTE
  componentDidUpdate(prevProps, prevState) {
    const { counter, currentPhase } = prevState;
    const cinco = 5;
    if (counter === cinco) {
      this.setState({
        counter: 0,
        currentPhase: currentPhase < 2 ? currentPhase + 1 : 0,
      });
    }
  }

  render() {
    const { counter, phases, currentPhase } = this.state;
    return (
      <section>
        <h1>{ phases[currentPhase]}</h1>
        <h2>{counter}</h2>
      </section>
    );
  }
}
export default Timer;
