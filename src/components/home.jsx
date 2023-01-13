import React, { Component } from 'react';
import castle from '../assets/disney_castle.png'
import '../App.scss';
import FlipCountdown from '@rumess/react-flip-countdown';
import moment from 'moment/moment';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: '2023-11-03 18:00:00'
    }
  }

  render() {
    const { endDate } = this.state
    return (
      <div className="App">
        <section>
          <div className="castle-container ">
            <img className="zoom-animation" src={castle} alt="Castle" />
            <p>
              Paulina
              <br />
              &
              <br />
              Eduardo
            </p>
          </div>
        </section>
        <section className='auto-flex'>
          <div className=' markElement'>
            <h1>Fecha</h1>
          </div>
          <div className=' markElement'>
            <h1>Lugar</h1>
            <h2>Cuenta regresiva</h2>
          </div>
        </section>
        <section className='auto-flex'>
          <div className=' markElement'>
            <h1>Fecha</h1>
            <h2>Cuenta regresiva</h2>
          </div>
          <div className='markElement'>
            <ol>
              <li></li>
              <li>Lugar</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='markElement'>
            <ol >
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
          <div className='markElement'>
            <ol>
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
          <div className='markElement'>
            <ol>
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='markElement'>
            <ol >
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
          <div className='markElement'>
            <ol>
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
          <div className='markElement'>
            <ol>
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
          <div className='markElement'>
            <ol>
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
        </section>
        <section>
          <div className='markElement'>
            <ol >
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
          <div className='markElement'>
            <ol>
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
          <div className='markElement'>
            <ol>
              <li></li>
              <li>Lugar</li>
              <li>Hora</li>
              <li>Fecha</li>
              <li>Padrinos</li>
              <li>Nombre de los novios</li>
              <li>Nombre de los papas</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
            </ol>
          </div>
        </section>
        <section>
          <div className="markElement">
            <FlipCountdown
              monthTitle={'Meses'}
              dayTitle={'Dias'}
              hourTitle={'Horas'}
              minuteTitle={'Minutos'}
              secondTitle={'Segundos'}
              endAtZero
              hideYear
              hideMonth={moment.duration(moment().diff(endDate)).months() === 0}
              hideDay={moment.duration(moment().diff(endDate)).months() === 0 && moment.duration(moment().diff(endDate)).days() === 0}
              endAt={endDate}
            />
          </div>
        </section>
      </div>
    );
  }
}