import React from 'react';

const Meeting = ({ params,
}: {
  params: Promise<{ id: string }>}) => {
  return (
    <div>
      meeting:#{params.then(p => p.id)}
    </div>
  );
}

export default Meeting;
