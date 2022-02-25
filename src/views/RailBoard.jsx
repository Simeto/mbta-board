import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { request, endpoints } from '../../api';
import actions from '../actions';
import { predictionsReducer } from '../reducers';
import { Table, Card, CardHeader, CardBody } from 'rail_landing/components';

const RailBoard = () => {
  const { id } = useParams();
  const [predictions, dispatchPredictions] = useReducer(predictionsReducer, [])

  useEffect(() => {
    request({
      method: 'GET',
      endpoint: endpoints.predictions.fetch,
      params: {
        stop: id
      },
      onSuccess: payload => {
        console.log(payload, 'ppppppppppp')
        dispatchPredictions(actions.predictions.fetchPredictions(payload))
      }
    })
  }, [])

  return (
    <RailBoardContainer>
      <HeaderContentContainer>
        <section className="header-title">
          <h3>Trip stop schedule</h3>
        </section>
      </HeaderContentContainer>
      {predictions.predictions && (
        <Card>
          <CardHeader>
            <h1>Stop predictions</h1>
          </CardHeader>
          <CardBody>
            <Table className="hover">
              <thead>
                <tr>
                  <th>Trip id</th>
                  <th>Vehicle id</th>
                  <th>Departure time</th>
                </tr>
              </thead>
              <tbody>
                {console.log(predictions, 'adasdasdasasdda'), predictions.predictions && predictions.predictions.map((prediction, idx) => {
                  const { attributes, relationships } = prediction
                  const { departure_time } = attributes
                  const { trip, vehicle } = relationships
                  return (
                    <tr key={idx}>
                      <td>{trip.data.id}</td>
                      <td>{vehicle.data.id}</td>
                      <td>{new Date(departure_time).toLocaleString()}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      )}
      <section>
      </section>
    </RailBoardContainer>
  )
}

export default RailBoard;

const RailBoardContainer = styled.div`
  display: grid;
  grid-area: content;
  margin-top: 20px;
`

const HeaderContentContainer = styled.header`
.header-title {
  padding: 15px 0 50px 0;
}
.header-nav {
  nav {
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
`