import React from 'react';
import { Table, Loader } from 'semantic-ui-react';
import { Link } from '@reach/router';
import apiUtil from '../../../apiUtil';

export default ({ name, stack }) => {
  const [error, setError] = React.useState(false);
  const [ah, setAh] = React.useState(null);

  const fetchAh = () => {
    apiUtil.get({ url: `/api/v1/items/${name}/ah?stack=${stack}` }, async (error, res) => {
      try {
        if (!error && res.status === 200) {
          setAh(await res.json());
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      }
    });
  };

  const fetchMemoizedAh = React.useCallback(fetchAh);

  React.useEffect(() => {
    if (name) {
      setAh(null);
      fetchMemoizedAh();
    }
  }, [name, stack]);

  if (error) {
    return <p>Error fetching auction house history...</p>;
  }

  if (!ah) {
    return <Loader active inline />;
  }

  if (ah.length === 0) {
    return <p>No auction house history...</p>;
  }

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Seller</Table.HeaderCell>
          <Table.HeaderCell>Buyer</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {ah.map((history, i) => {
          const date = new Date(history.sell_date * 1000);
          return (
            <Table.Row key={`ah_history_${i}`}>
              <Table.Cell>{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</Table.Cell>
              <Table.Cell>
                <Link to={`/tools/player/${history.seller_name}`}>{history.seller_name}</Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/tools/player/${history.buyer_name}`}>{history.buyer_name}</Link>
              </Table.Cell>
              <Table.Cell>{`${history.sale.toLocaleString()}g`}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
