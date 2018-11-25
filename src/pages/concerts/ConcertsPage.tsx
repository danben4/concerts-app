import * as React from 'react';
import { concertAPI } from '../../api/concert';
import { IConcertEntity } from '../../models/concertEntity';

interface IState {
  concerts: IConcertEntity[];
}

export class ConcertsPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { concerts: [] };
  }

  public componentDidMount() {
    concertAPI.fetchConcertsAsync()
      .then((concerts) => {
        this.setState({ concerts });
      });
  }

  public render() {
    const { concerts } = this.state;
    return (
      <div>
        <h1>
          Concerts
        </h1>
        <div>
          {
            concerts.map(
              (concert: IConcertEntity, index: number) =>
                <div key={"concert" + index}>{concert.name}</div>
            )
          }
        </div>
      </div>
    );
  }
};