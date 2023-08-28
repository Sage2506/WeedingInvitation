import React, { Component } from 'react';
import castle from '../assets/sol-sello.png'
import corner from '../assets/Corner.svg'
import church from '../assets/Church.jpeg'
import saloon from '../assets/Saloon.jpg'
import '../App.scss';
import FlipCountdown from '@rumess/react-flip-countdown';
import moment from 'moment/moment';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: '2023-11-03 18:00:00',
      innerWidth: window.innerWidth,
    }
  }

  counterSize() {
    const width = this.state.innerWidth;
    const sizes = ['large', 'medium', 'small', 'extra-small']
    if (width >= 1080) {
      return sizes[0];
    } if (width >= 1200) {
      return sizes[1];
    } if (width >= 400) {
      return sizes[2];
    } else {
      return sizes[3];
    }

  }
  render() {
    const { endDate } = this.state
    return (
      <div className="App">
        <img src={corner} alt="top left" className='corner top-left' />
        <img src={corner} alt="top right" className='corner top-right' />
        <img src={corner} alt="botton left" className='corner bottom-left' />
        <img src={corner} alt="bottom right" className='corner bottom-right' />
        <section>
          <div className="castle-container">
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
        <section className='auto-flex' >
          <div className='card'>
            <div className=''>
              <p>Realmente no necesitas a alguien para que te complete. Solo necesitas a alguien que te acepte completamente.</p>
            </div>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='card'>
            <p>Estas cordialmente invitado a celebrar nuestra boda</p>
          </div>
          <div className="card">
            <div className="date-presentation">
              <p>Viernes</p>
              <div>
                <p>NOV</p>
                <h6>03</h6>
                <p>2023</p>
              </div>
              <p>8:00 PM</p>
            </div>
          </div>
        </section>
        <section className='auto-flex' >
          <div className='card'>
            <div className='cursive line-spacing-0'>
              <h3>Novios</h3>
              <p>Paulina Ibarra Humaran</p>
              <p>&</p>
              <p style={{ 'lineHeight': 'normal' }}>Germán Eduardo Salazar Aranda</p>
            </div>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='card'>
            <div className='cursive line-spacing-0'>
              <h3>Padres</h3>
              <p>Paul Ibarra Fuentes</p>
              <p>&</p>
              <p style={{ 'lineHeight': 'normal' }}>Imelda Patricia Humaran Ocampo</p>
              <hr style={{ 'width': '80%' }} />
              <p style={{ 'lineHeight': 'normal' }}>German Eduardo Salazar Quintero</p>
              <p>&</p>
              <p>Sara Marisa Aranda Quintero</p>
            </div>
          </div>
          <div className='card'>
            <div className='cursive line-spacing-0'>
              <h3>Padrinos</h3>
              <p>Oliver Ibarra Fuentes</p>
              <p>&</p>
              <p>Kenia Lizbeth Inzunza Aceviz</p>
              <hr style={{ 'width': '80%' }} />
              <p style={{ 'lineHeight': 'normal' }}>Marco Antonio Aranda Quintero</p>
              <p>&</p>
              <p>Mirna Selene Sainz Sánchez</p>
            </div>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='card'>
            <div className='title-image-description'>
              <div>
                <a href="https://goo.gl/maps/nnva6wHn28t4sBaa8">
                  <img src={church} alt="Imagen de iglesia" />
                </a>
                <div>
                  <p>
                    <a href="https://goo.gl/maps/nnva6wHn28t4sBaa8">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Iglesia de santo niño de la salud
                    </a>
                  </p>
                  <p>Lic. Benito Juárez S/N, Mochicahui,<br /> 81257 Los Mochis, Sin.</p>
                  <hr style={{ 'width': '80%' }} />
                  <p>6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='title-image-description'>
              <div>
                <a href="https://goo.gl/maps/rt371ZzSwYd68z7T9">
                  <img src={saloon} alt="Imagen de iglesia" />
                </a>
                <div>
                  <p>
                    <a href="https://goo.gl/maps/rt371ZzSwYd68z7T9">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Jardin de fiestas La Finca
                    </a>
                  </p>
                  <p>Residencial Las Misiones, <br />81293 Los Mochis, Sin.</p>
                  <hr style={{ 'width': '80%' }} />
                  <p>8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='auto-flex'>
          <div className='card'>
            <p>Regalo en efectivo</p>
            <span className="material-symbols-outlined">
              mail
            </span>
            <span className="material-symbols-outlined">
              redeem
            </span>
            <p>BBVA: 4152 3141 4152 2964</p>
            <p>Paulina Ibarra Humaran</p>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='card'>
            <p>Codigo de vestimenta:</p>
            <p>Formal</p>
            <p>No niños</p>
          </div>
        </section>
        <section>
          <div>
            <h1>Vivieron felices por siempre</h1>
            <FlipCountdown
              size={this.counterSize()}
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