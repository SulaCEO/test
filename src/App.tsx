import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { dicrement, getAllPosts, increment } from './redux/reducers/MainSlice';

type TypeData = {
  id: number,
  name: string,
  age: number
}

const App: FC =()=>{
  const dispatch = useAppDispatch();
  const [data, setData] = useState<TypeData>({} as TypeData);
  const {posts} = useAppSelector((state)=>state.MainSlice);

  const handleClick = () =>{
    console.log(data)
  }

  useEffect(()=>{
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="App">
      <h1>Test Branch test</h1>
      <form action="">
        <input type="text" placeholder='name...' value={data.name} onChange={(e)=>setData({...data, name: e.target.value})}/>
        <input type="number" placeholder='age...' value={data.age} onChange={(e)=>setData({...data, age: Number(e.target.value)})}/>
        <button onClick={handleClick} type='button'>Click</button>
      </form>
      <div className="posts">
        {posts.map((item)=>(
          <h2>{item.title}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;
