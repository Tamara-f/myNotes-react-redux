const Table = ({ data, children }) => {
  return (
    <div className='myNotes'>
      <div className='table-head'>
        {data.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Table;
