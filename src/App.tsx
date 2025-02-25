//import { extend } from 'cypress/types/lodash';
import React from 'react';

interface Props {
  message: string;
}

export class App extends React.Component<{}, Props> {
  state: Props = {
    message: 'Nothing was pressed yet',
  };

  handle = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handle);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
