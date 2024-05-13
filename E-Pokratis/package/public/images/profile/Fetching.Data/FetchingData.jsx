import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SamplePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SamplePage;