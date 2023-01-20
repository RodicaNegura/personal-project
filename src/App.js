
const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Small Rugs',
    },
    {
      id: 2,
      title: 'Medium Rugs',
    },
    {
      id: 3,
      title: 'Large Rugs',
    },
    {
      id: 4,
      title: 'Cartoon Rugs',
    },
    {
      id: 5,
      title: 'Modern Rugs',
    },
  ];

  return (
    <div className='categories-container'> 
      {categories.map(({title}) => (
        <div className='category-container'>
          <div className='background-image'/>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default App;
