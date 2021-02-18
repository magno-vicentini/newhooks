import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function calcStatus(status) {
  const n = parseInt(status);
  if (n % 2 == 0) return -1;
  else return 1;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState(1);
  const [numberStatus, setNumberStatus] = useState(1);

  useEffect(
    function () {
      setStatus(calcStatus(numberStatus));
    },
    [numberStatus]
  );

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 100000) {
        document.title = 'Eita!!!';
      }
    },
    [fatorial]
  );

  // setFatorial(calcFatorial(number));

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? 'Não existe' : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status === -1 ? 'Par' : 'Impar'}</span>
        </div>
      </div>
      <input
        type="number"
        className="input"
        value={numberStatus}
        onChange={(e) => setNumberStatus(e.target.value)}
      />
    </div>
  );
};

export default UseEffect;
