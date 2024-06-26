import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { useNavigate } from "react-router-dom";
import { fetchRestaurant } from '../../store/slices/restaurantSlice';
import './styles.css';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, status, error } = useSelector(
    (state: store) => state.restaurant,
  );

  const handleButtonClick = () => {
    navigate('/menu');
  };

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='imgContainer'>
        {data && <img className='img' src={data.webSettings.bannerImage} alt="Logo do restaurante" />
        }
      </div>
      <div className='textContainer'>
        {data && <p className='text'>{data.name}</p>}
      </div>
      <div className='btnContainer'>
        <p className='subtitle'>Clique no botão abaixo para conferir nossas opções!</p>
        <button className='btn' onClick={handleButtonClick}>Entrar</button>
      </div>
    </div>
  );
};

export default Home;
