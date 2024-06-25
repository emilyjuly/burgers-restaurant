import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { fetchRestaurant } from '../../store/slices/restaurantSlice';
import './styles.css';

const Home = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(
    (state: store) => state.restaurant,
  );

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div
      className="home"
      style={{ backgroundColor: data?.webSettings.backgroundColor }}
    >
      <h1>Bem-vindo ao Restaurante</h1>
      {data && <img src={data.bannerImage} alt="Banner" className="banner" />}
      <button style={{ backgroundColor: data?.webSettings.primaryColor }}>
        Entrar
      </button>
    </div>
  );
};

export default Home;
