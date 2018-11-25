import * as React from 'react';
import { concertAPI } from '../../api/concert';
import { IConcertEntity } from '../../models/concertEntity';

interface IState {
  loading: boolean,
  concerts: IConcertEntity[];
}

export class ConcertsPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { loading: true, concerts: [] };
  }

  public componentDidMount() {
    concertAPI.fetchConcertsAsync()
      .then((concerts) => {
        this.setState({ loading: false, concerts });
      });
  }

  public render() {
    const { loading, concerts } = this.state;
    return (
      <div>
        <h1>
          Concerts
        </h1>
        {
          loading ?
            <div>Loading..</div> :
            <div>
              {
                concerts.map(
                  (concert: IConcertEntity, index: number) =>
                    <div key={"concert" + index}>{concert.name}</div>
                )
              }
            </div>
        }
      </div>
    );
  }
};